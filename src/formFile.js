import React, { useContext } from "react"
import { UserContext } from "./context"
export default function FormFile() {

    const { state, dispatch } = useContext(UserContext)

    const handleSubmit = () => {
        console.log('i am done')
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        dispatch({ type: 'UPDATE', payload: e.target })


    }
    console.log('state', state)
    return (<div>

        <form onSubmit={handleSubmit}>
            <h1>ttttttt</h1>

            <label>Name</label>
            <input type="text" name='name' onChange={(e) => handleChange(e)}></input>
            <label>Email</label>
            <input type="text" name='email' onChange={(e) => handleChange(e)}></input>
            <label>age</label>
            <input type="number" name='age' onChange={(e) => handleChange(e)}></input>
            <button>Submit</button>
        </form>

    </div>)
}