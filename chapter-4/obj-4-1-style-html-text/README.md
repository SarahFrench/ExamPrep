# Styling HTML text with CSS

## Objectives
- apply styles to text appearance
- apply styles to text font
- apply styles to text alignment, spacing and indentation
- apply styles to text hyphenation
- apply styles to text drop shadow


## Apply styles to text appearance & font

Can be done with
- hexcodes
- rgb(0,0,0,) or rgba(0,0,0,0.5)
- names of colours predefined by CSS3, e.g. black, lightgray, darkgray

Properties:
* `color`
* `font-family`
  - Can take multiple values separated by commas, allows fallback if fonts aren't available
  - e.g. `font-family: "My cool font", "My second favourite font", Palatino, serif`
  - Last two are browser
* `@font-face`
  - more details below
* `font-weight`
* `font-style`
* `font-size`

### Using \@font-face

The /@font-face CSS "at-rule" allows you to define a font for use in text styling.
E.g:
```CSS
@font-face {
  font-family: 'My Font';
  src: local('path/to/local/file.woff') format('woff'),
       local('path/to/local/file.ttf') format('truetype'),
       url('/path/to/file.woff') format('woff'),
       url('/path/to/file.ttf') format('truetype')
}

p {
  font-family: 'My Font';
}
```

Here there's a font being imported and called 'My Font'. This can be used to style elements, e.g. the <p> rule below it. In an \@font-face declaration you can declare multiple sources. The browser will try them in order until one succeeds. You can try resources hosted on a user's machine (`local()`) and external resources hosted online (`url()`). Options are separated by a comma. There's the option of including the `format()` function to tell the browser what format the resource is in.



## Apply styles to text alignment, spacing and indentation

`text-align` :
- right
- left
- center
- justify

`word-spacing` :
- px/em etc

`letter-spacing` :
- px/em etc

`text-indent` :
- px/em etc

## Hyphenation

`hyphens` :
- none
- auto
- manual

If manual hyphens are used then 'soft hyphen' marks `&ampshy;` are put in text to indicate where text should break if it needs to

## Text shadow

`text-shadow` :
- < left px > < top px > < color >

Basically makes a copy of the text that sits beneath it, can be positioned relative to the texts original position;
