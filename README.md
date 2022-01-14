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
  "updatedDate": "13.12.2021 15:51:58",
  "creationDate": "11.12.2021 23:31:34",
  "expirationDate": "11.12.2022 23:31:34",
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

## Supported TLDs

|      |      | ALL  |     |       |
| :--: | :--: | :--: | :-: | :---: |
| .com | .net | .org | .co |  .me  |
| .im  | .in  | .xyz | .io | .info |
| .us  | .ru  | .su  | .uk |   -   |

|         |         |    TR    |          |         |
| :-----: | :-----: | :------: | :------: | :-----: |
| .com.tr | .net.tr | .org.tr  | .gen.tr  | .web.tr |
| .tv.tr  | .biz.tr | .info.tr | .name.tr | .bbs.tr |
| .tel.tr | .edu.tr | .gov.tr  |  .dr.tr  | .av.tr  |
| .pol.tr | .tsk.tr | .mil.tr  | .bel.tr  | .k12.tr |
