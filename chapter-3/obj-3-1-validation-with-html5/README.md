# Validate user inputs by using HTML 5 elements

## Objectives:

- choose input controls and HTML5 input types
- implement content attributes

## General attributes:

General: `required`
Specific to checkboxes/radio buttons: `checked`
Specific to text boxes: `readonly`,`spellcheck`, `pattern`, `placeholder`

## Choosing input controls

Types of input:
`<input type="X"/>`

Where X is one of...

### text
- any char input permitted
- Input area = one line

Attriutes:
- `value` - default text value, held in field like real input
- `placeholder` - example value that's not held in the field like actual input
- `spellcheck` - used machine's own spellchecker to test input. Not used for validation prior to form submission.
- `required` - if field needs input before form submission

### number

like a text input but the char are limited to digits, -/+, . , e (maybe more...)
- `min`
- `max`
- `step`

### range

click and drag dial that covers a set range of numbers
Attributes:
- `min` = 0
- `max` = 5
- `value` = 2 => the default value taken when page loads
- `step`= 0.5 => the increment between choosable values

### date

Attributes:
- `min` e.g. "2019-01-01"
- `max` e.g. "2021-01-01"
- `step` can disable choice of days based on a given period, but step may not be implemented in all browsers (is in Chrome). **Step unit = days**

### datetime-local (datetime no longer used)

Attributes:
- min e.g. "2019-01-01"
- max e.g. "2021-01-01"
- step **Step unit = seconds**

### month
### week
### time

### email

Attributes:
- `placeholder`
- `value`

Validates input as emails - looks for `@<second-level domain>.<top-level domain>`

### url

Attributes:
- `placeholder`
- `value`

Validates text input to be a URL : looks for a protocol, second-level domain and top-level domain (.com, .edu etc)

The pattern attribute is secondary to the in-built validation of url inputs, so if you need to use patterns us a regular text input field.

### tel
Attributes:
- `pattern` = "[0-9]{5}\s{1}[0-9]{6}"

Without a pattern this field will accept any input. The `tel` type has more significance for semantic HTML/screen readers/choice of displaying keypad vs keyboard on mobile than it does for validation

### color

It's a colour picker! The output value is a hex code.

### checkbox
- `checked` = "checked" HOWEVER if you set this attribute equal to ANYTHING the checkbox becomes checked. You can just put the checked attribute in the tag without setting a value and it does the same thing

### radio
You need to set the `name` attribute as the same value to link radio inputs and make them mutually exclusive

- `checked` same as above

### Submit

- button for **submitting the form it's located in**
- by default has that action and shows the word "Submit"
- `value` attribute can be used to overwrite the text

### Reset

- button for **resetting the form it's located in**
- sets all input fields to their default values (empty, their `value` attribute, `checked` or not...)
- by default has that action and shows the word "Reset", overwritten by `value`

### Button
A generic button with no action. You set the text using the `value` attribute. To give it an action you'd need to use JS


## Non `<input>` inputs

### textarea

`<textarea rows="5" cols="15" spellcheck></textarea>`

Attributes:
- rows = number of text lines tall the box is
- cols = number of chars wide the box is

Textareas can be clicked and dragged to new dimensions by user, but appears to only affect the number of rows

### button

`<button>Text here</button>`

Attributes:
- type

Supports the `type` attribute (submit, reset, button).

Differs from <input type="button"> because you need to specify the text between an opening and closing tag, BUT ALSO you can put HTML Elements between those tags, e.g. images as buttons.
