import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
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
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude
    });
    console.log(localizacao);
  }

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView 
          onPress={marcarLocal}
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
    </>
    )
}

const estilos = StyleSheet.create({
  mapa: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
  },
});
