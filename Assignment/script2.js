
var div = document.getElementById('displayinput')

function append(){
  var existinginputs = JSON.parse(localStorage.getItem("all"));

  if (existinginputs == null) {
    existinginputs = [];
  }

  var input = document.getElementById('storage').value;
  localStorage.setItem("current" ,(input));
  existinginputs.push(input);
  localStorage.setItem("all" , JSON.stringify(existinginputs))
};

window.onload = function displaydata(){
  if (display!= null) {
    display.forEach((el) => {

      var newdiv = document.createElement('div')

      var content = document.createElement('p')

      content.innerHTML = el

      content.style.color = "white";

      newdiv.appendChild(content)

      newdiv.classList.add("displayinput")

      div.appendChild(newdiv)

    });
  }

}

function addItem() {
  existing = localStorage.getItem("current")
  var newdivC = document.createElement('div')
  var contentC = document.createElement('p')
  contentC.innerHTML = existing
  contentC.style.color = "white";
  newdivC.appendChild(contentC)
  newdivC.classList.add("displayinput")
  div.appendChild(newdivC)
}





var display = localStorage.getItem("all")

display = JSON.parse(display)

console.log(display);
