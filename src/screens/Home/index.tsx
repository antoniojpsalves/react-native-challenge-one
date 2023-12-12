import { View, Text, Image } from "react-native"
import { styles } from "./style"

import { useEffect, useState } from 'react'
import { Form } from "../../components/Form"
import { Counters } from "../../components/Counters"
import { List } from "../../components/List"


export interface TaskProps {
  id: string | number[]
  completed: boolean
  description: string
}

export function Home() {

  const [tasks, setTasks] = useState<TaskProps[]>([])

  const [createdTasksNumber, setCreatedTasksNumber] = useState(tasks.length)
  const [completedTasksNumber, setCompletedTasksNumber] = useState(0)

  useEffect(() => {

    setCreatedTasksNumber(tasks.length)

    let finished = tasks.filter(task => task.completed === true)
    setCompletedTasksNumber(finished.length)

  }, [tasks]);


  return (
    <View style={styles.container}>
      <View style={styles.firtView}>
        <Image style={styles.logo} source={require("../../assets/images/logo.png")} />
      </View>
      <View style={styles.secondView}>
        <Form setTasks={setTasks} />
        <Counters createdNum={createdTasksNumber} completedNum={completedTasksNumber} />
        <List data={tasks} handleUpdateTask={setTasks} />
      </View>
    </View>
  )
}