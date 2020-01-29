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

`color`
`font-family`
```
@font-face {
  font-family: 'name of font';
  src: url('/path/to/file.woff');
}
```
`font-weight`
`font-style`
`font-size`

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
