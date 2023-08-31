import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio</Text>
      <StatusBar style="auto" />
      <Image source={{uri:'https://t2.ea.ltmcdn.com/pt/razas/0/8/3/calopsita_380_0_orig.jpg'}}>
      </Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F76F45',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    marginTop: 40,
    fontSize: 50,
    color:'#F9F7FF',
    fontStyle: 'bold',
  }
});
