let name = 'Liam Deppong';
let age = 20;
let birthday = 'June 5th';
let detroitGC = true;
let lifeEvents = ["I was born in Chicago Illinois." , "I'm a fan of the United States National Soccer Team." , "Freshman year of highschool I placed 15th in the state for the 500 yard freestyle." , "I play most string instruments."];
if (detroitGC) {
    console.log (`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
    let lifeEvent = lifeEvents[i];
    console.log(lifeEvent);
}
let counter = 0;
while (true) {
    let randomNum = Math.floor(Math.random() * 10 + 1);
    if (randomNum != 5) {
        counter++;
        console.log(`${randomNum} !== 5`);
    } else {
        counter++;
        console.log(`${randomNum} === 5. It took ${counter} iterations to randomly generate the number 5`);
        break;
    }
}