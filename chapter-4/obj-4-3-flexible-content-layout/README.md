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

`column-rule` is a generic CSS property that encompasses: `column-rule-color`, `column-rule-width`, `column-rule-style`. It works just like `border` versus the more specific `border-color` etc


## Implement a layout using position, float, and exclusions

So this Objective means knowing how to position elements (see box-css in Obj4.2), float (also Obj4.2) and this crappy `wrap-flow` thing:

`wrap-flow`, or more accurately `-ms-wrap-flow` is Microsoft specific and a waste of my time to learn about. Book calls them **'exclusions'**

If you had an `img` tag inside a long block of text in a `p` tag and you styled the img like this...

```css
  img {
    position: absolute; //this is probably important
    height: 150px;
    width: 150px;
    -ms-wrap-flow: both;
    -ms-wrap-margin: 15px;
  }
```

...then text will wrap around the img on `both` sides. Here are the other options of this dumb-ass CSS property:

**`-ms-wrap-flow`:**
- `start` : text wraps around img on the left hand side, no text on RHS.
- `end` : opposite of above
- `both` : think of this as a combo of left and right
- `maximum` : identifies the longest side of the element and makes the wrapping go there
- `clear` : No text either side of the img, it creates a break in the flow of text.

**`-ms-wrap-margin`:** margin around the image, self explanatory

##### what a waste of time that was

## Implement a layout using grid alignment

CSS3 has the 'CSS Grid' layout functionality that mimic the old way of laying out webpages in tables. It'a more flexible and maintainable.

Again, there's a container where you need to specify that the display style is grid, not flex/block/static/whatever. Also, you need to specify the structure of the grid in that container; the positions and numbers of columns and rows. These are used to align child elements to:

```css
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 150px 150px auto 150px;
  grid-template-rows: 75px auto;
}
```

NOTE: Book says `grid-columns` and `grid-rows` but those are outdated. Also the shorthand tips are out of date.

You also need to apply CSS to the child elements to tell them where to position themselves within the parent element's grid. Without instructions they'll occupy the cells left to right, top to bottom in the order they're written in the HTML by default.

```css
.container > div:nth-child(1){
  grid-column: 3;
  grid-row: 2;
}
```

The above will tell the element to occupy the cell in 3rd column and row 2. If another element is told to go there then it'll sit perfectly on top and hide the first element positioned there.

To have an element *span* multiple columns or rows of the CSS Grid you *used* to use `grid-column` and `grid-row` to position the element's top left corner, and then use `grid-column-span` or `grid-row-span` to let the element span multiple columns/rows. This is similar to HTML properties colspan and rowspan.

IN THE FUTURE (the present) these properties will be replaced and the way positioning is done in general was changed:

Positioning is done by the dividing grid-lines between columns and rows, not the cols/rows themselves. So instead of spanning x number of columns, you specify the number (or name) of the grid-line the element starts at and where it ends.

```css
  .container{
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 33% 33% 33%;
  }

  .box1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .box2 {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }
```
```
The container makes a 3x3 grid, where the left side of the first column is line 1, and line 4 is the opposite side of the layout, etc.
1   2   3   4
 [ ] [ ] [ ]
2
 [ ] [ ] [ ]
3
 [ ] [ ] [ ]
4           .

box1 would span these positions. Col 1 to 3 = first two columns, Row 1 to 2 = first row only:

1   2   3   4
 [XXXXX]  
2|XXXXX|
 [XXXXX]
3

4           .

box2 would span these positions. Col 2 to 4 = last two columns, Row 1 to 3 = first two rows:

1   2   3   4
     [XXXXX]
2    |XXXXX|
     [XXXXX]
3

4           .
```

You can name the grid lines between cols/rows to make using them easier:

```css
.container {
  display: grid;
  grid-template-columns: [col-start] 33% [col-1] 33% [col-2] 33% [col-end];
  grid-template-rows: [row-start] 33% [row-1] 33% [row-2] 33% [row-end];
}

```
