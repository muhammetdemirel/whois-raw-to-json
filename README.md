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

## Output: 200

```
{
  "statusCode": 200,
  "isAvailable": false,
  "domainName": "regexart.com",
  "registrar": "Google LLC",
  "updatedDate": "2021-12-13T15:51:58.000Z",
  "creationDate": "2021-12-11T23:31:34.000Z",
  "expirationDate": "2022-12-11T23:31:34.000Z",
  "status": [
    "clientTransferProhibited https://icann.org/epp#clientTransferProhibited"
  ],
  "nameServers": [
    "NS1.REGEXART.COM",
    "NS2.REGEXART.COM"
  ],
  "raw": "..."
}
```

## Output: 404

```
{
  "statusCode": 404,
  "message": "TLD not supported"
}
```
