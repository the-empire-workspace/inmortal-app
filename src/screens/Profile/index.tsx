import React,{ FC, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Billing, Benefits, Plans, MenuDrawer, AddButton } from './Modals'
import { useTheme } from '@providers'
import Logo from '@assets/img/logo.png'
import Line from '@assets/img/linea.png'
import { styles } from './styles'
import { useSelector } from 'react-redux'



const Profile:FC = () => {
  const { colors } = useTheme()
  const account = useSelector((state: any) => state.account)
  const invoice = useSelector((state: any) => state.invoice)

  return (
    <ScrollView style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={{color:colors.primary,alignSelf:'center'}}>{invoice.invoice.plan}</Text>
        <View style={styles.headerButtons}>
          <AddButton/>
          <MenuDrawer/>
        </View>
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.profileInfoHeader}>
        <Image 
          style={{
            width:110,
            height:110,
            borderRadius:200
          }} 
          source={Logo} 
        />
          <View style={styles.familyFriends}>
            <View style={styles.familyFriendsItem}>
              <Text style={{color:colors.primary, fontSize:18}}>20</Text>
              <Text style={{color:colors.primary, fontSize:18}}>Amigos</Text>
            </View>
            <View style={styles.familyFriendsItem}>
              <Text style={{color:colors.primary, fontSize:18}}>8</Text>
              <Text style={{color:colors.primary, fontSize:18}}>Familiares</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.name, { color: colors.primary }]}>{account.user.name} {account.user.last_name}</Text>
        <Text style={[styles.biography, { color: colors.primary }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
        <Image style={styles.line} source={Line} />

      </View>
      <View style={styles.modals}>
        <Billing/>
        <Benefits/>
        <Plans/>
      </View>
      
    </ScrollView>
  )
}

export default Profile
