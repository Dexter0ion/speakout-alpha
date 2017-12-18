//ajax 动态显示登陆用户名
window.onload = function () {
  loadUserName();
}

function loadUserName() {
  //alert('loadUserName');
  var xmlhttp;
  if (window.XMLHttpRequest) {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
  }
  else {
    //IE6 IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("navUserName").innerText = xmlhttp.responseText;
    }
  }

  xmlhttp.open("GET", "/loadUserName");
  xmlhttp.send();
}
//登出事件监听
var logout = document.getElementById('logout');
logout.onclick = function () {
  alert('logout');
  var logoutForm = document.createElement("form");
  logoutForm.method = "post";
  logoutForm.action = "/logout";
  document.body.appendChild(logoutForm);
  logoutForm.submit();
  document.body.removeChild(logoutForm);
}
// This example has been updated to fire on the keyup event instead of keypress 
// (on the last line in the event listener) as new text is not in the textarea until the key is released

var el;                                                    // Declare variables

function charCount(e) {                                    // Declare function
  var textEntered, charDisplay, counter, lastkey;          // Declare variables
  textEntered = document.getElementById('targetMessage').value;  // User's text
  charDisplay = document.getElementById('charactersLeft'); // Counter element
  counter = (180 - (textEntered.length));                  // Num of chars left
  charDisplay.textContent = counter;                       // Show chars left
  lastkey = document.getElementById('lastKey');            // Get last key elem
  lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode; // Create msg 
}
el = document.getElementById('targetMessage');                   // Get msg element
el.addEventListener('keyup', charCount, false); // on keyup - call charCount()