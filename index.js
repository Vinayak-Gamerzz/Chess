import { initGame } from "./Data/data.js";
import { GlobalEvent } from "./Events/global.js";
import { initGameRender } from "./Render/main.js";

const globalState = initGame();
let keySqaureMapper = {};

globalState.flat().forEach((square) => {
    keySqaureMapper[square.id] = square;

});

initGameRender(globalState);
GlobalEvent();

String.prototype.replaceAt = function (index, replacement) {
    return (
        this.substring(0, index) + 
        replacement + 
        this.substring(index + replacement.length)

    );

};

export { globalState, keySqaureMapper};