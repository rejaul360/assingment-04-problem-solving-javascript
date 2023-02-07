/*
Task no :1--------------------
*/
function mindGame(number) {
    let gameStart = ((number * 3) + 10) / 2 - 5;
    return gameStart;
}
let result = mindGame(33);
console.log(result);




/*
Task no :2--------------------
*/
// function evenOdd(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         count++;
//     }
//     if (count % 2 == 0) {
//         return 'even';
//     }
//     else {
//         return 'odd';
//     }
// }

// let oddEvenResult = evenOdd('raju');
// console.log(oddEvenResult);

/*



Task no :3--------------------
*/
// function isLGSeven(number) {
//     if (number < 7) {
//         return number - 7;
//     } else {
//         return number * 2;
//     }
// }
// let result = isLGSeven(15);
// console.log(result);



/*
Task no :4--------------------
*/
// function findingBadData(numbers) {
//     let badData = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             badData.push(numbers[i]);
//         }
//     }
//     let nagetiveData = badData.length;
//     return nagetiveData;
// }
// let result = findingBadData([ -5, -7,-4,45]);
// console.log(result);




/*
Task no :5--------------------
*/

// function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
//     // Error - Hendle
//     if (typeof firstFriendGem !== 'number' && secondFriendGem !== 'number' && thirdFriendGem !== 'number') {
//         return 'please try to valid number';
//     }
//     const firstFriend = firstFriendGem * 21;
//     const secondFriend = secondFriendGem * 32;
//     const thirdFriend = thirdFriendGem * 43;
//     const totalFriendGem = firstFriend + secondFriend + thirdFriend;
//     if (totalFriendGem >= 2000) {
//         let result = totalFriendGem - 2000;
//         return result;
//     }
//     else {
//         return totalFriendGem;
//     }
// }
// let friend = gemsToDiamond(20,200,50);
// console.log(friend);