import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/App.css';
import RoutesMap from './routes';

function App() {
  return (
    <BrowserRouter>
     <RoutesMap/>
    </BrowserRouter>
  );
}

export default App;
