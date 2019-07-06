import React, {Component} from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
        /*todos의 값이ㅣ 바뀔 때만 업데이트를 한다.*/
    };

    render() {
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map((todo) => (<TodoItem key={todo.id} done={todo.done} onToggle={()=>onToggle(todo.id)} onRemove={()=>onRemove(todo.id)}>{todo.text}</TodoItem>));
        return(
            <>
                {todoList}
            </>
        );
    }
};

export default TodoList;