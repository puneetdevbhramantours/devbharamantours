// Get all the navigation links and tour links
const navLinks = document.querySelectorAll('.tab-link');
const tourLinks = document.querySelectorAll('.tour-link');

// Get all the tab content elements
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listeners to navigation links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Hide all tab content elements
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    
    // Show the tab content element with the corresponding ID
    const tabId = link.getAttribute('href').slice(1);
    const tabContent = document.getElementById(tabId);
    tabContent.classList.add('active');
  });
});

// Add click event listeners to tour links
tourLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    
    // Hide all tab content elements
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    
    // Show the tab content element with the corresponding ID
    const tabId = link.getAttribute('href').slice(1);
    const tabContent = document.getElementById(tabId);
    tabContent.classList.add('active');
  });
});

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});