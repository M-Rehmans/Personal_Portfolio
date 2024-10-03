const toggleButton = document.getElementsByClassName('navbar-logo')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links');
    toggleButton.addEventListener('click', function () {
        for (var i = 0; i < navbarLinks.length; i++)
            navbarLinks[i].classList.toggle('Toggle-AYA');
    });

    // Active Links Code
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    };
  // For javascript button text change 
        const btn = document.getElementById('skillsBtn');
  let index = 0;
  const texts = ['JavaScript', 'Learning...']; // Texts to cycle through
  const colors = ['', 'white']; // Background colors corresponding to texts

  setInterval(() => {
    index = (index + 1) % texts.length; // Cycle through the array
    btn.textContent = texts[index]; // Set button text
    btn.style.backgroundColor = colors[index]; // Set button background color
    btn.style.animation = 'changeText 1s ease-in-out'; // Apply the text change animation
  }, 800); // Change text every 2 seconds (2000 milliseconds)