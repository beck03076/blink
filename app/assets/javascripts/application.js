// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

function Blink(){
  var blinkText, button;
  blinkText = document.getElementsByClassName("blink_text")[0].value;
  result = document.getElementsByClassName('result')[0];
  result.innerText = blinkText;
  button = document.getElementsByClassName('blink_button')[0];
  button.innerText = 'Unblink';
  button.setAttribute('onclick','Unblink();');
  var request = new XMLHttpRequest();
  request.open('GET','/blinked/' + blinkText, true);
  request.send();
}

function Unblink(){
  var blinkText, button;
  blinkText = document.getElementsByClassName("blink_text")[0];
  blinkText.value = '';
  result = document.getElementsByClassName('result')[0];
  result.innerText = '';
  button = document.getElementsByClassName('blink_button')[0];
  button.innerText = 'Blink';
  button.setAttribute('onclick','Blink();');
}
