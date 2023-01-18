import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  const regiaoInicial = {
    latitude: -10,
    longitude: -55,
    latitudeDelta: 40,
    longitudeDelta: 40
  }

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView style={estilos.mapa} initialRegion={regiaoInicial} />
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
