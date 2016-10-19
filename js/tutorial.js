(function() {
  var Tutorial,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    hasProp = {}.hasOwnProperty;

  Tutorial = (function() {
    Tutorial.prototype.animateInOffset = 80;
    Tutorial.prototype.animateInClass = "dont-animate";

    function Tutorial() {
      this.browserSupportsCSSProperty = bind(this.browserSupportsCSSProperty, this);
      this.questionTabClick = bind(this.questionTabClick, this);
      this.selectTab = bind(this.selectTab, this);
      this.animateInPresentElements = bind(this.animateInPresentElements, this);
      if (this.browserSupportsCSSProperty("transition")) {
        this.animateInClass = "animate-in";
      }
      $(window).scroll(this.animateInPresentElements);
      $(".question .tabs a").click(this.questionTabClick);
    }

    Tutorial.prototype.browserSupportsCSSProperty = function(featureName) {
      var domPrefixes, elm, featureNameCapital, i, j, ref;
      elm = document.createElement('div');
      featureName = featureName.toLowerCase();
      if (elm.style[featureName] !== void 0) {
        return true;
      }
      domPrefixes = 'Webkit Moz ms O'.split(' ');
      featureNameCapital = featureName.charAt(0).toUpperCase() + featureName.substr(1);
      for (i = j = 0, ref = domPrefixes.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (elm.style[domPrefixes[i] + featureNameCapital] !== void 0) {
          return true;
        }
      }
      return false;
    };

    Tutorial.prototype.resetTutorialStepsAfterStep = function(stepIndex) {
      return $(".tutorial-list.active > li:eq(" + stepIndex + ")").nextAll().addClass(this.animateInClass);
    };

    Tutorial.prototype.animateInPresentElements = function(index) {
      var bottomScrollPosition, windowHeight, windowScrollPosition;
      windowHeight = $(window).height();
      windowScrollPosition = $(window).scrollTop();
      bottomScrollPosition = windowHeight + windowScrollPosition;
      return $(".animate-in").not(".hidden").each((function(_this) {
        return function(i, element) {
          if ($(element).offset().top + _this.animateInOffset < bottomScrollPosition) {
            return $(element).removeClass(_this.animateInClass);
          }
        };
      })(this));
    };

    Tutorial.prototype.selectTab = function(tab) {
      $(tab).closest(".tabs").find(".selected").removeClass("selected");
      return $(tab).addClass("selected");
    };

    Tutorial.prototype.questionTabClick = function(e) {
      var currentOption, currentStep, newOption, stepIndex;
      e.preventDefault();
      currentOption = $(e.currentTarget).closest(".tabs").find(".selected").attr("id");
      currentStep = $(e.currentTarget).closest(".tabs").find(".selected").attr("href");
      if (currentStep) {
        currentStep = currentStep.substring(1, currentStep.length);
        $(".tutorial-list > li").not(".active").each((function(_this) {
          return function(i, element) {
            var elementId = $(element).attr("id");
            if (elementId.startsWith(currentStep)) {
              return $(element).addClass("hidden");
            }
          };
        })(this));
      }
      this.selectTab(e.currentTarget);
      $(".tutorial-list.active ." + currentOption).addClass("hidden");
      newOption = $(e.currentTarget).attr("id");
      $(".tutorial-list.active ." + newOption).removeClass("hidden");
      stepIndex = $(e.currentTarget).closest(".question").index();
      this.resetTutorialStepsAfterStep(stepIndex);
      return this.animateInPresentElements();
    };

    return Tutorial;

  })();

  $(function() {
    return new Tutorial();
  });

}).call(this);
