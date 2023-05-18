import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 24px;
  color: #1e2e48;
`;

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Testando</Text>
        <TextNew>NOVO TESTE</TextNew>
      </View>
    </SafeAreaView>
  );
};

export default App;
