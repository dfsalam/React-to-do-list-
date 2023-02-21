import '../App.css';
import Navbar from './Navbar';
import Header from './Header.jsx'
import TodosLogic from './TodosLogic';
const TodoApp = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <TodosLogic />      
    </div>
  );
};
export default TodoApp;


