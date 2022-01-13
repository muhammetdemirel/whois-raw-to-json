# Whois RAW to JSON

Module that allows you to query whois information and display data in json format.

## Installation

`npm install whois-raw-to-json`

## Usage

```
(async function(){
  const whois = require('whois-raw-to-json');

  var results = await whois.lookup('regexart.com');
  console.log(JSON.stringify(results, null, 2));
})()
```
