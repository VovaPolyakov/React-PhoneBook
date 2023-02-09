
import './App.css';
import { DataContextProvider } from './Reducer/DataReducer';
import PhoneContainer from './components/PhoneContainer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import UserInfo from './components/UserInfo';

function App() {
  return <>
    <DataContextProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<PhoneContainer />} />
          <Route path='/contacts/:id' element={<UserInfo />} />
        </Routes>
      </Router>
    </DataContextProvider>
  </>
}

export default App;
