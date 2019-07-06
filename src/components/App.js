import React, {Component} from 'react';
import PageTemplate from './PageTemplate'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
class App extends Component {

    state = {
        input: '',
        todos: []
    }

    handelToggle = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        this.setState({
            todos: [...todos.slice(0, index), toggled, ...todos.slice(index+1, todos.length)]
        });
    }
    
    handleRemove = (id) => {
        const {todos} = this.state;
        const removedTodos = todos.filter(todo => todo.id !== id);
        console.log(removedTodos);
        this.setState({
            todos: removedTodos
        });

    };

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input: value
        });
    };
    // 전체 컴포넌트에서 id를 관리해주어야 한다.
    id = 0;

    getId = () => {
        return this.id++;
    };

    handleInsert = () => {
        const { todos, input} = this.state;

        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        }

        this.setState({
            todos: [...todos, newTodo],
            input: ''
        })
    };

    render(){
        const {input, todos} = this.state;
        const {handleChange, handleInsert, handelToggle, handleRemove} = this;

        return(
            <PageTemplate>
                <TodoInput onChange={handleChange} value={input} onInsert={handleInsert}/>
                <TodoList todos = {todos} onToggle= {handelToggle} onRemove ={handleRemove}/>
            </PageTemplate>
        );
    }
};

export default App;