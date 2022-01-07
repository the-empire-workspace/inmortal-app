import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  header:{
    margin:'5%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  headerButtons:{
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  profileInfo:{
  },
  profileInfoHeader:{
    height:90,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  familyFriends:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  familyFriendsItem:{
    marginHorizontal:'2%',
    alignItems:'center'
  },
  name:{
    fontSize:20,
    marginTop:'5%',
    marginLeft:'7%'

  },
  biography:{
    fontSize:15,
    marginHorizontal:'5%',
    marginTop:'5%'
  },
  line:{
    width:'90%',
    height:6,
    resizeMode:'stretch',
    alignSelf:'center'
  },
  modals:{
    margin:'5%',
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between'
  },
  
})