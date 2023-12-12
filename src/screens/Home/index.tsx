import { View, Text, Image } from "react-native"
import { styles } from "./style"

import { useState } from 'react'
import { Form } from "../../components/Form"


interface TaskProps {
  id: number
  completed: boolean
  description: string
}

export function Home() {

  const [tasks, setTasks] = useState<TaskProps[]>([])


  return (
    <View style={styles.container}>
      <View style={styles.firtView}>
        <Image style={styles.logo} source={require("../../assets/images/logo.png")} />
      </View>
      <View style={styles.secondView}>
        <Form />
      </View>
    </View>
  )
}