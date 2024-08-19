(function() {
  "use strict";

  /**
   * Owl Carousel Hero
   */
  $('#featured').owlCarousel({
    autoplay: true,
    loop: true,
    items: 1,
    dots: true,
    animateOut: 'fadeOut'
  });

  /**
   * Header scroll effect
   */
  $(window).on('scroll', function() {
    if ($(".header").offset().top > 55) {
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  });

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  function mobileNavToggle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });

  /**
   * Display random content
   */
  const contentIds = ['content1', 'content2'];

  function displayRandomContent() {
    const randomIndex = Math.floor(Math.random() * contentIds.length);
    const selectedContentId = contentIds[randomIndex];
    document.getElementById(selectedContentId).style.display = 'block';
  }

  window.onload = displayRandomContent;

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  (function() {
    "use strict";
  
    // Other functionalities remain the same...
  
    /**
     * Remove specific CSS class on small screens
     */
    function removeClassOnSmallScreen() {
      if (window.innerWidth <= 768) { // Adjust the width as needed for "small" screens
        console.log('Screen is small, removing class...');
        document.querySelectorAll('.m--75').forEach(function(element) {
          console.log('Removing class from:', element);
          element.classList.remove('m--75');
        });
      } else {
        console.log('Screen is not small, class not removed.');
      }
    }
  
    window.addEventListener('load', removeClassOnSmallScreen);
    window.addEventListener('resize', removeClassOnSmallScreen);
  
  })();
  

})();
