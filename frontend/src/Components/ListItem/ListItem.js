import React, { useState } from 'react'

export default function ListItem(props) {
  const [onEdit, setOnEdit] = useState(false);
  const [editVal, setEditVal] = useState(props.item.item);

  const onRemove = (_id) => {
    setTimeout(() => {
      props.handleDelete(_id);
    }, 200);
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
      setEditVal(props.item.item);
    }
    setOnEdit(false);
  };
  const handleSave = () => {
    if (editVal === "") {
      setEditVal(props.item.item);
    } else {
      props.handleEdit(editVal, props.item._id);
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
            {item.item}
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
