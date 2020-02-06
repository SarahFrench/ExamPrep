# Create an animated adaptive UI

## Objectives:
- Animate objects by applying CSS transitions
- Apply 3D and 2D transformations
- Adjust UI based on media queries
- Hide or disable controls


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
