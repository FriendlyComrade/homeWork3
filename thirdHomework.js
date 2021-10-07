
Array.prototype.myFilter = function(callback, context) {

    let filteredArr = []; 
    let element;

    for (let index = 0; index < this.length; index++) {
        element = this[index];

        if (callback.call(context, element, index, arr)) {
            filteredArr.push(element);
        }
    }
    
    return filteredArr;
};



function createDebounceFunction( callback, delay ) {
    let timeout;

    return function(...args) {

        clearTimeout( timeout );

        timeout = setTimeout(() => {            
            callback(...args);
        }, delay );
    };
}