import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { startLogout } from '../actions/auth'
import { connect } from 'react-redux'

const HomeScreen = ({auth, startLogout} : {auth: any, startLogout:any}) => {
  console.log(auth)

  const handleSignOut = () => {
    startLogout()
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})

const mapStateToProps = (state:any) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch:any) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)