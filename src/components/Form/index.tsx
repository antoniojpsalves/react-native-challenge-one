import { View, TextInput, Text, TouchableHighlight, } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'


export function Form() {

  const [novaTarefa, setNovaTarefa] = useState('')


  function handleAddTask() {
    console.log('Chamou a função de adicionar tarefa')
  }


  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor="#6b6b6b"
        keyboardType='default'
        onChangeText={setNovaTarefa}
        value={novaTarefa}
      />
      <TouchableHighlight style={styles.button} onPress={handleAddTask}>
        <View style={styles.borderButton}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}