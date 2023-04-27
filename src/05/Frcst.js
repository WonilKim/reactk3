import data from './dataFrcst.json';

const Frcst = () => {

    console.log(data);

    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    dtKey.map((item) => console.log(data[item]));

    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    cnKey.map((item) => console.log(data[item]));


    return(
        <>
        </>
    );
}

export default Frcst;