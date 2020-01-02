//FOR LOOP - arrays
console.log(`
>>For loops:`);
for(let i=0; i < 10; i++){
  /*
  * Counter
  * Expression - loop continues while true
  * Increment
  */
  console.log("For loop #" + i);
}

//FOR...IN LOOP - object properties
console.log(`
>>For..in loops:`);
let object = {
  name: "Sarah",
  employer: "Mumsnet",
  team: "Tech"
};

for(let property in object){
  console.log(property);
}

//WHILE LOOP
console.log(`
>>While loops:`);
let countdown = 3;

while(countdown > 0){
  console.log("..." + countdown + "!");
  countdown--
}

while(countdown > 0){
  console.log("I'll never be printed; countdown isn't >0 at this point in the script")
}

//DO...WHILE LOOPS
console.log(`
>>Do..while loops:`);
do{
  console.log("I'll be printed once; countdown isn't >0 but do..while loops only check the expression after the blocks already run once")
} while (countdown > 0);


//BREAK
console.log(`
>>Breaking out of loops:`);

let breakingCountdown = 10;
while(breakingCountdown > 0){
  if(breakingCountdown === 3){
    console.log("\nI'm using an if block (breakingCountdown === 3) to trigger the break keyword.");
    console.log("\tThis is only printed once; break affects the whole loop not just a single iteration.");
    break;
  }
  console.log("breakingCountdown is > 0; its value is " + breakingCountdown);
  breakingCountdown--;
}
