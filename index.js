var position = 0;

function takeANumber(queue){
  var newCustomersNumber = position + 1;
  var message = "Welcome. You are number " + newCustomersNumber + " in line.";
  queue.push(newCustomersNumber);
  position++;
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
  }
}

let queue = []
console.log(takeANumber(queue))
console.log(nowServing(queue))
console.log(currentLine(queue))