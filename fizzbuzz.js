// print a program from 1 to 100;
// but for multiples of 3, print "Fizz";
// for multiples of 5, print "Buzz";

function fizzBuzz () {
    for (let i=1; i<=50; i++) {
        if (i%15 === 0) console.log('FizzBuzz');
        else if (i%3 === 0) console.log('Fizz');
        else if (i%5 === 0) console.log('Buzz');
        else console.log(i);
    }
}

function ternaryFizzBuzz () {
    for (let i=51; i<=100; i++) {
        console.log((i%3 === 0 ? 'Fizz':'')+(i%5 === 0 ? 'Buzz':'') || i)
    }
}

fizzBuzz();
ternaryFizzBuzz();

/*
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
*/