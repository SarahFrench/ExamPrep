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

```js
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
