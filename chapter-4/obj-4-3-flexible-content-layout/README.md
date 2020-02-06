# Create a flexible content layout

## Objectives:

- implement a layout using a flexible box model
- implement a layout using multi-column
- implement a layout using position, float, and exclusions
- implement a layout using grid alignment
- implement a layout using regions, grouping and nesting

**Flexbox is for 1D styling.**
**Grid is for 2D styling***

Note: the book mentions `display: flexbox`. This is the 2011 version of flexbox:

`display: box;` is a version of 2009.
`display: flexbox;` is a version of 2011.
`display: flex;` is the current version.


## Implement a layout using a flexible box model
Reference: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
CodePen: https://codepen.io/enxaneta/full/adLPwv/

- `flex-direction`
- `flex-wrap`
- `flex flow`
  - is a combo of the two above
  - `flex-flow: <flex-direction> <flex-wrap>`
- `justify-content`
- `align-content`
- `align-items`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
  - is a shorthand of the three above
  - `flex : <flex-grow> <flex-shrink> <flex-basis>`
  - aka: <what I'll grow to> <what I'll be willing to shrink to> <what my natural width should be>


## Implement a layout using multi-column

CSS3 lets you specify columns to use, but within a specified container:

```css
.container {
  column-count: 5; /* number of columns for child elements to populate */
  column-gap: 5px; /* the gutter between columns */
  column-rule: solid black 2px; /* vertical line between columns, centre of the gutter/column-gap */
}

```

**`column-width`** : this property is also mentioned but doesn't seem to do anything; it only takes auto/inherit/initial, which all seem to just equally divide the container's width

**`column`** : this property replaces both `column-count` and `column-width`. `column: <column-count> <column-width>;`

A container div has the column-count CSS attribute set => you're now using CSS columns. Other properties like column-gap and column-rule are optional.

Child elements inside the CSS column container will flow between the columns, e.g. <p> element text content can start at the bottom of one column and end at the start of the next column. And as you add more content the child elements will adjust, e.g. the container div expands vertically and so more text can show in the earlier columns.

`column-rule` is a generic CSS property that encompasses: `column-rule-color`, `column-rule-width, `column-rule-style`. It works just like `border` versus the more specific `border-color` etc
