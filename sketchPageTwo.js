var designButton;
var historyButton;
var imgBox, imgHome, imgPic

function preload() {
    // imgBox = loadImage('img/box.svg');
    // imgHome = loadImage('img/home.svg');
    // imgPic = loadImage('img/image.svg');


}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(66, 245, 218);

      // img = createImg('img/test.png','testImag');
    designButton = createImg('img/designButton2.png','designButton');
    historyButton = createImg('img/historyButton2.png','historyButton');
    // imgFrameThree = createImg('img/picFrameThree.png','imgFrameThree');

    homeButton = createImg('img/home.png','home');
    artButton = createImg('img/art.png','home');
    frameButton = createImg('img/frame.png','home');




    // designButton = createButton('DESIGN');
    // designButton.size(600,200);
    // designButton.style('font-size','48px','stroke','red','text-color','grey');
    // designButton.position(windowWidth * 1/2 - designButton.width / 2, windowHeight * 1/3 - designButton.height);
    // designButton.mousePressed(openLinkDesign);



    // historyButton = createButton('HISTORY');
    // historyButton.size(600,200);
    // historyButton.style('font-size','48px','stroke','red','text-color','grey');
    // historyButton.position(windowWidth * 1/2 - historyButton.width / 2, windowHeight * 1/2 - historyButton.height);
    // historyButton.mousePressed(openLinkHistory);

    // main navi
    designButton.size(600,320)
    designButton.position(windowWidth * 1/2 - designButton.width / 2, windowHeight * 1/3 - designButton.height)
    designButton.mousePressed(openLinkDesign)

    historyButton.size(600,320)
    historyButton.position(windowWidth * 1/2 - historyButton.width / 2, windowHeight * 3/5 - historyButton.height)
    historyButton.mousePressed(openLinkHistory)


    // bottom navi

    fill(255);
    noStroke();
    rect(0,windowHeight-200,windowWidth,200);

    homeButton.size(100,100);
    homeButton.position(100,windowHeight-150);

    artButton.size(100,100);
    artButton.position(windowWidth * 1/2 - 40,windowHeight-150);
    artButton.mousePressed(openLinkArt);

    frameButton.size(100,100);
    frameButton.position(windowWidth-100-80,windowHeight-150);
    frameButton.mousePressed(openLinkFrame);



}

function draw() {
    
}


function openLinkDesign() {
    window.open("indexPageThree.html","_self")
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