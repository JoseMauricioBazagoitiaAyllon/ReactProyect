import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import NotFound from "./pages/NotFound";
import Tasksform from "./pages/Tasksform";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element ={<TasksPage />} />
      <Route path="/new" element ={<Tasksform/>} />
      <Route path="*" element ={<NotFound />} />
    </Routes>
    </>    
  )
}

export default App
