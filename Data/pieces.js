function blackPawn(current_position) {
    return {
        current_position,
        img: "pieces/black/pawn.png",
        piece_name = "BLACK_PAWN"

    };

}

function blackBishop(current_position) {
    return {
        current_position,
        img: "pieces/black/bishop.png",
        piece_name = "BLACK_BISHOP"

    };

}

function blackKnight(current_position) {
    return {
        current_position,
        img: "pieces/black/knight.png",
        piece_name = "BLACK_KNIGHT"

    };

}

function blackKing(current_position) {
    return {
        move: false,
        current_position,
        img: "pieces/black/king.png",
        piece_name = "BLACK_KING"

    };

}

function blackQueen(current_position) {
    return {
        current_position,
        img: "pieces/black/queen.png",
        piece_name = "BLACK_QUEEN"

    };

}

function blackRook(current_position) {
    return {
        move: false,
        current_position,
        img: "pieces/black/rook.png",
        piece_name = "BLACK_ROOK"

    };

}

// white piecessssss

function whitePawn(current_position) {
    return {
        current_position,
        img: "pieces/white/pawn.png",
        piece_name = "WHITE_PAWN"

    };

}

function whiteBishop(current_position) {
    return {
        current_position,
        img: "pieces/white/bishop.png",
        piece_name = "WHITE_BISHOP"

    };

}

function whiteKnight(current_position) {
    return {
        current_position,
        img: "pieces/white/knight.png",
        piece_name = "WHITE_KNIGHT"

    };

}

function whiteKing(current_position) {
    return {
        move: false,
        current_position,
        img: "pieces/white/king.png",
        piece_name = "WHITE_KING"

    };

}

function whiteQueen(current_position) {
    return {
        current_position,
        img: "pieces/white/queen.png",
        piece_name = "WHITE_QUEEN"

    };

}

function whiteRook(current_position) {
    return {
        move: false,
        current_position,
        img: "pieces/white/rook.png",
        piece_name = "WHITE_ROOK"

    };

}

export {

    blackPawn,
    blackBishop,
    blackKing,
    blackQueen,
    blackKnight,
    blackRook,
    whitePawn,
    whiteBishop,
    whiteKing,
    whiteQueen,
    whiteKnight,
    whiteRook

};