//Second node.js workshop

//CPS function that returns first character

function firstCharacter (a,ret) {
    ret(a[0]);
}

firstCharacter ("pepa", function (a) { 
  console.log(a) ;
})

//CPS function that returns last character

function lastCharacter (a,ret) {
    ret(a[a.length-1]);
}

lastCharacter ("pepa", function (a) { 
  console.log(a) ;
})

//Your function should use the two previous functions you created to "return" 
//a string that contains both the first and last character of the initial string

function getFirstAndLast (a,ret){
    firstCharacter(a,function(firstCharacter){
        lastCharacter(a,function(lastCharacter){
            ret(firstCharacter + lastCharacter);
        });
    });
}


getFirstAndLast("hello", function(newStr) { console.log(newStr); });

