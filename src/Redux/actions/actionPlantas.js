import { addDoc, collection, getDocs } from "firebase/firestore"
import { baseDatos } from "../../Firebase/firebaseConfig"
import { typesPlantas } from "../types/types"

//---------------Listar-------------------//
export const listAsynPlantas =()=>{
    console.log("dentro de listar Asinc")
    return async (dispatch) =>{
          const traerDatos = await getDocs(collection((baseDatos, "plantasBD")))
          console.log(traerDatos)
          const plantas= []
          traerDatos.forEach((doc)=>{
              plantas.push({
                  ...doc.data()
              })
          })
         dispatch(listPlantaSyn(plantas))
    } 
  }
  
  export const listPlantaSyn = (planta)=>{
      return{
          type: typesPlantas.list,
          payload: planta
      }
  }


//-------------Agregar nueva Planta----------------//
//----------Asincronica Firebase---//
export const addAsyn =(planta)=>{
    console.log(planta)
    return (dispatch)=>{
       addDoc(collection(baseDatos, "plantasBD"),planta)
        
        .then(resp=>{
            dispatch(addSyn(planta))
           dispatch(listAsynPlantas()) // para que actuaice la  lista cuando yo agrego una planta nueva
        })
        .catch(error=>{
            console.log(error)
        })
 
    }
 }
 
 
 //------Sincronica----------------///
 export const addSyn = (planta)=>{
     return{
         type: typesPlantas.add,
         payload: planta
     }
 }