'use strict'
var gElCanvas
var gCtx
var gCurrImg

function init() {
    gElCanvas = document.getElementById('myCanvas');
    gCtx = gElCanvas.getContext('2d');
    renderImgs()
}

function renderImgs() {
    var imgs = getGImgs()
    var elGalleryContainer = document.querySelector('.gallery-container')
    var strHtml = ``
    imgs.forEach(img => {
        strHtml += `<img class="img" id="${img.id}" onClick = onShowEditor(this) src="${img.url}">`
    })
    elGalleryContainer.innerHTML = strHtml
}

function onShowEditor(img) {
    document.querySelector('.gallery-container').style.display = 'none'
    document.querySelector('.search-container').style.display = 'none'
    document.querySelector('.editor-tools').style.display = 'flex'
    document.querySelector('.editor-container').style.display = 'flex'
    gElCanvas = document.getElementById('myCanvas').style.display = 'flex'
    setLineTxt('Enter your text here')
    gCurrImg = img
    renderMeme()

}
function onInputText(text) {
    setLineTxt(text)
    renderMeme()
}
function drawText(text, x, y, color) {
    gCtx.lineWidth = 0;
    gCtx.strokeStyle = color;
    gCtx.fillStyle = 'white';
    gCtx.font = '30px Arial';
    gCtx.fillText(text = text, x, y);//Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y);//Draws (strokes) a given text at the given (x, y) position; */
}
function renderMeme() {
    setMeme(gCurrImg)
    var color = document.querySelector('.color-input').value
    var meme = getMeme()
    console.log('meme', meme);
    gCtx.drawImage(gCurrImg, 0, 0)
    var text = meme.lines.text
    /* console.log(text); */
    drawText(text, 20, 40, color)
}

/* function onChangeFontSize(diff) {
    setFontSize(diff)
    console.log(diff);
    renderMeme()
}
 */

/* function onAddLine() {
    var color = document.querySelector('.color-input').value
    addLine(color,text);
    renderMeme();
 }
 */ 
