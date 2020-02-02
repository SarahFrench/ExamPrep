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

### Padding & margins

`padding-top`, `...-bottom` etc
`padding` :
 - 1 value = same on top/bottom/left/right
 - 2 values = <top/bottom> <left-right>
 - 4 values = <top> <right> <bottom> <left>

 Margin works the same way


## Applying styles to alter graphic effects

`opacity`
0 to 1.0, 0 is 100% transparent, 1 is 100% visible


`background-image : url('path/of/image.png');`

`background-size` : set how the image is used; dimensions
- `auto` : image shows as is and gets cropped by element dimensions or the image will repeat if dimension(s) is larger than the image size.
- `cover` : height of photo set to height of element; clipped round sides
- `contain` : width of photo is set to width of element; image repeated to cover rest of background.

`background-repeat`: set how the image is used; repeating if dimensions larger than image
- `repeat` : it repeats in all directions
- `repeat-x` : will only repeat on x axis
- `repeat-y` : will only repeat on y axis
- `no-repeat` : it doesn't repeat
- `round` : it'll repeat but will only show whole versions of the image. To achieve this the img dimensions are distorted.
