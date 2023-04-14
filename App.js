import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <div class="item">
  <img src="https://mlyazqwnm7ri.i.optimole.com/cb:mrhB.22221/w:auto/h:auto/q:mauto/f:avif/id:4128008c2236710bc1cbc4dd0b04e9c8/https://espadasymas.com/sku_41012_dark_repulser_sword_black_-_handforged_amzn_07_mood-sfm_v.1.0.jpg" alt="espada"></img>
  <h2>Nome do item</h2>
  <p>dano: 50</p>
  <button>Propor troca</button>
</div>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

