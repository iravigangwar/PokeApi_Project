import CustomRoutes from './routes/customRoutes'
import { Link } from "react-router-dom";
import "./App.css"
function App() {


  return (
    <>
      <Link to='/'><h1 className='text-5xl bg-black bg-opacity-90 p-6 text-white text-center'>Pokemon</h1></Link>
        <CustomRoutes/>
    </>
    
  )
}

export default App;
