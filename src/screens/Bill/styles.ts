import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
  headerTitle: {
    fontSize: 20,
    marginLeft: '5%',
  },
  details: {
    padding: '5%',
    borderBottomWidth: 0.5,
  },
  countContent: {
    flexDirection: 'row',
    padding: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  count: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countButton: {
    width: 25,
    height: 25,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 30,
  },
  comment: {
    borderWidth: 1,
    marginHorizontal: '5%',
    height: 60,
  },
  additionalServicesTitle: {
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 20,
  },
  line: {
    width: '90%',
    height: 6,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  additionalServicesCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  payButton: {
    margin: '5%',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 16,
    borderRadius: 100,
  },
})
