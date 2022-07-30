import { Routes, Route } from "react-router-dom";
import TaskForm from "./pages/TaskForm";
import TaskPage from "./pages/TasksPage";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import { TaskContextProvider } from "./context/TaskContext";
import "./App.css";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <NavBar />
      <div className="container mx-auto py-4 px-8">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
