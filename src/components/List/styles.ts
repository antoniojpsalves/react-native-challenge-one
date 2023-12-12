import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    // borderColor: '#fefefe',
    // borderWidth: 1,
  },
  emptyListContainer: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    gap: 16
  },
  emptyListTitle: {
    fontSize: 14,
    color: '#808080',
    fontWeight: 'bold'
  },
  emptListText: {
    fontSize: 12,
    color: '#808080',
  },
  textWrapper: {
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    width: '90%',
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor: '#262626',
    alignSelf: 'center',
    padding: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    borderRadius: 8,
    height: 64,
    paddingLeft: 20,
    paddingRight: 20
  },
  textItem: {
    color: '#fff',
    maxWidth: 200
  },
  checked: {
    backgroundColor: '#5E60CE',
    width: 24,
    height: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  defaultCheck: {
    backgroundColor: 'transparent',
    borderColor: '#4EA8DE',
    borderWidth: 1,
    width: 24,
    height: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  trashContainer: {
    backgroundColor: 'transparent',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: '#fff',
    // borderWidth: 1,
    borderRadius: 8
  }
})