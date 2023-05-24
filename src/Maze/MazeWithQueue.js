import { useState, useEffect, useRef } from "react";
import style from './styles/MazeWithQueue.module.css'
import { Point } from "./Point";
import { PointStack } from "./PointStack";
import { PointQueue } from "./PointQueue";

const MazeWithQueue = () => {
    console.log("-- MazeWithQueue()");

    let stack = new PointStack();
    let queueArray = [];
    let queueArrayCopy = [];
    let queueNumberArray = [];
    let validQueueArray = [];
    let queueNumber = 0;

    let method = "Stack";
    let running = false;
    let selRef = useRef();

    let Directions = {
        "N": 0,
        "NE": 1,
        "E": 2,
        "SE": 3,
        "S": 4,
        "SW": 5,
        "W": 6,
        "NW": 7
    }

    let mazeData = [ // 12 x 15
        [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
        [1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
        [0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
        [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0]];

    //
    let maze;
    let mark;

    maze = (
        mazeData.map((row, idxr) => {
            return (
                <div key={idxr} className={style.row}>
                    {row.map((col, idxc) => {
                        console.log("id = " + ("div" + idxr + "_" + idxc));
                        return (
                            <div key={idxr + idxc} id={"div" + idxr + "_" + idxc}
                                className={mazeData[idxr][idxc] === 1
                                    ? style.blockBlack : style.blockWhite}></div>
                        );
                    })}
                </div>
            );
        })
    );

    const [mazeTags, SetMazeTags] = useState(maze);
    // const [clickCount, setClickCount] = useState(0);

    //
    let offset = [];
    offset.push(new Point(-1, 0, Directions.N));
    offset.push(new Point(-1, 1, Directions.NE));
    offset.push(new Point(0, 1, Directions.E));
    offset.push(new Point(1, 1, Directions.SE));
    offset.push(new Point(1, 0, Directions.S));
    offset.push(new Point(1, -1, Directions.SW));
    offset.push(new Point(0, -1, Directions.W));
    offset.push(new Point(-1, -1, Directions.NW));

    let curStack = new Point(0, 0, Directions.N);
    let goal = new Point((mazeData.length - 1), (mazeData[0].length - 1), Directions.N);

    let finished = false;

    const initialize = () => {
        console.log("-- initialize()");

        finished = false;
        running = false;
        // setClickCount(0);

        mark = [];
        mazeData.map((row, idxr) => {
            let arrCol = []
            row.map((col, idxc) => {
                arrCol.push(-1);
                let cell = document.querySelector("#div" + idxr + "_" + idxc);
                // console.log("cell = " + cell);
                if (cell !== null) {
                    cell.innerHTML = "";
                }
            })
            mark.push(arrCol);
        })

        curStack = new Point(0, 0, Directions.N);
        mark[curStack.r][curStack.c] = 0;
        console.log("cur = " + curStack);

        console.log("mark = " + mark);

        let startCell = document.querySelector("#div" + curStack.r + curStack.c);
        if (startCell !== null) {
            startCell.innerHTML = "🟢";
        }
        let goalCell = document.querySelector("#div" + goal.r + goal.c);
        if (goalCell !== null) {
            goalCell.innerHTML = "⭕";
        }

        stack.clear();

        //
        queueArray = [];
        queueArrayCopy = [];
        queueNumberArray = [];
        validQueueArray = [];
        queueNumber = 0;

        let queue = new PointQueue();
        let curPoint = new Point(0, 0, Directions.N);
        console.log("curPoint = " + curPoint);
        queue.enque(curPoint);
        console.log("queue = " + queue);
        console.log("queue.peek() = " + queue.peek());
        console.log("queue.size() = " + queue.size());

        queueArray.push(queue);
        console.log("queueArray = " + queueArray);
        validQueueArray.push(true);
        queueNumberArray.push(queueNumber++);
        console.log("validQueueArray = " + validQueueArray);

    } // const initialize = ()

    useEffect(() => {
        console.log("-- useEffect()");

        initialize();

    }, []);

    const moveNextQueue = () => {
        console.log("-- moveNextQueue()");

        //10 번이 퍼지면서 이상한 곳으로 간다

        if (finished) {
            console.log("Finished");
            running = false;
            return;
        }

        running = true;
        // setClickCount(clickCount + 1);

        queueArrayCopy = [];
        for (let q of queueArray) {
            queueArrayCopy.push(q.copy());
        }

        console.log(" ** Queue count = " + queueArrayCopy.length);
        for (let i = 0; i < queueArrayCopy.length; i++) {
            console.log(" * Queue [" + i + "]");

            if (validQueueArray[i] === false) {
                console.log("  dead queue");
                continue;
            }

            // console.log("queueArrayCopy = " + queueArrayCopy);

            let queue = queueArrayCopy[i];
            console.log("queue = " + queue);
            // console.log("queue.size() = " + queue.size());

            let curPoint = queue.peek();
            console.log("curPoint = " + curPoint);

            let next = new Point(0, 0, 0);
            let foundNext = false;
            let createQueue = false;

            for (let o of offset) {
                let p = curPoint;
                next = p.offset(o);
                // console.log("p = " + p);
                console.log("next = " + next);

                if ((next.r < 0) || (next.c < 0) || (mazeData.length <= next.r) || (mazeData[0].length <= next.c)) {
                    console.log("out of border");
                    continue;
                }

                if (mark[next.r][next.c] >= 0) {
                    console.log("way passed");
                    continue;
                }

                if (mazeData[next.r][next.c] === 1) {
                    console.log("wall");
                    continue;
                }

                if (mazeData[next.r][next.c] === 0) {
                    console.log("found next");

                    let qi;

                    if (createQueue === true) {
                        console.log("- create new queue");

                        let lastQueue = queue.copy();
                        // console.log("lastQueue = " + lastQueue);
                        // console.log("lastQueue.size() = " + lastQueue.size());

                        queue = lastQueue.copy();
                        queue.pop();
                        // console.log("queue = " + queue);
                        // console.log("queue.size() = " + queue.size());

                        queueArray.push(queue);
                        validQueueArray.push(true);
                        queueNumberArray.push(queueNumber++);

                        qi = queueArray.length - 1;

                    } else {
                        qi = i;
                    }
                    console.log("qi = " + qi);

                    // 갈 곳 있음
                    let last = curPoint.copy();
                    // stack.push(last);
                    let newPoint = next.copy();
                    mark[newPoint.r][newPoint.c] = qi;

                    queue = queueArray[qi];
                    queue.enque(newPoint)
                    console.log("queue[" + qi + "].enque(" + newPoint + ")");
                    // console.log("queue.size() = " + queue.size());
                    // console.log("queue = " + queue);

                    document.querySelector("#div" + last.r + "_" + last.c).innerHTML = queueNumberArray[i];
                    document.querySelector("#div" + newPoint.r + "_" + newPoint.c).innerHTML = "🟢";

                    console.log(" # set " + ("#div" + newPoint.r + "_" + newPoint.c) + "🟢");

                    if ((newPoint.r === goal.r) && (newPoint.c === goal.c)) {
                        finished = true;
                        console.log("Goal");

                        queue.data.map((item) => {
                            if (item.equals(newPoint) === false) {
                                document.querySelector("#div" + item.r + "_" + item.c).innerHTML = "🔹";
                            }
                        });

                        return;
                    }

                    foundNext = true;
                    createQueue = true;

                }

            } // for (let o of offset)

            if (foundNext === false) {
                // 갈 곳 없음
                console.log("- No way to go, stop at " + curPoint);
                validQueueArray[i] = false;

                document.querySelector("#div" + curPoint.r + "_" + curPoint.c).innerHTML = "🔴";

            } else {

            } // else of if (foundNext == false)
        } // for (let i = 0; i < queueArray.length; i++)

        // console.log("queueArray = " + queueArray);

    }

    const moveNextStack = () => {
        console.log("-- moveNextStack()");

        if (finished) {
            console.log("Finished");
            running = false;
            return;
        }

        running = true;
        // setClickCount(clickCount + 1);

        let next = new Point(0, 0, 0);
        let foundNext = false;
        for (let o of offset) {
            let p = curStack;
            next = p.offset(o);
            // console.log("p = " + p);
            console.log("next = " + next);

            if ((next.r < 0) || (next.c < 0) || (mazeData.length <= next.r) || (mazeData[0].length <= next.c)) {
                console.log("out of border");
                continue;
            }

            if (mark[next.r][next.c] >= 0) {
                console.log("way passed");
                continue;
            }

            if (mazeData[next.r][next.c] === 0) {
                console.log("found next");
                foundNext = true;
                break;
            } else if (mazeData[next.r][next.c] === 1) {
                console.log("wall");
                continue;
            }
        } // for (let o of offset)

        if (foundNext === false) {
            // 갈 곳 없음
            console.log("No way to go, rewinding");
            let pop = stack.pop();
            console.log("pop(" + pop + ")");

            let last = curStack;
            curStack = pop;

            document.querySelector("#div" + last.r + "_" + last.c).innerHTML = "◾";
            document.querySelector("#div" + curStack.r + "_" + curStack.c).innerHTML = "🔴";

        } else {
            // 갈 곳 있음
            let last = curStack;
            stack.push(last);
            console.log("push(" + last + ")");
            curStack = next;
            mark[curStack.r][curStack.c] = 2;

            document.querySelector("#div" + last.r + "_" + last.c).innerHTML = "◾";
            document.querySelector("#div" + curStack.r + "_" + curStack.c).innerHTML = "🟢";

            if ((curStack.r === goal.r) && (curStack.c === goal.c)) {
                finished = true;
                console.log("Goal");

                stack.data.map((item) => {
                    if (item.equals(curStack) === false) {
                        document.querySelector("#div" + item.r + "_" + item.c).innerHTML = "🔹";
                    }
                });
            }
        }
    } // const moveNextStack = ()

    const moveNextClicked = (e) => {
        console.log("-- moveNextClicked(e)");

        e.preventDefault();

        if (method === "Queue")
            moveNextQueue();
        else
            moveNextStack();

        //
        selRef.current.setAttribute("disabled", true);

    }

    const resetClicked = (e) => {
        console.log("-- resetClicked(e)");

        e.preventDefault();

        finished = false;
        initialize();

        selRef.current.removeAttribute("disabled");

    }

    const methodChanged = (e) => {
        console.log("-- methodChanged(e)");

        e.preventDefault();

        method = e.target.value;

    }

    return (
        <main className="container">
            <header>
                <h3>Maze problem</h3>
            </header>
            <div className={style.mazeBorder}>
                <div className={style.rows}>
                    {mazeTags}
                </div>
            </div>
            <footer>
                <form>
                    <nav>
                        <ul>
                            <li>
                                <select ref={selRef} defaultValue='Stack' name='method' onChange={(e) => methodChanged(e)}>
                                    <option value='Stack'>Stack</option>
                                    <option value='Queue'>Queue</option>
                                </select>
                            </li>
                        </ul>
                        <ul>
                            {/* <li>Count : </li>
                            <li>{clickCount}</li> */}
                            <li><button onClick={(e) => moveNextClicked(e)}>Move Next</button></li>
                            <li><button onClick={(e) => resetClicked(e)}>Reset</button></li>
                        </ul>
                    </nav>
                </form>
            </footer>

        </main>
    );
}

export default MazeWithQueue;