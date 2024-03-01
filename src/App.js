import { BrowserRouter } from 'react-router-dom';
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
