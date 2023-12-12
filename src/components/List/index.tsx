import { FlatList, View, Text, Image, TouchableOpacity, Alert } from "react-native"
import { TaskProps } from "../../screens/Home"

import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from './styles'
import { Dispatch, SetStateAction, useState } from "react"


interface ListProps {
  data: TaskProps[],
  handleUpdateTask: Dispatch<SetStateAction<TaskProps[]>>,
}

export function List({ data, handleUpdateTask }: ListProps) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ItemList
          id={item.id}
          completed={item.completed}
          description={item.description}
          handleUpdateTask={handleUpdateTask}
        />
      )}
      ListEmptyComponent={() => (<EmptList />)}
      style={styles.container}
    />
  )
}

interface ItemListProps extends TaskProps {
  handleUpdateTask: Dispatch<SetStateAction<TaskProps[]>>,
}

function ItemList({ id, completed, description, handleUpdateTask }: ItemListProps) {

  const [isFocused, setIsFocused] = useState(false)

  const [toggleCheckBox, setToggleCheckBox] = useState(completed)

  function finishTask(id: string | number[]) {

    handleUpdateTask((prev) => {

      const novosValores = prev.map(item => {
        // console.log(item)
        if (item.id === id)
          item.completed = !item.completed
        return item
      })

      // console.log('Novos valores seria?')
      // console.log(novosValores)
      return novosValores
    })

    // console.log(newData)
    setToggleCheckBox(!toggleCheckBox)
  }

  function deleteTask(id: string | number[]) {

    Alert.alert("Atenção", `Deseja mesmo excluir essa tarefa?`, [
      {
        text: "Não",
        style: "cancel",
        onPress: () => setIsFocused(false)
      },
      {
        text: "Sim",
        onPress: () => handleUpdateTask((prev) => (prev.filter(item => item.id !== id)))
      },
    ])
  }

  return (
    <View style={styles.itemContainer}>
      <CheckBox
        checked={toggleCheckBox}
        toggle={() => finishTask(id)}
      />
      <Text style={[styles.textItem, toggleCheckBox && { textDecorationLine: 'line-through' }]}>{description}</Text>
      <TouchableOpacity
        onPress={() => deleteTask(id)}
        style={[styles.trashContainer, isFocused && { borderWidth: 1, borderColor: '#E25858' }]}
        onPressIn={() => setIsFocused(true)}
      >
        <Icon name="trash" color={isFocused ? '#E25858' : '#808080'} size={14} />
      </TouchableOpacity>
    </View>
  )
}

function EmptList() {
  return (
    <View style={styles.emptyListContainer}>
      <Image source={require("../../assets/images/Clipboard.png")} />
      <View style={styles.textWrapper}>
        <Text style={styles.emptyListTitle}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.emptListText}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}

interface CheckBoxProps {
  checked: boolean
  toggle: () => void
}

function CheckBox({ checked, toggle }: CheckBoxProps) {
  return (
    <View>
      <TouchableOpacity onPress={toggle} style={checked ? styles.checked : styles.defaultCheck}>
        {checked && <Icon name="check" color={'#fff'} />}
      </TouchableOpacity>
    </View>
  )
}