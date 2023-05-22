
import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Document } from './Pages/Document/Document';
import { MainPage } from './Pages/MainPage/MainPage';
import { Header } from './components/Header/Header';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/document' element={<Document />} />
      </Routes>
    </div>
  );
}

export default App;
