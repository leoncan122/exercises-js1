/**

Let's peer into the future using a Magic 8 Ball!
https://en.wikipedia.org/wiki/Magic_8-Ball 

There are a few steps to being able view the future though:
* Ask a question
* Shake the ball
* Get an answer
* Decide if it's positive or negative

The question can be anything, but the answers are fixed,
and have different levels of positivity or negativity.

Below are the possible answers:

## Very positive
It is certain.
It is decidedly so.
Without a doubt.
Yes - definitely.
You may rely on it.

## Positive
As I see it, yes.
Most likely.
Outlook good.
Yes.
Signs point to yes.

## Negative
Reply hazy, try again.
Ask again later.
Better not tell you now.
Cannot predict now.
Concentrate and ask again.

## Very negative
Don't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.
*/

// This should log "The ball has shaken!"
// and return the answer.
function shakeBall() {
  console.log("The ball has shaken!")

  let result = Math.random();

  let answer = ""
  if (result === 0) {
    answer.concat("It is certain.");
  }
  else if (result === 1) {
    answer.concat("It is decidedly so.");
  }
  else if (result === 2) {
    answer.concat("Without a doubt.");
  } else if (result === 3) {
    answer.concat("Yes - definitely.");
  } else if (result === 4) {
    answer.concat("You may rely on it.");
  } else if (result === 5) {
    answer.concat("As I see it, yes.");
  } else if (result === 6) {
    answer.concat("Most likely.");
  } else if (result === 7) {
    answer.concat("Outlook good.");
  } else if (result === 8) {
    answer.concat("Yes.");
  } else if (result === 9) {
    answer.concat("Signs point to yes.");
  } else if (result === 10) {
    answer.concat("Reply hazy, try again.");
  } else if (result === 11) {
    answer.concat("Ask again later.");
  } else if (result === 12) {
    answer.concat("Better not tell you now.");
  } else if (result === 13) {
    answer.concat("Cannot predict now.");
  } else if (result === 14) {
    answer.concat("Concentrate and ask again.");
  } else if (result === 15) {
    answer.concat("Don't count on it.");
  } else if (result === 16) {
    answer.concat("My reply is no.");
  } else if (result === 17) {
    answer.concat("My sources say no.");
  } else if (result === 18) {
    answer.concat("Outlook not so good.");
  } else if (result === 19) {
    answer.concat("Very doubtful");
  }

  return answer;
}

// This function should say whether the answer it is given is
// - very positive
// - positive
// - negative
// - very negative
// This function should expect to be called with any value which was returned by the shakeBall function.
function checkAnswer() {
  let r = shakeBall()
  if (r <= 4) {
    return "very positive";
  } else if (r >= 5 <= 9) {
    return "positive";
  } else if (r >= 10 <= 14) {
    return "negative";
  } else if (r >= 15 <= 19) {
    return "very negative";
  }
}

/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.
 
To run these tests type `node 3-magic-8-ball.js` into your terminal
*/

const log = console.log;
let logged;
console.log = function () {
  log(...arguments);
  logged = arguments[0];
};

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  logged = undefined;
  console.log(`${test_name}: ${status}`);
}

const validAnswers = [];
function testAll() {
  const answer = shakeBall();
  test(
    `shakeBall logs "The ball has shaken!"`,
    logged === "The ball has shaken!"
  );
  test(`shakeBall returns an string answer`, typeof answer === "string");

  test(
    `checkAnswer("It is decidedly so.") returns "very positive`,
    checkAnswer("It is decidedly so.") === "very positive"
  )

  test(
    `checkAnswer("My reply is no.") returns "very negative`,
    checkAnswer("My reply is no.") === "very negative"
  )

  test(
    `checkAnswer returns the level of positivity"`,
    ["very positive", "positive", "negative", "very negative"].includes(
      checkAnswer(answer)
    )
  );
  const answers = new Set();
  for (let i = 0; i < 10; ++i) {
    answers.add(shakeBall());
  }
  test(
    `shakeBall returns different answers`,
    answers.size > 1,
  );
  test(
    `checkAnswer returns different answers`,
    new Set(Array.from(answers.values()).map(checkAnswer)).size > 1,
  );
}

testAll();
