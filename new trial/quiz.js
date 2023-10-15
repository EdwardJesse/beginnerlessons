let correct = 0;

let rank ="";

const main = document.querySelector("main");

const qn1 = prompt("1. What is the capital city of Ghana?");
if ( qn1.toUpperCase() === "ACCRA" ) {
    console.log(qn1);
    console.log("Correct.");
    correct += 1;
}   else {
    console.log(qn1);
    console.log("Incorrect.")
}

const qn2 = prompt("2. Which Region is it located?");
if ( qn2.toUpperCase() === "GREATER ACCRA" ) {
    console.log(qn2);
    console.log("Correct.");
    correct += 1;
}   else {
    console.log(qn2);
    console.log("Incorrect.")
}

const qn3 = prompt("3. On the global map, which Country is to the right of Ghana?");
if ( qn3.toUpperCase() === "TOGO" ) {
    console.log(qn3);
    console.log("Correct.");
    correct += 1;
}   else {
    console.log(qn3);
    console.log("Incorrect.")
}

const qn4 = prompt("4. Who is the current elected leader in Ghana?");
if ( qn4.toUpperCase() === "AKUFO ADDO" ) {
    console.log(qn4);
    console.log("Correct.");
    correct += 1;
}   else {
    console.log(qn4);
    console.log("Incorrect.")
}

const qn5 = prompt("5. In your opinion, is Ghana a peaceful Country?");
if ( qn5.toUpperCase() === "YES" ) {
    console.log(qn5);
    console.log("Correct.");
    correct += 1;
}   else {
    console.log(qn5);
    console.log("Incorrect.")
}

if ( correct === 5 ) {
    rank = "Gold";
}   else if ( correct >= 3 ) {
    rank = "Silver";
}   else if ( correct >= 2 ) {
    rank = "Bronze";
}  else {
    rank = "None"
}

main.innerHTML = `<h2>You got ${correct} out of 5 questions correct.</h2>
            <p>Crown earned: <strong>${rank}</strong></p>`;