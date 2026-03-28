/**
 * Loopstudios Landing Page - Main Script
 * Handles mobile menu toggle with smooth transitions
 */

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  let isMenuOpen = false;

  /**
   * Toggles the mobile navigation menu open/closed.
   * Swaps hamburger/close icon, updates ARIA attrs, and prevents body scroll.
   */
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    mobileMenu.classList.toggle("active", isMenuOpen);
    mobileMenu.setAttribute("aria-hidden", String(!isMenuOpen));
    hamburgerBtn.setAttribute("aria-expanded", String(isMenuOpen));

    // Swap icon
    hamburgerIcon.src = isMenuOpen
      ? "./images/icon-close.svg"
      : "./images/icon-hamburger.svg";

    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }

  hamburgerBtn.addEventListener("click", toggleMenu);

  // Close on link click
  const mobileLinks = mobileMenu.querySelectorAll(".mobile-menu-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      toggleMenu();
    }
  });
});
