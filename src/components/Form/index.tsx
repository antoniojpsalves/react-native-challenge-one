import { View, TextInput, Text, TouchableHighlight, } from 'react-native'
import { Dispatch, SetStateAction, useState } from 'react'
import { styles } from './styles'
import { TaskProps } from '../../screens/Home'


interface FormProps {
  setTasks: Dispatch<SetStateAction<TaskProps[]>>
}


export function Form({ setTasks }: FormProps) {

  const [isFocused, setIsFocused] = useState(false)

  const [newTask, setNewTask] = useState('')

  function handleAddTask() {
    const task = {
      id: Math.random(),
      completed: false,
      description: newTask
    }
    setTasks((prev) => [...prev, task])
    setNewTask('')

    console.log("adicionando mais uma tarefa")
    console.log(task)
  }


  return (
    <View style={styles.form}>
      <TextInput
        style={[styles.input, isFocused && { borderWidth: 1, borderColor: '#5E60CE' }]}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor="#6b6b6b"
        keyboardType='default'
        onChangeText={setNewTask}
        value={newTask}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
      <TouchableHighlight style={styles.button} onPress={handleAddTask}>
        <View style={styles.borderButton}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}