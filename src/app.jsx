import { 
  BrowserRouter as Router, 
  Routes,
  Route, 
} from "react-router-dom";
import Home from '../src/routes/home';
import Project from '../src/routes/project'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </Router>
  )
}

export default App;
