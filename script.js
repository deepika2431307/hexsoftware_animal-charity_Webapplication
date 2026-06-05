//ANIMATED COUNTER (for the hero stats)


//counter function that counts up from 0 to a target number over a specified duration
function animateCounter(elementId, targetNumber, duration) {
  const element = document.getElementById(elementId);
  let current = 0;

// How much to increase per step
  const stepTime = Math.abs(Math.floor(duration / targetNumber));

// Using  setInterval to increase the number in every few milliseconds
  const timer = setInterval(function () {
    current++;
    element.textContent = current;

// Add a plus sign after the number
    if (current >= targetNumber) {
      element.textContent = targetNumber + "+";
      clearInterval(timer); // stop the timer
    }
  }, stepTime);
}

//Wait for the page to load, then start the counters
window.addEventListener("load", function () {
  animateCounter("rescuedCount", 2100, 2000);  // count to 2100 in 2 seconds
  animateCounter("adoptedCount", 1500, 2000);  // count to 1500 in 2 seconds
  animateCounter("volunteerCount", 100, 2000); // count to 100 in 2 seconds
});

//HAMBURGER MENU (for mobile navigation)
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
//menu is opened and closed
  navLinks.classList.toggle("open");
});

//Close the menu when a link is clicked
const allNavLinks = document.querySelectorAll(".nav-links a");
allNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
}

//SCROLL TO TOP BUTTON
const scrollTopBtn = document.getElementById("scrollTop");

//after scrolling 300px then button is shown 
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

//Scroll smoothly to top 
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

//DONATION AMOUNT BUTTONS
const amountButtons = document.querySelectorAll(".amount-btn");
const customAmountInput = document.getElementById("customAmount");

// When an amount button is clicked, mark it as selected
amountButtons.forEach(function (button) {
  button.addEventListener("click", function () {

// Remove active class from all buttons
    amountButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

// Add active class to clicked button
    button.classList.add("active");
 
    customAmountInput.value = "";
  });
});

//remove selection from button when user type cutom amount
customAmountInput.addEventListener("input", function () {
  amountButtons.forEach(function (btn) {
    btn.classList.remove("active");
  });
});

//DONATION FORM SUBMISSION
function handleDonation() {

  const donorName = document.getElementById("donorName").value.trim();
  const donorEmail = document.getElementById("donorEmail").value.trim();
  const customAmount = document.getElementById("customAmount").value.trim();
  const successMsg = document.getElementById("successMsg");
  const donateBtn = document.getElementById("donateBtn");

  // Find selected amount (either from buttons or custom input)
  let selectedAmount = "";
  const activeBtn = document.querySelector(".amount-btn.active");
  if (activeBtn) {
    selectedAmount = activeBtn.dataset.amount;
  } else if (customAmount) {
    selectedAmount = customAmount;
  }
// Simple validation 

  // Check if name is entered
  if (donorName === "") {
    alert("Please enter your name! 😊");
    return;
  }

  // Check if email is entered and looks correct
  if (donorEmail === "" || !donorEmail.includes("@")) {
    alert("Please enter a valid email address! 📧");
    return;
  }

  // Check if amount is selected
  if (selectedAmount === "") {
    alert("Please select or enter a donation amount! 💰");
    return;
  }

  // Check if amount is a positive number
  if (parseInt(selectedAmount) <= 0) {
    alert("Please enter a valid donation amount! 💰");
    return;
  }

  //If all good,show success message

  //Change button text to show loading
  donateBtn.textContent = "Processing... ⏳";
  donateBtn.disabled = true;

  //simulate a 1.5 second delay 
  setTimeout(function () {
  //Show the success message
    successMsg.style.display = "block";

  //Update button text
    donateBtn.textContent = "Thank You! ❤️";
    donateBtn.style.backgroundColor = "#06d6a0"; // green color

  //Scroll to show the success message
    successMsg.scrollIntoView({ behavior: "smooth", block: "center" });

  //Clear the form after 4 seconds and reset button
    setTimeout(function () {
      document.getElementById("donorName").value = "";
      document.getElementById("donorEmail").value = "";
      document.getElementById("customAmount").value = "";
      successMsg.style.display = "none";
      donateBtn.textContent = "Donate Now ❤️";
      donateBtn.disabled = false;
      donateBtn.style.backgroundColor = ""; // reset color
    }, 4000);

  }, 1500);
}

// 6. CONTACT FORM SUBMISSION
function handleContact() {
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const subject = document.getElementById("contactSubject").value;
  const message = document.getElementById("contactMsg").value.trim();
  const successMsg = document.getElementById("contactSuccess");

//Simple validation

  if (name === "") {
    alert("Please enter your name! 😊");
    return;
  }

  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email! 📧");
    return;
  }

  if (subject === "") {
    alert("Please select a subject! 📋");
    return;
  }

  if (message === "") {
    alert("Please write a message! ✏️");
    return;
  }

//All good, show success message

  successMsg.style.display = "block";

  document.getElementById("contactName").value = "";
  document.getElementById("contactEmail").value = "";
  document.getElementById("contactSubject").value = "";
  document.getElementById("contactMsg").value = "";

// Hide success message after 5 seconds
  setTimeout(function () {
    successMsg.style.display = "none";
  }, 5000);
}

//NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
  }
});

//SIMPLE CARD ANIMATION ON SCROLL

// Select all the program cards
const programCards = document.querySelectorAll(".program-card");

// Create an observer that watches when elements come into view
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // Element is visible! Add fade-in class
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.15 // trigger when 15% of card is visible
});

// Set initial hidden state for cards and start watching them
programCards.forEach(function (card, index) {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.5s ease " + (index * 0.1) + "s, transform 0.5s ease " + (index * 0.1) + "s";
  observer.observe(card);
});

//ACTIVE NAV LINK HIGHLIGHT ON SCROLL

const sections = document.querySelectorAll("section[id]");
const navLinksList = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach(function (section) {
    // Check if we're scrolled past the start of this section
    if (window.scrollY >= section.offsetTop - 120) {
      currentSection = section.getAttribute("id");
    }
  });

  // Update nav links
  navLinksList.forEach(function (link) {
    link.style.color = ""; // reset

    if (link.getAttribute("href") === "#" + currentSection) {
      link.style.color = "#ff6b35"; // orange color for active link
    }
  });
});
console.log("🐾 Paws & Hearts website loaded successfully!");
console.log("Made with ❤️ — Deepika's Project");