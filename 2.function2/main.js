function palindrome(message){
  var len = parseInt(message.length/2);
  for(var i = 0; i < len ;i++){
  	if(message[i] !== message[message.length-i-1]){
  		return false;
  	}
  }
  return true;
}
console.log(palindrome('hello')); // return false
console.log(palindrome('abcba')); // return true