import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    elevation: 100,
    paddingHorizontal: 10
  },
  imageContainer: {
    width: '100%',
    height: 240
  },
  image: {
    width: '100%',
    height: 240
  },
  contentContainer: {
    paddingHorizontal: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10
  },
  body: {
    fontSize: 15,
    textAlign: 'justify',
    marginVertical: 5
  },
  datesContainer: {
    marginVertical: 10
  },
  generalText: {
    fontSize: 15,
    marginVertical: 1
  },
  buttonContainer: {
    flexDirection: 'row', 
    marginVertical: 15 
  },
  buttonStyle: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
