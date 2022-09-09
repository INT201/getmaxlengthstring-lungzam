const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(arrayOfString === undefined || arrayOfString === null){
    return undefined
  }else for(i = 0 ;arrayOfString.length > i ; i++ ) {
    return [arrayOfString[i]]
  }
  

  
}
module.exports = getMaxLengthString
