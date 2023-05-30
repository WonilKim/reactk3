import CntInput from "./CntInput";
import CntNav from "./CntNav";

const Cnt = () => {
    console.log("-- Cnt()");

    // const [count, setCount] = useState(0);

     return (
        <main className="container">
            
            <CntInput />
            <CntNav />
            {/* <CntDisp count={count}/> */}
        </main>
    );
}

export default Cnt;