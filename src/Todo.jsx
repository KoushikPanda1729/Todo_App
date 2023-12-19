import React from 'react'
import './index.css'
import { RxCross2 } from "react-icons/rx";
import { toast } from 'react-toastify';

const Todo = ({ id, title, status, toggleChange, removeTodo }) => {

    return (
        <div className='todo'>
            <div className="title-checkbox">
                <input type="checkbox" checked={status} name="" id="" onChange={(e) => {
                    toggleChange(id)
                    if (status) {
                        toast.warning("Not Done", { autoClose: 1000, theme: "colored", })
                    }else{
                        toast.success("Done", { autoClose: 1000, theme: "colored", })
                    }
                }} />
                <p className={`${status ? "lineThrough" : ""} `}>Title : {title}</p>
            </div>
            <div className='todo-btn' onClick={(e) => {
                removeTodo(id)

                toast.error("Removed", { autoClose: 1000, theme: "colored", })
            }} ><RxCross2 /></div>
        </div>
    )
}

export default Todo