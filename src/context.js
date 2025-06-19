import { createContext, useReducer } from "react";
import ValidationReducer from "./reducer";

const intialState = {
    data: {
        name: '',
        email: '',
        age: ''
    },
    error: {}
}

export const UserContext = createContext();
const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ValidationReducer, intialState)

    return (<UserContext.Provider value={{ state, dispatch }}>
        {children}
    </UserContext.Provider >)
}
export default FormProvider