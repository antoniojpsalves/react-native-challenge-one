import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  form: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -28,
    marginBottom: 42,
    alignItems: 'center',
    // borderColor: '#fff',
    // borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginTop: -6,
  },
  borderButton: {
    width: 22,
    height: 22,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  }
})