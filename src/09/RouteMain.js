import { Route, Routes } from 'react-router-dom';
import RoutePage1 from './RoutePage1';
import RoutePage2 from './RoutePage1';
import RouteHome from "./RouteHome";
import RouteNav from "./RouteNav";

const RouteMain = () => {

    return (
            <main className="container">
                <RouteNav />
                <RouteHome />

                {/* // app.js 에서 구현
                <Routes>
                    <Route path='/' element={<RouteHome />} />
                    <Route path='/RouteMain/page1/:item' element={<RoutePage1 />} />
                    <Route path='/RouteMain/page2' element={<RoutePage2 />} />
                </Routes> */}
            </main>

    );
}

export default RouteMain;