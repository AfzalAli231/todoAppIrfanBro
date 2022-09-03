import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'

export default class List extends Component {
  render() {
    const { todo, onDelete, onEdit, count } = this.props;
    return (
      <>
        <ul>
          {todo.length > 0 && todo.map((item, index) => {
            return (
              <ListItem
                item={item}
                key={index}
                id={index}
                handleEdit={onEdit}
                handleDelete={() => {
                  onDelete(item._id);
                }}
              />
            );
          })}
        </ul>
        <h2>You Have {count} Things To Do</h2>
      </>
    );
  }
}
