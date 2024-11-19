import React, { useEffect, useState } from 'react';
import { FaTrash, FaCheck, FaUndo, FaEdit } from 'react-icons/fa';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todoName, setTodoName] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addOrEditTodo = () => {
    if (!todoName.trim()) return;

    if (isEditing && editId !== null) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, title: todoName } : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditId(null);
    } else {
      const newTodo: TodoItem = {
        id: Math.random(),
        title: todoName,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
    setTodoName('');
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const editTodo = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setTodoName(todoToEdit.title);
      setIsEditing(true);
      setEditId(id);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center h-screen text-gray-900"
      style={{ backgroundImage: "url('/images/bg1.jpg')" }}
    >
      <div className="bg-white shadow-2xl rounded-lg w-full max-w-sm p-6 sm:p-8 space-y-6 hover:shadow-gray-800">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-[#082f49]">
         Create <br /> To-do List
        </h1>
        <textarea
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#164e63] transition duration-300"
          placeholder="Enter your todo"
        />
        <button
          className="w-full py-3 bg-gradient-to-br from-[#164e63] via-[#082f49] to-gray-700 text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition duration-300"
          onClick={addOrEditTodo}
        >
          {isEditing ? 'Update Todo' : 'Add Todo'}
        </button>
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className=" max-h-96 overflow-x-auto flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:bg-gray-200 hover:shadow-lg hover:scale-105"
            >
              <div
                className={`text-lg sm:text-xl font-medium ${
                  todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                }`}
              >
                {todo.title}
              </div>
              <div className="flex space-x-2 ml-4">
                <button
                  className={`p-2 rounded-full ${
                    todo.completed
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-blue-500 hover:bg-blue-600'
                  } text-white transition duration-300 transform hover:scale-110`}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.completed ? <FaUndo /> : <FaCheck />}
                </button>
                <button
                  className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 transform hover:scale-110"
                  onClick={() => editTodo(todo.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 transform hover:scale-110"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
