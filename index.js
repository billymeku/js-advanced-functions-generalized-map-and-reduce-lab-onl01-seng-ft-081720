// Add your functions here
function map(arr, fn) {
    let r = []
    for (let i = 0; i < arr.length; i++) {
        r.push(fn(arr[i]))
    }
    return r
}

function reduce(src, cb, startingPoint) {
  let r = (!!startingPoint) ? startingPoint: src[0]
    let i = (!!startingPoint) ? 0 : 1
    for (; i < src.length; i++) {
        r = cb(src[i], r)
    }
    return r;
} 