function takeANumber(queue, name){
  var position = queue.length + 1;
  var message = "Welcome, " + name + ". You are number " + position + " in line.";
  queue.push(name);
  return message;
}

function nowServing(queue){
  if(queue.length > 0){
    var message = "Currently serving " + queue[0] + ".";
    queue.shift();
    return message;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(queue){
<<<<<<< HEAD
  var lineLength = queue.length;
  if(lineLength > 0){
    var message = "The line is currently: ";
    for (var position = 1; position <= lineLength; position++){
      var temp = position + ". " + queue[position-1];
      message = message + temp;
      if(position != lineLength){
        message = message + ", ";
      }
    }
    return message;
  }
  else{
    return "The line is currently empty.";
=======
  if(queue.length > 0){
    var message = "Currently serving " + queue[0] + ".";
    queue.shift();
    return message;
  }
  else{
    return "There is nobody waiting to be served!";
>>>>>>> 4d8282e4207176e41580579c653d623ab61bcf2b
  }
}