## Chapter 2 - Part 4: Implementing callbacks

### Objectives:
- implement bidirectional communication with the WebSocket API
- make webpages dynamic with jQuery and AJAX
- wire up an event with jQuery
- implement a callback with an anonymous function
- use the *this* pointer

Callbacks are used when you're "working with multiple threads" or are working asynchronously.

Basically you pass a function into another function to be used during or after another process is completed. E.g. in setTimeout the first argument is a callback to be executed by the setTimeout function after the minimum delay duration (second argument) has elapsed.

Event listeners are an example of using callbacks; you add an event listener by saying what event should be listened for and what function should be invoked when that happens.

### WebSocket API

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
