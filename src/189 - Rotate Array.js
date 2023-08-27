/* FIRST TRY WITH MAP BUT SHIFTING THE INDICIES DOESN'T SHIFT THE ELEMENTS IN MAP METHOD

let lastIndex = nums.length - 1;
    let rotated = nums.map((e,i) => { //the array.map function has multiple parameters, the first one is the element, and if you choose to add a second parameter, it will be the index of the element
        let newIndex = i + k;
        if (newIndex > lastIndex) { //if the new index is greater than the last index then divide the new index by the last index, which is also the total indices in the array and give us the remainder which we will have to subtract by 1 to get the newIndex position
            i = newIndex % lastIndex - 1;
        } else { //if the new index is not greater than the last index then the new index is just i + k
            i = i + k;
        }
        console.log(e);
    }); //after this map function we should have the array with wait, we moved the indicies but the elements have not moved
    return rotated;

*/

/* SECOND ATTEMPT WITH FOR LOOP ALMOST WORKS BUT I ALREADY CHANGED THE ELEMENTS THAT I NEED

let lastIndex = nums.length - 1;
    for (i = 0; i < lastIndex; i++){
        let newPos = i + k;
        let element = nums[i];
        if (newPos > lastIndex) { //if the new position is greater than the array
            newPos = newPos % lastIndex - 1; //we will go back to the start of the array by dividing the new position by the total number of indices in the array and getting the remainder - 1, which should be the new position 
            nums[newPos] = element; //now we have the new index of where the element should go, we just have to insert that element in the new index position
        } else { //if the new position is not greater than the array
            nums[newPos] = element;
        }
    }
*/

/* THIRD ATTEMPT WITH FOR LOOP ALMOST WORKS, BUT IF THE REMAINDER IS 0 AND WE SUBTRACT 1 WE GET -1 AS AN INDEX

   let lastIndex = nums.length - 1;
    let copy = [...nums]; //creating a copy of array nums using the spread notation, I want the rotated array to have all the elements from num
    
    for (i = 0; i < nums.length; i++){
        let newPos = i + k;
        let element = copy[i];
        if (newPos > lastIndex) { //if the new position is greater than the array
            newPos = newPos % lastIndex - 1; //we will go back to the start of the array by dividing the new position by the total number of indices in the array and getting the remainder - 1, which should be the new position    
            console.log(newPos);
            newPos ? newPos : 0; //this code doesn't work becacuse javascript counts negative numbers as truthy
            console.log(newPos);
            nums[newPos] = element; //now we have the new index of where the element should go, we just have to insert that element in the new index position
        } else { //if the new position is not greater than the array
            nums[newPos] = element;
        }
    }
 */

// WORKING SOLUTION, SHOULD'VE USED NUMS.LENGTH FROM THE BEGINNING INSTEAD OF NUMS.LENGTH-1

 var rotate = function(nums, k) {
    let lastIndex = nums.length - 1;
    let copy = [...nums]; //creating a copy of array nums using the spread notation, I want the rotated array to have all the elements from num
    
    for (i = 0; i < nums.length; i++){
        let newPos = i + k;
        let element = copy[i];
        if (newPos > lastIndex) { //if the new position is greater than the array
            newPos = newPos % nums.length; //we will go back to the start of the array by dividing the new position by the total number of indices in the array which should be the new position    
            nums[newPos] = element; //now we have the new index of where the element should go, we just have to insert that element in the new index position
        } else { //if the new position is not greater than the array
            nums[newPos] = element;
        }
    }
    

};