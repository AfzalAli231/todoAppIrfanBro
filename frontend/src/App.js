import React, { useEffect, useState } from 'react';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import './App.css';
import aios from "axios"

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const items = aios.get("http://localhost:5000/get-items").then((item) => {
      setData(item.data);
    }).catch((err)=>{console.log(err.message);});
  })
  
  const handleSubmit = (newVal) => {
  const items = aios.post("http://localhost:5000/create-item", {item: newVal});
  console.log(items)
  };
  const handleRemove = (_id) => {
    
  const items = aios.delete(`http://localhost:5000/delete-item/${_id}`);
  console.log(items);
  };
  const handleOnEdit = (editVal, _id) => {
    const items = aios.put(`http://localhost:5000/edit-item/${_id}`, {
      item: editVal,
    });
    console.log(items);
  };
    return (
      <div className="app">
        <Form onSubmit={handleSubmit} />
        <h1 title="Todo List">Todo List</h1>
        {data.length === 0 ? (
          <h2>Nothing To Do</h2>
        ) : (
          <List
            todo={data}
            onEdit={handleOnEdit}
              onDelete={handleRemove}
              count={data.length}
          />
        )}
      </div>
    );
}
