docum
VM478:1 Uncaught ReferenceError: docum is not defined
    at <anonymous>:1:1
(anonymous) @ VM478:1
document.tit
undefined
4Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Type "allow pasting" below and press Enter to allow pasting.
document.body.innerHTML="<h1>wellcome to java script</h1>"
VM751:1 Uncaught TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at <anonymous>:1:24
(anonymous) @ VM751:1
const heading = document.createElement("h1");
heading.textContent = "Welcome to JavaScript";
document.body.appendChild(heading);
<h1 style=​"text-align:​ center;​ color:​ yellow;​">​Welcome to JavaScript​</h1>​
document.body.style.backgroundcolor="red";
'red'
document.body.style.backgroundColor = "red";
'red'
const para = document.createElement("p");
undefined
para.textContent ="JavaScript is a lightweight, single-threaded, and dynamically typed programming language designed primarily to bring interactivity to web pages. Under the hood, modern JavaScript uses Just-In-Time (JIT) compilation, combining compilation and interpretation to execute code rapidly inside the browser or server environments."
'JavaScript is a lightweight, single-threaded, and dynamically typed programming language designed primarily to bring interactivity to web pages. Under the hood, modern JavaScript uses Just-In-Time (JIT) compilation, combining compilation and interpretation to execute code rapidly inside the browser or server environments.'
document.body.appendchild(para);
VM1112:1 Uncaught TypeError: document.body.appendchild is not a function
    at <anonymous>:1:15
(anonymous) @ VM1112:1
document.body.appendChild(para);
<p style=​"color:​ rgb(221, 221, 221)​;​ font-size:​ 1.2rem;​">​…​</p>​
para.style.color="#ddd";
'#ddd'
para.style.fontSize="1.2rem";
'1.2rem'
heading.style.align="center";
'center'
heading.style.textAlign = "center";
'center'
heading.style.color="yellow";
'yellow'
let button=document.createElement("button");
undefined
button.textContent="click me";
'click me'
document.body.appendChild(button);
<button style=​"display:​ block;​ margin:​ 20px auto;​ padding:​ 12px 24px;​ border-radius:​ 8px;​ background-color:​ rgb(255, 152, 0)​;​ color:​ white;​">​click me​</button>​
button.style.display="block";
'block'
button.style.margin = "20px auto";
'20px auto'
button.style.padding = "12px 24px";
'12px 24px'
button.style.borderRadius = "8px";
'8px'
button.style.backgroundColor = "#ff9800";
'#ff9800'
button.style.color = "white";

'white'
button.addEventListener("mouseover",function(){)
VM2363:1 Uncaught SyntaxError: Unexpected token ')' (at VM2363:1:48)
button.addEventListener("mouseover",function(){button.style.backgroundColor="#ff9800"});
undefined
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#ff9800";
});
undefined
button.addEventListener("mouseover", function() {button.style.backgroundColor = "red";});
undefined
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#ff9800";
});
undefined
document.body.appendChild(button);

<button style=​"display:​ block;​ margin:​ 20px auto;​ padding:​ 12px 24px;​ border-radius:​ 8px;​ background-color:​ rgb(255, 152, 0)​;​ color:​ white;​">​click me​</button>​
let card = document.createElement("div");
undefined
card.style.width = "300px";
'300px'
card.style.margin = "20px auto";
card.style.padding = "20px";
'20px'
card.style.backgroundColor = "#333";
card.style.textAlign = "center";
'center'
document.body.appendChild(card);
<div style=​"width:​ 300px;​ margin:​ 20px auto;​ padding:​ 20px;​ background-color:​ blue;​ text-align:​ center;​">​</div>​
card.style.backgroundColor="blue";
'blue'
let cardTitle = document.createElement("h2");
undefined
cardTitle.textContent = "!!!!!JavaScript!!!!!";
'!!!!!JavaScript!!!!!'
cardTitle.style.color = "yellow";
'yellow'
document.body.appendChild(card);
<div style=​"width:​ 300px;​ margin:​ 20px auto;​ padding:​ 20px;​ background-color:​ blue;​ text-align:​ center;​">​</div>​
document.body.appendChild(cardTitle);
<h2 style=​"color:​ yellow;​">​!!!!!JavaScript!!!!!​</h2>​
document.body.style.display = "flex";
'flex'
document.body.style.display = "block";
'block'
document.body.style.fontFamily = "Arial, sans-serif";
'Arial, sans-serif'
img.src = "https://media.geeksforgeeks.org/wp-content/uploads/20260204153533335673/a_normal_distribution_3.webp";
VM3139:1 Uncaught ReferenceError: img is not defined
    at <anonymous>:1:1
(anonymous) @ VM3139:1
let img = document.createElement("img");
undefined
img.src = "https://media.geeksforgeeks.org/wp-content/uploads/2022060204153533353673/a_normal_distribution_3.webp";
'https://media.geeksforgeeks.org/wp-content/uploads/2022060204153533353673/a_normal_distribution_3.webp'
img.style.width = "500px";
'500px'
document.body.appendChild(img);
<img src=​"https:​/​/​media.geeksforgeeks.org/​wp-content/​uploads/​2022060204153533353673/​a_normal_distribution_3.webp" style=​"width:​ 500px;​">​
document.querySelector("img").remove();
undefined
let input = document.createElement("input");
undefined
input.type = "file";
'file'
input.accept = "image/*";
'image/*'
document.body.appendChild(input);
<input type=​"file" accept=​"image/​*">​
input.onchange = function() {
    let file = input.files[0]; if (!file) return;let reader = new FileReader();reader.onload = function() {let img = document.createElement("img");
img.src = reader.result;
img.style.width = "300px"; document.body.appendChild(img);};
reader.readAsDataURL(file);
};
ƒ () {
    let file = input.files[0]; if (!file) return;let reader = new FileReader();reader.onload = function() {let img = document.createElement("img");
img.src = reader.result;
img.style.width = "30…