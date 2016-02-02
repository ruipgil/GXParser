"use strict";

(function(w) {

  function parseChild(elm) {
    var attrs = {}
    var attributes = elm.attributes
    for (var ai in attributes) {
      var attr = attributes[ai]
      if (attr && attr.value) {
        attrs[attr.name] = attr.value
      }
    }
    if (elm.childNodes) {

      var children = elm.childNodes
      for (var i=0; i<children.length; i++) {
        var child = children[i]
        var name = child.localName
        if (!name) {
          continue
        }

        if (!attrs[name]) {
          attrs[name] = []
        }

        attrs[name].push(parseChild(child))
      }

    }

    if (Object.keys(attrs).length == 0) {
      return elm.textContent
    }
    return attrs
  }

  function GXParser(xml, _p) {
    _p = _p || DOMParser
    var parser = new _p()
    var root = parser.parseFromString(xml, "text/xml")

    return parseChild(root.documentElement)
  }

  w.GXParser = GXParser
})(this)
