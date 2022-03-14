import { auth } from "../firebase/firebase";
import { LOG_IN, LOG_OUT, SIGN_UP } from "../store/types";
import { useNavigation } from '@react-navigation/core'

type UserAuthType = {
    uid:string,
    email:string,
}

const navigation = useNavigation()

const signUp = (user:UserAuthType) => ({
    type: SIGN_UP,
    uid: user.uid,
    email: user.email
})

export const startSignUp = (email:string, password:string) => {
    return (dispatch:any) => {
        return auth.createUserWithEmailAndPassword(email, password).then((userCredentials) => {
            const user = userCredentials.user
            if (user) {
                const signUpObject = {uid:user.uid, email}
                dispatch(signUp(signUpObject))
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
}

const login = (user:UserAuthType) => ({
    type: LOG_IN,
    uid: user.uid,
    email: user.email
})

export const startLogin = (email:string, password:string) => {
    return (dispatch:any) => {
        return auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
            const user = userCredential.user;
            if (user) {
                const logInObject = {uid:user.uid, email}
                dispatch(login(logInObject))
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
}

const logout = () => ({
    type: LOG_OUT
})

export const startLogout = () => {
    return (dispatch:any) => {
        auth.signOut().then(() => {
            navigation.navigate("AuthRoot")
            dispatch(logout())
        }).catch((error)=> {
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
}