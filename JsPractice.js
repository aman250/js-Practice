var headingtitle = document.getElementById("Heading");
var RemoveButton = document.getElementById("RemoveButton");
var inputValue = document.getElementById("textfield");
headingtitle.setAttribute("class", "headingcolor");
RemoveButton.addEventListener("click", function () {
  let name = prompt("Enter your name");
  let age = prompt("Enter your age");
  console.log("Your name is " + name + " and your age is " + age);
});
