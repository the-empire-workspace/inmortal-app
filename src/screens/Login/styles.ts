import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  logoContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 130,
    height: 180,
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
    paddingHorizontal: 20,
  },
  formButton: {
    height: 40,
    width: '45%',
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
  },
  root: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 40,
  },
})
