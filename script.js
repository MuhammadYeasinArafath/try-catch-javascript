function trycatch() {
    const message = document.getElementById("ppp");
    message.innerHTML = "";
    let x = document.getElementById("inp").value;
    try {
      if(x == "0") throw "zero";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 0) throw "negative number";
      if(x > 0) throw "positive number";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }