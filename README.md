# GXParser

Generic XML parser for the web.
Turning XML string into an object.

## Install

```
npm i gxparser --save
```

## Usage

Works out of the box in the browser, and needs a DOM Parser when using node.

### Browser

Include, and call.

```js
var GXParser = require('gxparser').GXParser

var xml_as_object = GXParser("..string with xml..")
```

### Node

Include, provide DOM parser (for instance [XMLDOM](https://github.com/jindw/xmldom)) and call.

```js
var XMLDOM = require('xmldom')
var GXParser = require('gxparser').GXParser

var xml_as_object = GXParser("..string with xml..", XMLDOM.DOMParser)
```

## Example Output

Original, GPX file:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<gpx xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.topografix.com/GPX/1/0" xsi:schemaLocation="http://www.topografix.com/GPX/1/0 http://www.topografix.com/GPX/1/0/gpx.xsd" version="1.0">
  <trk>
    <trkseg>
      <trkpt lat="21.7323439246" lon="7.1294059643">
        <time>2015-11-25T13:31:02Z</time>
      </trkpt>
      <trkpt lat="21.7323172564" lon="7.12941019332">
        <time>2015-11-25T13:31:17Z</time>
      </trkpt>
      <trkpt lat="21.732272521" lon="7.12941957463">
        <time>2015-11-25T13:31:26Z</time>
      </trkpt>
    </trkseg>
  </trk>
</gpx>
```

Result of parser:
```json
{
  "xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance",
  "xmlns":"http://www.topografix.com/GPX/1/0",
  "xsi:schemaLocation":"http://www.topografix.com/GPX/1/0 http://www.topografix.com/GPX/1/0/gpx.xsd",
  "version":"1.0",
  "trk":[
    {
      "trkseg":[
        {
          "trkpt":[
            {"lat":"21.7323439246","lon":"7.1294059643","time":["2015-11-25T13:31:02Z"]},
            {"lat":"21.7323172564","lon":"7.12941019332","time":["2015-11-25T13:31:17Z"]},
            {"lat":"21.732272521","lon":"7.12941957463","time":["2015-11-25T13:31:26Z"]}
          ]
        }
      ]
    }
  ]
}
```

## License
[MIT](./LICENSE)
