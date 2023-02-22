import Navbar from './Navbar.jsx'
import '../App.css';
import Header from './Header.jsx'
import TodosLogic from './TodosLogic';
import Modal from './Modal.jsx';
const TodoApp = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Modal />
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};
export default TodoApp;


