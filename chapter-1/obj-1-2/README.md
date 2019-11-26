# Notes

## Objectivess:

- Add or mod HTML elements
- implement media controls
- implement graphics with HTML5 canvas and SVG

### DOM

Document object model = representation of HTML. The browser's interpretation of the HTML.

The DOM application program interface (API) exposes objects that allow you to interact with the DOM; JS can be used to manipulate the DOM. It's made of Nodes, which are arranged in a tree. Parent nodes contain child nodes.

### Selecting nodes from the DOM
JS to select elements can select them by ID, class or tag name:

```
document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByTagName('tag')
document.querySelector('css selector')
document.querySelectorAll('css selector')
```

ID and querySelector return only one elements (for the latter, the first that meets the query requirements). By class and tag name, and querySelectorAll, returns a group of elements.

When you select a group of elements you get a HTMLCollection, which behaves differently to a normal array. If you select elements by classname and then loop through them to remove the class, the modified elements will disappear from that list. This means if you use a for loop based on the length of the list it won't work as expected, because the list will change size as you modify its members.

If you select a parent node you can use the above functions to search for nodes within that nodes descendents (sub tree in the DOM).
```
parent.getElementsByClassName('child-node');
```

You can save references to node by assigning them to variables. e.g.
```
let firstOfClass = document.getElementsByClassName('class').item(0);
```

This can then be used to add child node to the element, or specify to remove that element from the parent:

```
let parent = document.getElementById("parent");
let child = doucment.createElement("div");
child.innerText = "I'm a child";

//add child
parent.appendChild(child);

//remove child
parent.removeChild(child);
```

<small>Note: createElement function only works on the document object. Nodes exist in the context of the whole DOM, but are _placed_ in relation to other Nodes </small>


appendChild returns a reference to the appended element, so you don't need to dive into the DOM to edit it further.

### Useful functions for DOM manipulation:

- **createElement**
  - only exists on the document object
  - creates a new element in the DOM, but as it's not placed in the tree it is not visible
- **appendChild**
  - Adds a child node to a specified parent
- **childNodes**
  - returns a collection of all child Nodes
- **firstChild, lastChild**
  - returns a reference to the first or last child of the given node
- **hasChildNodes**
  - returns a boolean
- **removeChild**
  - callable by the document object and parent nodes
  - needs to receive a reference to the child node as an argument
  - returns a reference to the removed node; allows it to be stored and then returned to the DOM tree later.
-  **removeNode**
  - called by the node to be removed. Seems unsupported in Chrome. ES5 introduced `.remove()` to get rid of Nodes

Note: Removing nodes is advised because otherwise if Nodes are removed from the DOM in unconventional ways (e.g. innerHTML = '') then the Node still exists in the DOM and uses up memory.


## Media controls via JavaScript

### Video

#### Video tag and attributes

`<video src="path-to-file.mp4"></video>`

Attributes:
- `src`
  - resource to use; path to file
  - you can have multiple src attributes with fallback values- see below
- `autoplay`
  - if present video plays once loaded. Otherwise won't start until JS or controls used.
- `controls`
  - specify if browser should show the built in video controls
  - without this, or custom controls, a user has no way to play the media
- `height/width`
  - without specifying this the video will appear as its native size
- `loop`
  - attr tells video to repeat when it reaches the end
- `poster`
  - Specifies an image to show in the frame before the video is played. If omitted then first frame shows.
  - Path to the image file.

#### Things to keep in mind

Not all browsers support the same video file formats
To prepare for this, you can include multiple `<source>` tags inside the video tags, instead of a single src attribute in the opening video tag itself:

```
<video width="620" controls
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg" >
  <source
    src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    type="video/mp4">
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
    type="video/ogg">
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.avi"
    type="video/avi">
  Your browser doesn't support HTML5 video tag.
</video>
```

#### JS to control video elements

- play()
- pause()
- volume
  - take a value between 0 and 1
- currentTime
  - position in video as seconds. If you set this value differently playback will skip to the new currentTime

### Audio

Audio behaves very similarly expect there's nothing visual to show. It'll be totally invisible if you don't include the controls attribute.

It has .play(), .pause(), volume, and currentTime.


### HTML Canvas

This uses a canvas element:
```
<canvas width="600" height="400"></canvas>
```
This is just blank white by default

You need to set the context of the canvas; what mode of drawing images is being used?

**2d** : `canvas.getContext('2d')` - the [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) interface

**3d** : canvas.getContext('webgl')

Functions on the context are used to draw (think about how what you're drawing depends on the mode chosen above.)

#### Functions:

- `beginPath(), closePath()`
  - start drawing a path
- `moveTo(x,y)`
  - define starting point of a new path
- `lineTo(x,y)`
  - draws a line to that point, within the current path being drawn
- stroke()
  - draws the line of a path previously defined with lineTo etc, applying the styles in the context instance
- `fillStyle()`, `strokeStyle()`
  - set the colour for fill or stroke actions

For more see [all the 2d context functions here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D);
