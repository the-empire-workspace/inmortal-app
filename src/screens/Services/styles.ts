import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  Title: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: '5%',
  },
  serviceTitle:{
    fontSize:17,
    alignSelf:'center',
    marginTop:5
  },
  servicesContent:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10
  },
  sliderTitle:{
    fontSize:20,
    marginTop:5
  },
  sliderContent:{
    margin:'5%'
  },
  sliderItem:{
    width:160,
    height:90,
    marginRight:15, 
    marginTop:10,
    borderColor:'black',
    borderWidth:1
  }
})