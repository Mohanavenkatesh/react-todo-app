
import './App.css'
import ToDoList from './ToDoList';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <ToDoList />
      </main>
      <Footer />
    </div>
  )
}

export default App;
