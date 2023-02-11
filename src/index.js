module.exports = function toReadable (number) {
    let result = ''
    let nameNumberFirst= ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let nameNumberSecond = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let nameNumberThird = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numberString = number.toString();
    let first = '';
    let second = '';
    let third = ''
    if (number == 0){
        first = nameNumberFirst[0]
    }
    else if (number < 10 && number > 0){
        for(let i = 0; i < 10; i++){
            if (number === i){ 
                first = nameNumberFirst[i]
            }
        }
    }
    else if (number > 9 && number < 20){
        for(let i = 1; i <= 10; i++){
            if (number === i + 9){ 
                second = nameNumberSecond[i - 1]
            }
        }
    }
    else if (number > 19 && number < 100){
        for(let i = 2; i < 10; i++){
            if (numberString[0] == i){ 
                second = nameNumberThird[i - 2]
                console.log(second)
                for (let j = 1; j < 10; j++){
                    if (numberString[1] == j){
                        first = nameNumberFirst[j]
                    }
                }
            }
        }
    }
    else if (number > 99 && number < 1000){
        for(let i = 1; i < 10; i++){
            if (numberString[0] == i){ 
                third = `${nameNumberFirst[i]} hundred`
            }
            if (numberString[1] == 0){    //hundred
                for(let j = 1; j < 10; j++){
                    if (numberString[2] == j){
                        first = nameNumberFirst[j]
                    }
                }
            }
            if (numberString[1] == 1){    //dozens
                for(let j = 0; j < 10; j++){
                    if (numberString[2] == j){
                        first = nameNumberSecond[j]
                    }
                }
            }
            if (numberString[1] > 1){      //dozens
                for(let j = 2; j < 10; j++){
                    if (numberString[1] == j){
                        second = nameNumberThird[j - 2]
                        for (let t = 1; t < 10; t++){
                            if (numberString[2] == t){   //units
                                first = nameNumberFirst[t]
                            }
                        }
                    }
                }
            }
        }
    }    
    result = numberString[1] <= 1 && number > 99 ? `${third} ${first}` : `${third} ${second} ${first}`
    console.log(number, result)
    return result.trim()
}
