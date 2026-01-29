const welcome = document.getElementById('welcome');
const mainContent = document.getElementById('mainContent');

// Show welcome for 2 seconds, then fade out
setTimeout(() => {
  welcome.style.opacity = '0';  // fade out
  setTimeout(() => {
    welcome.style.display = 'none';
    mainContent.style.display = 'block';  // show main content
    document.body.style.overflow = 'auto'; // enable scrolling
  }, 2000); // matches CSS transition duration
}, 2000); // how long "Welcome" stays visible
