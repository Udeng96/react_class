import React,{Component} from "react";
import TodoItem from "./TodoItem";


class TodoItemList extends Component{
  render(){
    const{ todos, onToggle, onRemove} = this.props;
    //todos : 객체들이 들어있는 배열 & onToggle : 토글박스 & onremove : 아이템 삭제
    const todoList = todos.map(
      ({id,text,checked}) => (
        <TodoItem
        id={id}
        text = {text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
        />
      )
    )
    return(
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;

