var designButton;
var historyButton;
var imgBox, imgHome, imgPic

function preload() {
    imgBox = loadImage('img/box.svg');
    imgHome = loadImage('img/home.svg');
    imgPic = loadImage('img/image.svg');


}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(66, 245, 218);

    designButton = createButton('DESIGN');
    designButton.size(600,200);
    designButton.style('font-size','48px','stroke','red','text-color','grey');
    designButton.position(windowWidth * 1/2 - designButton.width / 2, windowHeight * 1/3 - designButton.height);
    designButton.mousePressed(openLinkDesign);



    historyButton = createButton('HISTORY');
    historyButton.size(600,200);
    historyButton.style('font-size','48px','stroke','red','text-color','grey');
    historyButton.position(windowWidth * 1/2 - historyButton.width / 2, windowHeight * 1/2 - historyButton.height);
    historyButton.mousePressed(openLinkHistory);

    // bottom navi
    fill(255);
    noStroke();
    rect(0,windowHeight-200,windowWidth,200);
    image(imgHome,50,windowHeight-150,80,80);
    image(imgPic,windowWidth * 1/2 - 40,windowHeight-150,80,80);
    image(imgBox,windowWidth-50-80,windowHeight-150,80,80);

}

function draw() {
    
}


function openLinkDesign() {
    window.open("indexPageThree.html","_self")
  }


  function openLinkHistory() {
    window.open("indexPageHistory.html","_self")
  }