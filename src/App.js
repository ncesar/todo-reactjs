import React, { Component } from 'react';
import './App.css';
import NewTodoForm from  './components/NewTodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    message: 'Hello!',
    newTodo: '',//criando um state em branco
    todos: [
      {
        title: 'Learn React',
        done: false
      },
      {
        title: 'Learn JSX',
        done: false
      }
    ]
  };

  formSubmitted = (event) => {
    event.preventDefault();
    console.log(event);
    // const todos = this.state.slice();//faz 1 cópia do array
    this.setState({
      newTodo: '',//valor em branco para ser setado no value do input
      todos: [
        ...this.state.todos,//criando uma cópia do Array com spread operator
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  };

  newTodoChanged = (event) => {
    console.log(event.target.value);
    this.setState({
      newTodo: event.target.value
    });
  };

  toggleTodoDone = (event,index) => {
    console.log(event.target.checked);
    const todos = [...this.state.todos];//copia do array
    todos[index] = {...todos[index]};//copia do objeto em especifico
    todos[index].done = event.target.checked; //atualizando a propriedade dentro do array
    this.setState({
      todos
    });
  } 

  removeTodo = (index) => {
    const todos = [...this.state.todos]; //copy the array
    todos.splice(index, 1);
    
    this.setState({
      todos
    });
  }

  allDone = () => {
    const todos = this.state.todos.map(todo => {//map cria um novo array, passando pelos todo, 
      return {//e pra cada todo iremos criar um novo objeto, com todas as propriedades existentes
        title: todo.title,
        done: true//porém com o done setado para true
      }
    });
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <NewTodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)}
        />
        <button onClick={this.allDone}>All done!</button>
        <TodoList 
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />

      </div>
    );
  }
}

export default App;
