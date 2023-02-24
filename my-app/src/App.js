
import './App.css';

import { Routes, Route, Link } from 'react-router-dom'

import { Header } from './components/Header/Header';
import { PDFDoc } from './components/PDFDoc/PDFDoc';
import { Forma } from './components/Forma/Forma';

function App() {
  return (
    <div className="App">
      <p>проверка</p>
      <Header />
      <Routes>
        <Route path='/' element={<Forma />} />
        <Route path='/pdfdoc' element={<PDFDoc />} />
      </Routes>
    </div>
  );
}

export default App;
