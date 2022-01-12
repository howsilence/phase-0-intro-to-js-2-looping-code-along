// Code your solutions in this file
function writeCards(name, day){
    let finishedCards = []
    for (let i = 0; i < name.length; i++){
        finishedCards.push(`Thank you, ${name[i]}, for the wonderful ${day} gift!`)
    }
    return finishedCards
};
function countDown(num){
    let i = num
    while (i >= 0){
        console.log(i)
        i--
    }
};