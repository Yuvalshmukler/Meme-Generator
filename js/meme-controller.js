
function init() {
    renderImgs()
}

function renderMeme(){
    
}

function renderImgs() {
    var imgs = getGImgs()
    var elgridContainer = document.querySelector('.grid-container')
    var strHtml = ``
    imgs.forEach(img => {
        strHtml += `<div class="img img-${img.id}"onClick = onShowEditor(this)><img src="${img.url}"></div>`
    })
    elgridContainer.innerHTML = strHtml
}


