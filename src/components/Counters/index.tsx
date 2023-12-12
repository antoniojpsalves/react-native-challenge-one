import { View, Text } from 'react-native'
import { styles } from './styles'


interface CountersProps {
  createdNum: number
  completedNum: number
}

export function Counters({ createdNum, completedNum }: CountersProps) {


  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <Text style={styles.createdText}>Criadas</Text>
        <NumberShow n={createdNum} />
      </View>
      <View style={styles.buttonView}>
        <Text style={styles.completedText}>Concluídas</Text>
        <NumberShow n={completedNum} />
      </View>
    </View>
  )
}


interface NumberShowProps {
  n: number
}

function NumberShow({ n }: NumberShowProps) {
  return (
    <Text style={styles.numberShow}>{n}</Text>
  )
}