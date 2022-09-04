import React, { useState } from 'react'
import aios from "axios";

export default function Form(props) {
  const inputValue = {
    todo: "",
  };
  const [state, setState] = useState(inputValue);

  const handlerInput = (e) => {
    const { name, value } = e.target;
    setState({
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    props.onSubmit(state.todo);
    e.preventDefault();
    setState(inputValue);
    setTimeout(()=> {
  const todos = aios
    .get("http://localhost:5000/get-items")
    .then((item) => {
      props.setData(item.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
    }, 200)
  };

    const { todo } = state;

    return (
      <>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="todo"
            title="Add Work In Todo List"
            id="todo"
            onChange={handlerInput}
            value={todo}
            placeholder="Add Work"
            required
          />
          <button type="submit" title="Create Work To Do">Create</button>
        </form>
      </>
    );
  
}
