/*
 * Jasper Adams - JavaScript Problems 1-10 - 9/18/17.
 */

//sleep_in
function sleep_in(weekday, vacation){
    if(weekday == true && vacation == false){
        return false;
    }
    if(weekday == false && vacation == false) {
        return true;
    }
    if(weekday == false && vacation == true) {
        return true;
    }
    if(weekday == true && vacation == true) {
        return true;
    }
    if(weekday == "true" && vacation == "false") {
        return false;
    }
}

//monkey_trouble
function monkey_trouble(a_smile, b_smile) {
    return a_smile == b_smile;
}

//string_times
function string_times(str, x){
    return str.repeat(x);
}

//front_times
function front_times(str, x){
    var sub = str.substring(0, 3);
    return sub.repeat(x);
}

//string_bits
function string_bits(str){
    var x = "";
    for(var i = 0; i < str.length; i += 2){
        x += str[i]
    }
    return x;
}

//caughtSpeeding
function caughtSpeeding(speed, birthday){
    var x = 0;
    if(birthday == true){
        x = 5;
    }
    if(speed <= 60 + x){
        return 0;
        // 0 = no ticket
    }
    if(speed <= 80 + x){
        return 1;
        // 1 = small ticket
    }
    if(speed >= 81 + x) {
        return 2;
        //2 = big ticket
    }
}

//fizzBuzz
function fizz_buzz(x){
    var esc = "!";
    var result = x + esc;
    if(x % 3 == 0){
        result = "Fizz";
    }
    if(x % 5 == 0){
        result = "Buzz";
    }
    if(x % 3 == 0 && x % 5 == 0){
        result = "FizzBuzz";
    }
    return result;
}

//teaParty
function teaParty(tea, candy){
    var result = 1;
    //1 = good
    if(tea >= 2 * candy) {
        result = 2;
        //2 = great
    }
    if(candy >= 2 * tea) {
        result = 2;
    }
    if(tea < 5 || candy < 5){
        result = 0;
        //0 = bad
    }
    return result
}

//blackjack
function blackjack(x, y){
    var result = 0;
    if(x > y && x <= 21){
        result = x;
    }
    if(y > x && y <= 21){
        result = y;
    }
    if(x > y && x > 21 && y <= 21){
        result = y;
    }
    if(y > x && y > 21 && x <= 21){
        result = x;
    }
    return result;
}

//loneSum
function loneSum(a, b, c){
    var sum = a + b + c;
    var result = sum;
    if(a == b || a == c){
        result = sum - 2 * a;
    }
    if(b == c){
        result = sum - 2 * b;
    }
    if(a == b && a == c){
        result = 0;
    }
    return result;
}


function tester() {
    document.getElementById("output").innerHTML = sleep_in(true, false);
    document.getElementById("output").innerHTML = monkey_trouble(true, true);
    document.getElementById("output").innerHTML = string_times("hello", 5);
    document.getElementById("output").innerHTML = front_times("hello", 2);
    document.getElementById("output").innerHTML = string_bits("hello");
    document.getElementById("output").innerHTML = caughtSpeeding(50, true);
    document.getElementById("output").innerHTML = fizz_buzz(25);
    document.getElementById("output").innerHTML = teaParty(3, 10);
    document.getElementById("output").innerHTML = blackjack(19,17);
    document.getElementById("output").innerHTML = loneSum(3, 3, 3);
}
