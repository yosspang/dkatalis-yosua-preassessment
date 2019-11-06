//Problem statement
//Given an Array of strings, use Array#reduce to create an object 
//that contains the number of times each string occured in the array.

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    // your implementation here
    var countApple = 0
    var countBanana = 0
    var countDurian = 0
    var object = {}
    
    arr.forEach((input)=>{
      if(input === "Apple") {
                countApple += 1
            } else if (input === "Banana"){
                countBanana += 1
            } else if (input === "Durian") {
                countDurian += 1
            }
    })

    object.Apple = countApple
    object.Banana = countBanana
    object.Durian = countDurian
    countMap = object
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}
console.log(countWords(inputWords))