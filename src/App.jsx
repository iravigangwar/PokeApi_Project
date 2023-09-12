import CustomRoutes from './routes/customRoutes'
import { Link } from "react-router-dom";
import "./App.css"
function App() {


  return (
    <div className='logo'>
      <Link to="/"><h1>Pokedex</h1></Link>
      <div className='customRoots'><CustomRoutes/></div>
      
    </div>
    
  )
}

export default App;
