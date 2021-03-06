# Styling HTML boxes with CSS

## Objectives
- apply styles to alter appearance attributes
- apply styles to alter graphic effects
- apply styles to establish and change an element's position


## Apply styles to alter appearance attributes

`height`
`width`
- cm, px, %, in, em

### Borders
`border-style`
`border-width`
`border-color`
`border-radius`


`border : <style> <width> <color>;` (or other order)

`border-top-color`
`border-right-width`
`border-top-left-radius` //border radii can only be specified by top/bottom then left/right

NOTE: `border-spacing` in book but doesn't seem to work in browser. Seems redundant to using margins.

### Padding & margins

`padding-top`, `...-bottom` etc
`padding` :
 - 1 value = same on top/bottom/left/right
 - 2 values = `<top/bottom> <left-right>`
 - 4 values = `<top> <right> <bottom> <left>`

 Margin works the same way


## Applying styles to alter graphic effects

### Opacity
`opacity`
0 to 1.0, 0 is 100% transparent, 1 is 100% visible

### Background image

`background-image : url('path/of/image.png');`

`background-size` : set how the image is used; dimensions
- `auto` : image shows as is and gets cropped by element dimensions or the image will repeat if dimension(s) is larger than the image size.
- `cover` : height of photo set to height of element; clipped round sides
- `contain` : width of photo is set to width of element; image repeated to cover rest of background.
- `<width> <height, optional>` : you can set the bg image to specific dimensions  

`background-repeat`: set how the image is used; repeating if dimensions larger than image
- `repeat` : it repeats in all directions
- `repeat-x` : will only repeat on x axis
- `repeat-y` : will only repeat on y axis
- `no-repeat` : it doesn't repeat
- `round` : it'll repeat but will only show whole versions of the image. To achieve this the img dimensions are distorted.

`background-position` : position a background image. If it's a non-repeating image then that image is placed in the position specified. If image repeats then one of the images is put there and the repeats emanate from that spot.
- `center`, `top`, `bottom`, `left`, `right`. These refer to positions within x/y axes.
- better control if you use axis-specific CSS properties `background-position-x` and `background-position-y`


NOTE: `background-clip` in book but doesn't seem to work in browser. Set to `border-box`, `padding-box`, `content-box`

### Background gradient

`background` can also be set as a colour gradient, using: `linear-gradient()`
- e.g. `linear-gradient(black, grey);` `radial-gradient(red, yellow);`
- Option to set the angle of the linear gradient but an optional first argument, e.g: `linear-gradient(45deg, red, yellow)`, or `linear-gradient( to-left, red, yellow)`, `linear-gradient( to-top-left, red, yellow)`, `linear-gradient( to-bottom-left, red, yellow)`

For the colour arguments you can also include a stop value - a position along the gradient axis where the colour stops

### Box shadow
Box shadow takes a LOT of parameters. They're all distance (in px etc) except for the last one, which is colour.

`box-shadow : <offset-x> <offset-y> \<blur radius (all sides)> \<expand radius (all sides)> <inset?> <colour of shadow>;`

> NOTE: the inset keyword or the colour info can be put either side of the distance parameters and it still works, but you cannot put them inside the sequence of distance parameters; it'll break the way the CSS is read and no shadow will be rendered.

The CSS is interpreted by reading the (uninterrupted) sequence of measurement parameters from left to right.

- When all params are are their default nothing is visible.
- To see something, set x/y offsets or the blur. All other values default
- For the 4 possible measurement params you can enter fewer than 4 values but they'll be read from left to right:
  -  `box-shadow: 10px 10px;` is set 10px down and to the right. No blur, size matches div.
- You can 'skip' a measurement param by entering `0` in place of missing ones
  - `box-shadow: 0px 0px 10px 10px;` is blurred out by 10px and has an extra 10px dimensions around the div. Shadow is centred on the div.
- By default the shadow is "outset", i.e. behind the dix like it's a floating square. If you add the inset keyword then the shadow appears inside the div.
  - depending on the offset of the

Shadows are usually centred on the div they're under.

Colour can be hex code, rgb, string

### Clipping

- Image tags can have a CSS property called `clip` applied to them
- Changes what portion of the image is showing
- Rectangular, use rect() function
- requires that the element have `absolute` or `fixed` positioning

`rect(<top>, <right>, <bottom>, <left>)`

e.g.
In a 100x100 image if you use clip(10px, 20px, 20px, 10px);
Then you'll see a 10px x 10px square, where the upper left corner is at position 10,10 in the original image's dimensions.

1) The `<top>` value, 10px, means that the top of the resulting rectangle will be 10px below the top of the image.
2) The `<right>` value is the number of pixels between the left hand side of the image and the right hand side of the clipping rectangle
3) The `<bottom>` value is the number of pixels between the image's top edge and the bottom edge of the clipping rectangle
4) `<left>` is the number of pixels between the left edge of the image and left edge of the clipping rectangle.

As a result, `<bottom>` - `<top>` = height of clipped rectangle
As a result, `<right>` - `<left>` = width of clipped rectangle

If the entered values are screwy you might end up 'over-clipping' and be left with nothing; what do you see if the righthand edge of the clipped view is further left than the lefthand edge?

Don't think coordinates, think CSS-y relative to the top left corner positioning.

The element takes up all its original space, but doesn't show anything outside the clipping rectangle

### Positioning

Done relative to a coordinate. E.g. top left of screen, top left of parent div, top left of viewport etc.

Uses top and left properties to define the offsets:
```
  img {
    position: absolute;
    left: 50px;
    top: 50px;
  }
  //all img will have top left corner at 50px from the left and 50px down from top
```

- `static` : the DEFAULT. Defined as distance from top left of the document and any previous elements
- `absolute`: defined as distance from top left of the first parent with relative/absolute/fixed (anything but static?) positioning. If one of these isn't found when travelling up through the DOM, then it'll default to the `<html>` parent element, and positioning will be done relative to the document.
- `fixed` : defined as distance from top left of the _viewport_
- `relative` : move elements relative to where they _would_ be in a normal static flow. Relative TO ITSELF.
- `sticky` : 'Sticks' to the edges of the screen when scrolled past. If in a parent div, it'll travel until it reaches the end of the parent's space

**z-index** determines order when elements are made to overlap.
Overlapping elements will be positioned from back to front in the same order they appear in the HTML document (from top to bottom). Z-indices with higher values = show further towards the front.

#### Float

Elements can have float set as a CSS attribute. They 'travel' to the furthest right or left position available within their containing div

If two elements are side by side and float the same way, e.g. left, then the first element in the HTML document will 'get there first' and be the left-most element of the two.

Floats shouldn't really be used for layouts (use CSS Grid or Flexbox), instead they're good for **positioning images within chunks of text**
