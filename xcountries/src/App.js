import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries';
import { StyledEngineProvider } from '@mui/material';

function App() {
  return (
    <div className="App">

    <StyledEngineProvider injectFirst>
    <Countries />
    </StyledEngineProvider>
    
  </div>
  );
}

export default App;
