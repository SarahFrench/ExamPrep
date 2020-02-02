# Styling HTML text with CSS

## Objectives
- apply styles to alter appearance attributes
- apply styles to alter graphic effects
- apply styles to establish and change an element's position


## Apply styles to alter appearance attributes

`height`
`width`
- cm, px, %

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
 - 2 values = <top/bottom> <left-right>
 - 4 values = <top> <right> <bottom> <left>

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
