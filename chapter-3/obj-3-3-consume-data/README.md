# Consume Data

## Objectives:

- Consume JSON and XML data
- retrieve data by using web services
- load data or get data from other sources by using XMLHTTPRequest

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
