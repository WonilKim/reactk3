import './App.css';
import { Route, Routes } from 'react-router-dom';

// import Hello from './01/Hello';
import MyClock from './02/MyClock';
import Box from './03/Box';
import MyDiv from './04/MyDiv'; // 새로 만든 파일(함수) 이름. 첫글자는 대문자
// import Introduce from './Introduce';

function App() {
  return (
    // <Hello />
    // <MyClock />
    <Box />
    // <MyDiv/>  // 새로 만든 파일(함수) 이름. 첫글자는 대문자
    // <Introduce />


    // <Routes>
    //   <Route path='/' element={<Box />} />
    //   <Route path='/myclock' element={<MyClock />} />
    //   <Route path='/mydiv' element={<MyDiv />} />
    // </Routes>
  );
}

export default App;
