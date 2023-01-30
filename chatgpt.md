Há alguns problemas no código que você me mostrou:

A primeira linha deve ser importada de 'react' e não de 'react-native':
import { useEffect, useState } from 'react';

A função obterLocalizacao é definida dentro do useEffect, mas não é chamada dentro dele.

Copy code
useEffect(() => {
    async function obterLocalizacao() {
      // ...
    }
    obterLocalizacao();
  }, []);

  
A função marcarLocal está usando a variável minhaLocalizacao antes de garantir que ela tenha sido atualizada. A solução para isso é adicionar uma verificação de null ou undefined antes de acessar as propriedades do objeto.
Copy code
const marcarLocal = (event) => {
    if (minhaLocalizacao) {
        setLocalizacao({
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            latitude: minhaLocalizacao.coords.latitude,
            longitude: minhaLocalizacao.coords.longitude
        });
    }
};
A propriedade liteMode do MapView é inválida, a propriedade correta é liteMode={true} ou liteMode={false}

O texto "ops" está escrito com letra minúscula, e a convenção é escrever com letra maiúscula.

Copy code
if (status !== 'granted') {
    Alert.alert("Ops!", "Você não autorizou o uso de recursos de localização");
    return;
}
O nome das variaveis e estilos estão escritos com letra minúscula, mas as convenções do React Native é que as variaveis devem ser escritas com letra maiúscula e as estilos com letra minúscula.
Copy code
const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);
const estilos = StyleSheet.create({});
A função console.log(minhaLocalizacao) está sendo chamada no final do componente, o que pode causar problemas de performance, é recomendado remover essa linha.