var ham = document.getElementsByClassName('hamburger');
var panel = document.getElementById('links');

function loadPanel() {
    var panel = document.getElementById('links');
    var menu = document.getElementById('hamburger');

    if (panel.className === 'nav-links') {
        panel.classList.replace('nav-links', 'panel');
    } else {
        panel.classList.replace('panel', 'nav-links');
        panel.style.transition = 'max-height 1s'
    }
    
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.transition = 'max-height 1s';
        menu.style.transform = 'rotate(90deg)';  
    } else {
        panel.style.maxHeight = '250px';
        panel.style.transition = 'max-height 1s';
        panel.style.background = 'white';
        panel.style.color = '#304353';
        menu.style.transform = "rotate(180deg)";
    }
}

