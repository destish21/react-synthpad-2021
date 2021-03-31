import React,{ createContext, useReducer, useContext } from 'react'
import scales from '../utils/scales'

const defaultContext = {
    ...scales.light,
    valume: 0,
}
const AppContext = createContext(defaultContext)
const reducer = (state, action) => {
console.log(action)
switch (action.type){
    case 'CHANGE_SCALE':
        return {
            ...state,
            ...scales[action.payload]
        }
        case 'CHANGE_VOLUME':
      return {
        ...state,
        volume: action.payload
      }
}
return state
}

const AppProvider = ({ Children })=>{
   const[state, dispatch] = useReducer(reducer, defaultContext)
   console.log(state)

    return(
    <AppContext.Provider value={{ state, dispatch }}>
        {Children}
    </AppContext.Provider>
    )
}
const useAppContext = ()=> useContext(AppContext)

export { AppProvider, useAppContext}