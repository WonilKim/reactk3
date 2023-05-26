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
import RouteMain from './09/RouteMain';
import RoutePage1 from './09/RoutePage1';
import RoutePage2 from './09/RoutePage2';
import FcstMain from './10/FcstMain';
import UltraSrtFcst from './10/UltraSrtFcst';
import VilageFcst from './10/VilageFcst';
import Maze from './Maze/Maze';
import MazeWithQueue from './Maze/MazeWithQueue';
import CodeView from './102/CodeView';

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

      <Route path='/RouteMain' element={<RouteMain />} />
      <Route path='/RoutePage1/:item' element={<RoutePage1 />} />
      <Route path='/RoutePage2' element={<RoutePage2 />} />

      <Route path='/Fcst' element={<FcstMain />} />
      <Route path='/UltraSrtFcst' element={<UltraSrtFcst />} />
      <Route path='/VilageFcst' element={<VilageFcst />} />

      <Route path='/Maze' element={<Maze />} />
      <Route path='/MazeWithQueue' element={<MazeWithQueue />} />

      <Route path='/CodeView' element={<CodeView />} />

    </Routes>
  );
}

export default App;
