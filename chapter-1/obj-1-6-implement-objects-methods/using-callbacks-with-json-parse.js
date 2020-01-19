let jsonString = '[{"name": "Sarah", "age": 27, "job":"junior developer"}]';

let announcer = function(key, value){
  switch(key){
    case 'name':
      console.log(`${value}? No, I'm sure you're called "Idiot"`);
      return value = 'Idiot';
      break;
    case 'age':
      console.log(`Oh, you're ${value} years old? No-one cares!`);
      return value = 'No one cares';
      break;
    case 'job':
      console.log(`Your job can be to shut up.`);
      return value = 'Shutting up';
      break;
    default:
      //you need this to get the edited JSON object returned at the end of the parse function executing
      //you could return anything else and it'll be the value returned by the JSON.parse function using this callback.
      return value;
      break;
  }
};

let person1 = JSON.parse(jsonString);
console.log(person1);

let person2 = JSON.parse(jsonString, announcer);
console.log(person2);
