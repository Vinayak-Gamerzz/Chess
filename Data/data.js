import { renderHighlight } from "../Render/main.js";
import { globalState } from "../index.js";

function Greet() {
  alert("Hello, World");
}

function Square(color, id, piece) {
    return { color, id, piece };

}

function SqaureRow(rowId) {
    const squareRow = [];
    const abcd = ["a", "b", "c", "d", "e", "f", "g", "h"];

    if (rowId % 2 == 0) {
        abcd.forEach((element, index) => {
            if (index % 2 == 0) {
                squareRow.push(Square("white", element + rowId, null));

            } else {
                squareRow.push(Square("black", element + rowId, null));
            }

        });

    } else {
        abcd.forEach((element, index) => {
            if (index % 2 == 0) {
                squareRow.push(Square("black", element + rowId, null));

            } else {
                squareRow.push(Square("black", element + rowId, null));
            }

        });

    }

    return squareRow;

}

function initGame() {
    return [
        SqaureRow(8),
        SqaureRow(7),
        SqaureRow(6),
        SqaureRow(5),
        SqaureRow(4),
        SqaureRow(3),
        SqaureRow(2),
        SqaureRow(1),

    ];

}

export { initGame };