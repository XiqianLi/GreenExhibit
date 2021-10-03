let capture;
var imgBox, imgHome, imgPic;
var picOne, picTwo, picThree;
var arrowLeft, arrowRight;

function preload() {
  imgBox = loadImage('img/box.svg');
  imgHome = loadImage('img/home.svg');
  imgPic = loadImage('img/image.svg');
  imgPicOne = loadImage('img/picOne.jpeg');
  imgPicTwo = loadImage('img/picTwo.jpeg');
  imgPicThree = loadImage('img/picThree.jpg');
  imgArrowLeft = loadImage('img/arrow-left-circle.svg');
  imgArrowRight = loadImage('img/arrow-right-circle.svg');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  //capture.hide();


  
}

function draw() {
  background(255);
  image(capture, 0, 0, windowWidth, windowHeight);
  // filter(INVERT);

  // pic nav bar
  fill(255, 255, 255,80);
  rect(0,windowHeight-450,windowWidth,400);

  // arrow-left-circle

  image(imgPicOne,160,windowHeight-400,120,160);
  image(imgPicTwo,windowWidth * 1/2 - 40,windowHeight-400,120,160);
  image(imgPicThree,windowWidth -120 -160,windowHeight-400,120,160);
  image(imgArrowLeft,50,windowHeight-380,100,100);
  image(imgArrowRight,windowWidth-50-80,windowHeight-380,100,100);

  // bottom navi
  fill(255);
  noStroke();
  rect(0,windowHeight-200,windowWidth,200);
  image(imgHome,50,windowHeight-150,80,80);
  image(imgPic,windowWidth * 1/2 - 40,windowHeight-150,80,80);
  image(imgBox,windowWidth-50-80,windowHeight-150,80,80);
}

function mousePressed() {
  
}