const mousePosition = document.getElementById('mouse-position');
const targetDivs = document.querySelectorAll('.container');
const rightdiv = document.querySelectorAll('.rightdiv');
const middiv = document.querySelectorAll('.middiv');

const body = document.body;

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    mousePosition.textContent = `Mouse X: ${mouseX}, Mouse Y: ${mouseY}`;
});


let isMouseInTargetDiv = false;

targetDivs.forEach(targetDiv => {
    targetDiv.addEventListener('mouseenter', () => {
        isMouseInTargetDiv = true;
        rightdiv.forEach((div) => {
            div.style.backdropFilter = 'blur(25px)';
        });
        middiv.forEach((div) => {
            div.style.backdropFilter = 'blur(25px)';
        });
    });

    targetDiv.addEventListener('mouseleave', () => {
        isMouseInTargetDiv = false;
        rightdiv.forEach((div) => {
            div.style.backdropFilter = 'blur(10px)';
        });
        middiv.forEach((div) => {
            div.style.backdropFilter = 'blur(10px)';
        });
    });
});

body.addEventListener('mouseenter', () => {
    window.color1 = new THREE.Color(0.969, 0.145, 0.522);
    window.color2 = new THREE.Color(0.298, 0.788, 0.941);
    init();
});

body.addEventListener('mouseleave', () => {
    window.color1 = new THREE.Color(0.349, 0.820, 0.008);
    window.color2 = new THREE.Color(0.953, 0.961, 0.125);
    init();
});




