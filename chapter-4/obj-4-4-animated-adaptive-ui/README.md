# Create an animated adaptive UI

## Objectives:
- Animate objects by applying CSS transitions
- Apply 3D and 2D transformations
- Adjust UI based on media queries
- Hide or disable controls

## Animate objects by applying CSS transitions

Example: div that changes colour when mouse hovers over top

```css
.before {
  width: 150px;
  height: 150px;
  background-color: grey;
  border: 1px black solid;
  transition: background-color 1s 1s;
}

.before:hover {
  background-color: white;
}
```

Without the transition CSS property the CSS here would cause the div to immediately change colour when there's a hover event. By adding the transition property this change is 'smoothed over'; the div is set to handle any changes in the background-color property gradually over the duration of one second, after a delay of one second.

`transition: <property> <duration> <delay> <timing function>`
- `property` = the CSS property whose change will by animated
- `duration` = how long the animation takes place
- `delay` = Default none
- `timing-function` = how is the animation timed? Default = linear. Others e.g. ease, ease-in, ease-out etc...

The `transition` CSS property is a shorthand for all the above things in one, separately you can use:
- `transition-property`
- `transition-duration`
- `transition-delay`
- `transition-timing-function`

**NOTE: an advantage of using the transition shorthand is that you can have a comma separated list of multiple properties. If you use the separate `transition-` properties then you can only specify one**

I think when using the shorthand the first duration will always be animation duration, and second will always be the delay.

## Hide or disable controls

### Hiding

When layouts are adjusting, you may want to completely hide some elements in one context and not another.

There are two ways to do this:`display` and `visibility` CSS properties.

Look at this file for a demo I already made of this: `/chapter-1/obj-1-3-apply-styling-programmatically/obj1.3-apply-styling-programmatically.html`

When `visibility: visible;` the element is seen. When `visibility: hidden;` the element is not seen by the user but the element has an impact on the layout; it can leave a blank space.

When `display: block/inline-block/inline;` an element is visible. When `display: none;` the element is not seen and it does not have an impact on the layout; other elements will rearrange themselves when the element is set to `display: none;`

visibility affects if elements on the page are seen by the user, display affects if the element is used when rendering the representation of the DOM [idk how to phrase it properly but I'm going to read this tomorrow](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Render_tree_construction).

### Disabling

If you want to disable elements you use the HTML attribute `disabled` or set `disabled="disabled"`. The latter syntax is necessary when using jQuery:

```javascript
$('.disableMe').attr("disabled", "disabled");
```

Causes `<element class="disableMe" disabled="disabled">`

You could also do:

```javascript
//$('.disableMe').disabled = true; //doesn't work as you're trying to access element properties but on the jQuery object instead.

$('button').each(function(){this.disabled = true;}) //callback has to be anonymous, non-arrow to get the correct `this`. With arrow function this = Window object
```
