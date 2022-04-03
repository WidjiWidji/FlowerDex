import LogSignPage from './LogSignPage';
import HomePage from './HomePage';
import FlowerDexPage from './FlowerDexPage'
import FlowerPage from './FlowerPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

function App(){
  //   const globalState = {
  //     user: user.uid,
  // };

  // const globalStateContext = createContext(globalState);
  return (
    <div>
      {/* <h1>hi</h1> */}
      {/* <globalStateContext.Provider value={globalState}> */}
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LogSignPage/>} />
        <Route exact path='/home' element={<HomePage/>} />
        <Route exact path='/flowerDex' element={<FlowerDexPage/>} />
        <Route exact path='/flowerPage' element={<FlowerPage/>} />
      </Routes>
      </BrowserRouter>
      {/* </globalStateContext.Provider> */}
    </div>
  );
}
// function App() {
//   return (
//     <div>
//       {/* <h1>hi</h1> */}
//       <BrowserRouter>
//       <Routes>
//         <Route exact path='/' element={<LogSignPage/>} />
//         <Route exact path='/home' element={<HomePage/>} />
//         <Route exact path='/explore' element={<ExplorePage/>} />
//         <Route exact path='/settings' element={<SettingsPage/>} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
