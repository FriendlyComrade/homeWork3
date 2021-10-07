
Array.prototype.myFilter = function(callback, context) {

    let filteredArr = []; 

    for (let index = 0; index < this.length; index++) {
        let element = this[index];

        if (callback.call(context, element, index, this)) {
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