function preload() {

    imgPicOne = loadImage('img/picOne.png');
    imgPicTwo = loadImage('img/picTwo.png');
    imgPicThree = loadImage('img/picThree.png');
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
    
    text('Artworks', windowWidth * 1/2 -160, 120);

    image(imgPicOne,50,windowHeight*1/2-800,240,360);
    
    textSize(48);
    text('Van Gogh self-portrait',400,windowHeight*1/2-750);
    textSize(32);
    text('Artist: Vincent van Gogh',400,windowHeight*1/2-680);
    text('Dimensions: 2′ 2″ x 1′ 9″',400,windowHeight*1/2-630);
    text('Created: September 1889',400,windowHeight*1/2-580);
    text('Periods: Post-Impressionism',400,windowHeight*1/2-530);
    text('Archieve No.123456',400,windowHeight*1/2-480);



    
    image(imgPicTwo,50,windowHeight*1/2-400,240,360);
    textSize(48);
    text('Lady with an Ermin',400,windowHeight*1/2-350);
    textSize(32);
    text('Artist: Leonardo da Vinci',400,windowHeight*1/2-280);
    text('Dimensions: 1′ 9″ x 1′ 3″',400,windowHeight*1/2-230);
    text('Created:  1489',400,windowHeight*1/2-180);
    text('Periods: High Renaissance',400,windowHeight*1/2-130);
    text('Archieve No.123456',400,windowHeight*1/2-80);

    image(imgPicThree,50,windowHeight*1/2,240,360);
    textSize(48);
    text('Girl with a Pearl Earring ',400,windowHeight*1/2-350+400);
    textSize(32);
    text('Artist: Johannes Vermeer',400,windowHeight*1/2-280+400);
    text('Dimensions: 1′ 6″ x 1′ 3″',400,windowHeight*1/2-230+400);
    text('Created: 1665',400,windowHeight*1/2-180+400);
    text('Periods: Dutch Golden Age',400,windowHeight*1/2-130+400);
    text('Archieve No.123456',400,windowHeight*1/2-80+400);


    // image(imgPicOne,50,windowHeight*1/2+400,240,360);
    // image(imgPicTwo,50,windowHeight*1/2+800,240,360);
    






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