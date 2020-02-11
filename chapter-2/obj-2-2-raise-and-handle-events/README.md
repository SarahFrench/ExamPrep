# Chapter 2 - Part 2a: Raising and handling events

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

In event listeners you can use the `this` keyword to refer to the element emitting the event: `this` === event.target


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


#### Event propagation

Bubble goes up from child to parent
Capture goes down from parent to child

The third argument in add/removeEventListener methods is a boolean to control how it behaves. True = use capture, false = bubble. Bubble is used by default.

in an event handler you can include `event.stopPropagation();` to block any propagation 'passing through' that element's event handler. For example in my demo (chapter-2/obj-2-2/bubbling-example.html) if you add that line to the middle div event handler it'll stop events bubbling out from the inner div or events cascading down from the outer div. In those cases the propagation will reach the middle div, that event handler will be executed, and then no further events will be fired.

```event.preventDefault();```
```event.stopPropagation();```


## Event Types

### Change event

`change` events happen when an elements value changes, e.g. checkboxes or input fields like text box or a slider

### Focus events
An element is in `focus` when it is being engaged with. E.g. clicking on an input field and being able to type makes it in focus. Clicking out of it again puts it out of focus (`blur`). There are a events that mark the transition between the states:

Occur in this order if you click in a text input field and out again:
- `focus` event
- `focusin` event (but book says this should occur before an element receives focus)
- `blur` event
- `focusout` event

### Keyboard events

- `keydown` - key pushed down
- `keyup` - key released up
- `keypress` - key is fully pressed

The event data includes:
- `keyCode` - number for the key (e.g. A-Z = 65-90)
- `key` - either the value or the name of the key, e.g "a" vs "Backspace"
- `altKey` - was alt pressed when the event was fired - is true for pressing Shift or holding shift and pressing other keys
- `shiftKey` ditto above
- `ctrlKey` ditto above

> Sometimes keyboard events don't fire (by design) when you'd expect them to. For example in a text input field left and right arrows register, but not up and down as they don't do anything in that context. Also for arrow buttons, keydown fires but not other events.

### Mouse events:
- click
- dblclick - each constituent click fires an event too
- mousedown
- mouseup
- mouseenter & mouseover
  - see: http://jsfiddle.net/ZCWvJ/7/ for difference
  - see also: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event#Usage_notes
  - mouseenter doesnt bubble
- mouseleave
- mousemove

### Drag events:

##### Includes data transfer **

Draggable element:
- drag : CONTINUOUSLY raised while an element is dragged
- dragstart : Raised by dragged element when drag begins
- dragend : raised by the element being dragged when mouse is released

Target element:
- dragenter : raised by *target element* when something dragged enters its space
- dragleave : raised by *target element* when something dragged leaves its space
- dragover : raised CONTINUOUSLY by *target element* when something's being dragged over top
- drop : raised by *target element* when dragged element is released

Elements need to be marked as "draggable":
```html
<p draggable="true">I'm draggable!</p>
```

Target elements they're dropped on don't need to be configured in html attributes, but will need dragover and drop event handlers.

Drag events include a `DataTransfer` object which includes the drag's data and data you can add and retrieve later. To do this, you use inbuild functions for that interface.

When starting to drag an element you can save data about what's being dragged (dragstart events are fired by the draggable element)...

```js
//save data about the item being dragged; this = draggable element
function dragstartHandler(){
  event.dataTransfer.setItem('id-of-dragged-element', this.id);
}

```
...and retrieve it in the separate event of the element being dropped onto a target (drop events are fired by the target)

```js
function dragoverHandler(){
  event.preventDefault();
}

function dragenterHandler(){
  event.preventDefault();
}

//to let drop events fire you need to suppress the default dragenter and dragover events like this
//same achieved by event.returnValue = false;

function dropHandler(){
  let id = event.dataTransfer.getItem('id-of-dragged-element');
  //can access data from the drag events inside the drop events
  let draggedElement = document.getElementById(id);
  this.appendChild(draggedElement);
}

```

**ONLY DRAGSTART AND DROP CAN ACCESS dataTransfer**

#### Recap:
- To be able to drop a draggable element onto a target you need to prevent the default actions for dragenter and dragover events on that target
  - This can be achieved by making handlers for those events that include `event.preventDefault();` or `event.returnValue = false;`
  - Without doing this the drop event won't fire!
- You can transfer data between the dragstart and drop events using the `DataTransfer` interface (`event.dataTransfer`)
- bear in mind which events are fired by the draggable element vs the target, if you use `this`!
