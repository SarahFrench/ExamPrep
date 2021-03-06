# Chapter 2 - Part 4: Implementing callbacks

## Objectives:
- implement bidirectional communication with the WebSocket API
- make webpages dynamic with jQuery and AJAX
- wire up an event with jQuery
- implement a callback with an anonymous function
- use the *this* pointer

Callbacks are used when you're "working with multiple threads" or are working asynchronously.

Basically you pass a function into another function to be used during or after another process is completed. E.g. in setTimeout the first argument is a callback to be executed by the setTimeout function after the minimum delay duration (second argument) has elapsed.

Event listeners are an example of using callbacks; you add an event listener by saying what event should be listened for and what function should be invoked when that happens.

## WebSocket API

Run the `server.js` file in the project root and then use `chapter-2/obj-2-4-callbacks-and-WebSocket-api/websocket-example-from-book.html` to test out a WebSocket example

This is a good resource : https://javascript.info/websocket

Supports bidirectional communication between web applications and the server.
Is a protocol that allows a persistent TCP connection

> Protocol - a set of rules that control how two systems exchange data
>
> TCP (Transmission Control Protocol)
> TCP allows two hosts connect and exchange data streams. Delivery of data and packets is guaranteed to arrive in the same order they're sent.
> Its role is to guarantee reliable, error-free delivery of data
> There's a feature called congestion control; it sends small amounts of data and increases this to the bandwidth supported by the system the connections being made across.
> Playlist on networking, last video explains TCP: https://www.youtube.com/playlist?list=PLowKtXNTBypH19whXTVoG3oKSuOcw_XeW

TCP is more lightweight than HTTP and is fully bidirectional. It's good for situations where you need instantaneous changes, such as chat apps or online games with multiple players.

Data transmitted can be text-based or binary (binary would allow stuff like video).

You make a connection to a URL and it's preceded by ws:// or wss:// due to using a different protocol from https(!). Using wss is analogous to using https; it's encrypted by TLS and is secure

### WebSocket objects

```js
  let url = 'ws://localhost:8081/';
  let protocols = ['soap', 'xmpp']; //optional argument
  wsConnection = new WebSocket(url, subProtocols);
```

The WebSocket object has a bunch of methods and properties. e.g. status of a connection can be found by the readyState property. Takes on numerical values that can be compared to constants like:

- WebSocket.CONNECTING = 0
- WebSocket.OPEN = 1
- WebSocket.CLOSING = 2
- WebSocket.CLOSED = 3

There are events fired by the WebSocket that can be handled like any other browser events

- open
- message
- close
- error

You can initiate events from your end of the socket using methods like:

- Send data: `myWebSocket.send("string data");`
- Close the connection: `myWebSocket.close();``

## jQuery and AJAX

Plain javascript vs. additional libraries like jQuery.
jQuery is specific to using the DOM.

AJAX = "Asynchronous JavaScript And XML" (but also can use JSON)

HTTP protocol requests

AJAX is a combo of different technologies used together to allow:
- sending requests to the server without reloading the page
- receiving and handling response data

jQuery isn't required for AJAX requests but it makes them easier.

Example:

```js
  $.ajax({
    url: '<url>',
    cache: false,
    dataType 'json',
    success: function(data){
      //callback for when data is received
      $(data).find("search-word").each(function(){
        //callback inside each function
      }))
    },
    error: function(request, code, errorMessage){
      //receives the HTTP request itself,
      //  status code e.g. 404
      //  error message associated with the error
    }
  })
```

'GET' is the default, but you can add a method property in the config object and set it to "POST", "DELETE", etc...

jQuery is cross-browser friendly.

## Wire up an event with jQuery

```JavaScript
  $('#button').click(function(){
    var element = $('<p></p>').text("You clicked the button!").addClass('hoverOverMe');
    $(element).dblclick(function(){
      console.log("dblclick...");
    });
    $(element).appendTo($('body'));
  });
```

This example shows adding click and dblclick event listeners to elements using jQuery. You can add them to elements selected from the DOM or new ones you've made and yet to add to the DOM.


## Callbacks with anonymous functions

Static, named function:

```
function imNotAnonymous(){
  //named function
}
```

anonymous function:

```
function(){
  //do stuff
}
```

In JS functions are objects, so can be assigned to variables or passed into functions as parameters.

Callbacks are functions provided to other functions to be invoked later. Callbacks can be supplied as anonymous functions or using the names of named functions. In other languages you may achieve this by providing a pointer to the specific function.

#### Using the `this` pointer

`this` is a keyword present in JS, but in jQuery it's a bit different.

In jQuery `this` refers to the current object or collection that's been selected


```javascript
<script>
  var i = 0;
  $('button#clickMe').click(function(){
    $(this).attr('color', 'red');
    //this refers to the button with id clickMe
    $('div').each(function(){
      console.log("This loop I'm editing an element with ID = " + this.id)
      //this refers to the element for the current iteration over the selected collection
      if(i%2){
        $(this).css('background-color', 'red');
        $(this).text(this.id);
        //if using jQuery functions you need to use $(this) to edit the DOM, but don't need to use the selector to access info (like in the `text` params)
      } else {
        $(this).css('background-color', 'green');
        $(this).text(this.id);
      }
      i++;
    })
  });
</script>
```
