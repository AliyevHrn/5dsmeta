"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var t = $(window).scrollTop();
var w = $(window).width();
var h = $(window).height();
$(function () {
  function Initialization() {
    Header.init();
    Sliders.init();
    Tabs.init();
    News.init();
    Partners.init();
    FaqAccordeon.init();
  }

  var Header = {
    init: function init() {
      this.toggleMobNav();
      this.dropdownMenu();
      this.fixNav.init();
    },
    toggleMobNav: function toggleMobNav() {
      $('.btn-menu_open').on('click', function () {
        $('body').css('overflow', 'hidden');
        $('.header-nav').addClass('opened');
      });
      $('.btn-menu_close').on('click', function (evt) {
        $('body').css('overflow', 'auto');
        $('.header-nav').removeClass('opened');
      });
    },
    dropdownMenu: function dropdownMenu() {
      var eElem = $('.nav__item-dropdown .nav__link');
      eElem.on('click', function (evt) {
        evt.stopPropagation();
        $(this).next().slideToggle(200);
      });
    },
    fixNav: {
      init: function init() {
        this.navFixed();
        this.navScrollFixed();
      },
      navFixed: function navFixed() {
        var headerH = $('.header-top').outerHeight();

        if ($(window).scrollTop() > 0) {
          $('body').addClass('fixed');
          $('header').css('padding-top', headerH + 'px');
        } else {
          $('body').removeClass('fixed');
          $('header').css('padding-top', '0');
        }
      },
      navScrollFixed: function navScrollFixed() {
        var _this = this;

        $(document).scroll(function () {
          _this.navFixed();
        });
      }
    }
  };
  var Tabs = {
    init: function init() {
      var listItems = $('.tabs-list__item');
      listItems.click(function () {
        var contentItems = $(this).closest('.tabs-list').next().find('.tabs-content__item');
        listItems.removeClass('active');
        $(this).addClass('active');
        var itemDataTab = this.getAttribute('data-tab');
        console.log(itemDataTab);

        var _iterator = _createForOfIteratorHelper(contentItems),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var elem = _step.value;
            var contentDataTab = elem.getAttribute('data-tab');

            if (itemDataTab === contentDataTab) {
              contentItems.removeClass('active');
              elem.classList.add('active');
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
  };
  var Sliders = {
    init: function init() {
      this.mainReviewsSlider($('.reviews-main-list'));
      this.tabsSlider($('.update-history .tabs-list'));
      this.coursesReviewsSlider($('.course-reviews__slider'));
    },
    mainReviewsSlider: function mainReviewsSlider(sliderContainer) {
      $(sliderContainer).slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        arrows: true,
        prevArrow: '<button class="slick-prev"><svg viewBox="0 0 13.8 25.6" fill="none" stroke="#206999" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path class="asst0" d="M12.8 24.6L1 12.8 12.8 1"></path></svg></button>',
        nextArrow: '<button class="slick-next"><svg viewBox="0 0 13.8 25.6" fill="none" stroke="#206999" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path class="aost0" d="M1 1l11.8 11.8L1 24.6"></path></svg></button>',
        dots: false,
        responsive: [{
          breakpoint: 992,
          settings: {
            adaptiveHeight: true
          }
        }, {
          breakpoint: 768,
          settings: {
            adaptiveHeight: true,
            arrows: false,
            dots: true
          }
        }]
      });
    },
    tabsSlider: function tabsSlider(sliderContainer) {
      if ($(window).width() < 576) {
        $(sliderContainer).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
          $('#update-history .tabs-content').slick('slickGoTo', nextSlide, false);
        }).slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          swipe: true,
          variableWidth: false,
          arrows: true,
          prevArrow: '<button class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.5 47.4" style="enable-background:new 0 0 26.5 47.4;" xml:space="preserve"><polygon class="st0" points="2.8,46 1.4,44.6 22.3,23.7 1.4,2.8 2.8,1.4 25.1,23.7 "></polygon></svg></button>',
          nextArrow: '<button class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26.5 47.4" style="enable-background:new 0 0 26.5 47.4;" xml:space="preserve"><polygon class="st0" points="2.8,46 1.4,44.6 22.3,23.7 1.4,2.8 2.8,1.4 25.1,23.7 "></polygon></svg></button>'
        });
      }

      if ($(window).width() < 576) {
        $('#update-history .tabs-content').slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          speed: 1,
          fade: true,
          variableWidth: false,
          adaptiveHeight: true,
          swipe: false
        });
      }
    },
    coursesReviewsSlider: function coursesReviewsSlider(sliderContainer) {
      $(sliderContainer).slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        swipe: true,
        adaptiveHeight: false,
        variableWidth: false,
        arrows: true,
        prevArrow: '<button class="slick-prev"><svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.627 25.1772C14.2911 25.5131 13.8712 25.6811 13.4093 25.6811C12.9894 25.6811 12.5275 25.5131 12.1916 25.1772L1.1063 14.0919C0.77038 13.756 0.602423 13.3361 0.602423 12.8742C0.602423 12.4124 0.77038 11.9925 1.1063 11.6565L12.1916 0.571259C12.8634 -0.100576 13.9551 -0.100576 14.627 0.571259C15.2988 1.24309 15.2988 2.33483 14.627 3.00666L4.7594 12.8742L14.627 22.7418C15.2988 23.4137 15.2988 24.5054 14.627 25.1772Z" fill="#7A7A7A"/></svg></button>',
        nextArrow: '<button class="slick-next"><svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.37302 25.1772C1.70893 25.5131 2.12883 25.6811 2.59072 25.6811C3.01062 25.6811 3.4725 25.5131 3.80842 25.1772L14.8937 14.0919C15.2296 13.756 15.3976 13.3361 15.3976 12.8742C15.3976 12.4124 15.2296 11.9925 14.8937 11.6565L3.80842 0.571259C3.13659 -0.100576 2.04485 -0.100576 1.37302 0.571259C0.701182 1.24309 0.701182 2.33483 1.37302 3.00666L11.2406 12.8742L1.37302 22.7418C0.701182 23.4137 0.701182 24.5054 1.37302 25.1772Z" fill="#7A7A7A"/></svg></button>',
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: false,
            dots: true
          }
        }]
      });
    }
  };
  var News = {
    init: function init() {
      $('.news-years-item').click(function () {
        $('.news-years-item').removeClass('active');
        $(this).addClass('active');
      });
    }
  };
  var Partners = {
    init: function init() {
      var items = $('.partners-row .col-xl-3');
      $('.partners__show-all').click(function (event) {
        items.slideDown();
        $(this).hide();
      });
    }
  };
  var FaqAccordeon = {
    init: function init() {
      $('.faq-content-accordeon__title').click(function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
      });
    }
  };
  Initialization();
});