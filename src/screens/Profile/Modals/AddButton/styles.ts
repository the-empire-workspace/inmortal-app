import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  modalText: {
    fontSize: 20,
  },
  modalTextInput: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    alignItems: 'center',
  },
  addButton: {
    height: 40,
    width: '45%',
    backgroundColor: '#2c9ba6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  openModal: {
    fontSize: 20,
    marginHorizontal: 10,
  },
})
