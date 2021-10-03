let capture;
var imgBox, imgHome, imgPic;
var imgPicOne, imgPicTwo, imgPicThree;
var imgFrameOne,imgFrameTwo,imgFrameThree;
var arrowLeft, arrowRight;
var imgX, imgY
var active = false;
var switchStatus = false;
var nextButton,cancelButton;
var imgFrameX,imgFrameY,imgFrameX,imgFrameY;

// var img;


var imgFrameOne,imgFrameTwo,imgFrameThree;


function preload() {
  imgBox = loadImage('img/box.svg');
  imgHome = loadImage('img/home.svg');
  imgPic = loadImage('img/image.svg');

  imgPicOne = loadImage('img/picOne.jpeg');
  imgPicTwo = loadImage('img/picTwo.jpeg');
  imgPicThree = loadImage('img/picThree.jpg');

  imgArrowLeft = loadImage('img/arrow-left-circle.svg');
  imgArrowRight = loadImage('img/arrow-right-circle.svg');

  // imgFrameOne = loadImage('img/picFrameOne.png');
  // imgFrameTwo = loadImage('img/picFrameTwo.png');
  // imgFrameThree = loadImage('img/picFrameThree.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // back carmera
  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }  
  }

  capture = createCapture(constraints);
  capture.size(windowWidth, windowHeight);
  //capture.hide();

  imgX = windowWidth * 1/2 - 40;
  imgY = windowHeight-400;

  imgW = 120;
  imgH = 180;

  // img = createImg('img/test.png','testImag');

  imgFrameOne = createImg('img/picFrameOne.png','imgFrameOne');
  imgFrameTwo = createImg('img/picFrameTwo.png','imgFrameTwo');
  imgFrameThree = createImg('img/picFrameThree.png','imgFrameThree');



  imgFrameX =     160;
  imgFrameY =     windowHeight-400;

  imgFrameW = 120;
  imgFrameH = 160;




  
}

function draw() {
  background(255);
  image(capture, 0, 0, windowWidth, windowHeight);

  nextButton = createButton('NEXT');
  nextButton.size(200,100);
  nextButton.style('font-size','36px','stroke','red','text-color','grey');
  nextButton.position(windowWidth - nextButton.width - 100, windowHeight * 1/10);

  cancelButton = createButton('CANCEL');
  cancelButton.size(200,100);
  cancelButton.style('font-size','36px','stroke','red','text-color','grey');
  cancelButton.position(100, windowHeight * 1/10);

  // img.position(100,100);




  // filter(INVERT);

  // pic nav bar
  fill(255, 255, 255,80);
  noStroke();
  rect(0,windowHeight-450,windowWidth,400);

  // arrow-left-circle

  image(imgPicTwo,imgX,imgY,imgW,imgH);
  image(imgArrowLeft,50,windowHeight-380,100,100);
  image(imgArrowRight,windowWidth-50-80,windowHeight-380,100,100);

  if(switchStatus) {

    imgFrameOne.show();
    imgFrameTwo.show();
    imgFrameThree.show();


    imgFrameOne.position(imgFrameX,imgFrameY);

    imgFrameOne.size(imgFrameW,imgFrameH);
    imgFrameTwo.position(windowWidth * 1/2 - 40,windowHeight-400);
    imgFrameTwo.size(120,160);
    imgFrameThree.position(windowWidth -120 -160,windowHeight-400)
    imgFrameThree.size(120,160);


    imgFrameOne.mousePressed(frameNow);
    // imgFrameTwo.mousePressed(frameNow);
    // imgFrameThree.mousePressed(frameNow);


  } else {
    image(imgPicOne,160,windowHeight-400,120,160);
    image(imgPicThree,windowWidth -120 -160,windowHeight-400,120,160);

    imgFrameOne.hide();
    imgFrameTwo.hide();
    imgFrameThree.hide();

  }
  // click next
  nextButton.mousePressed(switchFrame);


}

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
}

function frameNow() {
  imgFrameX = imgX;
  imgFrameY = imgY;

  imgFrameW = 240*1.6;
  imgFrameH = 360*1.6;

  console.log('yes');
  console.log(imgX)
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