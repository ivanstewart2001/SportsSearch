import { useNavigation } from '@react-navigation/core';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView } from '../../components/Themed';
import { auth } from '../../firebase/firebase'
import { connect } from 'react-redux'
import { startSignUp, startLogin } from '../../actions/auth';

const LandingScreen = ({startSignUp, startLogin} :{ startSignUp:any, startLogin:any }) => {  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Root")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    startSignUp(email, password)
  }

  const handleLogin = () => {
    startLogin(email, password)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})

const mapDispatchToProps = (dispatch:any) => ({
  startSignUp: (email:string, password:string) => dispatch(startSignUp(email, password)),
  startLogin: (email:string, password:string) => dispatch(startLogin(email, password)) 
})

export default connect(undefined, mapDispatchToProps)(LandingScreen)
