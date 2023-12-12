import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderBottomWidth: 2,
    borderColor: '#333',
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 15
  },
  buttonView: {
    flexDirection: 'row',
    gap: 8
  },
  createdText: {
    color: '#4EA8DE',
    fontSize: 14
  },
  completedText: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold'
  },
  numberShow: {
    color: '#fff',
    backgroundColor: '#333',
    borderRadius: 10,
    textAlign: 'center',
    marginLeft: 8,
    marginRight: 8,
    width: 25,
    fontSize: 14
  }
})