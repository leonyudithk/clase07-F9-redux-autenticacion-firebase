import { typesLogin } from "../types/types";

export const loginReducers =(state = {}, action)=>{
    switch (action.type) {
        case typesLogin.login:
            return{
                ...state
            }
            case typesLogin.logout:
            return{
              
            }
           
        default:
            return state
    }

}