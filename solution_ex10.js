console.log(sayHello("Quang")); 

function sayHello(name) {
  return "Xin chao, " + name + "!";
}

const calcFee = function(hours) {
  return hours * 5000;
};

console.log(calcFee(5)); 

const checkStatus = (isReturned) => {
  return isReturned ? "DA TRA" : "DANG MUON";
};

console.log(checkStatus(true)); 