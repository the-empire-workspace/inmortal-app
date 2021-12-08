import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  logoContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 110,
    height: 150,
  },
  formContent: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  formTitle: {
    color: '#000',
    alignSelf: 'center',
  },
  formItem: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 3,
  },
  formButton: {
    height: 40,
    width: '45%',
    backgroundColor: '#2c9ba6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  links: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: '#000',
  },
  root: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})
