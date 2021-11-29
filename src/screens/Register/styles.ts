import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root:{
    flex: 1,
    width: '100%',
    height: '100%'
  },
  logoContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:5,
  },
  logo: {
    width: 100,
    height: 140,
  },
  formContent:{
    width:'90%',
    alignSelf:'center',
    justifyContent:'center',
    marginVertical:3

  },
  formTitle:{
    color:'#000',
    alignSelf:'center'
  },
  formItem:{
    width:'100%',
    borderColor:'black',
    borderWidth:1,
    marginTop:10,
    paddingLeft:3,
    height:40
  },
  formButton:{
    height:40,
    width:'45%',
    backgroundColor:'#2c9ba6',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },
  buttonContent:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:15,
    marginVertical:15
  },
})