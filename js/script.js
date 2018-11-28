let topNav = document.querySelector(".top-nav");
let topMenuButton = document.querySelector(".search-button");

let topClicks = false;
topMenuButton.addEventListener("click", () => {
	if(!topClicks) {
		topNav.style.visibility = "visible";
		topNav.style.opacity = "1";
		topClicks = true;
	}else {
		topNav.style.visibility = "hidden";
		topNav.style.opacity = "0";
		topClicks = false;
	}
})

let clientText = document.querySelector(".client-text");
let clientImage = document.getElementById("client-image");
let clientName = document.getElementById("client-name");
let clientRole = document.getElementById("client-role");
let sliderButtons = document.querySelectorAll(".slider-button");

let clients = [{
	text: `Bebed pupu warni sangsam ngundang ajang, gujeng sirah lair menda bebucal benang; lek-lekan? Madeg pendhet lenggah, nanem dipetak dhuwung, dipun 
awis bokong ayam. gendhis angsal Jawa Ipsum nangis rumput wilujeng unyeng-unyeng; pados gujeng benter andhap lisa Leres, lisah, ulem-ulem nedhi
gesang manah cangkem: nem aken benter bebucal baita dangu`,
    image: "css/images/client-1.png",
    name: "Vasiliy Nganu",
    role: "Dropbox Senior Developer"
},
{
	text: `Aliquam lorem ante, dapibus in, viverra
quis, feugiat a, tellus. Phasellus viverra
nulla ut metus varius laoreet.`,
    image: "css/images/client-2.jpg",
    name: "Random Name",
    role: "Random role in Random Team"
},
{
	text: `Nullam dictum felis eu pede mollis
pretium. Integer tincidunt. Cras dapibus.
Vivamus elementum semper nisi`,
    image: "css/images/client-3.jpg",
    name: "Name random",
    role: "Another member of Random Team"
}]

function slider() { 
	  for(let i = 0; i < sliderButtons.length; i++) {
		  sliderButtons[i].classList.remove("selected");
	  }
	  this.classList.add("selected");
	  clientText.innerHTML = clients[this.number].text;
	  clientImage.setAttribute("src", clients[this.number].image);
	  clientName.innerHTML = clients[this.number].name;
	  clientRole.innerHTML = clients[this.number].role;
}

for(let i = 0; i < sliderButtons.length; i++) {
	sliderButtons[i].addEventListener("click", slider);
	sliderButtons[i].number = i;
}