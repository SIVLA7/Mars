/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/blocks.js":
/*!******************************!*\
  !*** ./src/blocks/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %blocks%/header/header.js */ "./src/blocks/header/header.js");
/* harmony import */ var _blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_header_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_mobile_menu_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %blocks%/mobile-menu/mobile-menu.js */ "./src/blocks/mobile-menu/mobile-menu.js");
/* harmony import */ var _blocks_mobile_menu_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_mobile_menu_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_results_results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %blocks%/results/results.js */ "./src/blocks/results/results.js");
/* harmony import */ var _blocks_prices_prices_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %blocks%/prices/prices.js */ "./src/blocks/prices/prices.js");
/* harmony import */ var _blocks_prices_prices_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_prices_prices_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_services_services_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %blocks%/services/services.js */ "./src/blocks/services/services.js");
/* harmony import */ var _blocks_services_services_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_services_services_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_faq_faq_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %blocks%/faq/faq.js */ "./src/blocks/faq/faq.js");
/* harmony import */ var _blocks_faq_faq_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_faq_faq_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_popups_popups_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %blocks%/popups/popups.js */ "./src/blocks/popups/popups.js");
/* harmony import */ var _blocks_popups_popups_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_popups_popups_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blocks_form_form_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %blocks%/form/form.js */ "./src/blocks/form/form.js");
/* harmony import */ var _blocks_form_form_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_form_form_js__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/blocks/faq/faq.js":
/*!*******************************!*\
  !*** ./src/blocks/faq/faq.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var ready = __webpack_require__(/*! %helpers%/document-ready.js */ "./src/js/helpers/document-ready.js");

ready(function () {
  var $dropdownBtns = $(".faq__item-top");
  var $dropdownTexts = $(".faq__item-text"); // -- Functions BEGIN

  var dropdownTextToggleState = function dropdownTextToggleState() {
    $dropdownBtns.on("click", function () {
      var isActive = $(this).hasClass("faq__item-top_active");
      var $nextText = $(this).next(".faq__item-text");
      $dropdownTexts.slideUp();
      $dropdownBtns.removeClass("faq__item-top_active");
      $(this).addClass("faq__item-top_active");

      if (isActive) {
        $(this).removeClass("faq__item-top_active");
      } else {
        $nextText.slideDown();
      }
    });
  }; // -- Functions END


  if ($dropdownBtns.length) dropdownTextToggleState();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/form/form.js":
/*!*********************************!*\
  !*** ./src/blocks/form/form.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// -- Helpers BEGIN
var documentReady = __webpack_require__(/*! %helpers%/document-ready.js */ "./src/js/helpers/document-ready.js");

var cleanFieldsForms = __webpack_require__(/*! %helpers%/clean-fields-forms.js */ "./src/js/helpers/clean-fields-forms.js"); // -- Helpers END
// -- Libs BEGIN


var mask = __webpack_require__(/*! %vendor%/libs/jquery.mask.min.js */ "./src/js/vendor/libs/jquery.mask.min.js"); // -- Libs END


documentReady(function () {
  var $fields = $(".form__field");
  var $forms = $("form");
  var countInvalidFields = 0;
  var $curForm;
  var fromWhere;
  var regObj = {
    phone: /^(\+375)-(\d{2})-(\d{3})-(\d{2})-(\d{2})$/,
    email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
    name: /^[а-яА-ЯёЁa-zA-Z -]+$/,
    site: /./
  }; // -- Functions BEGIN

  var setEventOnPricesBtns = function setEventOnPricesBtns() {
    var $btns = $(".from-where-btn");

    if ($btns.length) {
      $btns.on("click", function () {
        fromWhere = $(this).data("from-where");
      });
    }
  };

  var displayResultSending = function displayResultSending(status) {
    $curForm.find(".form__btn").removeClass("disabled");
    setTimeout(function () {
      $curForm.removeClass("form_loading").addClass("form_".concat(status));
    }, 800);
    setTimeout(function () {
      $curForm.removeClass("form_".concat(status));
      cleanFieldsForms($curForm);
    }, 2800);
  };

  var sendMessage = function sendMessage(data) {
    $.ajax({
      url: "send.php",
      type: "POST",
      data: data,
      success: function success(response) {
        displayResultSending("success");
      },
      error: function error(response) {
        console.log(response);
        displayResultSending("error");
      }
    });
  }; // -- Functions END
  // -- Validation BEGIN


  var validation = function validation() {
    if ($forms.length) {
      $forms.submit(function (e) {
        e.preventDefault();
        $curForm = $(this);
        $curFormBtn = $curForm.find(".form__btn");
        var curFormFields = $curForm.find(".form__field");
        curFormFields.removeClass("form__field_error");
        countInvalidFields = 0;
        curFormFields.each(function () {
          var $field = $(this),
              type = $field.attr("name"),
              val = $field.val();

          if (val.length < 1 || !regObj[type].test(val)) {
            $field.addClass("form__field_error");
            countInvalidFields++;
          }
        });

        if (countInvalidFields == 0) {
          var resultData = $curForm.serializeArray();
          resultData.push({
            name: "from-where",
            value: fromWhere
          });
          sendMessage($.param(resultData));
          console.log($.param(resultData));
          $curForm.addClass("form_loading");
          $curFormBtn.addClass("disabled");
        }
      });
    }
  }; // -- Validation END
  // -- Initialization BEGIN


  $("input[type='tel']").mask('+375-00-000-00-00');
  setEventOnPricesBtns();
  validation(); // -- Initialization END
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/header/header.js":
/*!*************************************!*\
  !*** ./src/blocks/header/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var ready = __webpack_require__(/*! %helpers%/document-ready.js */ "./src/js/helpers/document-ready.js");

ready(function () {
  var $headerScroll = $(".header-scroll");
  var $blockFilter = $(".results"); // -- Functions BEGIN

  var checkOffset = function checkOffset() {
    var offsetBlockFilter = $blockFilter.offset().top;
    document.addEventListener("scroll", function () {
      var curOffset = $(this).scrollTop();

      if (curOffset >= offsetBlockFilter) {
        $headerScroll.addClass("header-scroll_visible");
      } else {
        $headerScroll.removeClass("header-scroll_visible");
      }
    }, {
      passive: true
    });
  }; // -- Functions END


  if ($headerScroll.length && $blockFilter.length) checkOffset();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/mobile-menu/mobile-menu.js":
/*!***********************************************!*\
  !*** ./src/blocks/mobile-menu/mobile-menu.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var ready = __webpack_require__(/*! %helpers%/document-ready.js */ "./src/js/helpers/document-ready.js");

ready(function () {
  var $btns = $(".panel__menu-btn");
  var $menu = $(".mobile-menu");
  var $page = $("body, html");
  var $mobileMenuItems = $(".mobile-menu__item"); // -- Functions BEGIN

  var changeStates = function changeStates() {
    $btns.on("click", function () {
      $page.toggleClass("page-fixed");
      $btns.toggleClass("panel__menu-btn_active");
      $menu.toggleClass("mobile-menu_active");
    });
  };

  var hideMenuWhenClickLinks = function hideMenuWhenClickLinks() {
    $mobileMenuItems.on("click", function () {
      $page.toggleClass("page-fixed");
      $menu.removeClass("mobile-menu_active");
      $btns.removeClass("panel__menu-btn_active");
    });
  }; // -- Functions END


  if ($btns.length && $menu.length) changeStates();
  if ($mobileMenuItems.length && $page.length) hideMenuWhenClickLinks();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/popups/popups.js":
/*!*************************************!*\
  !*** ./src/blocks/popups/popups.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var ready = __webpack_require__(/*! %helpers%/document-ready.js */ "./src/js/helpers/document-ready.js");

ready(function () {
  var $btnsShowPopups = $(".btn-popup");
  var $elementsHidePopups = $(".popup__close, .popup-message__btn");
  var $allPopups = $(".popup");
  var $page = $("html, body");
  var $scrollHeader = $(".header-scroll");
  var $scrollBg = $(".page-bg");
  var $popupLoadImage = $(".popup-image__img");
  var $curPopup;
  var $curBtn; // -- Functions BEGIN

  var loadImage = function loadImage($btn) {
    var src = !!$btn.data("load-src-large-image") ? $btn.data("load-src-large-image") : $btn.data("load-src-image");
    var img = new Image();

    img.onload = function () {
      $popupLoadImage.attr("src", src);
      setTimeout(function () {
        $popupLoadImage.parent().addClass("popup-image__wrap-img_onload");
      }, 200);
    };

    img.src = src;
  };

  var showPopup = function showPopup() {
    var key = $curBtn.attr("data-popup-key");
    $curPopup = $(".popup[data-popup-key=".concat(key, "]"));
    var pageWidthBeforeFixed = $("body").width();

    if ($curPopup.length) {
      if ($curBtn.hasClass("results__slider-item-search-system-wrap-img")) loadImage($curBtn);
      $allPopups.removeClass("popup_visible");
      $curPopup.addClass("popup_visible disabled");
      $page.addClass("page-fixed");
      var pageWidthAfterFix = $("body").width();
      var scrollHeaderIndent = pageWidthAfterFix - pageWidthBeforeFixed;
      $scrollHeader.css({
        "padding-right": scrollHeaderIndent + "px"
      });
      $scrollBg.css({
        "width": "calc(100% - ".concat(scrollHeaderIndent, "px)")
      });
      setTimeout(function () {
        $curPopup.removeClass("disabled");
      }, 800); // -- After popups show animation show
    }
  };

  var hidePopups = function hidePopups() {
    $allPopups.removeClass("popup_visible");
    setTimeout(function () {
      $page.toggleClass("page-fixed");
      $curBtn.removeClass("disabled");
      $scrollHeader.css({
        "padding-right": 0
      });
      $scrollBg.css({
        "width": "100%"
      });
    }, 800); // -- After popups show animation hide
  }; // -- Functions END
  // -- Show popop BEGIN


  if ($btnsShowPopups.length && $allPopups.length && $scrollHeader) {
    $btnsShowPopups.on("click", function (e) {
      e.preventDefault();
      $curBtn = $(this).addClass("disabled");
      showPopup();
    });
  } // -- Show popop END
  // -- Hide popups BEGIN


  if ($elementsHidePopups.length && $allPopups.length && $scrollHeader) {
    $elementsHidePopups.on("click", function () {
      hidePopups();
    });
  } // -- Hide popups END

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/prices/prices.js":
/*!*************************************!*\
  !*** ./src/blocks/prices/prices.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var ready = __webpack_require__(/*! %helpers%/document-ready.js */ "./src/js/helpers/document-ready.js");

ready(function () {
  var $priceItems = $(".prices__wrap-item");
  var $priceItemsBtns = $(".prices__item-btn-control"); // -- Functions BEGIN

  var changeBtnText = function changeBtnText($btn) {
    var $btnTextTag = $btn.find(".btn__text");
    var textStates = {
      show: $btnTextTag.data("text-show").trim(),
      hide: $btnTextTag.data("text-hide").trim()
    };
    var curText = $btnTextTag.text().trim();

    if (curText == textStates.show) {
      $btnTextTag.text(textStates.hide);
    } else if (curText == textStates.hide) {
      $btnTextTag.text(textStates.show);
    }
  };

  var toggleItemText = function toggleItemText($btn) {
    var $curItem = $btn.closest(".prices__item");
    var $text = $curItem.find(".prices__item-wrap-text");
    $text.slideToggle(1000);
  };

  var setEventOnBtns = function setEventOnBtns() {
    $priceItemsBtns.on("click", function () {
      $(this).toggleClass("btn_transparent_active");
      changeBtnText($(this));
      toggleItemText($(this));
      $(this).closest(".prices__wrap-item").toggleClass("prices__wrap-item_active");
    });
  }; // -- Functions END


  if ($priceItems.length && $priceItemsBtns.length) setEventOnBtns();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/results/results.js":
/*!***************************************!*\
  !*** ./src/blocks/results/results.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_circliful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-circliful */ "./node_modules/jquery-circliful/js/jquery.circliful.js");
/* harmony import */ var jquery_circliful__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_circliful__WEBPACK_IMPORTED_MODULE_1__);



window.onload = function () {
  var $slider = $(".results__slider");
  var $results = $(".results");
  var resultsOffset = $results.offset().top;
  var $sliderItems;
  var arrDasharraysDiagrams = []; // -- Scroll to up results BEGIN

  var scrollToUpResults = function scrollToUpResults() {
    var customOffset = 60;
    var fixedHeaderHeight = $(".header-scroll").outerHeight(true);
    var resultsSliderOffset = $results.find(".results__slider").offset().top; // -- Functions BEGIN

    var scrollToUp = function scrollToUp() {
      $("html, body").animate({
        scrollTop: resultsSliderOffset - fixedHeaderHeight - customOffset
      }, 800);
    }; // -- Functions END


    scrollToUp();
  }; // -- Scroll to up results END
  // Slider BEGIN


  var sliderInit = function sliderInit() {
    var sliderOptions = {
      speed: 800,
      infinite: true,
      adaptiveHeight: true,
      prevArrow: $(".results__slider-arrow_prev"),
      nextArrow: $(".results__slider-arrow_next"),
      dots: true,
      appendDots: $(".results__slider-dots")
    }; // -- Functions BEGIN

    $slider.on("init", function () {
      $sliderItems = $slider.find(".slick-slide");
    });
    $slider.on("beforeChange", function () {
      scrollToUpResults();

      function startAnimation() {
        var $curSlide = $slider.find(".slick-active");
        startDiagramAnimation($curSlide);
      }

      setTimeout(startAnimation, 50);
    }); // -- Functions END

    $slider.slick(sliderOptions);
  }; // Slider END
  // -- Diagrams initialization BEGIN


  var initDiagramItems = function initDiagramItems() {
    // -- Functions BEGIN
    var initSingleDiagram = function initSingleDiagram() {
      $sliderItems.each(function () {
        var $curSlideDiagrams = $(this).find(".results__slider-item-diagram");
        var curSlideIndex = $(this).index();
        arrDasharraysDiagrams["slide-".concat(curSlideIndex)] = {};
        $curSlideDiagrams.each(function () {
          var curForegroundColor = $(this).data("fgcolor");
          var curCustomText = $(this).data("custom-text");
          $(this).circliful({
            foregroundColor: curForegroundColor,
            foregroundBorderWidth: 7,
            backgroundBorderWidth: 1,
            replacePercentageByText: curCustomText,
            pointSize: 60,
            percentageY: 200
          });
          var $circle = $(this).find(".circle");
          var curDisgramIndex = $(this).index();
          var curDisgramDasharray = $circle.attr("stroke-dasharray");
          arrDasharraysDiagrams["slide-".concat(curSlideIndex)]["diagram-".concat(curDisgramIndex)] = curDisgramDasharray;
          $circle.attr("stroke-dasharray", 0);
        });
      });
    }; // -- Functions END


    if ($sliderItems.length) initSingleDiagram();
  }; // -- Diagrams initialization END
  // -- Diagrams start BEGIN


  var startDiagramAnimation = function startDiagramAnimation($element) {
    var elementIndex = $element.index();
    var $elementDiagrams = $element.find(".results__slider-item-diagram"); // -- Functions BEGIN

    var initAnimationSingleDiagram = function initAnimationSingleDiagram() {
      $elementDiagrams.each(function () {
        var indexCurDiagram = $(this).index();
        var dasharrayCurDiagram = arrDasharraysDiagrams["slide-".concat(elementIndex)]["diagram-".concat(indexCurDiagram)];
        var $curCircle = $(this).find(".circle");

        if ($curCircle.length) {
          $curCircle.attr("stroke-dasharray", dasharrayCurDiagram);
        }
      });
    }; // -- Functions END


    if ($elementDiagrams.length) initAnimationSingleDiagram();
  }; // -- Diagrams start END
  // -- Scroll to results BEGIN


  var startDiagramWhenScrollResults = function startDiagramWhenScrollResults() {
    var $activeSlide = $results.find(".slick-active").addClass("slide-diagram-init");
    var windowHeight = $(window).height() / 3 * 2;
    var curOffest = $(window).scrollTop();
    var flag = true; // -- Functions BEGIN

    var checkOffset = function checkOffset() {
      curOffest = $(window).scrollTop() + windowHeight;

      if (curOffest >= resultsOffset) {
        flag = false;
        startDiagramAnimation($activeSlide);
      }
    };

    var setEventOnWindow = function setEventOnWindow() {
      document.addEventListener("scroll", function () {
        if (flag) checkOffset();
      }, {
        passive: true
      });
    }; // -- Functions END 


    if ($results.length) setEventOnWindow();
    if (flag) checkOffset();
  }; // -- Scroll to results END
  // -- Initialization BEGIN


  sliderInit();
  initDiagramItems();
  startDiagramWhenScrollResults(); // -- Initialization END
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/services/services.js":
/*!*****************************************!*\
  !*** ./src/blocks/services/services.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var ready = __webpack_require__(/*! %helpers%/document-ready.js */ "./src/js/helpers/document-ready.js");

ready(function () {
  var scriptsUrls = ["planet-data/three.min.js", "planet-data/threex.planets.js", "planet-data/threex.atmospherematerial.js", "planet-data/customControls.js", "planet-data/TrackballControls.js", "planet-data/dat.gui.min.js", "planet-data/threex.atmospheredatgui.js", "planet-data/init.js"];
  var isDesktop = $(window).width() > 991;
  var $prices = $(".results");
  var $servicesMars = $(".services__mars");
  var pricesOffset = $prices.offset().top;
  var windowHeight = $(window).height() / 3 * 2;
  var curOffest = $(window).scrollTop();
  var flagCheckOffset = true;
  var scriptPosition = 0; // -- Functions BEGIN

  var loadScripts = function loadScripts() {
    var scriptTag = document.createElement("script");

    scriptTag.onload = function () {
      if (scriptPosition < scriptsUrls.length) loadScripts();else if (scriptPosition = scriptsUrls.length) {
        $servicesMars.addClass("services__mars_visible");
      }
      scriptPosition++;
    };

    scriptTag.src = scriptsUrls[scriptPosition];
    document.head.appendChild(scriptTag);
  };

  var checkOffset = function checkOffset() {
    curOffest = $(window).scrollTop() + windowHeight;

    if (curOffest >= pricesOffset) {
      flagCheckOffset = false;
      loadScripts();
    }
  };

  var setEventOnWindow = function setEventOnWindow() {
    document.addEventListener("scroll", function () {
      if (flagCheckOffset) checkOffset();
    }, {
      passive: true
    });
  }; // -- Functions END 


  if ($prices.length && isDesktop) setEventOnWindow();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_common_lazyload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %js%/common/lazyload.js */ "./src/js/common/lazyload.js");
/* harmony import */ var _js_common_scroll_to_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %js%/common/scroll-to-block.js */ "./src/js/common/scroll-to-block.js");
/* harmony import */ var _js_common_scroll_to_block_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_common_scroll_to_block_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_common_replace_svg_to_inline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %js%/common/replace-svg-to-inline.js */ "./src/js/common/replace-svg-to-inline.js");
/* harmony import */ var _js_common_replace_svg_to_inline_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_common_replace_svg_to_inline_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/common/lazyload.js":
/*!***********************************!*\
  !*** ./src/js/common/lazyload.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__);
var ready = __webpack_require__(/*! %helpers%/document-ready.js */ "./src/js/helpers/document-ready.js");


ready(function () {
  var initLazyload = function initLazyload() {
    new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default.a({
      elements_selector: ".lazy"
    });
  };

  initLazyload();
});

/***/ }),

/***/ "./src/js/common/replace-svg-to-inline.js":
/*!************************************************!*\
  !*** ./src/js/common/replace-svg-to-inline.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var ready = __webpack_require__(/*! %helpers%/document-ready.js */ "./src/js/helpers/document-ready.js");

ready(function () {
  var imgs = $("img.replace-svg"); // -- Functions BEGIN

  var replaceSVG = function replaceSVG() {
    imgs.each(function () {
      var $img = $(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");

        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }

        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }

        $svg = $svg.removeAttr("xmlns:a");
        $svg.find("> g").removeAttr("clip-path");
        $img.replaceWith($svg);
      }, "xml");
    });
  }; // -- Functions END


  if (imgs.length) replaceSVG();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/common/scroll-to-block.js":
/*!******************************************!*\
  !*** ./src/js/common/scroll-to-block.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var ready = __webpack_require__(/*! %helpers%/document-ready.js */ "./src/js/helpers/document-ready.js");

ready(function () {
  var $btns = $("a[href^='#']");
  var headerHeight = $(".header").outerHeight(true); // -- Functions BEGIN

  var addEventButtons = function addEventButtons() {
    $btns.on("click", function (e) {
      e.preventDefault();
      var blockKey = $(this).attr("href");
      var $block = $(blockKey);

      if ($block.length) {
        var blockOffset = $block.offset().top;
        $([document.documentElement, document.body]).animate({
          scrollTop: blockOffset - headerHeight + 30
        }, 1000);
      }
    });
  }; // -- Functions END


  if ($btns.length) addEventButtons();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/helpers/clean-fields-forms.js":
/*!**********************************************!*\
  !*** ./src/js/helpers/clean-fields-forms.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var cleanFieldsForms = function cleanFieldsForms($forms) {
  $forms.each(function () {
    $(this).trigger('reset').find("input, textarea").blur().parent().removeClass("form__field_error");
  });
};

module.exports = cleanFieldsForms;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/helpers/document-ready.js":
/*!******************************************!*\
  !*** ./src/js/helpers/document-ready.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Global document module */
var ready = function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};

module.exports = ready;

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %js%/common.js */ "./src/js/common.js");
/* harmony import */ var _blocks_blocks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %blocks%/blocks.js */ "./src/blocks/blocks.js");



/***/ }),

/***/ "./src/js/vendor/libs/jquery.mask.min.js":
/*!***********************************************!*\
  !*** ./src/js/vendor/libs/jquery.mask.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// jQuery Mask Plugin v1.14.15
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp = {
  scope: {},
  findInternal: function findInternal(a, l, d) {
    a instanceof String && (a = String(a));

    for (var p = a.length, h = 0; h < p; h++) {
      var b = a[h];
      if (l.call(d, b, h, a)) return {
        i: h,
        v: b
      };
    }

    return {
      i: -1,
      v: void 0
    };
  }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, l, d) {
  if (d.get || d.set) throw new TypeError("ES3 does not support getters and setters.");
  a != Array.prototype && a != Object.prototype && (a[l] = d.value);
};

$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};

$jscomp.global = $jscomp.getGlobal(this);

$jscomp.polyfill = function (a, l, d, p) {
  if (l) {
    d = $jscomp.global;
    a = a.split(".");

    for (p = 0; p < a.length - 1; p++) {
      var h = a[p];
      h in d || (d[h] = {});
      d = d[h];
    }

    a = a[a.length - 1];
    p = d[a];
    l = l(p);
    l != p && null != l && $jscomp.defineProperty(d, a, {
      configurable: !0,
      writable: !0,
      value: l
    });
  }
};

$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (a, d) {
    return $jscomp.findInternal(this, a, d).v;
  };
}, "es6-impl", "es3");

(function (a, l, d) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (a) {
  var l = function l(b, e, f) {
    var c = {
      invalid: [],
      getCaret: function getCaret() {
        try {
          var a,
              r = 0,
              g = b.get(0),
              e = document.selection,
              f = g.selectionStart;
          if (e && -1 === navigator.appVersion.indexOf("MSIE 10")) a = e.createRange(), a.moveStart("character", -c.val().length), r = a.text.length;else if (f || "0" === f) r = f;
          return r;
        } catch (C) {}
      },
      setCaret: function setCaret(a) {
        try {
          if (b.is(":focus")) {
            var c,
                g = b.get(0);
            g.setSelectionRange ? g.setSelectionRange(a, a) : (c = g.createTextRange(), c.collapse(!0), c.moveEnd("character", a), c.moveStart("character", a), c.select());
          }
        } catch (B) {}
      },
      events: function events() {
        b.on("keydown.mask", function (a) {
          b.data("mask-keycode", a.keyCode || a.which);
          b.data("mask-previus-value", b.val());
          b.data("mask-previus-caret-pos", c.getCaret());
          c.maskDigitPosMapOld = c.maskDigitPosMap;
        }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function () {
          setTimeout(function () {
            b.keydown().keyup();
          }, 100);
        }).on("change.mask", function () {
          b.data("changed", !0);
        }).on("blur.mask", function () {
          d === c.val() || b.data("changed") || b.trigger("change");
          b.data("changed", !1);
        }).on("blur.mask", function () {
          d = c.val();
        }).on("focus.mask", function (b) {
          !0 === f.selectOnFocus && a(b.target).select();
        }).on("focusout.mask", function () {
          f.clearIfNotMatch && !h.test(c.val()) && c.val("");
        });
      },
      getRegexMask: function getRegexMask() {
        for (var a = [], b, c, f, n, d = 0; d < e.length; d++) {
          (b = m.translation[e.charAt(d)]) ? (c = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""), f = b.optional, (b = b.recursive) ? (a.push(e.charAt(d)), n = {
            digit: e.charAt(d),
            pattern: c
          }) : a.push(f || b ? c + "?" : c)) : a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
        }

        a = a.join("");
        n && (a = a.replace(new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"), "($1)?").replace(new RegExp(n.digit, "g"), n.pattern));
        return new RegExp(a);
      },
      destroyEvents: function destroyEvents() {
        b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "));
      },
      val: function val(a) {
        var c = b.is("input") ? "val" : "text";

        if (0 < arguments.length) {
          if (b[c]() !== a) b[c](a);
          c = b;
        } else c = b[c]();

        return c;
      },
      calculateCaretPosition: function calculateCaretPosition() {
        var a = b.data("mask-previus-value") || "",
            e = c.getMasked(),
            g = c.getCaret();

        if (a !== e) {
          var f = b.data("mask-previus-caret-pos") || 0,
              e = e.length,
              d = a.length,
              m = a = 0,
              h = 0,
              l = 0,
              k;

          for (k = g; k < e && c.maskDigitPosMap[k]; k++) {
            m++;
          }

          for (k = g - 1; 0 <= k && c.maskDigitPosMap[k]; k--) {
            a++;
          }

          for (k = g - 1; 0 <= k; k--) {
            c.maskDigitPosMap[k] && h++;
          }

          for (k = f - 1; 0 <= k; k--) {
            c.maskDigitPosMapOld[k] && l++;
          }

          g > d ? g = 10 * e : f >= g && f !== d ? c.maskDigitPosMapOld[g] || (f = g, g = g - (l - h) - a, c.maskDigitPosMap[g] && (g = f)) : g > f && (g = g + (h - l) + m);
        }

        return g;
      },
      behaviour: function behaviour(f) {
        f = f || window.event;
        c.invalid = [];
        var e = b.data("mask-keycode");

        if (-1 === a.inArray(e, m.byPassKeys)) {
          var e = c.getMasked(),
              g = c.getCaret();
          setTimeout(function () {
            c.setCaret(c.calculateCaretPosition());
          }, a.jMaskGlobals.keyStrokeCompensation);
          c.val(e);
          c.setCaret(g);
          return c.callbacks(f);
        }
      },
      getMasked: function getMasked(a, b) {
        var g = [],
            d = void 0 === b ? c.val() : b + "",
            n = 0,
            h = e.length,
            q = 0,
            l = d.length,
            k = 1,
            r = "push",
            p = -1,
            t = 0,
            y = [],
            v,
            z;
        f.reverse ? (r = "unshift", k = -1, v = 0, n = h - 1, q = l - 1, z = function z() {
          return -1 < n && -1 < q;
        }) : (v = h - 1, z = function z() {
          return n < h && q < l;
        });

        for (var A; z();) {
          var x = e.charAt(n),
              w = d.charAt(q),
              u = m.translation[x];
          if (u) w.match(u.pattern) ? (g[r](w), u.recursive && (-1 === p ? p = n : n === v && n !== p && (n = p - k), v === p && (n -= k)), n += k) : w === A ? (t--, A = void 0) : u.optional ? (n += k, q -= k) : u.fallback ? (g[r](u.fallback), n += k, q -= k) : c.invalid.push({
            p: q,
            v: w,
            e: u.pattern
          }), q += k;else {
            if (!a) g[r](x);
            w === x ? (y.push(q), q += k) : (A = x, y.push(q + t), t++);
            n += k;
          }
        }

        d = e.charAt(v);
        h !== l + 1 || m.translation[d] || g.push(d);
        g = g.join("");
        c.mapMaskdigitPositions(g, y, l);
        return g;
      },
      mapMaskdigitPositions: function mapMaskdigitPositions(a, b, e) {
        a = f.reverse ? a.length - e : 0;
        c.maskDigitPosMap = {};

        for (e = 0; e < b.length; e++) {
          c.maskDigitPosMap[b[e] + a] = 1;
        }
      },
      callbacks: function callbacks(a) {
        var h = c.val(),
            g = h !== d,
            m = [h, a, b, f],
            q = function q(a, b, c) {
          "function" === typeof f[a] && b && f[a].apply(this, c);
        };

        q("onChange", !0 === g, m);
        q("onKeyPress", !0 === g, m);
        q("onComplete", h.length === e.length, m);
        q("onInvalid", 0 < c.invalid.length, [h, a, b, c.invalid, f]);
      }
    };
    b = a(b);
    var m = this,
        d = c.val(),
        h;
    e = "function" === typeof e ? e(c.val(), void 0, b, f) : e;
    m.mask = e;
    m.options = f;

    m.remove = function () {
      var a = c.getCaret();
      m.options.placeholder && b.removeAttr("placeholder");
      b.data("mask-maxlength") && b.removeAttr("maxlength");
      c.destroyEvents();
      c.val(m.getCleanVal());
      c.setCaret(a);
      return b;
    };

    m.getCleanVal = function () {
      return c.getMasked(!0);
    };

    m.getMaskedVal = function (a) {
      return c.getMasked(!1, a);
    };

    m.init = function (d) {
      d = d || !1;
      f = f || {};
      m.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch;
      m.byPassKeys = a.jMaskGlobals.byPassKeys;
      m.translation = a.extend({}, a.jMaskGlobals.translation, f.translation);
      m = a.extend(!0, {}, m, f);
      h = c.getRegexMask();
      if (d) c.events(), c.val(c.getMasked());else {
        f.placeholder && b.attr("placeholder", f.placeholder);
        b.data("mask") && b.attr("autocomplete", "off");
        d = 0;

        for (var l = !0; d < e.length; d++) {
          var g = m.translation[e.charAt(d)];

          if (g && g.recursive) {
            l = !1;
            break;
          }
        }

        l && b.attr("maxlength", e.length).data("mask-maxlength", !0);
        c.destroyEvents();
        c.events();
        d = c.getCaret();
        c.val(c.getMasked());
        c.setCaret(d);
      }
    };

    m.init(!b.is("input"));
  };

  a.maskWatchers = {};

  var d = function d() {
    var b = a(this),
        e = {},
        f = b.attr("data-mask");
    b.attr("data-mask-reverse") && (e.reverse = !0);
    b.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0);
    "true" === b.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0);
    if (p(b, f, e)) return b.data("mask", new l(this, f, e));
  },
      p = function p(b, e, f) {
    f = f || {};
    var c = a(b).data("mask"),
        d = JSON.stringify;
    b = a(b).val() || a(b).text();

    try {
      return "function" === typeof e && (e = e(b)), "object" !== _typeof(c) || d(c.options) !== d(f) || c.mask !== e;
    } catch (t) {}
  },
      h = function h(a) {
    var b = document.createElement("div"),
        d;
    a = "on" + a;
    d = a in b;
    d || (b.setAttribute(a, "return;"), d = "function" === typeof b[a]);
    return d;
  };

  a.fn.mask = function (b, d) {
    d = d || {};

    var e = this.selector,
        c = a.jMaskGlobals,
        h = c.watchInterval,
        c = d.watchInputs || c.watchInputs,
        t = function t() {
      if (p(this, b, d)) return a(this).data("mask", new l(this, b, d));
    };

    a(this).each(t);
    e && "" !== e && c && (clearInterval(a.maskWatchers[e]), a.maskWatchers[e] = setInterval(function () {
      a(document).find(e).each(t);
    }, h));
    return this;
  };

  a.fn.masked = function (a) {
    return this.data("mask").getMaskedVal(a);
  };

  a.fn.unmask = function () {
    clearInterval(a.maskWatchers[this.selector]);
    delete a.maskWatchers[this.selector];
    return this.each(function () {
      var b = a(this).data("mask");
      b && b.remove().removeData("mask");
    });
  };

  a.fn.cleanVal = function () {
    return this.data("mask").getCleanVal();
  };

  a.applyDataMask = function (b) {
    b = b || a.jMaskGlobals.maskElements;
    (b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d);
  };

  h = {
    maskElements: "input,td,span,div",
    dataMaskAttr: "*[data-mask]",
    dataMask: !0,
    watchInterval: 300,
    watchInputs: !0,
    keyStrokeCompensation: 10,
    useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && h("input"),
    watchDataMask: !1,
    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
    translation: {
      0: {
        pattern: /\d/
      },
      9: {
        pattern: /\d/,
        optional: !0
      },
      "#": {
        pattern: /\d/,
        recursive: !0
      },
      A: {
        pattern: /[a-zA-Z0-9]/
      },
      S: {
        pattern: /[a-zA-Z]/
      }
    }
  };
  a.jMaskGlobals = a.jMaskGlobals || {};
  h = a.jMaskGlobals = a.extend(!0, {}, h, a.jMaskGlobals);
  h.dataMask && a.applyDataMask();
  setInterval(function () {
    a.jMaskGlobals.watchDataMask && a.applyDataMask();
  }, h.watchInterval);
}, window.jQuery, window.Zepto);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map