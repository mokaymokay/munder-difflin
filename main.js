const sectionTeam = document.getElementById('team');
const sectionAbout = document.getElementById('about-us');
const sectionClients = document.getElementById('clients');

function scroll(pixels, section) {
  if (window.scrollY > pixels) {
    section.className = 'show';
  } else {
    section.className = 'fade';
  }
}

window.addEventListener('scroll', function() {
  scroll(600, sectionTeam);
  scroll(1400, sectionAbout);
  scroll(2200, sectionClients);
});
