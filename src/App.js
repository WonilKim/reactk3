import './App.css';
import { Route, Routes } from 'react-router-dom';

import Introduce from './Introduce';
import Hello from './01/Hello';
import MyClock from './02/MyClock';
import Box from './03/Box';
import MyDiv from './04/MyDiv'; // 새로 만든 파일(함수) 이름. 첫글자는 대문자
import Frcst from './05/Frcst';
import Taccident from './06/Taccident';
import Fashion from './fashion/Fashion';
import MyRef_01 from './07/MyRef_01';
import MyRef from './07/MyRef';
import Box_2 from './03/Box_2';
import Gallary_1 from './08/Gallary_1';
import Gallary from './08/Gallary';

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
      <Route path='/Box_2' element={<Box_2 />} />
      <Route path='/mydiv' element={<MyDiv />} />
      <Route path='/Frcst' element={<Frcst />} />
      <Route path='/Taccident' element={<Taccident />} />
      <Route path='/Fashion' element={<Fashion />} />
      <Route path='/MyRef_01' element={<MyRef_01 />} />
      <Route path='/MyRef' element={<MyRef />} />
      <Route path='/Box' element={<Box />} />
      <Route path='/Gallary_1' element={<Gallary_1 />} />
      <Route path='/Gallary' element={<Gallary />} />
 
    </Routes>
  );
}

export default App;
