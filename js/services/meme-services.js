var gCanvas = document.getElementById('myCanvas');
var gCtx = gCanvas.getContext('2d');
var gKyes = ['famous', 'cute', 'animals', 'funny', 'smiley', 'sleepy']
var gKeywords = {};
var gImgs = []
var gMeme = {
    selectedImgId: 3,
    selectedLineIdx: 0,
    lines: [
        {
            text: 'Enter your text here',
            size: 20,
            isDrag: false,
            font: 'Impact',
            fillColor: 'white',
            width: 250,
            strokeColor: 'black',
            align: 'start',
            fontSize: 30,
            pos: { x: 20, y: 50 },
        }
    ]
}
function changeFillColor(color) {
    const line = getSelectedLine()
    line.fillColor = color
    /*  console.log(line.fillColor) */
}
function changeStrokeColor(color) {
    const line = getSelectedLine()
    line.strokeColor = color
}
function deleteLine() {
    if (gMeme.lines.length === 1) return
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}
function changeFontSize(diff) {
    const line = getSelectedLine()
    if (line.fontSize > 70 && diff === +10) return
    if (line.fontSize === 20 && diff === -10) return
    line.fontSize += diff
    return line
}
function setLineDown() {
    const line = getSelectedLine()
    if (line.pos.y === 20) return
    line.pos.y -= 15
    console.log(line.pos);
}
function switchLines() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
    }
}
function setLineUp() {
    const line = getSelectedLine()
    if (line.pos.y === 485) return
    line.pos.y += 15
    /* console.log(line.pos.y); */
    console.log(line.pos);
}
function createImgs() {
    for (var i = 1; i < 20; i++) {
        var img = { id: i, url: `img/${i}.jpg`, key: null }
        gImgs.push(img)
    }
    const keyWords = [
        ['famous', 'funny'],
        ['cute', 'animals'],
        ['cute', 'sleepy', 'animals'],
        ['cute', 'sleepy', 'animals'],
        ['cute', 'funny'],
        ['famous', 'funny'],
        ['cute', 'funny'],
        ['famous'],
        ['cute', 'funny', 'smiley'],
        ['smiley', 'funny', 'famous'],
        ['funny'],
        ['famous'],
        ['famous', 'smiley'],
        ['famous'],
        ['famous'],
        ['funny', 'smiley'],
        /* ['famous'],
         ['famous'] */
    ]
/*     gImgs.forEach((img, idx) => {
        img['keywords'] = keywords[idx];
    });
 */
}

function addLine() {
    if (gMeme.lines.length > 2) return
    var y = gMeme.lines[gMeme.lines.length - 1].pos.y + 70
    var line = {
        text: 'hello',
        size: 30,
        isDrag: false,
        font: 'Impact',
        fillColor: 'white',
        strokeColor: 'black',
        align: 'left',
        fontSize: 30,
        pos: { x: 20, y: y }
    }
    gMeme.lines.push(line);
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
    return line
}
function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}
function setElignLeft() {
    const line = getSelectedLine()
    line.align = 'left'
    line.pos.x = 0
}
function setElignRight() {
    const line = getSelectedLine()
    line.align = 'right'
    line.pos.x = gCanvas.width - 5
}
function setElignCenter() {
    const line = getSelectedLine()
    line.align = 'center'
    line.pos.x = gCanvas.width / 2

}
function setLineWidth(width) {
    const line = getSelectedLine()
    line.width = width
}
function setLineText(txt) {
    const line = getSelectedLine()
    line.text = txt
    return line
}
function changeFontFamily(fontFamily) {
    const line = getSelectedLine()
    line.font = fontFamily
    return line
}
function setImg(imgId) {
    gMeme.selectedImgId = imgId
}
//FOR CONTROLLER
function getGImgs() {
    createImgs()
    return gImgs
}
function getImg(imgId) {
    return gImgs.find(img => img.id === imgId)
}
function getMeme() {
    return gMeme
}
function getLineArea(line = getSelectedLine()) {
    if (!gMeme.lines.length) return;
    return {
        x: line.pos.x,
        y: line.pos.y,
        width: line.width + 5,
        height: line.size + 5,
    };
}
function getLinePos(idx) {
    return gMeme.lines[idx]
}
function getLineClicked(pos) {
    var lineIdx = gMeme.lines.findIndex(line => {
        const lineArea = getLineArea(line)
        return lineArea.x < pos.x && lineArea.x + lineArea.width > pos.x && lineArea.y > pos.y && lineArea.y - lineArea.height

    })
    return lineIdx
}
function getLine() {
    return gMeme.lines[0]
}
function setLineDrag(isDrag) {
    const line = getSelectedLine()
    line.isDrag = isDrag
}
function setSelectedLine(lineIdx) {
    gMeme.selectedLineIdx = lineIdx
    return getSelectedLine()
}
function getKyes() {
    return gKyes
}