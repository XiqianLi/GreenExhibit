function preload() {
    imgFrameOne = loadImage('img/picFrameOne.png');
    imgFrameTwo = loadImage('img/picFrameTwo.png');
    imgFrameThree = loadImage('img/picFrameThree.png');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(240);

    homeButton = createImg('img/home.png','home');
    artButton = createImg('img/art.png','home');
    frameButton = createImg('img/frameActive.png','home');


    fill(250);
    noStroke();
    rect(0,0,windowWidth,200);

    fill(0);
    textSize(64);
    
    text('Frames and Displays', windowWidth * 1/2 -280, 120);

    image(imgFrameOne,50,windowHeight*1/2-800,240,360);
    
    textSize(48);
    text('Classic Mental Frame',400,windowHeight*1/2-750);
    textSize(32);
    text('Amount: 15',400,windowHeight*1/2-680);
    text('Dimensions: 2′ 2″ x 1′ 9″',400,windowHeight*1/2-630);
    text('Materials: Metal, Aluminum',400,windowHeight*1/2-580);
    text('Style: Classic',400,windowHeight*1/2-530);
    text('Archieve No.7654321',400,windowHeight*1/2-480);



    
    image(imgFrameTwo,50,windowHeight*1/2-400,240,360);
    textSize(48);
    text('Wood Frame',400,windowHeight*1/2-350);
    textSize(32);
    text('Amount: 20',400,windowHeight*1/2-280);
    text('Dimensions: 1′ 9″ x 1′ 3″',400,windowHeight*1/2-230);
    text('Materials:  Wood, Oak',400,windowHeight*1/2-180);
    text('Style: Traditional, Casual',400,windowHeight*1/2-130);
    text('Archieve No.7654321',400,windowHeight*1/2-80);

    image(imgFrameThree,50,windowHeight*1/2,240,360);
    textSize(48);
    text('Girl with a Pearl Earring ',400,windowHeight*1/2-350+400);
    textSize(32);
    text('Amount: 3',400,windowHeight*1/2-280+400);
    text('Dimensions: 1′ 6″ x 1′ 3″',400,windowHeight*1/2-230+400);
    text('Materials: 1665',400,windowHeight*1/2-180+400);
    text('Style: Traditional, Casual',400,windowHeight*1/2-130+400);
    text('Archieve No.7654321',400,windowHeight*1/2-80+400);


    






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