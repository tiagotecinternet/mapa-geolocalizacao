import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from "expo-location";

export default function App() {

  /* State para a geolocalização */
  const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);

  const [status, requestPermission] = Location.useForegroundPermissions();

  useEffect(()=>{
    async function verificaPermissoes(){
      const { locationStatus } = await Location.requestForegroundPermissionsAsync();
      requestPermission(locationStatus === "granted");
      
      let localizacaoAtual = await Location.getCurrentPositionAsync({});
      console.log("Status: "+status.status);
      setMinhaLocalizacao(localizacaoAtual);
    } 

    verificaPermissoes();
  }, [])

  console.log(minhaLocalizacao);

  const regiaoInicial = { // Estado de SP
    latitude: -23.533773,
    longitude: -46.65529,
    latitudeDelta: 10,
    longitudeDelta: 10
  }

  /* Usando state para controlar a localização */
  const [localizacao, setLocalizacao] = useState();

  const marcarLocal = (event) => {
    setLocalizacao({
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      latitude: minhaLocalizacao.coords.latitude,
      longitude: minhaLocalizacao.coords.longitude
    });
  }

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <View style={estilos.viewBotao}>
          <Button title='Onde estou?' onPress={marcarLocal} />
        </View>
        <View style={estilos.viewMapa}>
          <MapView 
            style={estilos.mapa} 
            region={localizacao ?? regiaoInicial}
            liteMode={false} 
            mapType="standard"
          >
            { localizacao &&
              <Marker 
                coordinate={localizacao} 
                title="Aqui!!!"
                onPress={ e => console.log(e.nativeEvent) }
              />
            }

          </MapView>
        </View>
      </View>
    </>
    )
}

const estilos = StyleSheet.create({
  viewMapa: { flex: 1}, 
  viewBotao: {},
  mapa: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
  },
});
