module.exports = function check(str, bracketsConfig) {
    
 let strBrackets = bracketsConfig.map(item => item.join(''));

    for (let i = 0; i < strBrackets.length; i++){
        
     if(str.includes(strBrackets[i])){
         
      str = str.replace(strBrackets[i], '');
       i = -1;
     } 
    }
    
     if (str.length === 0) {
       return true;
     }
      return false;
}
