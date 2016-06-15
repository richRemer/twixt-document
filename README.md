twixt-document Function
=======================

```js
var doc = require("twixt-document");

doc(function(document) {
    document.getElementById("foo");
});
```

Custom Document
---------------

```js
var doc = require("twixt-document")(document);

doc(function(document) {
    // document is the document passed to the require above
});
```
