import './App.css';
import { Route, Routes } from 'react-router-dom';

import Introduce from './Introduce';
import Hello from './01/Hello';
import MyClock from './02/MyClock';
import Box from './03/Box';
import MyDiv from './04/MyDiv'; // 새로 만든 파일(함수) 이름. 첫글자는 대문자
import Frcst from './05/Frcst';
import Taccident from './06/Taccident';

function App() {
  return (
    // <Hello />
    // <MyClock />
    // <Box />
    // <MyDiv/>  // 새로 만든 파일(함수) 이름. 첫글자는 대문자
    // <Introduce />


    <Routes>
      <Route path='/' element={<Introduce />} />
      <Route path='/Hello' element={<Hello />} />
      <Route path='/myclock' element={<MyClock />} />
      <Route path='/Box' element={<Box />} />
      <Route path='/mydiv' element={<MyDiv />} />
      <Route path='/Frcst' element={<Frcst />} />
      <Route path='/Taccident' element={<Taccident />} />

    </Routes>
  );
}

export default App;
