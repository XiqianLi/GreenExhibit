function preload() {

    imgPicOne = loadImage('img/picOne.png');
    imgPicTwo = loadImage('img/picTwo.png');
    imgPicThree = loadImage('img/picThree.png');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(255,245,235);

    // create bottom navi buttons
    homeButton = createImg('img/home.png','home');
    artButton = createImg('img/artActive.png','home');
    frameButton = createImg('img/frame.png','home');
    createNew = createImg('img/create.png','create');

    // header
    fill(131,197,190);
    noStroke();
    rect(0,0,windowWidth,200);

    fill(0);
    textSize(64);
    text('Artworks', windowWidth * 1/2 -140, 120);

    // artworks
    image(imgPicOne,50,300,240,360);
    textSize(48);
    text('Van Gogh self-portrait',400,350);
    textSize(32);
    text('Artist: Vincent van Gogh',400,400);
    text('Dimensions: 2′ 2″ x 1′ 9″',400,450);
    text('Created: September 1889',400,500);
    text('Periods: Post-Impressionism',400,550);
    text('Archieve No.123456',400,600);

    image(imgPicTwo,50,750,240,360);
    textSize(48);
    text('Lady with an Ermin',400,800);
    textSize(32);
    text('Artist: Leonardo da Vinci',400,850);
    text('Dimensions: 1′ 9″ x 1′ 3″',400,900);
    text('Created:  1489',400,950);
    text('Periods: High Renaissance',400,1000);
    text('Archieve No.123456',400,1050);

    image(imgPicThree,50,1200,240,360);
    textSize(48);
    text('Girl with a Pearl Earring ',400,1250);
    textSize(32);
    text('Artist: Johannes Vermeer',400,1300);
    text('Dimensions: 1′ 6″ x 1′ 3″',400,1350);
    text('Created: 1665',400,1400);
    text('Periods: Dutch Golden Age',400,1450);
    text('Archieve No.123456',400,1500);

    // draw bottom navi
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

// when I use .mousePressed() to call a function, it is hard to call a function with parameters, so I need to create them separately
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

function popUp() {
  fill(255);
  rect(windowWidth*1/2-400,200,800,1200);
  fill(0);
  textSize(48);
  text("Inventory Artwork",windowWidth*1/2-200,300);


  inpuArtworkType = createInput('','text');
  inpuArtworkType.size(600,80);
  inpuArtworkType.style('font-size','48px','text-color','grey');
  inpuArtworkType.position(windowWidth * 1/2 - inpuArtworkType.width / 2, 450);
  textSize(36);
  text("Enter Artwork Type:",windowWidth * 1/2 - inpuArtworkType.width / 2, 430);

  inpuArtworkDimension = createInput('','text');
  inpuArtworkDimension.size(600,80);
  inpuArtworkDimension.style('font-size','48px','text-color','grey');
  inpuArtworkDimension.position(windowWidth * 1/2 - inpuArtworkDimension.width / 2, 650);
  textSize(36);
  text("Enter Artwork Dimension:",windowWidth * 1/2 - inpuArtworkDimension.width / 2, 630);

  inpuCreateDate = createInput('','date');
  inpuCreateDate.size(600,80);
  inpuCreateDate.style('font-size','36px','text-color','grey');
  inpuCreateDate.position(windowWidth * 1/2 - inpuCreateDate.width / 2, 850);
  textSize(36);
  text("Enter Date of Creation:",windowWidth * 1/2 - inpuCreateDate.width / 2, 830);

  // textSize(36);
  // text("Select Material:",windowWidth * 1/2 - inpuFrameDimension.width / 2, 830);
  // selDi = createSelect();
  // selDi.position(windowWidth * 1/2 - inpuFrameDimension.width / 2, 850);
  // selDi.style('font-size','36px','text-color','grey');
  // selDi.size(300,80);
  // selDi.option('Wood, Oak');
  // selDi.option('Metal, Aluminum');
  // selDi.option('Wood, Pine');
  // selDi.selected('Wood, Cedar');

  text("Select Periods:",windowWidth * 1/2 - inpuCreateDate.width / 2, 1000);
  selDi = createSelect();
  selDi.position(windowWidth * 1/2 - inpuCreateDate.width / 2, 1020);
  selDi.style('font-size','36px','text-color','grey');
  selDi.size(300,80);
  selDi.option('Impressionsim');
  selDi.option('Dutch Golden Age');
  selDi.option('High Renaissance');
  selDi.selected('Post-Impressionsim');

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

function reset() {
  window.open("indexPageFrame.html","_self")
}