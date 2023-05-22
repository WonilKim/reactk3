import FcstTable from "./FcstTable";

import { useLocation } from "react-router-dom";
import qs from "query-string";

const VilageFcst = () => {

    const loc = useLocation().search;

    console.log("loc = ", loc);

    const date = qs.parse(loc).date;
    const code = qs.parse(loc).code;
    const nx = qs.parse(loc).nx;
    const ny = qs.parse(loc).ny;

    console.log("date = ", date);
    console.log("code = ", code);
    console.log("nx = ", nx);
    console.log("ny = ", ny);

    return (
        <article>
            <header>VilageFcst</header>
            <FcstTable />
        </article>
    );
}

export default VilageFcst;