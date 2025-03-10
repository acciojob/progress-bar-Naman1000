//your JS code here. If required.

const circles = document.querySelectorAll('.circle');
const progressLine = document.createElement('div'); 
progressLine.classList.add('progress-line-fill'); 
document.querySelector('.progress-bar').appendChild(progressLine);

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentStep = 1;

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const progressWidth = ((currentStep - 1) / (circles.length - 1)) * 100;
    progressLine.style.width = `${progressWidth}%`;

    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === circles.length;
}

nextBtn.addEventListener('click', () => {
    if (currentStep < circles.length) {
        currentStep++;
        updateProgress();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgress();
    }
});
