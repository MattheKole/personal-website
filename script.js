const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;
const aboutSection = document.querySelector('section');

toggleBtn.addEventListener('click', () => {
  // Toggle background and text colors on body
  if (body.classList.contains('bg-gray-900')) {
    // Switch to light mode
    body.classList.replace('bg-gray-900', 'bg-white');
    body.classList.replace('text-white', 'text-black');
    
    // Also update the about section text colors (heading and paragraph)
    aboutSection.querySelector('h2').classList.replace('text-white', 'text-black');
    aboutSection.querySelector('p').classList.replace('text-white', 'text-gray-800');
  } else {
    // Switch back to dark mode
    body.classList.replace('bg-white', 'bg-gray-900');
    body.classList.replace('text-black', 'text-white');

    // Revert the about section text colors
    aboutSection.querySelector('h2').classList.replace('text-black', 'text-white');
    aboutSection.querySelector('p').classList.replace('text-gray-800', 'text-white');
  }
});
