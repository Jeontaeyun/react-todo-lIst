import React, {Component} from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
    render(){
        const {done, children, onToggle, onRemove} = this.props;
        /*
        비구조화 할당을 이요하여 props 값 받는 법
        const done = this.props.done;
        const children = this.props.children;
        ...
        과 같이 반복적으로 this.props에서 값을 불러오는 것보다. 비 구조화 할당을 통해
        props의 값을 호출하는 것이 효율적이다.
        */

        return(
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={onRemove}>[지우기]</div>
            </div>
        );
    };
};

export default TodoItem;