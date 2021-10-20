import React, {Component} from "react";
import './TodoItem.css'

class TodoItem extends Component{

  
  shouldComponentUpdate(nextProps, nextState){
    return (
      this.props.todos !== nextProps.todos,
      this.props.checked !== nextProps.checked
    );
  }

  //todo의 값이 리렌더링 할 때 바뀌면 되기 때문에 두개가 다를 때만 리렌더링하면 된다.
  render(){
    const {text, checked, id, onToggle, onRemove} = this.props;
    console.log(id, checked);

    return(
      <div className="todo-item" onClick={()=> onToggle(id)}>
        <div className="remove" onClick={(e)=>{
          e.stopPropagation();
          onRemove(id)}
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">&#x2713;</div>)
        }
      </div>
    );
  }
}

export default TodoItem;