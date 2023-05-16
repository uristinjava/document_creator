
import './App.css';

import { Document } from './Pages/Document/Document';


function App() {
  return (
    <div className='App'>
      <Document />
    </div>
  );
}

export default App;


// import { useState } from 'react';

// function App() {
//   const [state, setState] = useState()

//   const handlChang = (e) => {
//     const name = e.target.name
//     const value = e.target.value

//     setState(prev => {
//       return {
//         ...prev,
//         [name]: value
//       }
//     })
//     console.log(state)
//   }

//   return (
//     <div className="App">
//       <form>
//         <input onChange={handlChang} name='firstInput'></input>
//         <input onChange={handlChang} name='ScondInput'></input>
//         <input onChange={handlChang} name='ThirdInput'></input>
//         <input onChange={handlChang} name='fourthInput'></input>
//         {/* <button onClick={addHandel}></button> */}
//       </form>
//     </div>
//   );
// }

// export default App;