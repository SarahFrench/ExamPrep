# jQuery

$ dollar sign operator used when selecting elements

you can select by id/class/tag
Can also use CSS selectors like `target:nth-child(n)`

This example executes a function when the document is ready:

```js
$(document).ready(<callback>);
```


Methods:

```js
$('<selector>').addClass('class1 class2');

$('<selector>').removeClass('\<class name>');

$('<selector>').css("<property>", "<value>");
//edits CSS style of selected elements

$('<selector>').prop("<tag attribute>", "<value>")
//edits properties (attributes) of an element

$('<selector>').text()
//text content of selected tags

$('<selector>').html()
//set html inside selected tags

$('<selector>').remove()
//removes selected element(s)

$('<selector>').appendTo('\<selector>')
//removes the selected element(s) from its original position
//appends them to each of the element(s) matching the selector passed into appendTo

var copyOfElement = $('<selector>').clone();

$('<selector>').parent();
//get parent element of selected element

$('<selector>').children();

$('<selector>:nth').nth-child('<integer>')
```



You can chain methods:
```js
///e.g to clone an element and append it elsewhere:
$("#target5").clone().appendTo("#left-well");

///e.g to find an element's parent and alter it's CSS:
$("#target1").parent().css("background-color", "red");
```
