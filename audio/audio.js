function preloadImages() {
    const images = [
        'slider/s2.webp',
        'slider/s1.webp',
        // Add the paths to all your images here
    ];

    for (const imagePath of images) {
        const img = new Image();
        img.src = imagePath;
    }
}

// Call the preloadImages function when the page loads
window.addEventListener('load', preloadImages);


const slider = document.querySelector('.slider'); 
const slides = slider.querySelectorAll('li'); 

// Store the total number of images 
const slideCount = slides.length; 
let activeSlide = 0; 

// To change the images dynamically every 
// 5 Secs, use SetInterval() method 
setInterval(() => { 
	slides[activeSlide].classList.remove('active'); 
	activeSlide++; 
	if (activeSlide === slideCount) { 
		activeSlide = 0; 
	} 
	slides[activeSlide].classList.add('active'); 
}, 2000);




// Get all video containers
const videoContainers = document.querySelectorAll('.video-container');

// Loop through each video container and add event listeners
videoContainers.forEach((container) => {
    const video = container.querySelector('video');
    
    container.addEventListener('mouseenter', () => {
        video.play(); // Play the video on hover
    });
    
    container.addEventListener('mouseleave', () => {
        video.pause(); // Pause the video when the mouse leaves
        // video.currentTime = 0; // Reset video to the beginning
    });
});


// 
const countDownClock = (number = 100, format = 'seconds') => {
  
    const d = document;
    const daysElement = d.querySelector('.days');
    const hoursElement = d.querySelector('.hours');
    const minutesElement = d.querySelector('.minutes');
    const secondsElement = d.querySelector('.seconds');
    let countdown;
    convertFormat(format);
    
    
    function convertFormat(format) {
      switch(format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);
          case 'hours':
          return timer(number * 60 * 60);
        case 'days':
          return timer(number * 60 * 60 * 24);             
      }
    }
  
//     function timer(seconds) {
//       const now = Date.now();
//       const then = now + seconds * 1000;
  
//       countdown = setInterval(() => {
//         const secondsLeft = Math.round((then - Date.now()) / 1000);
  
//         if(secondsLeft <= 0) {
//           clearInterval(countdown);
//           return;
//         };
  
//         displayTimeLeft(secondsLeft);
  
//       },1000);
//     }
  
//     function displayTimeLeft(seconds) {
//       daysElement.textContent = Math.floor(seconds / 86400);
//       hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
//       minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
//       secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
//     }
//   }
}