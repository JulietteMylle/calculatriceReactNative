import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const onButtonPress = (value) => {
    if (value === '=') {
      try {
        if (input.includes('/0')) {
          setResult("On ne peut pas diviser par 0");
        } else {
          setResult(eval(input));
        }
      } catch (error) {
        setResult('error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {result}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          value={input}
          onChangeText={setInput}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.buttonContainer}>
        {['C', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map(
          (item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                (item === '/' || item === '*' || item === '-' || item === '+' || item === '=') && styles.orangeButton, 
                (item === 'C' || item === '+/-' || item === '%') && styles.grayButton,
                item === '0' && styles.buttonZero
              ]}
              onPress={() => onButtonPress(item)}
            >
              <Text style={styles.buttontext}> {item} </Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 40,
    color: 'white',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inputText: {
    fontSize: 30,
    color: 'white',
  },
  buttonContainer: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    fontSize: 24,
    width: '23%',
    height: '16%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    backgroundColor: 'gray',
    borderRadius: 50,
    margin: '1%'
  },
  buttontext: {
    fontSize: 24,
    color: 'white',
  },
  orangeButton: {
    backgroundColor: 'orange',
  },
  grayButton : {
    backgroundColor: 'light-gray'
  },
  buttonZero: {
    fontSize: 24,
    width: '48%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    backgroundColor: 'gray',
    borderRadius: 50,
    margin: '1%'
  },
});
