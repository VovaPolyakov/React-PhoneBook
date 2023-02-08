
import './App.css';
import { DataContextProvider } from './Reducer/DataReducer';
import PhoneContainer from './components/PhoneContainer';
import Header from './components/Header';

function App() {
  return <>
    <DataContextProvider>
      <Header/>
      <PhoneContainer/>
    </DataContextProvider>
  </>
}

export default App;
