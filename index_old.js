//create  a close button and appent it to eacth list item

var myNodelist = document.getElementsByTagName('LI');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//click on a close button to hide the current list item
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = 'none';
  };
}

/* add checked symbol when clicking on the list item */
var list = document.querySelector('ul');
list.addEventListener(
  'click',
  function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classlist.toggle('checked');
    }
  },
  false
);

//create new list item when clicking on add button
function newElement() {
  var li = document.createElement('li');
  var inputvalue = document.getElementById('myInput').value;
}
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
  alert('You must write something!');
} else {
  document.getElementById('myUL').appendChild(li);
}

document.getElementById('myInput').value = '';
