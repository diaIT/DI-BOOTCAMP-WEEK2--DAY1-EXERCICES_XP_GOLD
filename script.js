/*---------------------------------------Exercise 1 : Evaluation------------------------------------*/
/*For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.*/
    5 >= 1 // true, because 5 superior 1
    0 === 1 // false, beacuse 0 is different 1
    4 <= 1 //false, bacause 1 lower 4
    1 != 1// false 1==&
    "A" > "B" //false, beacuse 
    "B" < "C" // true
    "a" > "A" //true
    "b" < "A" // false
    true === false //false
    true != true //true

/*---------------------------------------Exercise 2 : Ask For Numbers---------------------*/
//Ask the user for a string of numbers separated by commas
let user= prompt("Enter a string of numbers separated by commas")

//Console.log the sum of the numbers.
console.log(user[O])


/*-------------------------------------Exercise 3 : Find Nemo------------------------------------*/

//Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"

let sentence = prompt("Enter sentence containing the word “Nemo”");
let worlds = sentence.split(' ');
let regex = /Nemo/;

//Find the word “Nemo”
//Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
if(sentence.match(regex)){
    console.log("I found Nemo at", worlds.indexOf("Nemo"))

    //If you can’t find Nemo, console.log “I can’t find Nemo”
}else console.log("I can’t find Nemo")