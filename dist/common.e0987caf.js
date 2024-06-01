// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"page/myWeb/acodian_swiper/js/common.js":[function(require,module,exports) {
$(function () {
  var kv_length = $(".mainSlider .swiper-slide").length;
  var kv_index = 0;
});
function activeIndex($i) {
  /* mainSliderMax */
  var tem;
  if ($(".section1").hasClass("ver_pc")) {
    tem = $i * 114 * -1; //( 90 + 24)
  } else if ($(".section1").hasClass("ver_tb")) {
    tem = $i * 86 * -1; //( 62 + 24)
  } else if ($(".section1").hasClass("ver_mb")) {
    tem = $i * 69 * -1; //( 45 + 24)
  } else {
    tem = $i * 38 * -1; //( 22 + 16)
  }
  ;
  $(".mainSlider .swiper-slide").removeClass("swiper-slide-active");
  $(".mainSlider .swiper-slide").eq($i).addClass("swiper-slide-active");
  $(".mainSlider .swiper-wrapper").stop().animate({
    left: tem
  }, 400);
  /* kv_typo-area */
  $(".kv_typo-area .typo-list li").removeClass("active");
  $(".kv_typo-area .typo-list li").eq($i).addClass("active");
}
/* <!-- kv swiper --> */
var kvSwiper;
var hardStop = false;
$(function () {
  kvSwiper = new Swiper('.mainSliderSwiper', {
    autoplay: false,
    spaceBetween: 24,
    loop: true,
    autoplayDisableOnInteraction: true,
    pagination: {
      el: '.mainSliderSwiper .pagination',
      type: 'custom',
      renderCustom: function renderCustom(swiper, current, total) {
        return '<span class="cur tb3">' + current + '</span><i class="spf spf-action-slash"></i><span class="tot tb3">' + total + '</span>';
      }
    },
    navigation: {
      nextEl: '.mainSliderSwiper .button-next',
      prevEl: '.mainSliderSwiper .button-prev'
    },
    on: {
      transitionStart: function transitionStart() {
        // console.log('transitionStart');
        if (kvSwiper) {
          //setIntervalTimeStop()
          activeIndex(kvSwiper.realIndex);
          //setIntervalTimePlay();
        }
      }
    }
  });
  /* 좌우버튼 누를때 타이머 켜져있으면, 정지하고 시작 */
  $(".mainSliderSwiper").on('mouseenter', function () {
    if (!hardStop) {
      setIntervalTimeStop();
    }
  });
  $(".mainSliderSwiper").on('mouseout', function () {
    if (!hardStop) {
      if (!$(".mainSliderSwiper .js-play_pause").hasClass("pause")) {
        setIntervalTimeStop();
        setIntervalTimePlay();
      }
    }
  });
  $('.mainSliderSwiper ').on('mouseover', function () {
    ////console.log('stop autoplay');
    // kvSwiper.autoplay.stop();
    if (!hardStop) {
      $('.mainSliderSwiper .js-play_pause').addClass("pause");
      setIntervalTimeStop();
    }
  });
  $('.mainSliderSwiper ').on('mouseout', function () {
    ////console.log('start autoplay');
    // kvSwiper.autoplay.start();
    if (!hardStop) {
      $('.mainSliderSwiper .js-play_pause').removeClass("pause");
      setIntervalTimePlay();
    }
  });
  $(".mainSliderSwiper .button-prev").on("click", function ($e) {
    if (!hardStop) {
      if (!$(".mainSliderSwiper .js-play_pause").hasClass("pause")) {
        setIntervalTimeStop();
        setIntervalTimePlay();
      }
    }
  });
  $(".mainSliderSwiper .button-next").on("click", function ($e) {
    if (!hardStop) {
      if (!$(".mainSliderSwiper .js-play_pause").hasClass("pause")) {
        setIntervalTimeStop();
        setIntervalTimePlay();
      }
    }
  });
  $(".mainSliderSwiper").on("click", ".js-play_pause", function ($e) {
    // console.log('play btn');
    if (hardStop) {
      $('.mainSliderSwiper .js-play_pause').removeClass("pause");
      setIntervalTimePlay();
    } else {
      $('.mainSliderSwiper .js-play_pause').addClass("pause");
      setIntervalTimeStop();
    }
    hardStop = !hardStop;
  });
});
/*  <!-- 타이머 -->  */
var setintervalTime; // setInterval 객체
var setintervalTimeGet = 0; // 현재 진행 시간
var imgdurationTime = 500; // 이미지 (1500 : 15초)
function setIntervalTimePlay() {
  if (setintervalTime == null) {
    // console.log('setIntervalTimePlay');
    setintervalTime = setInterval(tintervalTimeSet, 10);
  }
}
;
function setIntervalTimeStop() {
  ////console.log('setIntervalTimeStop');
  clearInterval(setintervalTime);
  setintervalTime = null;
  setintervalTimeGet = 0;
}
;
// 재생시간 체크
function tintervalTimeSet() {
  setintervalTimeGet++;
  // 시간 도달 하면 (다음)
  if (imgdurationTime <= setintervalTimeGet) {
    ////console.log("setintervalTimeGet: "+ setintervalTimeGet)
    setintervalTimeGet = 0;
    //setIntervalTimeStop();  // 타이머 초기화;
    kvSwiper.slideNext();
  }
}
/* 시작 */
setIntervalTimePlay();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65204" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","page/myWeb/acodian_swiper/js/common.js"], null)
//# sourceMappingURL=/common.e0987caf.js.map