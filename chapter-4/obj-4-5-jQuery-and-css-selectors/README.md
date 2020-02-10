# Find elements using CSS selectors and jQuery

## Objectives
- define element, style, and attribute selectors
- choose the correct selector to reference an element
- find elements by using pseudo-elements and pseudo-classes

# Define element, style, and attribute selectors

You can select by tag name eg div:

```css
div {
  color: red;
}
```

You can select by class or id:


```css
.card {
  color: blue;
}

#specificCard {
  color: grey;
}
```

and also by attributes:


```css
input[required] {
  border: red 2px solid;
}

[class$=important] {
  border: red 2px solid;
}
```

## Choose the correct selector to reference an element

Be specific... see obj 4.6

## Find elements by using pseudo-elements and pseudo-classes

**Pseudo classes** allow you to pick HTML elements by their state:
- State related to how a user has/has not interacted with it
  - e.g. a link that has not been visited yet, or an element that has a mouse hovering over it.
- State of being within a document and being related to surrounding elements
  - e.g. the first child of a parent div. An empty element with no children.

`:empty`
`:first`
`:first-of-kind`
`:last`
`:last-of-kind`
`:required`
`:hover`
`:enabled`
`:disabled`
`:first-child` => selects things that are themselves the first child. E.g. ul li:first-child selects the first li in a ul
`:nth-child(2n)` => every second child, counting from child 1 (child 2 first styled)
`:nth-child(2n+4)` => every second child, starting with child 4 (n=1)

anchor tag related:  `:link` , `:visited`

**Pseudo elements** allow you to insert content onto the page relative to other elements

`:before`
`:after`
`:first-letter` inside a text element
`:first-line` inside a text element, changes with resizing of window
