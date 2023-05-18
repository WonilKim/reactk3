import { useParams } from "react-router-dom";

const RoutePage1 = () => {

    const item = useParams.item;

    return (
        <article>
            <header><h1>RoutePage1</h1></header>
            {item}
        </article>
    );
}

export default RoutePage1;