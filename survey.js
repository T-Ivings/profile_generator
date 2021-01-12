const readline = require('readline');
let answers = []
let sentence = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable ", (answer) => {
  console.log(`Thank you, ${answer}!\n`);
  answers.push(answer);

  rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`So you like ${answer}\n`);
    answers.push(answer);

    rl.question(`What do yosu listen to while ${answers[1]}? `, (answer) => {
      console.log(`So you like to listen to ${answer} while ${answers[1]}? Cool!\n`);
      answers.push(answer);
    
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)? `, (answer) => {
        console.log(`I also love ${answer}, great choice\n`);
        answers.push(answer);
      
        rl.question(`What's your favourite thing to eat for ${answer}? `, (answer) => {
          console.log(`Ah.. ${answer}.. And here I thought you had good taste.\n`);
          answers.push(answer);

          rl.question(`Anyways, which sport is your absolute favourite? `, (answer) => {
            console.log(`Okay, back on track! ${answer} is also my favourite sport!\n`);
            answers.push(answer);

            rl.question(`And finally, What is your superpower? In a few words, tell me what you are amazing at! `, (answer) => {
              console.log(`I've never heard of someone being good at ${answer}.. huh.\n`);
              answers.push(answer);
              console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);

              rl.close();

            });
          });
        });
      });
    });
  });
});


