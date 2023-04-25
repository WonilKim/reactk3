import MyDivArticle from "./MyDivArticle";

const MyDiv = () => {

    return (
        <main className="container">
            <MyDivArticle aname="MyDiv0" />
            <MyDivArticle aname="MyDiv1" />
            <MyDivArticle aname="MyDiv2" />
        </main>
    );
}

export default MyDiv;
// export 가 있어야 App.js 에서 import 할 수 있다.