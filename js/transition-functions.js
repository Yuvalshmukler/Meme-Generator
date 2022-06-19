function onAlignLeft() {
    setElignLeft()
    renderMeme()
}
function onAlignRight() {
    setElignRight()
    renderMeme()
}
function onAlignCenter() {
    setElignCenter()
    renderMeme()
}
function onChangeFillColor(elColor) {
    changeFillColor(elColor)
    renderMeme()
}
function onChangeStrokeColor(elColor) {
    changeStrokeColor(elColor)
    renderMeme()
}
function onAddLine() {
    updatePlaceholder()
    const line = addLine()
    if (!line) return
    const width = calcualteTextWidth(line)
    setLineWidth(width)
    renderMeme()
}
function onLineUp() {
    setLineUp()
    renderMeme()
}
function onLineDown() {
    setLineDown()
    renderMeme()
}
function onChangeFontSize(diff) {
    const line = changeFontSize(diff)
    const width = calcualteTextWidth(line)
    setLineWidth(width)
    renderMeme()
}
function onDeleteLine() {
    clearPlaceholder()
    deleteLine()
    renderMeme()
}
function onInputText(text) {
    isImput = true
    const line = setLineText(text)
    const width = calcualteTextWidth(line)
    setLineWidth(width)
    console.log('width', width)
    renderMeme()
}
function onSwitchLines() {
    switchLines()
    renderMeme()
}
function onChangeFontFamily(font) {
    const line = changeFontFamily(font)
    const width = calcualteTextWidth(line)
    setLineWidth(width)
    renderMeme()
}
