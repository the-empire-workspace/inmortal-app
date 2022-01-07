import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    elevation: 100,
    paddingHorizontal: 10,
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
  },
  formButton: {
    padding: 15,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5,
  },
  questionButton: {
    padding: 15,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    elevation: 5,
  },
  secondaryText: {
    fontSize: 17,
    textAlign: 'center',
  },
  line: {
    width: '100%',
    height: 12,
  },
  label: {
    fontSize: 19,
    marginVertical: 5,
    marginLeft: 15,
  },
  endButton: {
    padding: 15,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    elevation: 10,
  },
  buttonContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer2: {
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
})
