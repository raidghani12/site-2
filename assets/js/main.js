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
   * Masonry Gallery
   */
  (function ($) {
    $.fn.masonryFilter = function (options) {
      var reload = function ($container) {
        setTimeout(function () {
          $container.masonry("layout");
        }, 100);
      };

      var process = function ($container) {
        var items = $container.masonry("getAllItems"),
          revealItems = [],
          hideItems = [];

        $.each(items, function (i) {
          var item = items[i];
          var elm = $(item.element),
            shouldShow = options.filter && options.filter.call(elm);

          if (shouldShow) {
            if (item.isHidden) {
              item.isIgnored = false;
              revealItems.push(item);
            }
          } else {
            if (!item.isHidden) {
              item.isIgnored = true;
              hideItems.push(item);
            }
          }
        });

        $container.masonry('hide', hideItems);
        $container.masonry('reveal', revealItems);
        reload($container);
      };

      return this.each(function () {
        var self = $(this);
        process(self);
      });
    };
  }(window.jQuery));

  /**
   * Initialize Masonry for the first tab
   */
  $(function () {
    var self = $("#masonry-parent");

    self.imagesLoaded(function () {
      self.masonry({
        gutterWidth: 15,
        isAnimated: true,
        itemSelector: ".card-masonry-item"
      });
    });

    // Reinitialize Masonry for the second tab
    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
      var target = $(e.target).attr("href");
      if (target === '#menu-4') {
        var masonryParent1 = $("#masonry-parent1");
        masonryParent1.imagesLoaded(function () {
          masonryParent1.masonry({
            gutterWidth: 15,
            isAnimated: true,
            itemSelector: ".card-masonry-item"
          });
        });
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

})();
