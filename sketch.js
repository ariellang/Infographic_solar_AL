let imgBG; //background
let milky;
let LoI;
let solarI;
let catpl;

//planet initial img
let Me;
let Ve;
let Ea;
let Ma;

let Ju;
let Sa;
let Ur;
let Ne;

//text imgs (planet seconary img)
let Tme;
let Tve;
let Tea;
let Tma;

let Tju;
let Tsa;
let Tur;
let Tne;



let squareAngle = 0;
let mercuryAngle = 0;
let venusAngle = 0;
let earthAngle = 0;
let mAngle = 0;
let jAngle = 0;

let fontN;
let fontT;


function preload(){
  imgBG =loadImage('Solar system 2.png');
  fontN =loadFont("Nunito/Nunito-VariableFont_wght.ttf");
  fontT =loadFont("Tinos/Tinos-Regular.ttf")
  milky = loadImage("Galaxy.jpg");
  LoI = loadImage("Locate icon.png");
  solarI =loadImage("Solar system icon.png");
  catpl = loadImage("Two categories planets.jpg");

  Me = loadImage("Mercury.png");
  Ve = loadImage("Venus.png");
  Ea = loadImage("Earth.png");
  Ma = loadImage("Mars.png");

  Ju = loadImage("Jupiter.png");
  Sa = loadImage("Saturn.png");
  Ur = loadImage("Uranus.png");
  Ne = loadImage("Neptune.png");

  //text imgs
  Tme = loadImage("me.png");
  Tve = loadImage("ve.png");
  Tea = loadImage("ea.png");
  Tma = loadImage("ma.png");

  Tju = loadImage("ju.png")
  Tsa = loadImage("sa.png");
  Tur = loadImage("ur.png");
  Tne = loadImage("ne.png");
  
}


function setup() {
  createCanvas(800, 1200);
  background(0);
  
  angleMode(DEGREES);

  let Brect = rect;

  
}

function draw() {
  background(0);

  //Infographic background
  image(imgBG, 0, 0, 800, 1200);


  //Header
  textFont(fontN);
  textSize(48);
  textAlign(LEFT);
  fill(255);
  text("THE", 50, 60);
  text("SOLAR SYSTEM", 50, 120);
  //galaxy img
  image(milky, 450, 0, 350, 150);


  //section located
  textFont(fontN);
  textSize(32);
  fill(255);
  text("Our Solar System located in", 110, 185);

  textFont(fontN);
  textSize(24);
  fill(255);
  text("In a very big galaxy of stars called the Milky Way.There is a planetary ", 50, 230);
  text("system called the Solar System,  is located in the Milky Way. ", 100, 260);


  //location icon
  image(LoI, 50, 148, 50, 50);


  //Sections
  section8Planet();

  //Black rect
  fill(0);
  rect(400, 692, 740, 200);

  if (mouseX > 400 && mouseX < 1140 && mouseY > 692 && mouseY < 892) {
    image(catpl, 30, 580, 740, 210); // Display image at the center of the rectangle
  }



  //Me ~ Ne
  //Me
  image(Me, 65, 835, 60, 60);

  if (mouseX > 65 && mouseX < 120 && mouseY > 835 && mouseY < 1100) {
    image(Tme, 65, 835, 60, 60); // Display image at the center of the rectangle
  }


  //Ve
  image(Ve, 65, 915, 60, 60);

  if (mouseX > 65 && mouseX < 120 && mouseY > 915 && mouseY < 1015) {
    image(Tve, 65, 915, 60, 60); // Display image at the center of the rectangle
  }

  //Ea
  image(Ea, 65, 1000, 60, 60);

  if (mouseX > 65 && mouseX < 120 && mouseY > 1000 && mouseY < 1100) {
    image(Tea, 65, 1000, 60, 60); // Display image at the center of the rectangle
  }

   //Ma
   image(Ma, 65, 1085, 60, 60);

   if (mouseX > 65 && mouseX < 120 && mouseY > 1085 && mouseY < 1185) {
	 image(Tma, 65, 1085, 60, 60); // Display image at the center of the rectangle
   }

   //Ju
   image(Ju, 445, 835, 60, 60);

   if (mouseX > 445 && mouseX < 550 && mouseY > 835 && mouseY < 1000) {
	 image(Tju, 445, 835, 60, 60); // Display image at the center of the rectangle
   }

    //Sa
	image(Sa, 440, 915, 80, 60);

	if (mouseX > 445 && mouseX < 550 && mouseY > 915 && mouseY < 1015) {
	  image(Tsa, 440, 915, 80, 60); // Display image at the center of the rectangle
	}
 
	//Ur
	image(Ur, 445, 1000, 60, 60);
	
	if (mouseX > 445 && mouseX < 550 && mouseY > 1000 && mouseY < 1100) {
		image(Tur, 445, 1000, 60, 60); // Display image at the center of the rectangle
	}

	//Ne
	image(Ne, 445, 1085, 60, 60);
	
	if (mouseX > 445 && mouseX < 550 && mouseY > 1085 && mouseY < 1185) {
		image(Tne, 445, 1085, 60, 60); // Display image at the center of the rectangle
	}

	
 





  // sun
	rectMode(CENTER);
	translate(400, 340);
	fill(255,255,0);
	rotate(squareAngle);
	circle(0, 0, 50, 50, 55);
	fill(255,255,0,160);
		circle(0, 0, 90, 90, 50);
		fill(255,255,0,110);
		circle(0,0,120,120,50);
	squareAngle = squareAngle + .25/2;

  //mercury
	translate(100, 0);
	fill(233, 152, 22);
	rotate(mAngle);
	ellipse(40,0,12,12);
	mAngle = mAngle + .10/2;

  // Venus
	fill(225,100, 51);
	rotate(mercuryAngle);
	ellipse(250,0,21,21);
	mercuryAngle = mercuryAngle + .25/2;

  //earth
	fill(74, 192, 241);
	rotate(earthAngle);
	ellipse(350,0,21,21);
	earthAngle = earthAngle  + .25/2;

   //mars
	fill(220,7, 8);
	rotate(earthAngle);
	ellipse(450,0,21,21);
	earthAngle = earthAngle +  .25/2;
	

	//jupiter
	fill(217, 186, 114);
	rotate(jAngle);
	ellipse(510,10,40,40);
	jAngle = jAngle + .25/2;
	

}


function mouseMoved() {
	redraw(); // Redraw the canvas whenever the mouse moves


  }



function section8Planet() {

	//section located
	textFont(fontN);
	textSize(32);
	fill(255);
	text("Solar System and its 8 Planets", 110, 468);

	//8 Planet icon
	image(solarI, 50, 433, 50, 50);

	//Content text
	textFont(fontN);
	textSize(20);
	fill(255);
	text("Only 15% of stars in the galaxy host planetary systems, and one of those stars", 50, 500);
	text("is our own sun. Revolving around the sun are eight planets.", 120, 525);

	textSize(24);
	fill(255);
	text("The 8 planets are divided into two categories:", 150, 565);

	// //Tme ~ Tne
	// image(Tme, 65, 835, 60, 60);
	// image(Tve, 65, 915, 60, 60);
	// image(Tea, 65, 1000, 60, 60);
	// image(Tma, 65, 1085, 60, 60);

	// image(Tju, 445, 835, 60, 60);
	// image(Tsa, 440, 915, 80, 60);
	// image(Tur, 445, 1000, 60, 60);
	// image(Tne, 445, 1085, 60, 60);


	// //Mercury ~ Mars
	// image(Me, 65, 835, 60, 60);
	// image(Ve, 65, 915, 60, 60);
	// image(Ea, 65, 1000, 60, 60);
	// image(Ma, 65, 1085, 60, 60);

	// //Jupiter, Saturn, Uranus, Neptune
	// image(Ju, 445, 835, 60, 60);
	// image(Sa, 440, 915, 80, 60);
	// image(Ur, 445, 1000, 60, 60);
	// image(Ne, 445, 1085, 60, 60);


	//ME ~ Ne text
	//Me
	textFont(fontN);
	textSize(12);
	fill(255, 205, 147);
	text("Smallest planet and closest to the sun", 160, 865);
	//Ve
	text("Hottest planet, up to 867 °F", 160, 945);
	//Ea
	text("Water systems help create only known", 160, 1030);
	text("environment to sustain life", 162, 1045);
	//Ma
	text("had a watery surface and moist atmosphere", 160, 1120);


	//Ju
	text("largest planet", 545, 865);
	//Sa
	text("2nd largest planet", 545, 945);
	//Ur
	text("Rotates on its side", 545, 1035);
	//Ne 
	text("Outermost planet, Coldest Planet (-353 °F)", 545, 1120);


	//APA Citation
	textFont(fontT);
	textSize(13);
	fill(255);
	text("Science 101: The Solar System.(June 1, 2024)", 20, 1170);
	text("https://education.nationalgeographic.org/resource/space-101-solar-system/", 20, 1190);



}


