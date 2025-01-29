document.addEventListener("DOMContentLoaded", () => {
  var navbar = document.getElementById("navbar")

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
      navbar.classList.remove("transparent")
    } else {
      navbar.classList.remove("scrolled")
      navbar.classList.add("transparent")
    }
  }

  // Initial check
  updateNavbar()

  // Update on scroll
  window.addEventListener("scroll", updateNavbar)

  // Intersection Observer for animations
  const animatedElements = document.querySelectorAll(".fade-in")
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  animatedElements.forEach((element) => {
    observer.observe(element)
  })
})

