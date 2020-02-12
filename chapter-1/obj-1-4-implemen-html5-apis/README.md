# Web APIs

- LocalStorage
- SessionStorage
- Geolocation
- ~~AppCache~~ - is deprecated


## Local Storage

Remains in the browser and info is available after multiple sessions.

Access is scoped by the root domain; cannot access data saved by other websites.

Stores key:value pairs, values are only strings; use `JSON.stringify`.

- `setItem(<key>, <value>)`
- `getItem(<key>)`
- `removeItem(<key>)`

## Session Storage

Same functions as the above but the storage only lasts for a session. Survives refreshes/resets of a page but a new session is made when you open a new tab. If you close a tab and then revisit the page then it's also a new session.

## Geolocation

`window.navigator.geolocation` returns a Geolocation object, the interface/API. You can store a reference to it in a variable.

```
let geolocator = window.navigator.geolocation
let positionOptions = {
  enableHighAccuracy: true,
  timeout: 5000
} //example PositionOptions object


geolocator.getCurrentPosition(<callback for success>, <callback for Errors>, positionOptions);
=> async, returns a GeolocationPosition object, containing a GeolocationCoordinates object

let watcher = geolocator.watchPosition(<callback for success>, <callback for Errors>, positionOptions);
=> keeps polling for location info, keeps executing the callbacks.
=> watcher has a numerical value that references which watcher it is (of possible multiple ones).

//stopping a Watcher

geolocator.clearWatch(watcher);

```


## AppCache

https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache

This is deprecated so don't want to learn it in depth. New method is using ServiceWorkers.

In the html tag you set a manifest attribute that references an appcache file. This has to be included on every page that will have caching.

```
<html manifest="example.appcache">
  ...
</html>
```

example file:

```
CACHE MANIFEST
# v1 2011-08-14
# This is another comment
index.html
cache.html
style.css
image1.png

# Use from network if available
NETWORK:
network.html

# Fallback content
FALLBACK:
. fallback.html

```

**CACHE** manifest lists the files that should have a cached version saved to someone's machine. This includes html, css, Images

**NETWORK** specifies what files must always be retrieved from the network and not cached

**FALLBACK** specifies a file to show if there isn't relevant cached content for what the user's doing and a connection to the server cant be established.
