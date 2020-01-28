# Serialize, deserialize, and transmit data

`Serialization` = converting object/data structure into a format for transmission over a network.
`Deserialization` = convert serialized data into something readable and manipulatable, e.g Object or instance of a class

Applications can work with strings being transmitted, or also can use `binary data`. A Blob is a *binary large object*.

## Objectives
- Send data using XMLHttpRequest
- Serialize and deserialize JSON data
- Serialize and deserialize binary data


## Serialize and deserialize JSON data

Browsers have native support for JSON/XML

```javascript
let myJson = {
  whatImDoing : "revision",
  whyImDoingIt : "pass my apprenticeship",
  whereImDoingIt : "at home",
  whenImDoingIt: "outside work hours",
  howImDoingIt: "with flagging enthusiasm"
}

//serialization
let serializedData = JSON.stringify(myJson);

//deserialization
let deserializedData = JSON.parse(serializedData);
```


## Serialize and deserialize binary data

Deserializing binary data, e.g. images or audio

URL.createObjectURL() takes in a blob and then makes an object from that data and a URI for accessing that object.


```javascript
  var req = new XMLHttpRequest();
  req.open("GET", "dachshund-123503_640.jpg", true);
  req.responseType = "blob"; //if not included then you get the data as a string and it's not readable (apart from some EXIF data)
  req.send();
  req.onreadystatechange =  function(){
    if(req.readyState === XMLHttpRequest.DONE){
      let el = document.createElement('img');
      el.src = URL.createObjectURL(req.response);
      document.body.appendChild(el);
    }
  }

  var req2 = new XMLHttpRequest();
  req2.open("GET", "Orpheus-in-der-Unterwelt-Can-Can.m4a", true);
  req2.responseType = 'blob';
  req2.send();
  req2.onreadystatechange =  function(){
    if(req.readyState === XMLHttpRequest.DONE){
      var music = req2.response;
      var musicURI = URL.createObjectURL(music);
      console.log(musicURI);
      var audioElement = document.createElement('audio');
      audioElement.id = "audioXHR";
      audioElement.src = musicURI;
      document.body.appendChild(audioElement);
    }
  }

```

## Submitting form data using Form.submit() and jQuery's serialize method

### vanilla JS submit method

`document.getElementsByTagName('form')[0].submit();`

Acts the same as clicking a submit button, but doesn't fire a click or submit event. Function is much more basic than the jQuery one, takes no parameters.

### jQuery's form.submit() method
```javascript
$('document').ready(
  //once page loaded
  $('form').submit(function(){
    //first form identified, run submit method on it
    event.preventDefault(); //stops submission via default form behaviour

    //callback:
    // select the input fields by id and put values in data object
    var data = {
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val()
    }
    $.ajax({
      url: 'https://www.example.com',
      type: "POST",
      data: JSON.stringify(data),
      success: function(response){
        console.log(response);
      },
      error: function(err){
        alert("error!")
      }
    })
  })
)
```



```javascript
$('document').ready(
  //once page loaded
  $('form').submit(function(){
    //first form identified, run submit method on it

    event.preventDefault(); //stops submission via default form behaviour

    var serializedData = $('form').serialize();
    //to use the serialize method you need every input to have a name attribute.

    $.ajax({
      url: "https://www.example.com",
      type: "POST",
      data: serializedData,
      success: function(response){
        console.log(response);
      },
      error: function(err){
        alert("error!")
      }
    })

  })
);
```

WARNING: `serialize` only works for input fields that are in a valid state; unchecked checkboxes aren't passed into the serialized data, only checked ones etc.

NOTE: `serialize` escapes user input, e.g. `<` becomes `%3C`

Also, for radio buttons they all have the same `name` attribute. To distinguish between them, set their `value` attribute to stuff, e.g. 'male', 'female', 'other'
