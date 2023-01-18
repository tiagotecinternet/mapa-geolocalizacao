import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  const regiaoInicial = {
    latitude: -23.533773,
    longitude: -46.65529,
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421
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
          liteMode={false} // somente Android
          mapType="standard" // satellite, hybrid, standard
          userInterfaceStyle='dark' // somente iOS
          maxZoomLevel={15}
          minZoomLevel={5}
        />
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
