function preload() {
    imgFrameOne = loadImage('img/picFrameOne.png');
    imgFrameTwo = loadImage('img/picFrameTwo.png');
    imgFrameThree = loadImage('img/picFrameThree.png');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(255,245,235);

    homeButton = createImg('img/home.png','home');
    artButton = createImg('img/art.png','home');
    frameButton = createImg('img/frameActive.png','home');


    fill(131,197,190);
    noStroke();
    rect(0,0,windowWidth,200);

    fill(0);
    textSize(64);
    
    text('Frames and Displays', windowWidth * 1/2 -280, 120);

    image(imgFrameOne,50,300,240,360);
    
    textSize(48);
    text('Classic Mental Frame',400,350);
    textSize(32);
    text('Amount: 15',400,400);
    text('Dimensions: 2′ 2″ x 1′ 9″',400,450);
    text('Materials: Metal, Aluminum',400,500);
    text('Style: Classic',400,550);
    text('Archieve No.7654321',400,600);



    
    image(imgFrameTwo,50,750,240,360);
    textSize(48);
    text('Wood Frame',400,800);
    textSize(32);
    text('Amount: 20',400,850);
    text('Dimensions: 1′ 9″ x 1′ 3″',400,900);
    text('Materials:  Wood, Oak',400,950);
    text('Style: Traditional, Casual',400,1000);
    text('Archieve No.7654321',400,1050);

    image(imgFrameThree,50,1200,240,360);
    textSize(48);
    text('Wood Frame',400,1250);
    textSize(32);
    text('Amount: 3',400,1300);
    text('Dimensions: 1′ 6″ x 1′ 3″',400,1350);
    text('Materials: pine',400,1400);
    text('Style: Traditional, Casual',400,1450);
    text('Archieve No.7654321',400,1500);


    






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
    window.open("indexPageMain.html","_self")
}