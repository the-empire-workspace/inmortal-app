import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    elevation: 100,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  logo: {
    height: 90,
    width: 90,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  generalText: {
    fontSize: 10,
    marginVertical: 1
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonStyle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
