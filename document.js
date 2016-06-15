/**
 * Create a document ready function for a document.
 * @param {Document} document
 * @returns {function}
 */
function create(document) {
    /**
     * Call function when document is ready or create a new document function
     * by passing in a custom document.
     * @param {function|Document} fn
     * @returns {undefined|function}
     */
    return function(fn) {
        if (fn instanceof Document) {
            return create(fn);
        } else if (typeof fn === "function") {
            if (~["complete", "loaded"].indexOf(document.readyState)) {
                fn(document);
            } else {
                document.addEventListener("DOMContentLoaded", function() {
                    fn(document);
                });
            }
        } else {
            throw new TypeError("expected Document or function");
        }
    };
}

module.exports = create(document);

