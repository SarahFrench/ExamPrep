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

`p:first-of-type` would select first p element
`p:last-of-type` would select last p element

`plate > apple:only-of-type` selects the apples that are the only apples in a plate

`div:empty` selects div elements with no children

`apple:not(.small)` selects all apples that don't have the class `small`

## The 'Cascading' in cascading style sheets

If two rules conflict then the last one declared in the CSS file is the one used:

```css
h1 {
  color: red;
}
h1 {
  color: blue;
}
```

Outcome: h1 elements will be blue

BUT... that's only true if the rules have the same specificity. A rule that's more specific will not be overwritten by a rule that comes after it in a CSS file

```css
body h1 {
  color: red;
}
h1 {
  color: blue;
}
```

Outcome: h1 elements (in the body, though where else would they be?) will be red

## Implementing inheritance

Some properties inherit and some don't. E.g. color will inherit, border or width will not.

```css
ul {
  color: purple; //inherited by li
  height: 400px; //not inherited by li
}
```

Inheritance can be stopped by the use of more specific rules, e.g. if color is set for a ul all li elements will inherit it, unless some li elements have a class, id, inline style on them that over-rides the inherited CSS styles.

There could be a situation where multiple rules may be cascading down and have the potential to affect a given element. How is one rule selected as the winner? This is done by calculating its specificity score:

[Specificity](https://css-tricks.com/specifics-on-css-specificity/)
```
style attribute
|     ID
|     |    (pseudo)class/attr
\/    \/   \/   \/elements
[ ], [ ], [ ], [ ]
```
e.g. `ul#nav li.active a`
3 elements
1 ID
1 class

Score: 0,1,1,3

vs `ul#nav li a` would be Score: 0,1,0,3 and would be over-ruled by the rule above.

# Override inheritance using !important

!important at the end of a CSS rule is like adding a fifth column on the far left of the above scores.

!important flags mean CSS rules always win. Only way it loses is if another competitor rule is declared later in the document and the CSS rule would have greater specificity when compared without !important flags.

# Multiple sources of styles

![Image](cascading-order-of-precedence.png)
