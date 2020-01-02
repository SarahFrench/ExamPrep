# Raising and handling events

Browsers process actions by a user and these can be used as triggers for code => interactive experiences.
"DOM elements natively provide events"
Events are "handled"
Event handlers are JavaScript functions that are triggered by events
"Events are fired all the time in the browser"; whether or not a handler is assigned is what determines if the event has any effects

## Objectives:
- use events, make handlers with anonymous functions, declare and handle bubbled Events
- handle DOM events OnBlur OnFocus and OnClick
- Create custom events

## Events

### Using Events

Event "listeners" wait for events to fire and then trigger a set of predefined instructions.

When events fire an event object is available:
- can be received as an argument for event handler functions
- provides metadata about the event; tells you what key was pressed for a keyup event, or where the mouse clicked on a click event.

Event handling can be set up in different ways:

#### Declarative
Written directly in HTML attributes, e.g:
`<body onload="functionToUse();">`

#### Assigned via JavaScript

##### ...as attributes of DOM element objects

e.g.
```
<script>
  function makeBlue(){
    var body = document.getElementsByTagName('body')[0];
    body.bgColor = "blue";
  }

  document.body.onclick = makeBlue;
</script>
```

You need to pass in the function itself and not invoked it. If you want to pass in a parameter then wrap the function being invoked and passed the param within an anonymous function.

```
  /*
  * this will invoke console.log when the page loads and set the onclick equal to returned value (if any)
  * there's no onclick event handler in this case
  */
  document.body.onclick = console.log("hello world");

  /*
  * this will create an onclick event handler which is only run when the event occurs
  */
  document.body.onclick = function(){console.log("hello world")};
```
##### ...using DOM element object methods addEventListener and removeEventListener

<HTML element>.addEventListener(<event name>, <handler function>, <cascade rule, optional>);

The last argument is a boolean 'useCapture'. If true, then the event will trigger other listeners down the DOM tree, and not bubble upwards as usual


<HTML element>.removeEventListener(<event name>, <handler function>, <cascade rule, optional>);

You can only remove event listeners made using named functions; if you make an event listener with an anonymous functions and try to remove it by passing in an identical anonymous function it will not work as it's not the exact *same* function object.


```
var el1 = document.getElementById('element1');

function mouse1(){
  console.log("Mouse over event listener");
}

function click1(event){
  console.log("Click event listener");
  console.log("I remove the mouseover event listener");
  event.target.removeEventListener('mouseover', mouse1);
  event.target.innerText = "I've got 2 event listeners: click and dblclick"
}

el1.addEventListener('mouseover', mouse1);
el1.addEventListener('click', click1);
el1.addEventListener('dblclick', function(){
  console.log("Double click event listener cannot be removed because I'm an anonymous function!");
});

```
