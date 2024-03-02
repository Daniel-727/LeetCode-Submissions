// O(n)2 solution

function isValidSudoku(board: string[][]): boolean {

    // Arrays
    // Rows
    let rows = {};

    // Col
    let cols = {}

    // Square

    let sq0 = {};
    let sq1 = {};
    let sq2 = {};
    let sq3 = {};
    let sq4 = {};
    let sq5 = {};
    let sq6 = {};
    let sq7 = {};
    let sq8 = {};

    // Create our objects O(n)2 time complexity
    for (let row = 0; row < board.length; row++){ 
        for (let col = 0; col < board[row].length; col++){
            let cell = board[row][col];
            if(cell !== "."){
                // Squares
                if (row <= 2 && col <= 2){
                    if (!sq0[cell]) {
                        sq0[cell] = 1;
                    } else {
                        sq0[cell] += 1;
                    }
                } else if (row <= 2 && col <= 5){
                    if (!sq1[cell]) {
                        sq1[cell] = 1;
                    } else {
                        sq1[cell] += 1;
                    }
                } else if (row <= 2 && col <= 8){
                    if (!sq2[cell]) {
                        sq2[cell] = 1;
                    } else {
                        sq2[cell] += 1;
                    }
                } else if (row <= 5 && col <= 2){
                    if (!sq3[cell]) {
                        sq3[cell] = 1;
                    } else {
                        sq3[cell] += 1;
                    }
                } else if (row <= 5 && col <= 5){
                    if (!sq4[cell]) {
                        sq4[cell] = 1;
                    } else {
                        sq4[cell] += 1;
                    }
                } else if (row <= 5 && col <= 8){
                    if (!sq5[cell]) {
                        sq5[cell] = 1;
                    } else {
                        sq5[cell] += 1;
                    }
                } else if (row <= 8 && col <= 2) {
                    if (!sq6[cell]) {
                        sq6[cell] = 1;
                    } else {
                        sq6[cell] += 1;
                    }
                } else if (row <= 8 && col <= 5) {
                    if (!sq7[cell]) {
                        sq7[cell] = 1;
                    } else {
                        sq7[cell] += 1;
                    }
                } else if (row <= 8 && col <= 8) {
                    if (!sq8[cell]) {
                        sq8[cell] = 1;
                    } else {
                        sq8[cell] += 1;
                    }
                }

                // Rows
                if (!rows[row]) { // Does the row exist in the object?
                    rows[row] = {}; // First create object
                    rows[row][cell] = 1; // Then assign
                } else { // Does the cell exist in the object?
                    if (!rows[row][cell]){
                        rows[row][cell] = 1;
                    } else {
                        rows[row][cell] += 1;
                    }
                }

                // Columns
                if (!cols[col]) {
                    cols[col] = {};
                    cols[col][cell] = 1;
                } else {
                    if (!cols[col][cell]) {
                        cols[col][cell] = 1;
                    } else {
                        cols[col][cell] += 1;
                    }
                }
            }
        }
    }

    // Go through our objects to check if the board is valid or not
    // Squares
    for (let key in sq0) {
        if(sq0[key] > 1){
            return false;
        }
    }
    for (let key in sq1) {
        if(sq1[key] > 1){
            return false;
        }
    }
    for (let key in sq2) {
        if(sq2[key] > 1){
            return false;
        }
    }
    for (let key in sq3) {
        if(sq3[key] > 1){
            return false;
        }
    }
    for (let key in sq4) {
        if(sq4[key] > 1){
            return false;
        }
    }
    for (let key in sq5) {
        if(sq5[key] > 1){
            return false;
        }
    }
    for (let key in sq6) {
        if(sq6[key] > 1){
            return false;
        }
    }
    for (let key in sq7) {
        if(sq7[key] > 1){
            return false;
        }
    }
    for (let key in sq8) {
        if(sq8[key] > 1){
            return false;
        }
    }

    // Rows
    for (let row in rows){
        for (let key in rows[row]){
            if (rows[row][key] > 1){
                return false;
            }
        }
    }

    // Columns

    for (let col in cols){
        for (let key in cols[col]){
            if (cols[col][key] > 1){
                return false;
            }
        }
    }

    // If function hasn't returned false yet, then board is valid
    return true;
    
}