// Write your code here!

document.body.remove('main#main');

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Levi is the champion";
document.body.append(newHeader);