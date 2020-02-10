# Structure a CSS file by using CSS selectors

## Objectives
- reference elements correctly
- implement inheritance
- override inheritance using !important
- style an element using pseudo-elements and pseudo-classes

## See this explanation of calculating specificity:
https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Specificity

Note: Cascading in Cascading Style Sheets means that the last definition for a certain selector is the one used.

## Reference elements correctly

Try this game: https://flukeout.github.io/

* = all elements. e.g. `#footer > *` would select all elements inside the id=footer

`div + p` select first y after an x
`div ~ p` select all y after x

[href] would select all elements with the href attribute
[href='#'] would select all elements with the href attribute = '#'
[href^='https'] would select all elements with the href attribute value starting https
[href$='.com'] would select all elements with the href attribute value ending .com
[href*='google'] would select all elements with the href attribute value containing "google"

`ul li:first` would select the first li in ul elements
`ul li:last` would select the last li in ul elements

p:first-of-type would select first p element on the page
p:last-of-type would select last p element on the page

plate > apple:only-of-type selects the apples that are the only apples in a plate

div:empty selects div elements with no children

apple:not(.small) selects all apples that don't have the class `small`

## Implementing inheritance

Some properties inherit and some don't. E.g. color will inherit, border or width will not.

Inheritance can be stopped by the use of more specific rules, e.g. if color is set for a ul all li elements will inherit it, unless they have a class (etc.) that over-rides the inherited CSS styles.
