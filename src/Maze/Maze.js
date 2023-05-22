import { useState, useEffect } from "react";
import style from './styles/Maze.module.css'
import { Point } from "./Point";
import { PointStack } from "./PointStack";

const Maze = () => {
    console.log("-- Maze()");

    let stack = new PointStack();

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

    const initialize = () => {
        console.log("-- initialize()");
        maze = (
            mazeData.map((row, idxr) => {
                return (
                    <div key={idxr} className={style.row}>
                        {row.map((col, idxc) => {
                            return (
                                <div key={idxr + idxc} id={"div" + idxr + idxc}
                                    className={mazeData[idxr][idxc] === 1
                                        ? style.blockBlack : style.blockWhite}></div>
                            );
                        })}
                    </div>
                );
            })
        );

        mark = [];
        mazeData.map((row) => {
            let arrCol = []
            row.map((col) => {
                arrCol.push(col);
            })
            mark.push(arrCol);
        })
    }
    //
    initialize();

    // console.log("mark = " + mark);
    // console.log("mark[0] = " + mark[0]);

    const [mazeTags, SetMazeTags] = useState(maze);

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

    let cur = new Point(0, 0, Directions.N);
    mark[cur.r][cur.c] = 2;
    // stack.push(cur);
    console.log("cur = " + cur);

    let goal = new Point((mazeData.length - 1), (mazeData[0].length - 1), Directions.N);

    let finished = false;

    const moveNext = () => {
        console.log("-- moveNext()");

        if (finished) {
            console.log("Finished");
            return;
        }

        let next = new Point(0, 0, 0);
        let foundNext = false;
        for (let o of offset) {
            let p = cur;
            next = p.offset(o);
            // console.log("p = " + p);
            console.log("next = " + next);

            if ((next.r < 0) || (next.c < 0) || (mazeData.length <= next.r) || (mazeData[0].length <= next.c)) {
                console.log("out of border");
                continue;
            }

            if (mark[next.r][next.c] === 2) {
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
        }

        if (foundNext == false) {
            // 갈 곳 없음
            console.log("No way to go, rewinding");
            let pop = stack.pop();
            console.log("pop(" + pop + ")");

            let last = cur;
            cur = pop;

            document.querySelector("#div" + last.r + last.c).innerHTML = "◾";
            document.querySelector("#div" + cur.r + cur.c).innerHTML = "🔴";

        } else {
            // 갈 곳 있음
            let last = cur;
            stack.push(last);
            console.log("push(" + last + ")");
            cur = next;
            mark[cur.r][cur.c] = 2;

            document.querySelector("#div" + last.r + last.c).innerHTML = "◾";
            document.querySelector("#div" + cur.r + cur.c).innerHTML = "🟢";

            if ((cur.r === goal.r) && (cur.c === goal.c)) {
                finished = true;
                console.log("Goal");
                
                stack.data.map((item) => {
                    if (item.equals(cur) === false) {
                        document.querySelector("#div" + item.r + item.c).innerHTML = "🔹";
                    }
                });
            }
        }
    }


    useEffect(() => {
        console.log("-- useEffect()");

        document.querySelector("#div" + cur.r + cur.c).innerHTML = "🟢";
        document.querySelector("#div" + goal.r + goal.c).innerHTML = "⭕";

    }, []);

    const buttonClicked = (e) => {
        console.log("-- buttonClicked(e)");

        e.preventDefault();

        moveNext();
    }

    const resetClicked = (e) => {
        console.log("-- resetClicked(e)");

        e.preventDefault();

        finished = false;
        initialize();

        mazeData.map((row, idxr) => {
            row.map((col, idxc) => {
                document.querySelector("#div" + idxr + idxc).innerHTML = "";
            })
        })

        cur = new Point(0, 0, Directions.N);
        mark[cur.r][cur.c] = 2;
        stack.push(cur);
        console.log("cur = " + cur);

        document.querySelector("#div" + cur.r + cur.c).innerHTML = "🟢";
        document.querySelector("#div" + goal.r + goal.c).innerHTML = "⭕";

        stack.clear();

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
                            <li><button onClick={(e) => buttonClicked(e)}>Move Next</button></li>
                            <li><button onClick={(e) => resetClicked(e)}>Reset</button></li>
                        </ul>
                    </nav>
                </form>
            </footer>

        </main>
    );
}

export default Maze;