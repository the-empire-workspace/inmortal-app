import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalButton:{
    alignItems:'center'
  },
  header:{
    flexDirection:'row',
    marginHorizontal:'5%'
  },
  headerTitle:{
    fontSize:20,
    marginLeft:'5%'
  },
  add:{
    height: 30,
    width: '45%',
    backgroundColor: '#2c9ba6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  imagesContent:{
    margin:'5%',
    flexDirection:'row',
    alignItems:'center'
  },
  userDetails:{
    marginHorizontal:'5%'
  },
  userInfo:{
    fontSize:17
  },
  Title:{
    fontSize:20,
    alignSelf:'center',
    marginTop:'5%'
  },
  invoiceText:{
    fontSize:17
  },
  invoiceTextDesciption:{
    fontSize:17,
    marginTop:10
  },
  invoiceItem:{
    margin:'5%',
    padding:'3%',
    borderColor: '#050C2C',
    borderWidth: 1,
  }

})