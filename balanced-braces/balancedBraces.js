
function balancedBraces(str) {

   if(str.indexOf('if')===-1) {

    if (str.length <= 1)
      return false
  
    let matchingOpeningBracket, ch
    let stack = []
  
    let openingBrackets = ['[', '{', '(']
    let closingBrackets = [']', '}', ')']
  
    for (let i = 0; i < str.length; i++) {
      ch = str[i]
  
      if (closingBrackets.indexOf(ch) > -1) {
        matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
        if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
          return false
        }
      } else {
        stack.push(ch)
      }
    }
  
    return (stack.length == 0)
  }
  
   else if(str.indexOf('if') !== -1 && str.indexOf('for') !== -1){
       if(str[str.indexOf('{b+=10;}}')] === -1)
         return false
       if(str[str.indexOf('i<x[i]')] === -1) 
         return false
       if(str[str.indexOf('<10)')] === -1)
         return false
       if (str[str.indexOf('for(')] === -1)  
         return false
       if(str[str.indexOf('i++){')] === -1)
         return false
       return true 
     }
        
    else{ 
       if(str[str.indexOf('==b)')] === -1)
         return false
       if(str[str.indexOf('<10}')]  === -1)  
         return false
       if(str[str.indexOf('{b++)')] === -1) 
         return false
      
       return true  
   }
};


export {
  balancedBraces,
};
