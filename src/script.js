document.addEventListener("keypress", function (e) {
    switch (e.code) {
        case 'KeyA':
        case 'KeyS':
        case 'KeyD':
        case 'KeyF':
        case 'KeyG':
        case 'KeyH':
        case 'KeyJ':
        case 'KeyW':
        case 'KeyE':
        case 'KeyT':
        case 'KeyU':
        case 'KeyY':
            let audio = new Audio(`audio/${e.key.toUpperCase()}.mp3`);
            audio.play();
        default:
            break;
    }
})