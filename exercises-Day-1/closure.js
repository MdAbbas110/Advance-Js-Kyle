//All the tasks related to this topic is here 

//Syntax of closure
function close (n){
 let ab = 786
  return function () {
    return n + ab
  }
 }

console.log(close(55))
