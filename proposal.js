const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const hintText = document.getElementById('hintText');

let clickCount = 0;
const messages = [
    "Wait, what? 🤨",
    "Wrong button! ❌",
    "Are you sure? 🥺",
    "Try again... 🙄",
    "Last chance! 😤"
];

// Falling Hearts Animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 400);

// "No" Button Interaction
noBtn.addEventListener('click', () => {
    if (clickCount < 5) {
        hintText.textContent = messages[clickCount];
        clickCount++;
        
        // Shrink No, Grow Yes
        noBtn.style.transform = `scale(${1 - clickCount * 0.15})`;
        yesBtn.style.transform = `scale(${1 + clickCount * 0.35})`;
    } 
    
    if (clickCount >= 5) {
        noBtn.style.display = 'none'; // Disappears completely after 5 clicks
        hintText.textContent = "Only one choice now! You're stuck with me.";
    }
});

// "Yes" Button Interaction
yesBtn.addEventListener('click', () => {
    window.location.href = 'carousel.html';
});
