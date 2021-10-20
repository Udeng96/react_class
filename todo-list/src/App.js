
import React, {Component} from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component{

  id = 3 //이미 3개의 리스트가 존재하므로
  state = {
    input : '',
    todos:[
      {id:0, text: '리액트 소개', checked: false},
      {id:1, text: '리액트 소개', checked: true},
      {id:2, text: '리액트 소개', checked: false}
    ]
  }

  

  handleChange=(e)=>{
    this.setState({
      input: e.target.value // input의 다음 바뀔 값
    })
  }

  handleCreate = () => { // 새로운 값 추가
    const {input, todos} = this.state;
    this.setState({
      input: '', //input을 비우고
      todos: todos.concat({ //react를 사용할 때에는 push대신 concat을 사용해야한다.
        id: this.id++,
        text: input,
        checked: false
      })
    });
    console.log(this.state)
  }

  handleKeyPress = (e) =>{
    //눌려진 키가 enter면 handleCreate 호출
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo=>todo.id===id);
    const selected = todos[index]; //선택한 객체
    const nextTodos = [...todos]; // 배열을 복사

    //기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked : !selected.checked
    };

    this.setState({
      todos:nextTodos
    })
  }

  handleRemove = (id) => {
    const{todos} = this.state;
    
    this.setState({
      todos:todos.filter(todo=> todo.id!==id)
      //id를 갖고 있지 않는 배열을 새로생성?
    })
    
  }

  render(){
    const{input, todos} = this.state;
    const{
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return(
      <TodoListTemplate form = {(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos ={todos} onToggle={this.handleToggle} onRemove={this.handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
