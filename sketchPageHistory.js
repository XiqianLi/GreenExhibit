var imgPicOne, imgPicTwo;
var backButton;
var homeButton,artButton,frameButton;


function preload() {
    // imgPicTwo = loadImage('img/mockGallery.png');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(240);

    homeButton = createImg('img/home.png','home');
    artButton = createImg('img/art.png','home');
    frameButton = createImg('img/frame.png','home');


    fill(250);
    noStroke();
    rect(0,0,windowWidth,200);

    fill(0);
    textSize(64);
     
    text('Saved History', windowWidth * 1/2 -160, 120);

    imgPicOne = createImg('img/mockPre.png','mockPre');
    imgPicOne.size(240,360);
    imgPicOne.position(50,windowHeight*1/2-800);
    imgPicOne.mousePressed(openImage)

    imgPicTwo = createImg('img/mockGallery.png','mockGaller');
    imgPicTwo.size(windowWidth,windowHeight);
    imgPicTwo.position(0,0);
    imgPicTwo.hide()

    
    textSize(48);
    text('10/07/2021',400,windowHeight*1/2-750);
    textSize(32);
    text('Location: , VBT 125, CSU East Bay ',400,windowHeight*1/2-680);
    text('Wall No: 18',400,windowHeight*1/2-630);
    text('Artwork Name: Lady with an Ermin',400,windowHeight*1/2-580);
    text('Artwork Archieve No.123456',400,windowHeight*1/2-480);
    text('Frame: Oak, Wood Frame',400,windowHeight*1/2-530);
    text('Frame Archieve No.654321',400,windowHeight*1/2-430);


    // bottom navi

    fill(255);
    noStroke();
    rect(0,windowHeight-200,windowWidth,200);
    
    homeButton.size(100,100);
    homeButton.position(100,windowHeight-150);
    homeButton.mousePressed(openLinkTwo);
    
    artButton.size(100,100);
    artButton.position(windowWidth * 1/2 - 40,windowHeight-150);
    artButton.mousePressed(openLinkArt);
    
    frameButton.size(100,100);
    frameButton.position(windowWidth-100-80,windowHeight-150);
    frameButton.mousePressed(openLinkFrame);
}

function draw() {

}

function openLinkHistory() {
    window.open("indexPageHistory.html","_self")
  }


  function openLinkArt() {
    window.open("indexPageArt.html","_self")
  }

  function openLinkFrame() {
    window.open("indexPageFrame.html","_self")
  }

function openLinkTwo() {
    window.open("indexPageTwo.html","_self")
}


function openImage() {
    imgPicTwo.show();

    // homeButton.hide();
    // artButton.hide();
    // frameButton.hide();
    
    backButton = createButton('BACK');
    backButton.size(200,100);
    backButton.style('font-size','36px');
    backButton.position(100, windowHeight * 1/30);
    backButton.mousePressed(closeImage)
}

function closeImage() {
    imgPicTwo.hide();

    // imgPicOne.show();
    // homeButton.show();
    // artButton.show();
    // frameButton.show();

}