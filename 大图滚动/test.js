function interval(func, wait){
  var interv = function(){
    func.call(null);
    setTimeout(interv, wait);
  };

  setTimeout(interv, wait);
}

interval(function(){
  console.log(2);
},1000);