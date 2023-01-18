import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const regiaoInicial = {
    latitude: -23.533773,
    longitude: -46.65529,
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421
    latitudeDelta: 10,
    longitudeDelta: 10
  }

  const localizacao = {
    latitude: -33.867886,
    longitude:  -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10
  }

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView 
          style={estilos.mapa} 
          initialRegion={regiaoInicial} 
          liteMode={false} 
          mapType="satellite"
          userInterfaceStyle='dark'
        >
          <Marker 
            draggable
            coordinate={localizacao} 
            title="Aqui!!!"
            onPress={
              (event)=>{
                console.log(event.nativeEvent);
              }
            }
          />
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
