/*
----------------> Task no :1 <-------------
*/
/*
-----des:By calling a function called mindgame, taking a positive number as a parameter, then multiplying that number by 3, then adding 10, then dividing by 2, and finally subtracting by 5, returns the output.
*/
function mindGame(number) {
    let gameStart = ((number * 3) + 10) / 2 - 5;
    return gameStart;
}


/*
----------------> Task no :2 <-------------
*/
/*
-----des: A function called evenOdd is called, and
Given a string as a parameter, the condition evaluates the number of characters in the string and returns even odd
*/
function evenOdd(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    if (count % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}


/*
Task no :3 
*/
/*
----des: A function called isLGSeven is called, and the condition is shown using the condition that if the input number is greater than 7 then it is double of the input, otherwise the input number is shown as subtracted from 7.
*/
function isLGSeven(number) {
    if (number < 7) {
        return number - 7;
    } else {
        return number * 2;
    }
}


/*
Task no : 4
*/
/*
----des: A function called findingBadData is called, and as input parameter an array containing both positive and negative values ​​is taken, then the negative values ​​are extracted from the array and its length is displayed.
*/
function findingBadData(numbers) {
    let badData = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            badData.push(numbers[i]);
        }
    }
    let nagetiveData = badData.length;
    return nagetiveData;
}


/*
Task no :5--------------------
*/
/*
----- des : A function named gemsToDimond is called, then three friends are taken as parameters, and the 1st, 2nd, 3rd friends are multiplied by 21, 31, 43. Then their total diamond has been taken out. If the total diamond is less than 2000 then it is returned, and if it is more than 2000 then 2000 is subtracted from the total diamond and the remaining diamond is returned.
*/
function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
    // Error - Hendle
    if (typeof firstFriendGem !== 'number' && secondFriendGem !== 'number' && thirdFriendGem !== 'number') {
        return 'please try to valid number';
    }
    const firstFriend = firstFriendGem * 21;
    const secondFriend = secondFriendGem * 32;
    const thirdFriend = thirdFriendGem * 43;
    const totalFriendGem = firstFriend + secondFriend + thirdFriend;
    if (totalFriendGem >= 2000) {
        let result = totalFriendGem - 2000;
        return result;
    }
    else {
        return totalFriendGem;
    }
}