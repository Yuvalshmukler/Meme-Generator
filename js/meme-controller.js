'use strict'
var gCanvas
var gCtx
var gStartPos
var isUpload = false
var isImput = false
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function init() {
    gCanvas = document.getElementById('myCanvas');
    gCtx = gCanvas.getContext('2d');
    window.addEventListener('resize', resizeCanvas)
    addListeners()
    addMouseListeners()
    renderImgs()
}
function updatePlaceholder() { ///later
    var elInput = document.querySelector('.line-input')
    if (!isImput) elInput.value = ''
}
function clearPlaceholder() {
    var elInput = document.querySelector('.line-input')
    elInput.value = ''
}
function renderMeme() {
    isImput = false
    var meme = getMeme()
    var img = getImg(meme.selectedImgId)
    var currImg = new Image()
    currImg.src = img.url
    gCanvas.height = (gCanvas.width * currImg.height) / currImg.width
    gCtx.drawImage(currImg, 0, 0, gCanvas.width, gCanvas.height)
    meme.lines.forEach(line => {
        drawText(line)
    })
    drawLineArea()
}
/* function onUploadImg() {
    isUpload = true
    renderMeme()
  }
 */
function drawText(line) {
    gCtx.lineWidth = 0;
    gCtx.strokeStyle = line.strokeColor
    gCtx.textAlign = line.align
    gCtx.fillStyle = line.fillColor
    gCtx.font = `${line.fontSize}px ${line.font}`
    gCtx.fillText(`${line.text}`, `${line.pos.x}`, `${line.pos.y}`)
    gCtx.strokeText(`${line.text}`, `${line.pos.x}`, `${line.pos.y}`)

}
function drawLineArea() {
    var lineArea = getLineArea()
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'white'
    gCtx.strokeRect(lineArea.x - 5, lineArea.y - lineArea.height + 3, lineArea.width + 5, lineArea.height)
    gCtx.stroke()
}
function calcualteTextWidth(line) {
    gCtx.font = `${line.fontSize}px ${line.font}`
    const width = gCtx.measureText(line.text).width
    return width
}
function getElImg() {
    var meme = getMeme()
    var img = getImg(meme.selectedImgId)
    var currImg = new Image()
    currImg.src = img.url
    return currImg
}
function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    let img = getElImg()
    let height = img.naturalHeight
    let width = img.naturalWidth
    if (window.innerWidth < 608) {
        height = 350
        width = 350
    }
    if (window.innerWidth < 450) {
        height = 300
        width = 300
    }
    if (window.innerWidth < 380) {
        height = 220
        width = 220
    }
    gCanvas.width = width
    gCanvas.height = height
    renderMeme()
}


///LISTENERS
function addListeners() {
    addMouseListeners()
    addTouchListeners()
    //Listen for resize ev 
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })
}
function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}
function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}
function onDown(ev) {
    const pos = getEvPos(ev)
    const lineIdx = getLineClicked(pos)
    if (lineIdx === -1) return
    setSelectedLine(lineIdx)
    setLineDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
    renderMeme()
}
function moveLine(dx, dy) {
    gStartPos.x += dx
    gStartPos.y += dy
}
function onMove(ev) {
    const line = getSelectedLine()
    if (!line.isDrag) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveLine(dx, dy)
    gStartPos = pos
    line.pos.x += dx
    line.pos.y += dy
    renderMeme()
}
function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grab'
}
function getEvPos(ev) {
    //Gets the offset pos , the default pos
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // Check if its a touch ev
    if (gTouchEvs.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}
////////////////////////////////////////
function toggleMenu(elBtn) {
    //if(gIsOpen) return
    var menuBtn = document.querySelector('.menu')
    document.body.classList.toggle('open-menu')
    document.body.classList.contains('open-menu') ? menuBtn.innerText = 'X' : menuBtn.innerText = '☰';
}
function onDownloadMeme(elLink) {
    console.log('hi')
    var imgContent = gCanvas.toDataURL()// image/jpeg the default format
    /* console.log('hola',imgContent) */
    elLink.href = imgContent
    elLink.download = 'My meme'
}
