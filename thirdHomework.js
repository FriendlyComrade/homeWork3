
Array.prototype.myFilter = function(callback, context) {

    let filteredArr = [], index, element, arr = this;

    for (index = 0; index < arr.length; index++) {
        element = arr[index];

        if (callback.call(context, element, index, arr)) {
            filteredArr.push(element);
        }
    }
    
    return filteredArr;
};



function createDebounceFunction( callback, delay ) {
    let timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout( callback, delay );
    };
}