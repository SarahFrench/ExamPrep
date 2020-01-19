# Chapter 2 - Part 5: Creating a web worker process

## Objectives
- Create a web worker with the web worker API
- Use a web worker
- Understand their limitations
- Configure timeouts and intervals

## Getting started

See the MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API

Also see this guide: https://www.html5rocks.com/en/tutorials/workers/basics/

NOTE: Chrome doesn't let you use web workers with a local file

Web Workers are used to allow work to be run in the background on their own thread, instead of the main execution thread of your web application. Due to this, they're usually used for laborious processes.

Because it's a separate thread, in a worker you cannot directly access:
- the DOM
- `window` Object
- `document` Object

The main thread and the worker(s) communicate by sending each other messages:
- postMessage() method
- onmessage event handler

Web Workers are dedicated workers - they're utilised by a single script and only accessible to that script. There are other types of workers too, including Service Workers (not covered), which can be accessed by multiple scripts.

## How to use

Workers are made using a constructor.
```js
var myWorker = new Worker('worker.js');
```

They run a named javascript file. This runs in the worker thread.

Workers and the script declaring them communicate via sending messages between them both. You send messages (bidirectionally between script and worker) with the `postMessage` method and receive messages by having an onmessage event listener present in both places.

Main script:
```js
var myWorker = new Worker('worker.js');
myWorker.postMessage("wassup worker");
myWorker.onmessage = function(event){
  var message = event.data;
  console.log("Message received from the worker: ", message);
}

```

worker.js:
```js
onmessage = function(data){
  console.log("message received:", data);
  postMessage("Thanks for your message!");
}
```

> NOTE: the postMessage method and onmessage event listener need to be accessed via the web worker object in the main script, but in the web worker script they're in the global scope

The worker can be written differently; either using `this` or `self` or neither. This because in workers `this` & `self` reference the global scope.

```js
//worker.js

addEventListener('message', function(){
  postMessage("addEventListener can be used instead of `onmessage`");
})

self.addEventListener('message', function(){
  self.postMessage("functions can be invoked using the self keyword");
})

this.addEventListener('message', function(){
  this.postMessage("functions can ALSO be invoked using the this keyword");
})
```

To stop a web worker you can stop it from the inside or the outside:
```js
//inside
self.close();

//outside
worker.terminate();
```

## Limitations of web workers

### Parameters passed in

Have to be native data types or JSON objects/XML. Anything sent to a worker via `postMessage` is serialised and de-serialised (turned into a string and back again). You can't send functions, and if you try you'll get this error: `Failed to execute 'postMessage' on 'Worker': function(){console.log("I can't be serialised")} could not be cloned.`

### Number of workers

Making workers is intensive and if you have too many at once, or forget to
terminate finished ones, then it can affect performance. If you definitely need lots, have a finite pool that are called on when needed.

### DOM access

Workers have their own, separate global context versus the main thread, so they cannot access the DOM, the `window` Object, nor `document` Object.

### Subworkers

Workers can make their own workers just like the main thread does, but this can open up a big can of worms regarding keeping track of the number of workers in operation at one time.

### Timeouts and Intervals

You can make a web worker execute their code after a delay or at set intervals using `setTimeout` or `setInterval`. You create the worker and use the `postMessage` method inside the callback of these functions.

```js
let worker = new Worker('worker.js');
setInterval(function(){
  worker.postMessage("you better work");
}, 3000); //does stuff every 3 seconds
```
