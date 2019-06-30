function countWords(message){
    // wirte your code here
    message = message.trim()
    var num=1;
    for(var i=0;i<message.length;i++){
        if(message[i-1] == ' ' && message[i] != ' '){
            num++;
        }
    }
    return num;
  }
  countWords('Good morning, I love JavaScript.'); // return 5