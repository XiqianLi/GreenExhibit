let capture;
var imgBox, imgHome, imgPic;
var imgPicOne, imgPicTwo, imgPicThree;
var imgFrameOne,imgFrameTwo,imgFrameThree;
var arrowLeft, arrowRight;
var imgX, imgY
var active = false;
var switchStatus = false;
var popUpActive = false;
var saveButton,cancelButton,resetButton;
var goHistoryButton, backToDesignButton;
var imgFrameOneX,imgFrameOneY,imgFrameOneX,imgFrameOneY;
var frameOne;
var col;
var offset,ratio;
var constraints;
var saveImage;

// var img;



var imgFrameOne,imgFrameTwo,imgFrameThree;


function preload() {
  // imgBox = loadImage('img/box.svg');
  // imgHome = loadImage('img/home.svg');
  // imgPic = loadImage('img/image.svg');

  imgSave = loadImage('img/save.png');

  imgPicOne = loadImage('img/picOne.png');
  imgPicTwo = loadImage('img/picTwo.png');
  imgPicThree = loadImage('img/picThree.png');

  imgArrowLeft = loadImage('img/arrow-left-circle.png');
  imgArrowRight = loadImage('img/arrow-right-circle.png');

  myFont = loadFont('font/Sniglet-Regular.ttf');


}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // back carmera
  var constraints = {
    audio: false,
    video: {
      facingMode: "environment"
    }  
  }

  capture = createCapture(constraints);
  capture.size(windowWidth, windowHeight);
  //capture.hide();

  imgX = windowWidth * 1/2 - 40;
  imgY = windowHeight-450;

  imgW = 120;
  imgH = 180;

  // img = createImg('img/test.png','testImag');
  imgFrameOne = createImg('img/picFrameOne.png','imgFrameOne');
  imgFrameTwo = createImg('img/picFrameTwo.png','imgFrameTwo');
  imgFrameThree = createImg('img/picFrameThree.png','imgFrameThree');

  artButton = createImg('img/artButton.png','artButton');
  frameButton = createImg('img/frameButton.png','frameButton');
  // moreButton = createImg('img/moreButton.png','moreButton');


  frameOne = {
    locX:'160',
    locY: windowHeight-450,
    w:'120',
    h:'180'
  }

  frameTwo = {
    locX:windowWidth * 1/2 - 40,
    locY: windowHeight-450,
    w:'120',
    h:'180'
  }

  frameThree = {
    locX: windowWidth -120 -160,
    locY: windowHeight-450,
    w:'120',
    h:'180'
  }

// pic
  picOne = {
    locX:'160',
    locY: windowHeight-450,
    w:'120',
    h:'180'
  }

  picTwo = {
    locX:windowWidth * 1/2 - 40,
    locY: windowHeight-450,
    w:'120',
    h:'180'
  }

  picThree = {
    locX: windowWidth -120 -160,
    locY: windowHeight-450,
    w:'120',
    h:'180'
  }

  col = color(255,255,255);
  offset = -30;
  ratio = 1.7;
}

function draw() {
  background(255);
  image(capture, 0, 0, windowWidth, windowHeight);
  textFont(myFont);

  saveButton = createButton('SAVE');
  saveButton.size(200,100);
  saveButton.style('font-size','36px','background-color',col);
  saveButton.position(windowWidth - saveButton.width - 100, windowHeight * 1/30);

  resetButton = createButton('RESET');
  resetButton.size(200,100);
  resetButton.style('font-size','36px','background-color',col);
  resetButton.position(windowWidth *1/2 - 100, windowHeight * 1/30);

  cancelButton = createButton('CANCEL');
  cancelButton.size(200,100);
  cancelButton.style('font-size','36px','background-color',col);
  cancelButton.position(100, windowHeight * 1/30);


  // top nav
  fill(255);
  noStroke();
  rect(0,0,windowWidth,200);

  // buttom nav

  fill(255);
  noStroke();
  rect(0,windowHeight-200,windowWidth,200);

  // pic nav bar
  fill(255, 255, 255,80);
  noStroke();
  rect(0,windowHeight-500,windowWidth,400);

  // arrow-left-circle

  image(imgPicTwo,imgX,imgY,imgW,imgH);

  image(imgArrowLeft,50,windowHeight-390,100,100);
  image(imgArrowRight,windowWidth-50-80,windowHeight-390,100,100);


  // three buttons
  artButton.size(450,150);
  artButton.position(10,windowHeight-180);

  frameButton.size(450,150);
  frameButton.position(windowWidth * 1/2+10,windowHeight-180);

  // moreButton.size(300,150);
  // moreButton.position(windowWidth - 300 - 50,windowHeight-180);

  if(switchStatus) {

    imgFrameOne.show();
    imgFrameTwo.show();
    imgFrameThree.show();


    imgFrameOne.position(frameOne.locX,frameOne.locY);
    imgFrameOne.size(frameOne.w,frameOne.h);


    imgFrameTwo.position(frameTwo.locX,frameTwo.locY);
    imgFrameTwo.size(frameTwo.w,frameTwo.h);

    imgFrameThree.position(frameThree.locX,frameThree.locY);
    imgFrameThree.size(frameThree.w,frameThree.h);

    imgFrameOne.mousePressed(frameOneNow);
    imgFrameTwo.mousePressed(frameTwoNow);
    imgFrameThree.mousePressed(frameThreeNow);


  } else {
    image(imgPicOne,picOne.locX,picOne.locY,picOne.w,picOne.h);
    image(imgPicThree,picThree.locX,picThree.locY,picThree.w,picThree.h);

    imgFrameOne.hide();
    imgFrameTwo.hide();
    imgFrameThree.hide();
  }




  // click next
  saveButton.mousePressed(takesnap);
  frameButton.mousePressed(switchFrame);
  cancelButton.mousePressed(openLinkTwo);
  resetButton.mousePressed(reset);
  saveButton.mousePressed(popUp);

  if(popUpActive) {
    imgFrameOne.hide();
    imgFrameTwo.hide();
    imgFrameThree.hide();

    fill(255);
    rect(windowWidth * 1/2 - 400,600,800,800)
    fill(0);
    textSize(64);
    text("Successfully Saved",windowWidth * 1/2 - 300,750);
    image(imgSave,windowWidth * 1/2 - 200,800,400,380);



    // fill(150);
    // textSize(36);
    // text("BACK TO DESIGN",windowWidth * 1/2 - 300,1300)
    
    fill(0);

    backToDesignButton = createButton('BACK TO DESIGN');
    backToDesignButton.size(400,100);
    backToDesignButton.style('font-size','36px','background-color',col);
    backToDesignButton.position(windowWidth *1/2 -400, 1200);

    goHistoryButton = createButton('GO TO HISTORY');
    goHistoryButton.size(400,100);
    goHistoryButton.style('font-size','36px','background-color',col);
    goHistoryButton.position(windowWidth *1/2 , 1200);
    goHistoryButton.mousePressed(openLinkHistory);
    // text("GO TO HISTORY")
  }

}

function reset() {
  window.open("indexPageDesign.html","_self")
}
function openLinkTwo() {
  window.open("indexPageMain.html","_self")
}

function openLinkHistory() {
  window.open('indexPageHistory.html','_self')
}

// function takesnap() {
//   image(capture,0,0);
// }

// drag img
function mouseClicked() {
  if (mouseX>imgX && mouseX<imgX+120 && mouseY>imgY && mouseY<imgY+160) {
    active = true;
  } else {
    active = false
  }
}

function mouseDragged() {
  image(capture, 0, 0, windowWidth, windowHeight);
  if (active) {
    imgX = mouseX;
    imgY = mouseY;
  }
  image(imgPicTwo,imgX,imgY,240,360);
}

function mouseReleased() {
  if (active) {
    imgW = 360;
    imgH = 540;
  }
}

function switchFrame() {
  switchStatus = true;
  console.log("switch success")
}

function frameOneNow() {


  frameOne.locX = imgX+offset;
  frameOne.locY = imgY+offset;
  frameOne.w= 240*ratio;
  frameOne.h = 360*ratio;

  frameTwo.locX = windowWidth * 1/2 - 40;
  frameTwo.locY = windowHeight-450;
  frameTwo.w = 120;
  frameTwo.h = 180;

  frameThree.locX = windowWidth -120 -160,
  frameThree.locY = windowHeight-450;
  frameThree.w = 120;
  frameThree.h = 180;
}


function frameTwoNow() {
  frameTwo.locX = imgX+offset;
  frameTwo.locY = imgY+offset;
  frameTwo.w= 240*ratio;
  frameTwo.h = 360*ratio;

  frameOne.locX = 160;
  frameOne.locY = windowHeight-450;
  frameOne.w = 120;
  frameOne.h = 180;


  frameThree.locX = windowWidth -120 -160;
  frameThree.locY = windowHeight-450;
  frameThree.w = 120;
  frameThree.h = 180;
}

function frameThreeNow() {
  frameThree.locX = imgX+offset;
  frameThree.locY = imgY+offset;

  frameThree.w= 240*ratio;
  frameThree.h = 360*ratio;

  frameOne.locX = 160;
  frameOne.locY = windowHeight-450;
  frameOne.w = 120;
  frameOne.h = 180;

  frameTwo.locX = windowWidth * 1/2 - 40;
  frameTwo.locY = windowHeight-450;
  frameTwo.w = 120;
  frameTwo.h = 180;
}

function popUp() {
  popUpActive = true;
}






  // bottom navi
  // fill(255);
  // noStroke();
  // rect(0,windowHeight-200,windowWidth,200);
  // image(imgHome,50,windowHeight-150,80,80);
  // image(imgPic,windowWidth * 1/2 - 40,windowHeight-150,80,80);
  // image(imgBox,windowWidth-50-80,windowHeight-150,80,80);



    // image(imgFrameOne,160,windowHeight-400,120,160);
    // image(imgFrameTwo,windowWidth * 1/2 - 40,windowHeight-400,120,160);
    // image(imgFrameThree,windowWidth -120 -160,windowHeight-400,120,160);