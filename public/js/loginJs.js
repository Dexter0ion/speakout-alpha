// Create the HTML for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#"> ♡</a></div>';
msg += '<div><h2>说出你的心声</h2>';
msg += '告诉你的她/他，“我喜欢你"<hr>';
msg += '留下你心仪对象的联系方式（如QQ) 和她/他的一位好友的联系方式，我们会告知她/他的好友</div>';

var elNote = document.createElement('div');       // Create a new element
elNote.setAttribute('id', 'note');                // Add an id of note
elNote.innerHTML = msg;                           // Add the message
document.body.appendChild(elNote);                // Add it to the page

function dismissNote() {                          // Declare function
    document.body.removeChild(elNote);              // Remove the note
}

var elClose = document.getElementById('close');   // Get the close button
elClose.addEventListener('click', dismissNote, false);// Click close-clear note