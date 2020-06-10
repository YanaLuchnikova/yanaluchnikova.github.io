let div = document.createElement('div');
  div.innerHTML='<b>Лучникова Яна Сергеевна</b>';
  document.body.prepend(div);

let elem = document.createElement('p');
  elem.innerHTML='<b>07.07.1999</b>';
  some_div.append(elem);

document.body.style.background = 'rgb(250,250,112)';
setTimeout(() => document.body.style.background ='', 3000);