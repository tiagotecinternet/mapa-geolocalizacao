import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from "expo-location";

export default function App() {

  /* State para a geolocalização */
  const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);

  useEffect( () => {
    async function obterLocalizacao(){
      // Acessando o status da requisição de permissão de uso
      const { status } = await Location.requestForegroundPermissionsAsync();

      // Verificando o status
      // if( status !== 'granted' ){
      //   Alert.alert("Ops!", "Você não autorizou o uso de recursos de localização");
      //   return;
      // }

      // Acessando os dados de geolocalização
      let localizacaoAtual = await Location.getCurrentPositionAsync({});
      
      // Adicionando os dados ao state
      setMinhaLocalizacao(localizacaoAtual);
    }

    obterLocalizacao();
  }, [] )

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
