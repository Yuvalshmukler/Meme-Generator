var gKeywordSearchCountMap = {}
var gImgs = []
var gMeme = {
    selectedImgId: 3,
    selectedLineIdx: 0,
    lines: [
        {
            text: '',
            size: 20,
            fillColor: 'white',
            strokeColor: 'black',
            align: 'start',
            fontSize: 30,
            pos: { x: 20, y: 40 },
        }
    ]
}

function setMeme(img) {
    gMeme.id = img.id
    console.log(gMeme.id);
}
/* function setFontSize(diff) {
    console.log(gMeme.lines.size);
    gMeme.lines.size += diff
}
 */
///CREATING FUNCTION
function createImgs() {
    for (var i = 1; i < 17; i++) {
        var img = { id: i, url: `img/${i}.jpg`, key: null }
        gImgs.push(img)
    }
    //console.log(gImgs);

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
    gImgs.forEach((img, idx) => {
        img.key = keyWords[idx]
    });
}

/* function addLine() {
    var line = {
        txt: 'hello',
        size: 30,
        fillColor: 'white',
        strokeColor: 'black',
        align: 'left',
        fontSize: 30,
        pox: { x: 20, y: 80 }
    };
    /* console.log(line);
    gMeme.lines.push(line);
    console.log(gMeme);
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
    */

function setLineTxt(txt) {
    /* console.log(txt); */
    gMeme.lines.text = txt
    /* console.log(gMeme.lines.text) */;
}

function getMeme() {
    return gMeme
}


//FOR CONTROLLER
function getGImgs() {
    createImgs()
    return gImgs
}
