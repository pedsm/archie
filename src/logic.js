const mm = require('music-metadata');
const util = require('util')

function parse(file) {
    mm.parseFile(file, {native: true})
        .then((metadata) => {
            console.log(metadata)
            let filename = file.split('/')[file.split('/').length - 1]
            content.innerHTML = `
                <li class="list-group-item">${filename}
                <span class="badge badge-${metadata.format.bitrate/1000 > 192 ? 'primary' : 'danger'} badge-pill"> ${metadata.format.bitrate/1000}k</span>
                </li>
                ${content.innerHTML}
            ` 
        })
        .catch((err) => {
            console.error(err.message);
        });
}


document.ondragover = document.ondrop = (e) => {
    e.preventDefault()
}

document.body.ondrop = (e) => {
    [...e.dataTransfer.files].map(a => parse(a.path))
    e.preventDefault()
}

