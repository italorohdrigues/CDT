
var count = new Number();
var count = 3007;

function start() {
  if ((count - 1) >= 101) {
    count = count - 11;
    contador.innerText = count;
    setTimeout('start();', 10);

  }
  else if ((count - 1) >= 40) {
    count = count - 1;
    contador.innerText = count;
    setTimeout('start();', 10);

  }
  else if ((count - 1) >= 20) {
    count = count - 1;
    contador.innerText = count;
    setTimeout('start();', 10);

  }
  else if ((count - 1) >= 10) {
    count = count - 1;
    contador.innerText = count;
    setTimeout('start();', 10);

  }
  else if ((count - 1) >= 4) {
    count = count - 1;
    contador.innerText = count;
    setTimeout('start();', 100);

  }
  else if ((count - 1) >= 2) {
    count = count - 1;
    contador.innerText = count;
    setTimeout('start();', 300);

  }
  else if ((count - 1) >= 1) {
    count = count - 1;
    contador.innerText = count;
    setTimeout('start();', 1000);

  }
  else if ((count - 1) >= 0) {
    count = count - 1;
    contador.innerText = count;
    setTimeout('start();', 10);

  }

}
