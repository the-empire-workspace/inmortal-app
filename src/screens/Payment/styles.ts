import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    padding: '5%',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    marginLeft: '5%',
  },
  line: {
    width: '90%',
    height: 6,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  amountPayable: {
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 20,
  },
  amountPayable2: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: '5%',
  },
  payButton: {
    height: 45,
    width: '45%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
