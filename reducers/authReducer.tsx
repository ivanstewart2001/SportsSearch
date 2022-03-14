import { LOG_IN, LOG_OUT, SIGN_UP } from "../store/types"

type AuthReducerActionType = {
    type:string,
    uid:string,
    email:string
}

const authReducer = (state = {}, action:AuthReducerActionType) => {
    switch (action.type){
        case LOG_IN:
            return {
                uid: action.uid,
                email: action.email,
            }
        case SIGN_UP:
            return {
                uid: action.uid,
                email: action.email
            }
        case LOG_OUT:
            return {}
        default:
            return state
    }
}

export default authReducer