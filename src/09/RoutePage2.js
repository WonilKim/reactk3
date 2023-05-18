import { useLocation } from "react-router-dom";
import qs from "query-string";

const RoutePage2 = () => {

    const loc = useLocation().search;

    console.log("loc = ", loc);

    const item1 = qs.parse(loc).item1;
    const item2 = qs.parse(loc).item2;

    console.log("item1 = ", item1);
    console.log("item2 = ", item2);
   
    return (
        <article>
            <header><h1>RoutePage2</h1></header>
            <h3>{item1}</h3>
            <h3>{item2}</h3>
        </article>
    );
}

export default RoutePage2;