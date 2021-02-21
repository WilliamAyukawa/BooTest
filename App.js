import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Morgana from './components/Morgana';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[{color: 'blue'},{fontSize: 30},{fontStyle: 'italic'}]}>Primeiro teste! hello world</Text>
	  <Text style={styles.textTest}>Primeira descrição</Text>
	  <Morgana nome='Jackson'/>
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
  
  textTest: {
	color: 'green',
	fontSize: 20,
  },
});