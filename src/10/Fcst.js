import {BrowserRoute, Routes, Route} from "react-router-dom";

import FcstNav from "./FcstNav";
import FcstMain from "./FcstMain";
import UltraSrtFcst from "./UltraSrtFcst";
import VilageFcst from "./VilageFcst";

const Fcst = () => {

    return (
        <>
            {/* <main className="container">
                <FcstNav />
                <Routes>
                    <Route path='/Fcst' element={<FcstMain />} />
                    <Route path='/UltraSrtFcst' element={<UltraSrtFcst />} />
                    <Route path='/VilageFcst' element={<VilageFcst />} />

                    <Route path='/' element={<FcstMain />} />
                    <Route path='/ultra/:dt/:area/:x/:y' element={<UltraSrtFcst />} />
                    <Route path='/vilage/:dt/:area/:x/:y' element={<VilageFcst />} />
                </Routes>
            </main> */}
       </>
    );
}

export default Fcst;