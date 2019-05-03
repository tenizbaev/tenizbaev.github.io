const input = document.querySelectorAll('form input');
const label = document.querySelectorAll('form label');

let textarea = document.querySelector('form textarea');
let linkMailto = document.querySelector('form a');

let username = "";
let userSurname = "";
let userAddress = "";
let userEmail = "";
let userText = "";

for (let i = 0; i < input.length; i++) {

  input[i].addEventListener('input', function (event) {

    let labelAddress = 'label-' + event.path[0].id;

    if (this.value.length > 0) {

      document.getElementById(labelAddress).style.visibility = "visible";

    } else if (this.value.length == 0) {

      document.getElementById(labelAddress).style.visibility = "hidden";

    }

    if (event.path[0].id == "name") {
      username = this.value;
      console.log(username);
    } else if (event.path[0].id == "surname") {
      userSurname = this.value;
      console.log(userSurname);
    } else if (event.path[0].id == "address") {
      userAddress = this.value;
      console.log(userAddress);
    } else if (event.path[0].id == "email") {
      userEmail = this.value;
      console.log(userEmail);
    }
  });
}

textarea.addEventListener('input', function () {
  userText = this.value;
  console.log(userText);
});

linkMailto.addEventListener('click', function () {
  linkMailto.href = "tenizbaevulukbek@gmail.com?subject=" + userText;

  console.log(linkMailto.href);
});
console.log(linkMailto.href);