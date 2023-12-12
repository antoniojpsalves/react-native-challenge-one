import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    width: '100%',
    alignItems: 'center',
  },
  firtView: {
    // flex: 1,
    height: 150,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // borderBlockColor: '#fff',
    // borderWidth: 1
  },
  secondView: {
    flex: 5,
    width: '100%',
    backgroundColor: '#262626',
    alignItems: 'center',
  },
  testText: {
    color: '#F2F2F2'
  },
  logo: {
    width: 110,
    height: 32,
    resizeMode: 'contain',
    // borderColor: 'white',
    // borderWidth: 1
  }
})