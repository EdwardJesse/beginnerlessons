let correct = 0;

let rank = "";

const main = document.querySelector("main")

const qn1 = prompt("1+1 is");
if ( +qn1 === 2) {
    console.log("Correct.");
    correct += 1;
}

const qn2 = prompt("1+2 is");
if ( +qn2 === 3) {
    console.log("Correct.");
    correct += 1;
}

const qn3 = prompt("1+3 is");
if ( +qn3 === 4) {
    console.log("Correct.");
    correct += 1;
}

const qn4 = prompt("1+4 is");
if ( +qn4 === 5) {
    console.log("Correct.");
    correct += 1;
}

const qn5 = prompt("1+5 is");
if ( +qn5 === 6) {
    console.log("Correct.");
    correct += 1;
}

if (correct === 5) {
    rank = "Gold";
}   else if ( correct >= 3 ) {
    rank = "Silver";
}   else if ( correct >= 2 ) {
    rank = "Bronze";
}   else {
    rank = "None"
}

main.innerHTML = `<h2>You got ${correct} out of 5 questions correct.</h2>
<p>Crown earned: <strong>${rank}</strong></p>`;