var ham = document.getElementsByClassName('hamburger');


function loadPanel() {
    var panel = document.getElementById('links');
    panel.classList.toggle('nav-links');
    panel.classList.toggle('panel');
    console.log(panel.className);
    console.log(panel);
    console.log(panel.classList)
}
