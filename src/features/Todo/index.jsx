import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './component/TodoList';


TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

    const initTodoList=[
        {
            id:1,
            title:'Eat',
            status:'new'
        },
        {
            id:2,
            title:'Sleep',
            status:'complete'
        },
        {
            id:3,
            title:'Code',
            status:'new'
        }

    ];
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');
    const handleTodoList = (todo,index) =>{
         
        // clone current  array to the new one ( làm việc với object array phải tạo ra mảng mới chứ nêu giữ nguyên dữ liệu không thay đổi)
        const newTodoList = [...todoList];

       // toggle state   -- ...newTodoList[index] : lấy nguyên 1 todo ra
        newTodoList[index] = {
          ...newTodoList[index],   
        status: newTodoList[index].status=== 'new'?'complete':'new',
       }
       //    newTodoList[index]=newTodo;

       //update todo list
       setTodoList(newTodoList);

    };

    const handleShowAllClick =() =>{
        setFilteredStatus("all");
    };
    const handleShowComplete =() =>{
        setFilteredStatus("complete");
    };
    const handleShowNew =() =>{
        setFilteredStatus("new");
    };
    
    const renderTodoList = todoList.filter(todo => filteredStatus==='all'||filteredStatus=== todo.status );
   // console.log(renderTodoList);

    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoList} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowComplete}>Show Complete</button>
                <button onClick={handleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;