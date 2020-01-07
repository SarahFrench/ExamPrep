# Chapter 2 - Part 2b: Custom Events

Aka 'synthetic events'

You can create custom events using the Event and CustomEvent object constructors

NOTE: the CustomEvent constructor is not supported in internet explorer; use a [polyfill](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill)

CustomEvent differs from Event because you can pass custom data about the event in the detail property (also unsupported by IE).

e.g.

```
myCustomEvent = new CustomEvent(
  'anAction',
  {
    detail: {
      description: "a description of the event",
      timeofevent: new Date(),
      eventcode: 2
    },
    bubbles: true,
    cancelable: true
  }
)

myEvent = new Event(
  'anotherAction',
  {
    bubbles: true,
    cancelable: true
  }
)

let element = document.getElementById('id');
element.addEventListener('anAction', <callback>);
element.addEventListener('anotherAction', <callback>);

//somewhere else in the code...
element.dispatchEvent('anAction');
element.dispatchEvent('anotherAction');
```

As these events are custom you'll need to write some logic controlling when to dispatch the Event. For an example see (chapter-2/obj-2-2/custom-events.html) where Events are fired on every third or fifth mouseover event. I think custom events should be like a bottleneck where native events fire, something keeps track, and if a certain set of circumstances are met then you dispatch the event.
