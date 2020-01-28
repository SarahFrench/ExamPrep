# Consume Data

IN THIS FOLDER - to test XMLHttpRequest locally I've got a NodeJS script that can run a server on localhost:8082. Using html files from that directory (accessible in the browser at localhost:8082/<filename>.html ) you can try out XMLHttpRequests for files stored locally.

## Objectives:

- Consume JSON and XML data
- retrieve data by using web services
- load data or get data from other sources by using XMLHttpRequest

## Consume JSON and XML data by using web services

- JSON = JavaScript Object Notation
- XML = Extensible Markup Language
  - XML aims to make documents machine and human readable

JSON:
```json
[{
  "name" : "Sarah",
  "age" : 27,
  "education" : [
    {
      "institution" : "Imperial College London",
      "type" : "BSc",
      "subject" : ["Biochemistry"],
      "graduationYear" : 2015
    },
    {
      "institution" : "Truro College",
      "type" : "IB",
      "subject" : ["Biology", "Art", "Maths Studies", "English", "Anthropology", "French", ""],
      "graduationYear" : 2011
    }
  ]
}]
```

XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<cv>
  <name>Sarah</name>
  <age>27</age>
  <education>
    <qualification type="BSc">
      <institution>Imperial College London</institution>
      <subject>Biochemistry</subject>
      <graduationYear>2015</graduationYear>
    </qualification>
    <qualification type="IB">
      <institution>Truro College</institution>
      <subject>Biology</subject>
      <subject>Maths Studies</subject>
      <subject>Art</subject>
      <subject>English</subject>
      <subject>Anthropology</subject>
      <subject>French</subject>
      <graduationYear>2011</graduationYear>
    </qualification>
  </education>
</cv>
```

XML starts with the 'prolog' line that states the encoding etc. This isn't part of the XML document

The XML document is made of elements and attributes within those. Tags MUST be closed. There are no rules about whether information should be added to new child elements or attributes within the parent element's opening tag. However, elements have advantages over attributes - data can be nested/tree, is more easily extended, easier to access subsets of the data (e.g. date string as attribute vs data object with separate Y, M, D fields )

## XMLHttpRequest Object


XMLHttpRequest is event driven, vs fetch API that uses promises. Internet Explorer doesn't implement it, so you're stuck with AJAX/XHR or using a polyfill.

Axios is supported by Internet Explorer; it makes XHR requests and uses promises. May need a promise polyfill in older browsers


`var request = new XMLHttpRequest();`

XMLHttpRequest is an object that can handle HTTP requests
- Supports both async and sync calls
- Whereas the fetch API returns promises, the XMLHttpRequest API handles async requests using event listeners.
- Events emitted, and able to be handled by event listeners:
  - `onreadystatechange` : handle a req that changes state; different state values exist and only one means data received.
  - `ontimeout` : handle a req that cannot be completed

- readyState property has number value matching these:

  | Value | JS constant for that value / Name | Description                                                   |
  |-------|------------------|---------------------------------------------------------------|
  | 0 | XMLHttpRequest.**UNSENT** | Client has been created. open() not called yet.               |
  | 1 | XMLHttpRequest.**OPENED** | open() has been called.                                       |
  | 2 | XMLHttpRequest.**HEADERS_RECEIVED** | send() has been called, and headers and status are available. |
| 3 | XMLHttpRequest.**LOADING** | Downloading; responseText holds partial data.                 |
| 4 | XMLHttpRequest.**DONE** | The operation is complete.                                    |  


Methods:
- `open`
  - `setRequestHeader` - set header while preparing the req. Can only be done when the request is OPENED but not SENT
- `send`
  - `getResponseHeader` - get a specific header from response (pass in header name as argument)
  - `getAllResponseHeaders` - get all the headers from response (no arguments)
- `abort` - stop the request when it's partway through.


Properties:
- `readyState` - integer indicating how the request has progressed
- `response`
  - `responseText` - response as DOMString
  - `responseType` - type can be text, json, xml, document, blob, etc...
  - `responseXML` - response as XML document
  - `responseBody` - gone? Can't see this option in the docs
- `timeout` - milliseconds that will wait for a response. Request will terminate if a response hasn't come back in that timeframe.
  - not to be used for synchronous requests.
  - use for async
  - use the ontimeout event listener to handle a timed out request.
  - if set to `0` then there isn't a timeout set
- `withCredentials` - boolean
  - if you wanted to use credentials then username and password would be included as 3rd/4th arguments of `open` method
  - **these are only used in response to a `401` security response from the server after you `send` the request**
