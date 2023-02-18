import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import { ChakraProvider } from '@chakra-ui/react'

/*Unis CSS*/
import './unis-blue.css';
import './custom.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <ChakraProvider>
        <Homepage />
        </ChakraProvider>
      </header>
    </div>
  );
}

export default App;
