import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { google } from "../../Firebase/firebaseConfig"
import { typesLogin } from "../types/types"





export const logoutAsincrono = () => {
    return(dispatch) => {
       const auth = getAuth();
       signOut(auth)
       .then((user) => {
         dispatch(logoutSincrono)
          console.log('Chao')

       })
       .catch(error => {
           console.log(error)
       })
    }
}
export const logoutSincrono = () => {
    return{
        type: typesLogin.logout,
    }
}

export const loginEmailyPassAsync =(email, password) =>{
        return(dispatch)=>{
            const auth = getAuth()
            signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                dispatch(loginSincronico(user.email, user.password))
                console.log('Bienvenido')
                console.log(user)
            })
            .catch(error=>{
                console.log(error)
            })
        }
}





export const loginGoogleAsync =()=>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithPopup(auth, google)
        .then(({user})=>{
            dispatch(loginSincronico(user.id, user.displayName))
        })
        .catch(error=>{
            console.log(error)
        })


    
    }
}


export const loginSincronico = (email, password) =>{
    return{
        type: typesLogin.login, 
        payload: {
            email, 
            password
        }
    }
}