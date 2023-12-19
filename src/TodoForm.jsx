import { useState } from 'react'
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid'

const TodoForm = ({ addTodo }) => {
    const [formInput, setFormInput] = useState("");
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (formInput.trim().length === 0) {
                    toast.error("please fill input",{autoClose:1000,theme: "colored",})
                    return;
                }
                else{
                    toast.success("Added",{autoClose:1000,theme: "colored",})
                }

                const newTodo = {
                    id: uuid(),
                    title:formInput,
                    status: false
                }

                addTodo(newTodo)
                setFormInput("")
            }}>
               <div className="form-input">
               <input type="text" name="" id="" value={formInput} onChange={(e) => {
                    setFormInput(e.target.value);
                }} />
                <button type="submit">Add</button>
               </div>
            </form>
        </div>
    )
}

export default TodoForm