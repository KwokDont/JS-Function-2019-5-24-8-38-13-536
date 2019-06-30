function reverseString(message){
  // wirte your code here
  var newArr = new Array();
  for(var i = message.length - 1 ; i >= 0 ; i--){
  	newArr.push(message[i]);
  }
  return newArr.join('');
}
reverseString('hello'); // should return 'olleh'