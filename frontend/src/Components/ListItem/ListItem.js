import React, { useState } from 'react'
import aios from "axios";

export default function ListItem(props) {
  const [onEdit, setOnEdit] = useState(false);
  const [editVal, setEditVal] = useState(props.item.Todo);

  const onRemove = (_id) => {
    setTimeout(() => {
      props.handleDelete(_id);
    }, 200);
    
    setTimeout(() => {
      const todos = aios
        .get("http://localhost:5000/get-items")
        .then((item) => {
          props.setData(item.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 300);
  };

  const handleEditValue = (e) => {
    const { value } = e.target;
    setEditVal(value);
  };
  const onEditing = () => {
    setOnEdit(true);
  };
  const handleCancel = () => {
    if (editVal === "") {
      setEditVal(props.item.Todo);
    }
    setOnEdit(false);
  };
  const handleSave = () => {
    if (editVal === "") {
      setEditVal(props.item.Todo);
    } else {
      props.handleEdit(editVal, props.item._id);
      
    setTimeout(() => {
      const todos = aios
        .get("http://localhost:5000/get-items")
        .then((item) => {
          props.setData(item.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 100);
    }
    setOnEdit(false);
  };
    const { item } = props;
    if (onEdit) {
      return (
        <>
          <li>
            <input
              type="text"
              name="editVal"
              id="editVal"
              onChange={handleEditValue}
              value={editVal}
            />
            <div className="row">
              <i
                className="fa fa-save"
                title="Save"
                onClick={handleSave}
              />
              <i
                className="fa fa-times"
                title="Cancel"
                onClick={handleCancel}
              />
            </div>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            {item.Todo}
            <div className="row">
               <i
                className="fa fa-pencil-alt"
                onClick={onEditing}
                title="Edit"
              />
              <i className="fa fa-trash" onClick={() => onRemove(item._id)} title="Delete" />
            </div>
          </li>
        </>
      );
    }
  
}
