function preload() {
    imgFrameOne = loadImage('img/picFrameOne.png');
    imgFrameTwo = loadImage('img/picFrameTwo.png');
    imgFrameThree = loadImage('img/picFrameThree.png');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(255,245,235);

    // create bottom navi buttons
    homeButton = createImg('img/home.png','home');
    artButton = createImg('img/art.png','home');
    frameButton = createImg('img/frameActive.png','home');
    createNew = createImg('img/create.png','create');

    // create header
    fill(131,197,190);
    noStroke();
    rect(0,0,windowWidth,200);

    fill(0);
    textSize(64);
    
    text('Frames', windowWidth * 1/2 -100, 120);

    // draw frames
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
    text('Materials: Wood, Pine',400,1400);
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

    // create button
    createNew.size(200,200);
    createNew.position(windowWidth * 1/2 - 100,windowHeight-450);
    createNew.mousePressed(popUp);
}

function draw() {

}

function openLinkDisplay() {
    window.open("indexPageDisplay.html","_self")
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

function reset() {
  window.open("indexPageFrame.html","_self")
}


function popUp() {
  fill(255);
  rect(windowWidth*1/2-400,200,800,1200);
  fill(0);
  textSize(48);
  text("Inventory Frame",windowWidth*1/2-200,300);


  inpuFrameType = createInput('','text');
  inpuFrameType.size(600,80);
  inpuFrameType.style('font-size','48px','text-color','grey');
  inpuFrameType.position(windowWidth * 1/2 - inpuFrameType.width / 2, 450);
  textSize(36);
  text("Enter Frame Type:",windowWidth * 1/2 - inpuFrameType.width / 2, 430);

  inpuFrameDimension = createInput('','text');
  inpuFrameDimension.size(600,80);
  inpuFrameDimension.style('font-size','48px','text-color','grey');
  inpuFrameDimension.position(windowWidth * 1/2 - inpuFrameDimension.width / 2, 650);
  textSize(36);
  text("Enter Frame Dimension:",windowWidth * 1/2 - inpuFrameDimension.width / 2, 630);


  textSize(36);
  text("Select Material:",windowWidth * 1/2 - inpuFrameDimension.width / 2, 830);
  selDi = createSelect();
  selDi.position(windowWidth * 1/2 - inpuFrameDimension.width / 2, 850);
  selDi.style('font-size','36px','text-color','grey');
  selDi.size(300,80);
  selDi.option('Wood, Oak');
  selDi.option('Metal, Aluminum');
  selDi.option('Wood, Pine');
  selDi.selected('Wood, Cedar');

  text("Select Style:",windowWidth * 1/2 - inpuFrameDimension.width / 2, 1000);
  selDi = createSelect();
  selDi.position(windowWidth * 1/2 - inpuFrameDimension.width / 2, 1020);
  selDi.style('font-size','36px','text-color','grey');
  selDi.size(300,80);
  selDi.option('Traditional');
  selDi.option('Casual');
  selDi.option('Classic');
  selDi.selected('Mondern');

  let col = color(131,197,190); 
  submitButton = createButton('Submit');
  submitButton.size(300,100);
  submitButton.style('font-size','48px',);
  submitButton.style('background-color',col);
  submitButton.position(windowWidth * 1/2 + 50, 1180);

  cancelButton = createButton('Cancel');
  cancelButton.size(300,100);
  cancelButton.style('font-size','48px',);
  cancelButton.style('background-color','#FFFFFF');
  cancelButton.position(windowWidth * 1/2 - cancelButton.width - 50, 1180);
  cancelButton.mousePressed(reset);

  createNew.hide()

}