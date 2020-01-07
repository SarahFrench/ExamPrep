# Implementing program flow

To achieve this use:
- Logical operators
- If statements
- switch statements
- arrays

### Switch

```
let x = "red";

switch(x){
  case "red":
    console.log("X is red!");
    break;
  case "blue":
    console.log("X is blue!");
    break;
  default:
    console.log("X is neither red nor blue");
    break;
}
```

- only the first case evaluated as true will be executed... but this relies on break keywords
  - break keywords are required; omitting = unexpected behaviour.
  - e.g. if you didn't include breaks and there's a default case then any case evaluated as true will be executed and ALSO the default block will run.
  - break keyword is also good to use as it prevents every case being evaluated after you've already found one to be true
- default = a fallback option


## Arrays
