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
})({"node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__createBinding = __createBinding;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __createBinding(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}

function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
},{}],"node_modules/rxjs/_esm5/internal/util/isFunction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
  return typeof x === 'function';
}
},{}],"node_modules/rxjs/_esm5/internal/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
  Promise: undefined,

  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      var error = /*@__PURE__*/new Error();
      /*@__PURE__*/

      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
      /*@__PURE__*/
      console.log('RxJS: Back to a better error behavior. Thank you. <3');
    }

    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },

  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }

};
exports.config = config;
},{}],"node_modules/rxjs/_esm5/internal/util/hostReportError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hostReportError = hostReportError;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
  setTimeout(function () {
    throw err;
  }, 0);
}
},{}],"node_modules/rxjs/_esm5/internal/Observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = void 0;

var _config = require("./config");

var _hostReportError = require("./util/hostReportError");

/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
var empty = {
  closed: true,
  next: function (value) {},
  error: function (err) {
    if (_config.config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      (0, _hostReportError.hostReportError)(err);
    }
  },
  complete: function () {}
};
exports.empty = empty;
},{"./config":"node_modules/rxjs/_esm5/internal/config.js","./util/hostReportError":"node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"node_modules/rxjs/_esm5/internal/util/isArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/function () {
  return Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };
}();

exports.isArray = isArray;
},{}],"node_modules/rxjs/_esm5/internal/util/isObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
  return x !== null && typeof x === 'object';
}
},{}],"node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscriptionError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/function () {
  function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
      return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
  }

  UnsubscriptionErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
  return UnsubscriptionErrorImpl;
}();

var UnsubscriptionError = UnsubscriptionErrorImpl;
exports.UnsubscriptionError = UnsubscriptionError;
},{}],"node_modules/rxjs/_esm5/internal/Subscription.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = void 0;

var _isArray = require("./util/isArray");

var _isObject = require("./util/isObject");

var _isFunction = require("./util/isFunction");

var _UnsubscriptionError = require("./util/UnsubscriptionError");

/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
var Subscription = /*@__PURE__*/function () {
  function Subscription(unsubscribe) {
    this.closed = false;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (unsubscribe) {
      this._ctorUnsubscribe = true;
      this._unsubscribe = unsubscribe;
    }
  }

  Subscription.prototype.unsubscribe = function () {
    var errors;

    if (this.closed) {
      return;
    }

    var _a = this,
        _parentOrParents = _a._parentOrParents,
        _ctorUnsubscribe = _a._ctorUnsubscribe,
        _unsubscribe = _a._unsubscribe,
        _subscriptions = _a._subscriptions;

    this.closed = true;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (_parentOrParents instanceof Subscription) {
      _parentOrParents.remove(this);
    } else if (_parentOrParents !== null) {
      for (var index = 0; index < _parentOrParents.length; ++index) {
        var parent_1 = _parentOrParents[index];
        parent_1.remove(this);
      }
    }

    if ((0, _isFunction.isFunction)(_unsubscribe)) {
      if (_ctorUnsubscribe) {
        this._unsubscribe = undefined;
      }

      try {
        _unsubscribe.call(this);
      } catch (e) {
        errors = e instanceof _UnsubscriptionError.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
      }
    }

    if ((0, _isArray.isArray)(_subscriptions)) {
      var index = -1;
      var len = _subscriptions.length;

      while (++index < len) {
        var sub = _subscriptions[index];

        if ((0, _isObject.isObject)(sub)) {
          try {
            sub.unsubscribe();
          } catch (e) {
            errors = errors || [];

            if (e instanceof _UnsubscriptionError.UnsubscriptionError) {
              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
            } else {
              errors.push(e);
            }
          }
        }
      }
    }

    if (errors) {
      throw new _UnsubscriptionError.UnsubscriptionError(errors);
    }
  };

  Subscription.prototype.add = function (teardown) {
    var subscription = teardown;

    if (!teardown) {
      return Subscription.EMPTY;
    }

    switch (typeof teardown) {
      case 'function':
        subscription = new Subscription(teardown);

      case 'object':
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription)) {
          var tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }

        break;

      default:
        {
          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
    }

    var _parentOrParents = subscription._parentOrParents;

    if (_parentOrParents === null) {
      subscription._parentOrParents = this;
    } else if (_parentOrParents instanceof Subscription) {
      if (_parentOrParents === this) {
        return subscription;
      }

      subscription._parentOrParents = [_parentOrParents, this];
    } else if (_parentOrParents.indexOf(this) === -1) {
      _parentOrParents.push(this);
    } else {
      return subscription;
    }

    var subscriptions = this._subscriptions;

    if (subscriptions === null) {
      this._subscriptions = [subscription];
    } else {
      subscriptions.push(subscription);
    }

    return subscription;
  };

  Subscription.prototype.remove = function (subscription) {
    var subscriptions = this._subscriptions;

    if (subscriptions) {
      var subscriptionIndex = subscriptions.indexOf(subscription);

      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  };

  Subscription.EMPTY = function (empty) {
    empty.closed = true;
    return empty;
  }(new Subscription());

  return Subscription;
}();

exports.Subscription = Subscription;

function flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function (errs, err) {
    return errs.concat(err instanceof _UnsubscriptionError.UnsubscriptionError ? err.errors : err);
  }, []);
}
},{"./util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","./util/isObject":"node_modules/rxjs/_esm5/internal/util/isObject.js","./util/isFunction":"node_modules/rxjs/_esm5/internal/util/isFunction.js","./util/UnsubscriptionError":"node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js"}],"node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$$rxSubscriber = exports.rxSubscriber = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/function () {
  return typeof Symbol === 'function' ? /*@__PURE__*/Symbol('rxSubscriber') : '@@rxSubscriber_' + /*@__PURE__*/Math.random();
}();

exports.rxSubscriber = rxSubscriber;
var $$rxSubscriber = rxSubscriber;
exports.$$rxSubscriber = $$rxSubscriber;
},{}],"node_modules/rxjs/_esm5/internal/Subscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SafeSubscriber = exports.Subscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isFunction = require("./util/isFunction");

var _Observer = require("./Observer");

var _Subscription = require("./Subscription");

var _rxSubscriber = require("../internal/symbol/rxSubscriber");

var _config = require("./config");

var _hostReportError = require("./util/hostReportError");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
var Subscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(Subscriber, _super);

  function Subscriber(destinationOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this.syncErrorValue = null;
    _this.syncErrorThrown = false;
    _this.syncErrorThrowable = false;
    _this.isStopped = false;

    switch (arguments.length) {
      case 0:
        _this.destination = _Observer.empty;
        break;

      case 1:
        if (!destinationOrNext) {
          _this.destination = _Observer.empty;
          break;
        }

        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            _this.destination = destinationOrNext;
            destinationOrNext.add(_this);
          } else {
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext);
          }

          break;
        }

      default:
        _this.syncErrorThrowable = true;
        _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
        break;
    }

    return _this;
  }

  Subscriber.prototype[_rxSubscriber.rxSubscriber] = function () {
    return this;
  };

  Subscriber.create = function (next, error, complete) {
    var subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  };

  Subscriber.prototype.next = function (value) {
    if (!this.isStopped) {
      this._next(value);
    }
  };

  Subscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      this.isStopped = true;

      this._error(err);
    }
  };

  Subscriber.prototype.complete = function () {
    if (!this.isStopped) {
      this.isStopped = true;

      this._complete();
    }
  };

  Subscriber.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.isStopped = true;

    _super.prototype.unsubscribe.call(this);
  };

  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };

  Subscriber.prototype._error = function (err) {
    this.destination.error(err);
    this.unsubscribe();
  };

  Subscriber.prototype._complete = function () {
    this.destination.complete();
    this.unsubscribe();
  };

  Subscriber.prototype._unsubscribeAndRecycle = function () {
    var _parentOrParents = this._parentOrParents;
    this._parentOrParents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parentOrParents = _parentOrParents;
    return this;
  };

  return Subscriber;
}(_Subscription.Subscription);

exports.Subscriber = Subscriber;

var SafeSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(SafeSubscriber, _super);

  function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this._parentSubscriber = _parentSubscriber;
    var next;
    var context = _this;

    if ((0, _isFunction.isFunction)(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;

      if (observerOrNext !== _Observer.empty) {
        context = Object.create(observerOrNext);

        if ((0, _isFunction.isFunction)(context.unsubscribe)) {
          _this.add(context.unsubscribe.bind(context));
        }

        context.unsubscribe = _this.unsubscribe.bind(_this);
      }
    }

    _this._context = context;
    _this._next = next;
    _this._error = error;
    _this._complete = complete;
    return _this;
  }

  SafeSubscriber.prototype.next = function (value) {
    if (!this.isStopped && this._next) {
      var _parentSubscriber = this._parentSubscriber;

      if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      var useDeprecatedSynchronousErrorHandling = _config.config.useDeprecatedSynchronousErrorHandling;

      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);

          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();

        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }

        (0, _hostReportError.hostReportError)(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          (0, _hostReportError.hostReportError)(err);
        }

        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.complete = function () {
    var _this = this;

    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;

      if (this._complete) {
        var wrappedComplete = function () {
          return _this._complete.call(_this._context);
        };

        if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);

          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();

      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        (0, _hostReportError.hostReportError)(err);
      }
    }
  };

  SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
    if (!_config.config.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }

    try {
      fn.call(this._context, value);
    } catch (err) {
      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        (0, _hostReportError.hostReportError)(err);
        return true;
      }
    }

    return false;
  };

  SafeSubscriber.prototype._unsubscribe = function () {
    var _parentSubscriber = this._parentSubscriber;
    this._context = null;
    this._parentSubscriber = null;

    _parentSubscriber.unsubscribe();
  };

  return SafeSubscriber;
}(Subscriber);

exports.SafeSubscriber = SafeSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","./util/isFunction":"node_modules/rxjs/_esm5/internal/util/isFunction.js","./Observer":"node_modules/rxjs/_esm5/internal/Observer.js","./Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../internal/symbol/rxSubscriber":"node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js","./config":"node_modules/rxjs/_esm5/internal/config.js","./util/hostReportError":"node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"node_modules/rxjs/_esm5/internal/util/canReportError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canReportError = canReportError;

var _Subscriber = require("../Subscriber");

/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
function canReportError(observer) {
  while (observer) {
    var _a = observer,
        closed_1 = _a.closed,
        destination = _a.destination,
        isStopped = _a.isStopped;

    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof _Subscriber.Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }

  return true;
}
},{"../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/util/toSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSubscriber = toSubscriber;

var _Subscriber = require("../Subscriber");

var _rxSubscriber = require("../symbol/rxSubscriber");

var _Observer = require("../Observer");

/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof _Subscriber.Subscriber) {
      return nextOrObserver;
    }

    if (nextOrObserver[_rxSubscriber.rxSubscriber]) {
      return nextOrObserver[_rxSubscriber.rxSubscriber]();
    }
  }

  if (!nextOrObserver && !error && !complete) {
    return new _Subscriber.Subscriber(_Observer.empty);
  }

  return new _Subscriber.Subscriber(nextOrObserver, error, complete);
}
},{"../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../symbol/rxSubscriber":"node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js","../Observer":"node_modules/rxjs/_esm5/internal/Observer.js"}],"node_modules/rxjs/_esm5/internal/symbol/observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observable = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = /*@__PURE__*/function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

exports.observable = observable;
},{}],"node_modules/rxjs/_esm5/internal/util/identity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = identity;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
  return x;
}
},{}],"node_modules/rxjs/_esm5/internal/util/pipe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = pipe;
exports.pipeFromArray = pipeFromArray;

var _identity = require("./identity");

/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */
function pipe() {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return pipeFromArray(fns);
}

function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity.identity;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}
},{"./identity":"node_modules/rxjs/_esm5/internal/util/identity.js"}],"node_modules/rxjs/_esm5/internal/Observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = void 0;

var _canReportError = require("./util/canReportError");

var _toSubscriber = require("./util/toSubscriber");

var _observable = require("./symbol/observable");

var _pipe = require("./util/pipe");

var _config = require("./config");

/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
var Observable = /*@__PURE__*/function () {
  function Observable(subscribe) {
    this._isScalar = false;

    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var operator = this.operator;
    var sink = (0, _toSubscriber.toSubscriber)(observerOrNext, error, complete);

    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(this.source || _config.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }

    if (_config.config.useDeprecatedSynchronousErrorHandling) {
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;

        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
    }

    return sink;
  };

  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }

      if ((0, _canReportError.canReportError)(sink)) {
        sink.error(err);
      } else {
        console.warn(err);
      }
    }
  };

  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function (value) {
        try {
          next(value);
        } catch (err) {
          reject(err);

          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, reject, resolve);
    });
  };

  Observable.prototype._subscribe = function (subscriber) {
    var source = this.source;
    return source && source.subscribe(subscriber);
  };

  Observable.prototype[_observable.observable] = function () {
    return this;
  };

  Observable.prototype.pipe = function () {
    var operations = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }

    if (operations.length === 0) {
      return this;
    }

    return (0, _pipe.pipeFromArray)(operations)(this);
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();

exports.Observable = Observable;

function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = _config.config.Promise || Promise;
  }

  if (!promiseCtor) {
    throw new Error('no Promise impl found');
  }

  return promiseCtor;
}
},{"./util/canReportError":"node_modules/rxjs/_esm5/internal/util/canReportError.js","./util/toSubscriber":"node_modules/rxjs/_esm5/internal/util/toSubscriber.js","./symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js","./util/pipe":"node_modules/rxjs/_esm5/internal/util/pipe.js","./config":"node_modules/rxjs/_esm5/internal/config.js"}],"node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectUnsubscribedError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/function () {
  function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
  }

  ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
  return ObjectUnsubscribedErrorImpl;
}();

var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
},{}],"node_modules/rxjs/_esm5/internal/SubjectSubscription.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectSubscription = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("./Subscription");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var SubjectSubscription = /*@__PURE__*/function (_super) {
  tslib_1.__extends(SubjectSubscription, _super);

  function SubjectSubscription(subject, subscriber) {
    var _this = _super.call(this) || this;

    _this.subject = subject;
    _this.subscriber = subscriber;
    _this.closed = false;
    return _this;
  }

  SubjectSubscription.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.closed = true;
    var subject = this.subject;
    var observers = subject.observers;
    this.subject = null;

    if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
      return;
    }

    var subscriberIndex = observers.indexOf(this.subscriber);

    if (subscriberIndex !== -1) {
      observers.splice(subscriberIndex, 1);
    }
  };

  return SubjectSubscription;
}(_Subscription.Subscription);

exports.SubjectSubscription = SubjectSubscription;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/Subject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnonymousSubject = exports.Subject = exports.SubjectSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Observable = require("./Observable");

var _Subscriber = require("./Subscriber");

var _Subscription = require("./Subscription");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

var _SubjectSubscription = require("./SubjectSubscription");

var _rxSubscriber = require("../internal/symbol/rxSubscriber");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
var SubjectSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(SubjectSubscriber, _super);

  function SubjectSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    return _this;
  }

  return SubjectSubscriber;
}(_Subscriber.Subscriber);

exports.SubjectSubscriber = SubjectSubscriber;

var Subject = /*@__PURE__*/function (_super) {
  tslib_1.__extends(Subject, _super);

  function Subject() {
    var _this = _super.call(this) || this;

    _this.observers = [];
    _this.closed = false;
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }

  Subject.prototype[_rxSubscriber.rxSubscriber] = function () {
    return new SubjectSubscriber(this);
  };

  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };

  Subject.prototype.next = function (value) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    if (!this.isStopped) {
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();

      for (var i = 0; i < len; i++) {
        copy[i].next(value);
      }
    }
  };

  Subject.prototype.error = function (err) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    this.hasError = true;
    this.thrownError = err;
    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].error(err);
    }

    this.observers.length = 0;
  };

  Subject.prototype.complete = function () {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].complete();
    }

    this.observers.length = 0;
  };

  Subject.prototype.unsubscribe = function () {
    this.isStopped = true;
    this.closed = true;
    this.observers = null;
  };

  Subject.prototype._trySubscribe = function (subscriber) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else {
      return _super.prototype._trySubscribe.call(this, subscriber);
    }
  };

  Subject.prototype._subscribe = function (subscriber) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else if (this.hasError) {
      subscriber.error(this.thrownError);
      return _Subscription.Subscription.EMPTY;
    } else if (this.isStopped) {
      subscriber.complete();
      return _Subscription.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      return new _SubjectSubscription.SubjectSubscription(this, subscriber);
    }
  };

  Subject.prototype.asObservable = function () {
    var observable = new _Observable.Observable();
    observable.source = this;
    return observable;
  };

  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };

  return Subject;
}(_Observable.Observable);

exports.Subject = Subject;

var AnonymousSubject = /*@__PURE__*/function (_super) {
  tslib_1.__extends(AnonymousSubject, _super);

  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;

    _this.destination = destination;
    _this.source = source;
    return _this;
  }

  AnonymousSubject.prototype.next = function (value) {
    var destination = this.destination;

    if (destination && destination.next) {
      destination.next(value);
    }
  };

  AnonymousSubject.prototype.error = function (err) {
    var destination = this.destination;

    if (destination && destination.error) {
      this.destination.error(err);
    }
  };

  AnonymousSubject.prototype.complete = function () {
    var destination = this.destination;

    if (destination && destination.complete) {
      this.destination.complete();
    }
  };

  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var source = this.source;

    if (source) {
      return this.source.subscribe(subscriber);
    } else {
      return _Subscription.Subscription.EMPTY;
    }
  };

  return AnonymousSubject;
}(Subject);

exports.AnonymousSubject = AnonymousSubject;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Observable":"node_modules/rxjs/_esm5/internal/Observable.js","./Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","./Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","./util/ObjectUnsubscribedError":"node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./SubjectSubscription":"node_modules/rxjs/_esm5/internal/SubjectSubscription.js","../internal/symbol/rxSubscriber":"node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/refCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refCount = refCount;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function refCount() {
  return function refCountOperatorFunction(source) {
    return source.lift(new RefCountOperator(source));
  };
}

var RefCountOperator = /*@__PURE__*/function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectableObservableDescriptor = exports.ConnectableObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _Observable = require("../Observable");

var _Subscriber = require("../Subscriber");

var _Subscription = require("../Subscription");

var _refCount = require("../operators/refCount");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */
var ConnectableObservable = /*@__PURE__*/function (_super) {
  tslib_1.__extends(ConnectableObservable, _super);

  function ConnectableObservable(source, subjectFactory) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._refCount = 0;
    _this._isComplete = false;
    return _this;
  }

  ConnectableObservable.prototype._subscribe = function (subscriber) {
    return this.getSubject().subscribe(subscriber);
  };

  ConnectableObservable.prototype.getSubject = function () {
    var subject = this._subject;

    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }

    return this._subject;
  };

  ConnectableObservable.prototype.connect = function () {
    var connection = this._connection;

    if (!connection) {
      this._isComplete = false;
      connection = this._connection = new _Subscription.Subscription();
      connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));

      if (connection.closed) {
        this._connection = null;
        connection = _Subscription.Subscription.EMPTY;
      }
    }

    return connection;
  };

  ConnectableObservable.prototype.refCount = function () {
    return (0, _refCount.refCount)()(this);
  };

  return ConnectableObservable;
}(_Observable.Observable);

exports.ConnectableObservable = ConnectableObservable;

var connectableObservableDescriptor = /*@__PURE__*/function () {
  var connectableProto = ConnectableObservable.prototype;
  return {
    operator: {
      value: null
    },
    _refCount: {
      value: 0,
      writable: true
    },
    _subject: {
      value: null,
      writable: true
    },
    _connection: {
      value: null,
      writable: true
    },
    _subscribe: {
      value: connectableProto._subscribe
    },
    _isComplete: {
      value: connectableProto._isComplete,
      writable: true
    },
    getSubject: {
      value: connectableProto.getSubject
    },
    connect: {
      value: connectableProto.connect
    },
    refCount: {
      value: connectableProto.refCount
    }
  };
}();

exports.connectableObservableDescriptor = connectableObservableDescriptor;

var ConnectableSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(ConnectableSubscriber, _super);

  function ConnectableSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  ConnectableSubscriber.prototype._error = function (err) {
    this._unsubscribe();

    _super.prototype._error.call(this, err);
  };

  ConnectableSubscriber.prototype._complete = function () {
    this.connectable._isComplete = true;

    this._unsubscribe();

    _super.prototype._complete.call(this);
  };

  ConnectableSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (connectable) {
      this.connectable = null;
      var connection = connectable._connection;
      connectable._refCount = 0;
      connectable._subject = null;
      connectable._connection = null;

      if (connection) {
        connection.unsubscribe();
      }
    }
  };

  return ConnectableSubscriber;
}(_Subject.SubjectSubscriber);

var RefCountOperator = /*@__PURE__*/function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../operators/refCount":"node_modules/rxjs/_esm5/internal/operators/refCount.js"}],"node_modules/rxjs/_esm5/internal/operators/groupBy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBy = groupBy;
exports.GroupedObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Subscription = require("../Subscription");

var _Observable = require("../Observable");

var _Subject = require("../Subject");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
  return function (source) {
    return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
  };
}

var GroupByOperator = /*@__PURE__*/function () {
  function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
    this.keySelector = keySelector;
    this.elementSelector = elementSelector;
    this.durationSelector = durationSelector;
    this.subjectSelector = subjectSelector;
  }

  GroupByOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
  };

  return GroupByOperator;
}();

var GroupBySubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(GroupBySubscriber, _super);

  function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
    var _this = _super.call(this, destination) || this;

    _this.keySelector = keySelector;
    _this.elementSelector = elementSelector;
    _this.durationSelector = durationSelector;
    _this.subjectSelector = subjectSelector;
    _this.groups = null;
    _this.attemptedToUnsubscribe = false;
    _this.count = 0;
    return _this;
  }

  GroupBySubscriber.prototype._next = function (value) {
    var key;

    try {
      key = this.keySelector(value);
    } catch (err) {
      this.error(err);
      return;
    }

    this._group(value, key);
  };

  GroupBySubscriber.prototype._group = function (value, key) {
    var groups = this.groups;

    if (!groups) {
      groups = this.groups = new Map();
    }

    var group = groups.get(key);
    var element;

    if (this.elementSelector) {
      try {
        element = this.elementSelector(value);
      } catch (err) {
        this.error(err);
      }
    } else {
      element = value;
    }

    if (!group) {
      group = this.subjectSelector ? this.subjectSelector() : new _Subject.Subject();
      groups.set(key, group);
      var groupedObservable = new GroupedObservable(key, group, this);
      this.destination.next(groupedObservable);

      if (this.durationSelector) {
        var duration = void 0;

        try {
          duration = this.durationSelector(new GroupedObservable(key, group));
        } catch (err) {
          this.error(err);
          return;
        }

        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
      }
    }

    if (!group.closed) {
      group.next(element);
    }
  };

  GroupBySubscriber.prototype._error = function (err) {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.error(err);
      });
      groups.clear();
    }

    this.destination.error(err);
  };

  GroupBySubscriber.prototype._complete = function () {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.complete();
      });
      groups.clear();
    }

    this.destination.complete();
  };

  GroupBySubscriber.prototype.removeGroup = function (key) {
    this.groups.delete(key);
  };

  GroupBySubscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.attemptedToUnsubscribe = true;

      if (this.count === 0) {
        _super.prototype.unsubscribe.call(this);
      }
    }
  };

  return GroupBySubscriber;
}(_Subscriber.Subscriber);

var GroupDurationSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(GroupDurationSubscriber, _super);

  function GroupDurationSubscriber(key, group, parent) {
    var _this = _super.call(this, group) || this;

    _this.key = key;
    _this.group = group;
    _this.parent = parent;
    return _this;
  }

  GroupDurationSubscriber.prototype._next = function (value) {
    this.complete();
  };

  GroupDurationSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        parent = _a.parent,
        key = _a.key;

    this.key = this.parent = null;

    if (parent) {
      parent.removeGroup(key);
    }
  };

  return GroupDurationSubscriber;
}(_Subscriber.Subscriber);

var GroupedObservable = /*@__PURE__*/function (_super) {
  tslib_1.__extends(GroupedObservable, _super);

  function GroupedObservable(key, groupSubject, refCountSubscription) {
    var _this = _super.call(this) || this;

    _this.key = key;
    _this.groupSubject = groupSubject;
    _this.refCountSubscription = refCountSubscription;
    return _this;
  }

  GroupedObservable.prototype._subscribe = function (subscriber) {
    var subscription = new _Subscription.Subscription();

    var _a = this,
        refCountSubscription = _a.refCountSubscription,
        groupSubject = _a.groupSubject;

    if (refCountSubscription && !refCountSubscription.closed) {
      subscription.add(new InnerRefCountSubscription(refCountSubscription));
    }

    subscription.add(groupSubject.subscribe(subscriber));
    return subscription;
  };

  return GroupedObservable;
}(_Observable.Observable);

exports.GroupedObservable = GroupedObservable;

var InnerRefCountSubscription = /*@__PURE__*/function (_super) {
  tslib_1.__extends(InnerRefCountSubscription, _super);

  function InnerRefCountSubscription(parent) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    parent.count++;
    return _this;
  }

  InnerRefCountSubscription.prototype.unsubscribe = function () {
    var parent = this.parent;

    if (!parent.closed && !this.closed) {
      _super.prototype.unsubscribe.call(this);

      parent.count -= 1;

      if (parent.count === 0 && parent.attemptedToUnsubscribe) {
        parent.unsubscribe();
      }
    }
  };

  return InnerRefCountSubscription;
}(_Subscription.Subscription);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js"}],"node_modules/rxjs/_esm5/internal/BehaviorSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BehaviorSubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
var BehaviorSubject = /*@__PURE__*/function (_super) {
  tslib_1.__extends(BehaviorSubject, _super);

  function BehaviorSubject(_value) {
    var _this = _super.call(this) || this;

    _this._value = _value;
    return _this;
  }

  Object.defineProperty(BehaviorSubject.prototype, "value", {
    get: function () {
      return this.getValue();
    },
    enumerable: true,
    configurable: true
  });

  BehaviorSubject.prototype._subscribe = function (subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);

    if (subscription && !subscription.closed) {
      subscriber.next(this._value);
    }

    return subscription;
  };

  BehaviorSubject.prototype.getValue = function () {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else {
      return this._value;
    }
  };

  BehaviorSubject.prototype.next = function (value) {
    _super.prototype.next.call(this, this._value = value);
  };

  return BehaviorSubject;
}(_Subject.Subject);

exports.BehaviorSubject = BehaviorSubject;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subject":"node_modules/rxjs/_esm5/internal/Subject.js","./util/ObjectUnsubscribedError":"node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js"}],"node_modules/rxjs/_esm5/internal/scheduler/Action.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("../Subscription");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var Action = /*@__PURE__*/function (_super) {
  tslib_1.__extends(Action, _super);

  function Action(scheduler, work) {
    return _super.call(this) || this;
  }

  Action.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return this;
  };

  return Action;
}(_Subscription.Subscription);

exports.Action = Action;
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Action = require("./Action");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
var AsyncAction = /*@__PURE__*/function (_super) {
  tslib_1.__extends(AsyncAction, _super);

  function AsyncAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }

  AsyncAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (this.closed) {
      return this;
    }

    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };

  AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return setInterval(scheduler.flush.bind(scheduler, this), delay);
  };

  AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && this.delay === delay && this.pending === false) {
      return id;
    }

    clearInterval(id);
    return undefined;
  };

  AsyncAction.prototype.execute = function (state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    var error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };

  AsyncAction.prototype._execute = function (state, delay) {
    var errored = false;
    var errorValue = undefined;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = !!e && e || new Error(e);
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };

  AsyncAction.prototype._unsubscribe = function () {
    var id = this.id;
    var scheduler = this.scheduler;
    var actions = scheduler.actions;
    var index = actions.indexOf(this);
    this.work = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;

    if (index !== -1) {
      actions.splice(index, 1);
    }

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, null);
    }

    this.delay = null;
  };

  return AsyncAction;
}(_Action.Action);

exports.AsyncAction = AsyncAction;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Action":"node_modules/rxjs/_esm5/internal/scheduler/Action.js"}],"node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var QueueAction = /*@__PURE__*/function (_super) {
  tslib_1.__extends(QueueAction, _super);

  function QueueAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  QueueAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay > 0) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  };

  QueueAction.prototype.execute = function (state, delay) {
    return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
  };

  QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    return scheduler.flush(this);
  };

  return QueueAction;
}(_AsyncAction.AsyncAction);

exports.QueueAction = QueueAction;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncAction":"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"node_modules/rxjs/_esm5/internal/Scheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scheduler = void 0;

var Scheduler = /*@__PURE__*/function () {
  function Scheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }

    this.SchedulerAction = SchedulerAction;
    this.now = now;
  }

  Scheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    return new this.SchedulerAction(this, work).schedule(state, delay);
  };

  Scheduler.now = function () {
    return Date.now();
  };

  return Scheduler;
}();

exports.Scheduler = Scheduler;
},{}],"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Scheduler = require("../Scheduler");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
var AsyncScheduler = /*@__PURE__*/function (_super) {
  tslib_1.__extends(AsyncScheduler, _super);

  function AsyncScheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = _Scheduler.Scheduler.now;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
        return AsyncScheduler.delegate.now();
      } else {
        return now();
      }
    }) || this;

    _this.actions = [];
    _this.active = false;
    _this.scheduled = undefined;
    return _this;
  }

  AsyncScheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
      return AsyncScheduler.delegate.schedule(work, delay, state);
    } else {
      return _super.prototype.schedule.call(this, work, delay, state);
    }
  };

  AsyncScheduler.prototype.flush = function (action) {
    var actions = this.actions;

    if (this.active) {
      actions.push(action);
      return;
    }

    var error;
    this.active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this.active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsyncScheduler;
}(_Scheduler.Scheduler);

exports.AsyncScheduler = AsyncScheduler;
},{"tslib":"node_modules/tslib/tslib.es6.js","../Scheduler":"node_modules/rxjs/_esm5/internal/Scheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var QueueScheduler = /*@__PURE__*/function (_super) {
  tslib_1.__extends(QueueScheduler, _super);

  function QueueScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return QueueScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.QueueScheduler = QueueScheduler;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/queue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queue = exports.queueScheduler = void 0;

var _QueueAction = require("./QueueAction");

var _QueueScheduler = require("./QueueScheduler");

/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
var queueScheduler = /*@__PURE__*/new _QueueScheduler.QueueScheduler(_QueueAction.QueueAction);
exports.queueScheduler = queueScheduler;
var queue = queueScheduler;
exports.queue = queue;
},{"./QueueAction":"node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js","./QueueScheduler":"node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js"}],"node_modules/rxjs/_esm5/internal/observable/empty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.EMPTY = void 0;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
var EMPTY = /*@__PURE__*/new _Observable.Observable(function (subscriber) {
  return subscriber.complete();
});
exports.EMPTY = EMPTY;

function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}

function emptyScheduled(scheduler) {
  return new _Observable.Observable(function (subscriber) {
    return scheduler.schedule(function () {
      return subscriber.complete();
    });
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/util/isScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isScheduler = isScheduler;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
  return value && typeof value.schedule === 'function';
}
},{}],"node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToArray = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
  return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }

    subscriber.complete();
  };
};

exports.subscribeToArray = subscribeToArray;
},{}],"node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleArray = scheduleArray;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function scheduleArray(input, scheduler) {
  return new _Observable.Observable(function (subscriber) {
    var sub = new _Subscription.Subscription();
    var i = 0;
    sub.add(scheduler.schedule(function () {
      if (i === input.length) {
        subscriber.complete();
        return;
      }

      subscriber.next(input[i++]);

      if (!subscriber.closed) {
        sub.add(this.schedule());
      }
    }));
    return sub;
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/observable/fromArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromArray = fromArray;

var _Observable = require("../Observable");

var _subscribeToArray = require("../util/subscribeToArray");

var _scheduleArray = require("../scheduled/scheduleArray");

/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
function fromArray(input, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToArray.subscribeToArray)(input));
  } else {
    return (0, _scheduleArray.scheduleArray)(input, scheduler);
  }
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/subscribeToArray":"node_modules/rxjs/_esm5/internal/util/subscribeToArray.js","../scheduled/scheduleArray":"node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js"}],"node_modules/rxjs/_esm5/internal/observable/of.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.of = of;

var _isScheduler = require("../util/isScheduler");

var _fromArray = require("./fromArray");

var _scheduleArray = require("../scheduled/scheduleArray");

/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */
function of() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = args[args.length - 1];

  if ((0, _isScheduler.isScheduler)(scheduler)) {
    args.pop();
    return (0, _scheduleArray.scheduleArray)(args, scheduler);
  } else {
    return (0, _fromArray.fromArray)(args);
  }
}
},{"../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js","./fromArray":"node_modules/rxjs/_esm5/internal/observable/fromArray.js","../scheduled/scheduleArray":"node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js"}],"node_modules/rxjs/_esm5/internal/observable/throwError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwError = throwError;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function throwError(error, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable(function (subscriber) {
      return subscriber.error(error);
    });
  } else {
    return new _Observable.Observable(function (subscriber) {
      return scheduler.schedule(dispatch, 0, {
        error: error,
        subscriber: subscriber
      });
    });
  }
}

function dispatch(_a) {
  var error = _a.error,
      subscriber = _a.subscriber;
  subscriber.error(error);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/Notification.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = exports.NotificationKind = void 0;

var _empty = require("./observable/empty");

var _of = require("./observable/of");

var _throwError = require("./observable/throwError");

/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
var NotificationKind;
/*@__PURE__*/

exports.NotificationKind = NotificationKind;

(function (NotificationKind) {
  NotificationKind["NEXT"] = "N";
  NotificationKind["ERROR"] = "E";
  NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (exports.NotificationKind = NotificationKind = {}));

var Notification = /*@__PURE__*/function () {
  function Notification(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === 'N';
  }

  Notification.prototype.observe = function (observer) {
    switch (this.kind) {
      case 'N':
        return observer.next && observer.next(this.value);

      case 'E':
        return observer.error && observer.error(this.error);

      case 'C':
        return observer.complete && observer.complete();
    }
  };

  Notification.prototype.do = function (next, error, complete) {
    var kind = this.kind;

    switch (kind) {
      case 'N':
        return next && next(this.value);

      case 'E':
        return error && error(this.error);

      case 'C':
        return complete && complete();
    }
  };

  Notification.prototype.accept = function (nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver.next === 'function') {
      return this.observe(nextOrObserver);
    } else {
      return this.do(nextOrObserver, error, complete);
    }
  };

  Notification.prototype.toObservable = function () {
    var kind = this.kind;

    switch (kind) {
      case 'N':
        return (0, _of.of)(this.value);

      case 'E':
        return (0, _throwError.throwError)(this.error);

      case 'C':
        return (0, _empty.empty)();
    }

    throw new Error('unexpected notification kind value');
  };

  Notification.createNext = function (value) {
    if (typeof value !== 'undefined') {
      return new Notification('N', value);
    }

    return Notification.undefinedValueNotification;
  };

  Notification.createError = function (err) {
    return new Notification('E', undefined, err);
  };

  Notification.createComplete = function () {
    return Notification.completeNotification;
  };

  Notification.completeNotification = new Notification('C');
  Notification.undefinedValueNotification = new Notification('N', undefined);
  return Notification;
}();

exports.Notification = Notification;
},{"./observable/empty":"node_modules/rxjs/_esm5/internal/observable/empty.js","./observable/of":"node_modules/rxjs/_esm5/internal/observable/of.js","./observable/throwError":"node_modules/rxjs/_esm5/internal/observable/throwError.js"}],"node_modules/rxjs/_esm5/internal/operators/observeOn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeOn = observeOn;
exports.ObserveOnMessage = exports.ObserveOnSubscriber = exports.ObserveOnOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Notification = require("../Notification");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return function observeOnOperatorFunction(source) {
    return source.lift(new ObserveOnOperator(scheduler, delay));
  };
}

var ObserveOnOperator = /*@__PURE__*/function () {
  function ObserveOnOperator(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.scheduler = scheduler;
    this.delay = delay;
  }

  ObserveOnOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
  };

  return ObserveOnOperator;
}();

exports.ObserveOnOperator = ObserveOnOperator;

var ObserveOnSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(ObserveOnSubscriber, _super);

  function ObserveOnSubscriber(destination, scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    var _this = _super.call(this, destination) || this;

    _this.scheduler = scheduler;
    _this.delay = delay;
    return _this;
  }

  ObserveOnSubscriber.dispatch = function (arg) {
    var notification = arg.notification,
        destination = arg.destination;
    notification.observe(destination);
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
    var destination = this.destination;
    destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
  };

  ObserveOnSubscriber.prototype._next = function (value) {
    this.scheduleMessage(_Notification.Notification.createNext(value));
  };

  ObserveOnSubscriber.prototype._error = function (err) {
    this.scheduleMessage(_Notification.Notification.createError(err));
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype._complete = function () {
    this.scheduleMessage(_Notification.Notification.createComplete());
    this.unsubscribe();
  };

  return ObserveOnSubscriber;
}(_Subscriber.Subscriber);

exports.ObserveOnSubscriber = ObserveOnSubscriber;

var ObserveOnMessage = /*@__PURE__*/function () {
  function ObserveOnMessage(notification, destination) {
    this.notification = notification;
    this.destination = destination;
  }

  return ObserveOnMessage;
}();

exports.ObserveOnMessage = ObserveOnMessage;
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../Notification":"node_modules/rxjs/_esm5/internal/Notification.js"}],"node_modules/rxjs/_esm5/internal/ReplaySubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplaySubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _queue = require("./scheduler/queue");

var _Subscription = require("./Subscription");

var _observeOn = require("./operators/observeOn");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

var _SubjectSubscription = require("./SubjectSubscription");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
var ReplaySubject = /*@__PURE__*/function (_super) {
  tslib_1.__extends(ReplaySubject, _super);

  function ReplaySubject(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }

    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this) || this;

    _this.scheduler = scheduler;
    _this._events = [];
    _this._infiniteTimeWindow = false;
    _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
    _this._windowTime = windowTime < 1 ? 1 : windowTime;

    if (windowTime === Number.POSITIVE_INFINITY) {
      _this._infiniteTimeWindow = true;
      _this.next = _this.nextInfiniteTimeWindow;
    } else {
      _this.next = _this.nextTimeWindow;
    }

    return _this;
  }

  ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
    if (!this.isStopped) {
      var _events = this._events;

      _events.push(value);

      if (_events.length > this._bufferSize) {
        _events.shift();
      }
    }

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype.nextTimeWindow = function (value) {
    if (!this.isStopped) {
      this._events.push(new ReplayEvent(this._getNow(), value));

      this._trimBufferThenGetEvents();
    }

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype._subscribe = function (subscriber) {
    var _infiniteTimeWindow = this._infiniteTimeWindow;

    var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

    var scheduler = this.scheduler;
    var len = _events.length;
    var subscription;

    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else if (this.isStopped || this.hasError) {
      subscription = _Subscription.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      subscription = new _SubjectSubscription.SubjectSubscription(this, subscriber);
    }

    if (scheduler) {
      subscriber.add(subscriber = new _observeOn.ObserveOnSubscriber(subscriber, scheduler));
    }

    if (_infiniteTimeWindow) {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i]);
      }
    } else {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i].value);
      }
    }

    if (this.hasError) {
      subscriber.error(this.thrownError);
    } else if (this.isStopped) {
      subscriber.complete();
    }

    return subscription;
  };

  ReplaySubject.prototype._getNow = function () {
    return (this.scheduler || _queue.queue).now();
  };

  ReplaySubject.prototype._trimBufferThenGetEvents = function () {
    var now = this._getNow();

    var _bufferSize = this._bufferSize;
    var _windowTime = this._windowTime;
    var _events = this._events;
    var eventsCount = _events.length;
    var spliceCount = 0;

    while (spliceCount < eventsCount) {
      if (now - _events[spliceCount].time < _windowTime) {
        break;
      }

      spliceCount++;
    }

    if (eventsCount > _bufferSize) {
      spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
    }

    if (spliceCount > 0) {
      _events.splice(0, spliceCount);
    }

    return _events;
  };

  return ReplaySubject;
}(_Subject.Subject);

exports.ReplaySubject = ReplaySubject;

var ReplayEvent = /*@__PURE__*/function () {
  function ReplayEvent(time, value) {
    this.time = time;
    this.value = value;
  }

  return ReplayEvent;
}();
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subject":"node_modules/rxjs/_esm5/internal/Subject.js","./scheduler/queue":"node_modules/rxjs/_esm5/internal/scheduler/queue.js","./Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","./operators/observeOn":"node_modules/rxjs/_esm5/internal/operators/observeOn.js","./util/ObjectUnsubscribedError":"node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./SubjectSubscription":"node_modules/rxjs/_esm5/internal/SubjectSubscription.js"}],"node_modules/rxjs/_esm5/internal/AsyncSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncSubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _Subscription = require("./Subscription");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */
var AsyncSubject = /*@__PURE__*/function (_super) {
  tslib_1.__extends(AsyncSubject, _super);

  function AsyncSubject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.value = null;
    _this.hasNext = false;
    _this.hasCompleted = false;
    return _this;
  }

  AsyncSubject.prototype._subscribe = function (subscriber) {
    if (this.hasError) {
      subscriber.error(this.thrownError);
      return _Subscription.Subscription.EMPTY;
    } else if (this.hasCompleted && this.hasNext) {
      subscriber.next(this.value);
      subscriber.complete();
      return _Subscription.Subscription.EMPTY;
    }

    return _super.prototype._subscribe.call(this, subscriber);
  };

  AsyncSubject.prototype.next = function (value) {
    if (!this.hasCompleted) {
      this.value = value;
      this.hasNext = true;
    }
  };

  AsyncSubject.prototype.error = function (error) {
    if (!this.hasCompleted) {
      _super.prototype.error.call(this, error);
    }
  };

  AsyncSubject.prototype.complete = function () {
    this.hasCompleted = true;

    if (this.hasNext) {
      _super.prototype.next.call(this, this.value);
    }

    _super.prototype.complete.call(this);
  };

  return AsyncSubject;
}(_Subject.Subject);

exports.AsyncSubject = AsyncSubject;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subject":"node_modules/rxjs/_esm5/internal/Subject.js","./Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/util/Immediate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestTools = exports.Immediate = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;

var RESOLVED = /*@__PURE__*/function () {
  return /*@__PURE__*/Promise.resolve();
}();

var activeHandles = {};

function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }

  return false;
}

var Immediate = {
  setImmediate: function (cb) {
    var handle = nextHandle++;
    activeHandles[handle] = true;
    RESOLVED.then(function () {
      return findAndClearHandle(handle) && cb();
    });
    return handle;
  },
  clearImmediate: function (handle) {
    findAndClearHandle(handle);
  }
};
exports.Immediate = Immediate;
var TestTools = {
  pending: function () {
    return Object.keys(activeHandles).length;
  }
};
exports.TestTools = TestTools;
},{}],"node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Immediate = require("../util/Immediate");

var _AsyncAction = require("./AsyncAction");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */
var AsapAction = /*@__PURE__*/function (_super) {
  tslib_1.__extends(AsapAction, _super);

  function AsapAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = _Immediate.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
  };

  AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      _Immediate.Immediate.clearImmediate(id);

      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AsapAction;
}(_AsyncAction.AsyncAction);

exports.AsapAction = AsapAction;
},{"tslib":"node_modules/tslib/tslib.es6.js","../util/Immediate":"node_modules/rxjs/_esm5/internal/util/Immediate.js","./AsyncAction":"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AsapScheduler = /*@__PURE__*/function (_super) {
  tslib_1.__extends(AsapScheduler, _super);

  function AsapScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AsapScheduler.prototype.flush = function (action) {
    this.active = true;
    this.scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    var count = actions.length;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this.active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsapScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.AsapScheduler = AsapScheduler;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/asap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asap = exports.asapScheduler = void 0;

var _AsapAction = require("./AsapAction");

var _AsapScheduler = require("./AsapScheduler");

/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */
var asapScheduler = /*@__PURE__*/new _AsapScheduler.AsapScheduler(_AsapAction.AsapAction);
exports.asapScheduler = asapScheduler;
var asap = asapScheduler;
exports.asap = asap;
},{"./AsapAction":"node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js","./AsapScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/async.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.async = exports.asyncScheduler = void 0;

var _AsyncAction = require("./AsyncAction");

var _AsyncScheduler = require("./AsyncScheduler");

/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var asyncScheduler = /*@__PURE__*/new _AsyncScheduler.AsyncScheduler(_AsyncAction.AsyncAction);
exports.asyncScheduler = asyncScheduler;
var async = asyncScheduler;
exports.async = async;
},{"./AsyncAction":"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js","./AsyncScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var AnimationFrameAction = /*@__PURE__*/function (_super) {
  tslib_1.__extends(AnimationFrameAction, _super);

  function AnimationFrameAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
      return scheduler.flush(null);
    }));
  };

  AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      cancelAnimationFrame(id);
      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AnimationFrameAction;
}(_AsyncAction.AsyncAction);

exports.AnimationFrameAction = AnimationFrameAction;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncAction":"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AnimationFrameScheduler = /*@__PURE__*/function (_super) {
  tslib_1.__extends(AnimationFrameScheduler, _super);

  function AnimationFrameScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AnimationFrameScheduler.prototype.flush = function (action) {
    this.active = true;
    this.scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    var count = actions.length;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this.active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AnimationFrameScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.AnimationFrameScheduler = AnimationFrameScheduler;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrame = exports.animationFrameScheduler = void 0;

var _AnimationFrameAction = require("./AnimationFrameAction");

var _AnimationFrameScheduler = require("./AnimationFrameScheduler");

/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */
var animationFrameScheduler = /*@__PURE__*/new _AnimationFrameScheduler.AnimationFrameScheduler(_AnimationFrameAction.AnimationFrameAction);
exports.animationFrameScheduler = animationFrameScheduler;
var animationFrame = animationFrameScheduler;
exports.animationFrame = animationFrame;
},{"./AnimationFrameAction":"node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js","./AnimationFrameScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

var _AsyncScheduler = require("./AsyncScheduler");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var VirtualTimeScheduler = /*@__PURE__*/function (_super) {
  tslib_1.__extends(VirtualTimeScheduler, _super);

  function VirtualTimeScheduler(SchedulerAction, maxFrames) {
    if (SchedulerAction === void 0) {
      SchedulerAction = VirtualAction;
    }

    if (maxFrames === void 0) {
      maxFrames = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      return _this.frame;
    }) || this;

    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }

  VirtualTimeScheduler.prototype.flush = function () {
    var _a = this,
        actions = _a.actions,
        maxFrames = _a.maxFrames;

    var error, action;

    while ((action = actions[0]) && action.delay <= maxFrames) {
      actions.shift();
      this.frame = action.delay;

      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  VirtualTimeScheduler.frameTimeFactor = 10;
  return VirtualTimeScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.VirtualTimeScheduler = VirtualTimeScheduler;

var VirtualAction = /*@__PURE__*/function (_super) {
  tslib_1.__extends(VirtualAction, _super);

  function VirtualAction(scheduler, work, index) {
    if (index === void 0) {
      index = scheduler.index += 1;
    }

    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index;
    _this.active = true;
    _this.index = scheduler.index = index;
    return _this;
  }

  VirtualAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (!this.id) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.active = false;
    var action = new VirtualAction(this.scheduler, this.work);
    this.add(action);
    return action.schedule(state, delay);
  };

  VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.delay = scheduler.frame + delay;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction.sortActions);
    return true;
  };

  VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return undefined;
  };

  VirtualAction.prototype._execute = function (state, delay) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state, delay);
    }
  };

  VirtualAction.sortActions = function (a, b) {
    if (a.delay === b.delay) {
      if (a.index === b.index) {
        return 0;
      } else if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a.delay > b.delay) {
      return 1;
    } else {
      return -1;
    }
  };

  return VirtualAction;
}(_AsyncAction.AsyncAction);

exports.VirtualAction = VirtualAction;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncAction":"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js","./AsyncScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"node_modules/rxjs/_esm5/internal/util/noop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() {}
},{}],"node_modules/rxjs/_esm5/internal/util/isObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObservable = isObservable;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function isObservable(obj) {
  return !!obj && (obj instanceof _Observable.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArgumentOutOfRangeError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ArgumentOutOfRangeErrorImpl = /*@__PURE__*/function () {
  function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
  }

  ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
  return ArgumentOutOfRangeErrorImpl;
}();

var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
},{}],"node_modules/rxjs/_esm5/internal/util/EmptyError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var EmptyErrorImpl = /*@__PURE__*/function () {
  function EmptyErrorImpl() {
    Error.call(this);
    this.message = 'no elements in sequence';
    this.name = 'EmptyError';
    return this;
  }

  EmptyErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
  return EmptyErrorImpl;
}();

var EmptyError = EmptyErrorImpl;
exports.EmptyError = EmptyError;
},{}],"node_modules/rxjs/_esm5/internal/util/TimeoutError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeoutError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var TimeoutErrorImpl = /*@__PURE__*/function () {
  function TimeoutErrorImpl() {
    Error.call(this);
    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    return this;
  }

  TimeoutErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
  return TimeoutErrorImpl;
}();

var TimeoutError = TimeoutErrorImpl;
exports.TimeoutError = TimeoutError;
},{}],"node_modules/rxjs/_esm5/internal/operators/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;
exports.MapOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function map(project, thisArg) {
  return function mapOperation(source) {
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }

    return source.lift(new MapOperator(project, thisArg));
  };
}

var MapOperator = /*@__PURE__*/function () {
  function MapOperator(project, thisArg) {
    this.project = project;
    this.thisArg = thisArg;
  }

  MapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
  };

  return MapOperator;
}();

exports.MapOperator = MapOperator;

var MapSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(MapSubscriber, _super);

  function MapSubscriber(destination, project, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.count = 0;
    _this.thisArg = thisArg || _this;
    return _this;
  }

  MapSubscriber.prototype._next = function (value) {
    var result;

    try {
      result = this.project.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return MapSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/observable/bindCallback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindCallback = bindCallback;

var _Observable = require("../Observable");

var _AsyncSubject = require("../AsyncSubject");

var _map = require("../operators/map");

var _canReportError = require("../util/canReportError");

var _isArray = require("../util/isArray");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */
function bindCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if ((0, _isScheduler.isScheduler)(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0, _map.map)(function (args) {
          return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var context = this;
    var subject;
    var params = {
      context: context,
      subject: subject,
      callbackFunc: callbackFunc,
      scheduler: scheduler
    };
    return new _Observable.Observable(function (subscriber) {
      if (!scheduler) {
        if (!subject) {
          subject = new _AsyncSubject.AsyncSubject();

          var handler = function () {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if ((0, _canReportError.canReportError)(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        var state = {
          args: args,
          subscriber: subscriber,
          params: params
        };
        return scheduler.schedule(dispatch, 0, state);
      }
    });
  };
}

function dispatch(state) {
  var _this = this;

  var self = this;
  var args = state.args,
      subscriber = state.subscriber,
      params = state.params;
  var callbackFunc = params.callbackFunc,
      context = params.context,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new _AsyncSubject.AsyncSubject();

    var handler = function () {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

      _this.add(scheduler.schedule(dispatchNext, 0, {
        value: value,
        subject: subject
      }));
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      subject.error(err);
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(state) {
  var value = state.value,
      subject = state.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(state) {
  var err = state.err,
      subject = state.subject;
  subject.error(err);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../AsyncSubject":"node_modules/rxjs/_esm5/internal/AsyncSubject.js","../operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js","../util/canReportError":"node_modules/rxjs/_esm5/internal/util/canReportError.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindNodeCallback = bindNodeCallback;

var _Observable = require("../Observable");

var _AsyncSubject = require("../AsyncSubject");

var _map = require("../operators/map");

var _canReportError = require("../util/canReportError");

var _isScheduler = require("../util/isScheduler");

var _isArray = require("../util/isArray");

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if ((0, _isScheduler.isScheduler)(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0, _map.map)(function (args) {
          return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var params = {
      subject: undefined,
      args: args,
      callbackFunc: callbackFunc,
      scheduler: scheduler,
      context: this
    };
    return new _Observable.Observable(function (subscriber) {
      var context = params.context;
      var subject = params.subject;

      if (!scheduler) {
        if (!subject) {
          subject = params.subject = new _AsyncSubject.AsyncSubject();

          var handler = function () {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            var err = innerArgs.shift();

            if (err) {
              subject.error(err);
              return;
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if ((0, _canReportError.canReportError)(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          params: params,
          subscriber: subscriber,
          context: context
        });
      }
    });
  };
}

function dispatch(state) {
  var _this = this;

  var params = state.params,
      subscriber = state.subscriber,
      context = state.context;
  var callbackFunc = params.callbackFunc,
      args = params.args,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new _AsyncSubject.AsyncSubject();

    var handler = function () {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var err = innerArgs.shift();

      if (err) {
        _this.add(scheduler.schedule(dispatchError, 0, {
          err: err,
          subject: subject
        }));
      } else {
        var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

        _this.add(scheduler.schedule(dispatchNext, 0, {
          value: value,
          subject: subject
        }));
      }
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      this.add(scheduler.schedule(dispatchError, 0, {
        err: err,
        subject: subject
      }));
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(arg) {
  var value = arg.value,
      subject = arg.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(arg) {
  var err = arg.err,
      subject = arg.subject;
  subject.error(err);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../AsyncSubject":"node_modules/rxjs/_esm5/internal/AsyncSubject.js","../operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js","../util/canReportError":"node_modules/rxjs/_esm5/internal/util/canReportError.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js"}],"node_modules/rxjs/_esm5/internal/OuterSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OuterSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("./Subscriber");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var OuterSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(OuterSubscriber, _super);

  function OuterSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  OuterSubscriber.prototype.notifyError = function (error, innerSub) {
    this.destination.error(error);
  };

  OuterSubscriber.prototype.notifyComplete = function (innerSub) {
    this.destination.complete();
  };

  return OuterSubscriber;
}(_Subscriber.Subscriber);

exports.OuterSubscriber = OuterSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/InnerSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("./Subscriber");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var InnerSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(InnerSubscriber, _super);

  function InnerSubscriber(parent, outerValue, outerIndex) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    _this.outerValue = outerValue;
    _this.outerIndex = outerIndex;
    _this.index = 0;
    return _this;
  }

  InnerSubscriber.prototype._next = function (value) {
    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
  };

  InnerSubscriber.prototype._error = function (error) {
    this.parent.notifyError(error, this);
    this.unsubscribe();
  };

  InnerSubscriber.prototype._complete = function () {
    this.parent.notifyComplete(this);
    this.unsubscribe();
  };

  return InnerSubscriber;
}(_Subscriber.Subscriber);

exports.InnerSubscriber = InnerSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToPromise = void 0;

var _hostReportError = require("./hostReportError");

/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
var subscribeToPromise = function (promise) {
  return function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, _hostReportError.hostReportError);
    return subscriber;
  };
};

exports.subscribeToPromise = subscribeToPromise;
},{"./hostReportError":"node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"node_modules/rxjs/_esm5/internal/symbol/iterator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSymbolIterator = getSymbolIterator;
exports.$$iterator = exports.iterator = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }

  return Symbol.iterator;
}

var iterator = /*@__PURE__*/getSymbolIterator();
exports.iterator = iterator;
var $$iterator = iterator;
exports.$$iterator = $$iterator;
},{}],"node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToIterable = void 0;

var _iterator = require("../symbol/iterator");

/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
var subscribeToIterable = function (iterable) {
  return function (subscriber) {
    var iterator = iterable[_iterator.iterator]();

    do {
      var item = void 0;

      try {
        item = iterator.next();
      } catch (err) {
        subscriber.error(err);
        return subscriber;
      }

      if (item.done) {
        subscriber.complete();
        break;
      }

      subscriber.next(item.value);

      if (subscriber.closed) {
        break;
      }
    } while (true);

    if (typeof iterator.return === 'function') {
      subscriber.add(function () {
        if (iterator.return) {
          iterator.return();
        }
      });
    }

    return subscriber;
  };
};

exports.subscribeToIterable = subscribeToIterable;
},{"../symbol/iterator":"node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToObservable = void 0;

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
var subscribeToObservable = function (obj) {
  return function (subscriber) {
    var obs = obj[_observable.observable]();

    if (typeof obs.subscribe !== 'function') {
      throw new TypeError('Provided object does not correctly implement Symbol.observable');
    } else {
      return obs.subscribe(subscriber);
    }
  };
};

exports.subscribeToObservable = subscribeToObservable;
},{"../symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"node_modules/rxjs/_esm5/internal/util/isArrayLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayLike = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};

exports.isArrayLike = isArrayLike;
},{}],"node_modules/rxjs/_esm5/internal/util/isPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = isPromise;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
  return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
},{}],"node_modules/rxjs/_esm5/internal/util/subscribeTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeTo = void 0;

var _subscribeToArray = require("./subscribeToArray");

var _subscribeToPromise = require("./subscribeToPromise");

var _subscribeToIterable = require("./subscribeToIterable");

var _subscribeToObservable = require("./subscribeToObservable");

var _isArrayLike = require("./isArrayLike");

var _isPromise = require("./isPromise");

var _isObject = require("./isObject");

var _iterator = require("../symbol/iterator");

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
var subscribeTo = function (result) {
  if (!!result && typeof result[_observable.observable] === 'function') {
    return (0, _subscribeToObservable.subscribeToObservable)(result);
  } else if ((0, _isArrayLike.isArrayLike)(result)) {
    return (0, _subscribeToArray.subscribeToArray)(result);
  } else if ((0, _isPromise.isPromise)(result)) {
    return (0, _subscribeToPromise.subscribeToPromise)(result);
  } else if (!!result && typeof result[_iterator.iterator] === 'function') {
    return (0, _subscribeToIterable.subscribeToIterable)(result);
  } else {
    var value = (0, _isObject.isObject)(result) ? 'an invalid object' : "'" + result + "'";
    var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(msg);
  }
};

exports.subscribeTo = subscribeTo;
},{"./subscribeToArray":"node_modules/rxjs/_esm5/internal/util/subscribeToArray.js","./subscribeToPromise":"node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js","./subscribeToIterable":"node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js","./subscribeToObservable":"node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js","./isArrayLike":"node_modules/rxjs/_esm5/internal/util/isArrayLike.js","./isPromise":"node_modules/rxjs/_esm5/internal/util/isPromise.js","./isObject":"node_modules/rxjs/_esm5/internal/util/isObject.js","../symbol/iterator":"node_modules/rxjs/_esm5/internal/symbol/iterator.js","../symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToResult = subscribeToResult;

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeTo = require("./subscribeTo");

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
  if (innerSubscriber === void 0) {
    innerSubscriber = new _InnerSubscriber.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
  }

  if (innerSubscriber.closed) {
    return undefined;
  }

  if (result instanceof _Observable.Observable) {
    return result.subscribe(innerSubscriber);
  }

  return (0, _subscribeTo.subscribeTo)(result)(innerSubscriber);
}
},{"../InnerSubscriber":"node_modules/rxjs/_esm5/internal/InnerSubscriber.js","./subscribeTo":"node_modules/rxjs/_esm5/internal/util/subscribeTo.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/observable/combineLatest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatest = combineLatest;
exports.CombineLatestSubscriber = exports.CombineLatestOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isScheduler = require("../util/isScheduler");

var _isArray = require("../util/isArray");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

var _fromArray = require("./fromArray");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */
var NONE = {};

function combineLatest() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = undefined;
  var scheduler = undefined;

  if ((0, _isScheduler.isScheduler)(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }

  if (typeof observables[observables.length - 1] === 'function') {
    resultSelector = observables.pop();
  }

  if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
    observables = observables[0];
  }

  return (0, _fromArray.fromArray)(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}

var CombineLatestOperator = /*@__PURE__*/function () {
  function CombineLatestOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  CombineLatestOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
  };

  return CombineLatestOperator;
}();

exports.CombineLatestOperator = CombineLatestOperator;

var CombineLatestSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(CombineLatestSubscriber, _super);

  function CombineLatestSubscriber(destination, resultSelector) {
    var _this = _super.call(this, destination) || this;

    _this.resultSelector = resultSelector;
    _this.active = 0;
    _this.values = [];
    _this.observables = [];
    return _this;
  }

  CombineLatestSubscriber.prototype._next = function (observable) {
    this.values.push(NONE);
    this.observables.push(observable);
  };

  CombineLatestSubscriber.prototype._complete = function () {
    var observables = this.observables;
    var len = observables.length;

    if (len === 0) {
      this.destination.complete();
    } else {
      this.active = len;
      this.toRespond = len;

      for (var i = 0; i < len; i++) {
        var observable = observables[i];
        this.add((0, _subscribeToResult.subscribeToResult)(this, observable, undefined, i));
      }
    }
  };

  CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
    if ((this.active -= 1) === 0) {
      this.destination.complete();
    }
  };

  CombineLatestSubscriber.prototype.notifyNext = function (_outerValue, innerValue, outerIndex) {
    var values = this.values;
    var oldVal = values[outerIndex];
    var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
    values[outerIndex] = innerValue;

    if (toRespond === 0) {
      if (this.resultSelector) {
        this._tryResultSelector(values);
      } else {
        this.destination.next(values.slice());
      }
    }
  };

  CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
    var result;

    try {
      result = this.resultSelector.apply(this, values);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return CombineLatestSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.CombineLatestSubscriber = CombineLatestSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","./fromArray":"node_modules/rxjs/_esm5/internal/observable/fromArray.js"}],"node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleObservable = scheduleObservable;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */
function scheduleObservable(input, scheduler) {
  return new _Observable.Observable(function (subscriber) {
    var sub = new _Subscription.Subscription();
    sub.add(scheduler.schedule(function () {
      var observable = input[_observable.observable]();

      sub.add(observable.subscribe({
        next: function (value) {
          sub.add(scheduler.schedule(function () {
            return subscriber.next(value);
          }));
        },
        error: function (err) {
          sub.add(scheduler.schedule(function () {
            return subscriber.error(err);
          }));
        },
        complete: function () {
          sub.add(scheduler.schedule(function () {
            return subscriber.complete();
          }));
        }
      }));
    }));
    return sub;
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schedulePromise = schedulePromise;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function schedulePromise(input, scheduler) {
  return new _Observable.Observable(function (subscriber) {
    var sub = new _Subscription.Subscription();
    sub.add(scheduler.schedule(function () {
      return input.then(function (value) {
        sub.add(scheduler.schedule(function () {
          subscriber.next(value);
          sub.add(scheduler.schedule(function () {
            return subscriber.complete();
          }));
        }));
      }, function (err) {
        sub.add(scheduler.schedule(function () {
          return subscriber.error(err);
        }));
      });
    }));
    return sub;
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleIterable = scheduleIterable;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _iterator = require("../symbol/iterator");

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */
function scheduleIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }

  return new _Observable.Observable(function (subscriber) {
    var sub = new _Subscription.Subscription();
    var iterator;
    sub.add(function () {
      if (iterator && typeof iterator.return === 'function') {
        iterator.return();
      }
    });
    sub.add(scheduler.schedule(function () {
      iterator = input[_iterator.iterator]();
      sub.add(scheduler.schedule(function () {
        if (subscriber.closed) {
          return;
        }

        var value;
        var done;

        try {
          var result = iterator.next();
          value = result.value;
          done = result.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }

        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
          this.schedule();
        }
      }));
    }));
    return sub;
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../symbol/iterator":"node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"node_modules/rxjs/_esm5/internal/util/isInteropObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInteropObservable = isInteropObservable;

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
function isInteropObservable(input) {
  return input && typeof input[_observable.observable] === 'function';
}
},{"../symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"node_modules/rxjs/_esm5/internal/util/isIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = isIterable;

var _iterator = require("../symbol/iterator");

/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
function isIterable(input) {
  return input && typeof input[_iterator.iterator] === 'function';
}
},{"../symbol/iterator":"node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"node_modules/rxjs/_esm5/internal/scheduled/scheduled.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduled = scheduled;

var _scheduleObservable = require("./scheduleObservable");

var _schedulePromise = require("./schedulePromise");

var _scheduleArray = require("./scheduleArray");

var _scheduleIterable = require("./scheduleIterable");

var _isInteropObservable = require("../util/isInteropObservable");

var _isPromise = require("../util/isPromise");

var _isArrayLike = require("../util/isArrayLike");

var _isIterable = require("../util/isIterable");

/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */
function scheduled(input, scheduler) {
  if (input != null) {
    if ((0, _isInteropObservable.isInteropObservable)(input)) {
      return (0, _scheduleObservable.scheduleObservable)(input, scheduler);
    } else if ((0, _isPromise.isPromise)(input)) {
      return (0, _schedulePromise.schedulePromise)(input, scheduler);
    } else if ((0, _isArrayLike.isArrayLike)(input)) {
      return (0, _scheduleArray.scheduleArray)(input, scheduler);
    } else if ((0, _isIterable.isIterable)(input) || typeof input === 'string') {
      return (0, _scheduleIterable.scheduleIterable)(input, scheduler);
    }
  }

  throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
},{"./scheduleObservable":"node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js","./schedulePromise":"node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js","./scheduleArray":"node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js","./scheduleIterable":"node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js","../util/isInteropObservable":"node_modules/rxjs/_esm5/internal/util/isInteropObservable.js","../util/isPromise":"node_modules/rxjs/_esm5/internal/util/isPromise.js","../util/isArrayLike":"node_modules/rxjs/_esm5/internal/util/isArrayLike.js","../util/isIterable":"node_modules/rxjs/_esm5/internal/util/isIterable.js"}],"node_modules/rxjs/_esm5/internal/observable/from.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.from = from;

var _Observable = require("../Observable");

var _subscribeTo = require("../util/subscribeTo");

var _scheduled = require("../scheduled/scheduled");

/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */
function from(input, scheduler) {
  if (!scheduler) {
    if (input instanceof _Observable.Observable) {
      return input;
    }

    return new _Observable.Observable((0, _subscribeTo.subscribeTo)(input));
  } else {
    return (0, _scheduled.scheduled)(input, scheduler);
  }
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/subscribeTo":"node_modules/rxjs/_esm5/internal/util/subscribeTo.js","../scheduled/scheduled":"node_modules/rxjs/_esm5/internal/scheduled/scheduled.js"}],"node_modules/rxjs/_esm5/internal/innerSubscribe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.innerSubscribe = innerSubscribe;
exports.ComplexOuterSubscriber = exports.SimpleOuterSubscriber = exports.ComplexInnerSubscriber = exports.SimpleInnerSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("./Subscriber");

var _Observable = require("./Observable");

var _subscribeTo = require("./util/subscribeTo");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */
var SimpleInnerSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(SimpleInnerSubscriber, _super);

  function SimpleInnerSubscriber(parent) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    return _this;
  }

  SimpleInnerSubscriber.prototype._next = function (value) {
    this.parent.notifyNext(value);
  };

  SimpleInnerSubscriber.prototype._error = function (error) {
    this.parent.notifyError(error);
    this.unsubscribe();
  };

  SimpleInnerSubscriber.prototype._complete = function () {
    this.parent.notifyComplete();
    this.unsubscribe();
  };

  return SimpleInnerSubscriber;
}(_Subscriber.Subscriber);

exports.SimpleInnerSubscriber = SimpleInnerSubscriber;

var ComplexInnerSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(ComplexInnerSubscriber, _super);

  function ComplexInnerSubscriber(parent, outerValue, outerIndex) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    _this.outerValue = outerValue;
    _this.outerIndex = outerIndex;
    return _this;
  }

  ComplexInnerSubscriber.prototype._next = function (value) {
    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
  };

  ComplexInnerSubscriber.prototype._error = function (error) {
    this.parent.notifyError(error);
    this.unsubscribe();
  };

  ComplexInnerSubscriber.prototype._complete = function () {
    this.parent.notifyComplete(this);
    this.unsubscribe();
  };

  return ComplexInnerSubscriber;
}(_Subscriber.Subscriber);

exports.ComplexInnerSubscriber = ComplexInnerSubscriber;

var SimpleOuterSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(SimpleOuterSubscriber, _super);

  function SimpleOuterSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
    this.destination.next(innerValue);
  };

  SimpleOuterSubscriber.prototype.notifyError = function (err) {
    this.destination.error(err);
  };

  SimpleOuterSubscriber.prototype.notifyComplete = function () {
    this.destination.complete();
  };

  return SimpleOuterSubscriber;
}(_Subscriber.Subscriber);

exports.SimpleOuterSubscriber = SimpleOuterSubscriber;

var ComplexOuterSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(ComplexOuterSubscriber, _super);

  function ComplexOuterSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ComplexOuterSubscriber.prototype.notifyNext = function (_outerValue, innerValue, _outerIndex, _innerSub) {
    this.destination.next(innerValue);
  };

  ComplexOuterSubscriber.prototype.notifyError = function (error) {
    this.destination.error(error);
  };

  ComplexOuterSubscriber.prototype.notifyComplete = function (_innerSub) {
    this.destination.complete();
  };

  return ComplexOuterSubscriber;
}(_Subscriber.Subscriber);

exports.ComplexOuterSubscriber = ComplexOuterSubscriber;

function innerSubscribe(result, innerSubscriber) {
  if (innerSubscriber.closed) {
    return undefined;
  }

  if (result instanceof _Observable.Observable) {
    return result.subscribe(innerSubscriber);
  }

  return (0, _subscribeTo.subscribeTo)(result)(innerSubscriber);
}
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","./Observable":"node_modules/rxjs/_esm5/internal/Observable.js","./util/subscribeTo":"node_modules/rxjs/_esm5/internal/util/subscribeTo.js"}],"node_modules/rxjs/_esm5/internal/operators/mergeMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMap = mergeMap;
exports.flatMap = exports.MergeMapSubscriber = exports.MergeMapOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _map = require("./map");

var _from = require("../observable/from");

var _innerSubscribe = require("../innerSubscribe");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (typeof resultSelector === 'function') {
    return function (source) {
      return source.pipe(mergeMap(function (a, i) {
        return (0, _from.from)(project(a, i)).pipe((0, _map.map)(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }, concurrent));
    };
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return function (source) {
    return source.lift(new MergeMapOperator(project, concurrent));
  };
}

var MergeMapOperator = /*@__PURE__*/function () {
  function MergeMapOperator(project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }

    this.project = project;
    this.concurrent = concurrent;
  }

  MergeMapOperator.prototype.call = function (observer, source) {
    return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
  };

  return MergeMapOperator;
}();

exports.MergeMapOperator = MergeMapOperator;

var MergeMapSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(MergeMapSubscriber, _super);

  function MergeMapSubscriber(destination, project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.concurrent = concurrent;
    _this.hasCompleted = false;
    _this.buffer = [];
    _this.active = 0;
    _this.index = 0;
    return _this;
  }

  MergeMapSubscriber.prototype._next = function (value) {
    if (this.active < this.concurrent) {
      this._tryNext(value);
    } else {
      this.buffer.push(value);
    }
  };

  MergeMapSubscriber.prototype._tryNext = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.active++;

    this._innerSub(result);
  };

  MergeMapSubscriber.prototype._innerSub = function (ish) {
    var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
    var destination = this.destination;
    destination.add(innerSubscriber);
    var innerSubscription = (0, _innerSubscribe.innerSubscribe)(ish, innerSubscriber);

    if (innerSubscription !== innerSubscriber) {
      destination.add(innerSubscription);
    }
  };

  MergeMapSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (this.active === 0 && this.buffer.length === 0) {
      this.destination.complete();
    }

    this.unsubscribe();
  };

  MergeMapSubscriber.prototype.notifyNext = function (innerValue) {
    this.destination.next(innerValue);
  };

  MergeMapSubscriber.prototype.notifyComplete = function () {
    var buffer = this.buffer;
    this.active--;

    if (buffer.length > 0) {
      this._next(buffer.shift());
    } else if (this.active === 0 && this.hasCompleted) {
      this.destination.complete();
    }
  };

  return MergeMapSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

exports.MergeMapSubscriber = MergeMapSubscriber;
var flatMap = mergeMap;
exports.flatMap = flatMap;
},{"tslib":"node_modules/tslib/tslib.es6.js","./map":"node_modules/rxjs/_esm5/internal/operators/map.js","../observable/from":"node_modules/rxjs/_esm5/internal/observable/from.js","../innerSubscribe":"node_modules/rxjs/_esm5/internal/innerSubscribe.js"}],"node_modules/rxjs/_esm5/internal/operators/mergeAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAll = mergeAll;

var _mergeMap = require("./mergeMap");

var _identity = require("../util/identity");

/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  return (0, _mergeMap.mergeMap)(_identity.identity, concurrent);
}
},{"./mergeMap":"node_modules/rxjs/_esm5/internal/operators/mergeMap.js","../util/identity":"node_modules/rxjs/_esm5/internal/util/identity.js"}],"node_modules/rxjs/_esm5/internal/operators/concatAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAll = concatAll;

var _mergeAll = require("./mergeAll");

/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */
function concatAll() {
  return (0, _mergeAll.mergeAll)(1);
}
},{"./mergeAll":"node_modules/rxjs/_esm5/internal/operators/mergeAll.js"}],"node_modules/rxjs/_esm5/internal/observable/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

var _of = require("./of");

var _concatAll = require("../operators/concatAll");

/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */
function concat() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return (0, _concatAll.concatAll)()(_of.of.apply(void 0, observables));
}
},{"./of":"node_modules/rxjs/_esm5/internal/observable/of.js","../operators/concatAll":"node_modules/rxjs/_esm5/internal/operators/concatAll.js"}],"node_modules/rxjs/_esm5/internal/observable/defer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defer = defer;

var _Observable = require("../Observable");

var _from = require("./from");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
function defer(observableFactory) {
  return new _Observable.Observable(function (subscriber) {
    var input;

    try {
      input = observableFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = input ? (0, _from.from)(input) : (0, _empty.empty)();
    return source.subscribe(subscriber);
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","./from":"node_modules/rxjs/_esm5/internal/observable/from.js","./empty":"node_modules/rxjs/_esm5/internal/observable/empty.js"}],"node_modules/rxjs/_esm5/internal/observable/forkJoin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forkJoin = forkJoin;

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _map = require("../operators/map");

var _isObject = require("../util/isObject");

var _from = require("./from");

/** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */
function forkJoin() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  if (sources.length === 1) {
    var first_1 = sources[0];

    if ((0, _isArray.isArray)(first_1)) {
      return forkJoinInternal(first_1, null);
    }

    if ((0, _isObject.isObject)(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
      var keys = Object.keys(first_1);
      return forkJoinInternal(keys.map(function (key) {
        return first_1[key];
      }), keys);
    }
  }

  if (typeof sources[sources.length - 1] === 'function') {
    var resultSelector_1 = sources.pop();
    sources = sources.length === 1 && (0, _isArray.isArray)(sources[0]) ? sources[0] : sources;
    return forkJoinInternal(sources, null).pipe((0, _map.map)(function (args) {
      return resultSelector_1.apply(void 0, args);
    }));
  }

  return forkJoinInternal(sources, null);
}

function forkJoinInternal(sources, keys) {
  return new _Observable.Observable(function (subscriber) {
    var len = sources.length;

    if (len === 0) {
      subscriber.complete();
      return;
    }

    var values = new Array(len);
    var completed = 0;
    var emitted = 0;

    var _loop_1 = function (i) {
      var source = (0, _from.from)(sources[i]);
      var hasValue = false;
      subscriber.add(source.subscribe({
        next: function (value) {
          if (!hasValue) {
            hasValue = true;
            emitted++;
          }

          values[i] = value;
        },
        error: function (err) {
          return subscriber.error(err);
        },
        complete: function () {
          completed++;

          if (completed === len || !hasValue) {
            if (emitted === len) {
              subscriber.next(keys ? keys.reduce(function (result, key, i) {
                return result[key] = values[i], result;
              }, {}) : values);
            }

            subscriber.complete();
          }
        }
      }));
    };

    for (var i = 0; i < len; i++) {
      _loop_1(i);
    }
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js","../util/isObject":"node_modules/rxjs/_esm5/internal/util/isObject.js","./from":"node_modules/rxjs/_esm5/internal/observable/from.js"}],"node_modules/rxjs/_esm5/internal/observable/fromEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEvent = fromEvent;

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _isFunction = require("../util/isFunction");

var _map = require("../operators/map");

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
var toString = /*@__PURE__*/function () {
  return Object.prototype.toString;
}();

function fromEvent(target, eventName, options, resultSelector) {
  if ((0, _isFunction.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }

  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0, _map.map)(function (args) {
      return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new _Observable.Observable(function (subscriber) {
    function handler(e) {
      if (arguments.length > 1) {
        subscriber.next(Array.prototype.slice.call(arguments));
      } else {
        subscriber.next(e);
      }
    }

    setupSubscription(target, eventName, handler, subscriber, options);
  });
}

function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
  var unsubscribe;

  if (isEventTarget(sourceObj)) {
    var source_1 = sourceObj;
    sourceObj.addEventListener(eventName, handler, options);

    unsubscribe = function () {
      return source_1.removeEventListener(eventName, handler, options);
    };
  } else if (isJQueryStyleEventEmitter(sourceObj)) {
    var source_2 = sourceObj;
    sourceObj.on(eventName, handler);

    unsubscribe = function () {
      return source_2.off(eventName, handler);
    };
  } else if (isNodeStyleEventEmitter(sourceObj)) {
    var source_3 = sourceObj;
    sourceObj.addListener(eventName, handler);

    unsubscribe = function () {
      return source_3.removeListener(eventName, handler);
    };
  } else if (sourceObj && sourceObj.length) {
    for (var i = 0, len = sourceObj.length; i < len; i++) {
      setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    }
  } else {
    throw new TypeError('Invalid event target');
  }

  subscriber.add(unsubscribe);
}

function isNodeStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}

function isJQueryStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}

function isEventTarget(sourceObj) {
  return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isFunction":"node_modules/rxjs/_esm5/internal/util/isFunction.js","../operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js"}],"node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEventPattern = fromEventPattern;

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _isFunction = require("../util/isFunction");

var _map = require("../operators/map");

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe((0, _map.map)(function (args) {
      return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new _Observable.Observable(function (subscriber) {
    var handler = function () {
      var e = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
      }

      return subscriber.next(e.length === 1 ? e[0] : e);
    };

    var retValue;

    try {
      retValue = addHandler(handler);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!(0, _isFunction.isFunction)(removeHandler)) {
      return undefined;
    }

    return function () {
      return removeHandler(handler, retValue);
    };
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isFunction":"node_modules/rxjs/_esm5/internal/util/isFunction.js","../operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js"}],"node_modules/rxjs/_esm5/internal/observable/generate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = generate;

var _Observable = require("../Observable");

var _identity = require("../util/identity");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
  var resultSelector;
  var initialState;

  if (arguments.length == 1) {
    var options = initialStateOrOptions;
    initialState = options.initialState;
    condition = options.condition;
    iterate = options.iterate;
    resultSelector = options.resultSelector || _identity.identity;
    scheduler = options.scheduler;
  } else if (resultSelectorOrObservable === undefined || (0, _isScheduler.isScheduler)(resultSelectorOrObservable)) {
    initialState = initialStateOrOptions;
    resultSelector = _identity.identity;
    scheduler = resultSelectorOrObservable;
  } else {
    initialState = initialStateOrOptions;
    resultSelector = resultSelectorOrObservable;
  }

  return new _Observable.Observable(function (subscriber) {
    var state = initialState;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        subscriber: subscriber,
        iterate: iterate,
        condition: condition,
        resultSelector: resultSelector,
        state: state
      });
    }

    do {
      if (condition) {
        var conditionResult = void 0;

        try {
          conditionResult = condition(state);
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        if (!conditionResult) {
          subscriber.complete();
          break;
        }
      }

      var value = void 0;

      try {
        value = resultSelector(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }

      subscriber.next(value);

      if (subscriber.closed) {
        break;
      }

      try {
        state = iterate(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }
    } while (true);

    return undefined;
  });
}

function dispatch(state) {
  var subscriber = state.subscriber,
      condition = state.condition;

  if (subscriber.closed) {
    return undefined;
  }

  if (state.needIterate) {
    try {
      state.state = state.iterate(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }
  } else {
    state.needIterate = true;
  }

  if (condition) {
    var conditionResult = void 0;

    try {
      conditionResult = condition(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!conditionResult) {
      subscriber.complete();
      return undefined;
    }

    if (subscriber.closed) {
      return undefined;
    }
  }

  var value;

  try {
    value = state.resultSelector(state.state);
  } catch (err) {
    subscriber.error(err);
    return undefined;
  }

  if (subscriber.closed) {
    return undefined;
  }

  subscriber.next(value);

  if (subscriber.closed) {
    return undefined;
  }

  return this.schedule(state);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/identity":"node_modules/rxjs/_esm5/internal/util/identity.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"node_modules/rxjs/_esm5/internal/observable/iif.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iif = iif;

var _defer = require("./defer");

var _empty = require("./empty");

/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */
function iif(condition, trueResult, falseResult) {
  if (trueResult === void 0) {
    trueResult = _empty.EMPTY;
  }

  if (falseResult === void 0) {
    falseResult = _empty.EMPTY;
  }

  return (0, _defer.defer)(function () {
    return condition() ? trueResult : falseResult;
  });
}
},{"./defer":"node_modules/rxjs/_esm5/internal/observable/defer.js","./empty":"node_modules/rxjs/_esm5/internal/observable/empty.js"}],"node_modules/rxjs/_esm5/internal/util/isNumeric.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;

var _isArray = require("./isArray");

/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
function isNumeric(val) {
  return !(0, _isArray.isArray)(val) && val - parseFloat(val) + 1 >= 0;
}
},{"./isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js"}],"node_modules/rxjs/_esm5/internal/observable/interval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interval = interval;

var _Observable = require("../Observable");

var _async = require("../scheduler/async");

var _isNumeric = require("../util/isNumeric");

/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */
function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }

  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  if (!(0, _isNumeric.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _async.async;
  }

  return new _Observable.Observable(function (subscriber) {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber: subscriber,
      counter: 0,
      period: period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  var subscriber = state.subscriber,
      counter = state.counter,
      period = state.period;
  subscriber.next(counter);
  this.schedule({
    subscriber: subscriber,
    counter: counter + 1,
    period: period
  }, period);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isNumeric":"node_modules/rxjs/_esm5/internal/util/isNumeric.js"}],"node_modules/rxjs/_esm5/internal/observable/merge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;

var _Observable = require("../Observable");

var _isScheduler = require("../util/isScheduler");

var _mergeAll = require("../operators/mergeAll");

var _fromArray = require("./fromArray");

/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */
function merge() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var concurrent = Number.POSITIVE_INFINITY;
  var scheduler = null;
  var last = observables[observables.length - 1];

  if ((0, _isScheduler.isScheduler)(last)) {
    scheduler = observables.pop();

    if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
      concurrent = observables.pop();
    }
  } else if (typeof last === 'number') {
    concurrent = observables.pop();
  }

  if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable.Observable) {
    return observables[0];
  }

  return (0, _mergeAll.mergeAll)(concurrent)((0, _fromArray.fromArray)(observables, scheduler));
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js","../operators/mergeAll":"node_modules/rxjs/_esm5/internal/operators/mergeAll.js","./fromArray":"node_modules/rxjs/_esm5/internal/observable/fromArray.js"}],"node_modules/rxjs/_esm5/internal/observable/never.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.never = never;
exports.NEVER = void 0;

var _Observable = require("../Observable");

var _noop = require("../util/noop");

/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */
var NEVER = /*@__PURE__*/new _Observable.Observable(_noop.noop);
exports.NEVER = NEVER;

function never() {
  return NEVER;
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/noop":"node_modules/rxjs/_esm5/internal/util/noop.js"}],"node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onErrorResumeNext = onErrorResumeNext;

var _Observable = require("../Observable");

var _from = require("./from");

var _isArray = require("../util/isArray");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */
function onErrorResumeNext() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  if (sources.length === 0) {
    return _empty.EMPTY;
  }

  var first = sources[0],
      remainder = sources.slice(1);

  if (sources.length === 1 && (0, _isArray.isArray)(first)) {
    return onErrorResumeNext.apply(void 0, first);
  }

  return new _Observable.Observable(function (subscriber) {
    var subNext = function () {
      return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
    };

    return (0, _from.from)(first).subscribe({
      next: function (value) {
        subscriber.next(value);
      },
      error: subNext,
      complete: subNext
    });
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","./from":"node_modules/rxjs/_esm5/internal/observable/from.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","./empty":"node_modules/rxjs/_esm5/internal/observable/empty.js"}],"node_modules/rxjs/_esm5/internal/observable/pairs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairs = pairs;
exports.dispatch = dispatch;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function pairs(obj, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable(function (subscriber) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length && !subscriber.closed; i++) {
        var key = keys[i];

        if (obj.hasOwnProperty(key)) {
          subscriber.next([key, obj[key]]);
        }
      }

      subscriber.complete();
    });
  } else {
    return new _Observable.Observable(function (subscriber) {
      var keys = Object.keys(obj);
      var subscription = new _Subscription.Subscription();
      subscription.add(scheduler.schedule(dispatch, 0, {
        keys: keys,
        index: 0,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
      return subscription;
    });
  }
}

function dispatch(state) {
  var keys = state.keys,
      index = state.index,
      subscriber = state.subscriber,
      subscription = state.subscription,
      obj = state.obj;

  if (!subscriber.closed) {
    if (index < keys.length) {
      var key = keys[index];
      subscriber.next([key, obj[key]]);
      subscription.add(this.schedule({
        keys: keys,
        index: index + 1,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
    } else {
      subscriber.complete();
    }
  }
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/util/not.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.not = not;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function not(pred, thisArg) {
  function notPred() {
    return !notPred.pred.apply(notPred.thisArg, arguments);
  }

  notPred.pred = pred;
  notPred.thisArg = thisArg;
  return notPred;
}
},{}],"node_modules/rxjs/_esm5/internal/operators/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function filter(predicate, thisArg) {
  return function filterOperatorFunction(source) {
    return source.lift(new FilterOperator(predicate, thisArg));
  };
}

var FilterOperator = /*@__PURE__*/function () {
  function FilterOperator(predicate, thisArg) {
    this.predicate = predicate;
    this.thisArg = thisArg;
  }

  FilterOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
  };

  return FilterOperator;
}();

var FilterSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(FilterSubscriber, _super);

  function FilterSubscriber(destination, predicate, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.thisArg = thisArg;
    _this.count = 0;
    return _this;
  }

  FilterSubscriber.prototype._next = function (value) {
    var result;

    try {
      result = this.predicate.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (result) {
      this.destination.next(value);
    }
  };

  return FilterSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/observable/partition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = partition;

var _not = require("../util/not");

var _subscribeTo = require("../util/subscribeTo");

var _filter = require("../operators/filter");

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */
function partition(source, predicate, thisArg) {
  return [(0, _filter.filter)(predicate, thisArg)(new _Observable.Observable((0, _subscribeTo.subscribeTo)(source))), (0, _filter.filter)((0, _not.not)(predicate, thisArg))(new _Observable.Observable((0, _subscribeTo.subscribeTo)(source)))];
}
},{"../util/not":"node_modules/rxjs/_esm5/internal/util/not.js","../util/subscribeTo":"node_modules/rxjs/_esm5/internal/util/subscribeTo.js","../operators/filter":"node_modules/rxjs/_esm5/internal/operators/filter.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/observable/race.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.race = race;
exports.RaceSubscriber = exports.RaceOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isArray = require("../util/isArray");

var _fromArray = require("./fromArray");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function race() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  if (observables.length === 1) {
    if ((0, _isArray.isArray)(observables[0])) {
      observables = observables[0];
    } else {
      return observables[0];
    }
  }

  return (0, _fromArray.fromArray)(observables, undefined).lift(new RaceOperator());
}

var RaceOperator = /*@__PURE__*/function () {
  function RaceOperator() {}

  RaceOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RaceSubscriber(subscriber));
  };

  return RaceOperator;
}();

exports.RaceOperator = RaceOperator;

var RaceSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(RaceSubscriber, _super);

  function RaceSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasFirst = false;
    _this.observables = [];
    _this.subscriptions = [];
    return _this;
  }

  RaceSubscriber.prototype._next = function (observable) {
    this.observables.push(observable);
  };

  RaceSubscriber.prototype._complete = function () {
    var observables = this.observables;
    var len = observables.length;

    if (len === 0) {
      this.destination.complete();
    } else {
      for (var i = 0; i < len && !this.hasFirst; i++) {
        var observable = observables[i];
        var subscription = (0, _subscribeToResult.subscribeToResult)(this, observable, undefined, i);

        if (this.subscriptions) {
          this.subscriptions.push(subscription);
        }

        this.add(subscription);
      }

      this.observables = null;
    }
  };

  RaceSubscriber.prototype.notifyNext = function (_outerValue, innerValue, outerIndex) {
    if (!this.hasFirst) {
      this.hasFirst = true;

      for (var i = 0; i < this.subscriptions.length; i++) {
        if (i !== outerIndex) {
          var subscription = this.subscriptions[i];
          subscription.unsubscribe();
          this.remove(subscription);
        }
      }

      this.subscriptions = null;
    }

    this.destination.next(innerValue);
  };

  return RaceSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.RaceSubscriber = RaceSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","./fromArray":"node_modules/rxjs/_esm5/internal/observable/fromArray.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/observable/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
exports.dispatch = dispatch;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function range(start, count, scheduler) {
  if (start === void 0) {
    start = 0;
  }

  return new _Observable.Observable(function (subscriber) {
    if (count === undefined) {
      count = start;
      start = 0;
    }

    var index = 0;
    var current = start;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        index: index,
        count: count,
        start: start,
        subscriber: subscriber
      });
    } else {
      do {
        if (index++ >= count) {
          subscriber.complete();
          break;
        }

        subscriber.next(current++);

        if (subscriber.closed) {
          break;
        }
      } while (true);
    }

    return undefined;
  });
}

function dispatch(state) {
  var start = state.start,
      index = state.index,
      count = state.count,
      subscriber = state.subscriber;

  if (index >= count) {
    subscriber.complete();
    return;
  }

  subscriber.next(start);

  if (subscriber.closed) {
    return;
  }

  state.index = index + 1;
  state.start = start + 1;
  this.schedule(state);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/observable/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timer = timer;

var _Observable = require("../Observable");

var _async = require("../scheduler/async");

var _isNumeric = require("../util/isNumeric");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
function timer(dueTime, periodOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }

  var period = -1;

  if ((0, _isNumeric.isNumeric)(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if ((0, _isScheduler.isScheduler)(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }

  if (!(0, _isScheduler.isScheduler)(scheduler)) {
    scheduler = _async.async;
  }

  return new _Observable.Observable(function (subscriber) {
    var due = (0, _isNumeric.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch, due, {
      index: 0,
      period: period,
      subscriber: subscriber
    });
  });
}

function dispatch(state) {
  var index = state.index,
      period = state.period,
      subscriber = state.subscriber;
  subscriber.next(index);

  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }

  state.index = index + 1;
  this.schedule(state, period);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isNumeric":"node_modules/rxjs/_esm5/internal/util/isNumeric.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"node_modules/rxjs/_esm5/internal/observable/using.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.using = using;

var _Observable = require("../Observable");

var _from = require("./from");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
function using(resourceFactory, observableFactory) {
  return new _Observable.Observable(function (subscriber) {
    var resource;

    try {
      resource = resourceFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var result;

    try {
      result = observableFactory(resource);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = result ? (0, _from.from)(result) : _empty.EMPTY;
    var subscription = source.subscribe(subscriber);
    return function () {
      subscription.unsubscribe();

      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","./from":"node_modules/rxjs/_esm5/internal/observable/from.js","./empty":"node_modules/rxjs/_esm5/internal/observable/empty.js"}],"node_modules/rxjs/_esm5/internal/observable/zip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;
exports.ZipSubscriber = exports.ZipOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _fromArray = require("./fromArray");

var _isArray = require("../util/isArray");

var _Subscriber = require("../Subscriber");

var _iterator = require("../../internal/symbol/iterator");

var _innerSubscribe = require("../innerSubscribe");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_.._internal_symbol_iterator,_innerSubscribe PURE_IMPORTS_END */
function zip() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = observables[observables.length - 1];

  if (typeof resultSelector === 'function') {
    observables.pop();
  }

  return (0, _fromArray.fromArray)(observables, undefined).lift(new ZipOperator(resultSelector));
}

var ZipOperator = /*@__PURE__*/function () {
  function ZipOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  ZipOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
  };

  return ZipOperator;
}();

exports.ZipOperator = ZipOperator;

var ZipSubscriber = /*@__PURE__*/function (_super) {
  tslib_1.__extends(ZipSubscriber, _super);

  function ZipSubscriber(destination, resultSelector, values) {
    if (values === void 0) {
      values = Object.create(null);
    }

    var _this = _super.call(this, destination) || this;

    _this.resultSelector = resultSelector;
    _this.iterators = [];
    _this.active = 0;
    _this.resultSelector = typeof resultSelector === 'function' ? resultSelector : undefined;
    return _this;
  }

  ZipSubscriber.prototype._next = function (value) {
    var iterators = this.iterators;

    if ((0, _isArray.isArray)(value)) {
      iterators.push(new StaticArrayIterator(value));
    } else if (typeof value[_iterator.iterator] === 'function') {
      iterators.push(new StaticIterator(value[_iterator.iterator]()));
    } else {
      iterators.push(new ZipBufferIterator(this.destination, this, value));
    }
  };

  ZipSubscriber.prototype._complete = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    this.unsubscribe();

    if (len === 0) {
      this.destination.complete();
      return;
    }

    this.active = len;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (iterator.stillUnsubscribed) {
        var destination = this.destination;
        destination.add(iterator.subscribe());
      } else {
        this.active--;
      }
    }
  };

  ZipSubscriber.prototype.notifyInactive = function () {
    this.active--;

    if (this.active === 0) {
      this.destination.complete();
    }
  };

  ZipSubscriber.prototype.checkIterators = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    var destination = this.destination;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
        return;
      }
    }

    var shouldComplete = false;
    var args = [];

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];
      var result = iterator.next();

      if (iterator.hasCompleted()) {
        shouldComplete = true;
      }

      if (result.done) {
        destination.complete();
        return;
      }

      args.push(result.value);
    }

    if (this.resultSelector) {
      this._tryresultSelector(args);
    } else {
      destination.next(args);
    }

    if (shouldComplete) {
      destination.complete();
    }
  };

  ZipSubscriber.prototype._tryresultSelector = function (args) {
    var result;

    try {
      result = this.resultSelector.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return ZipSubscriber;
}(_Subscriber.Subscriber);

exports.ZipSubscriber = ZipSubscriber;

var StaticIterator = /*@__PURE__*/function () {
  function StaticIterator(iterator) {
    this.iterator = iterator;
    this.nextResult = iterator.next();
  }

  StaticIterator.prototype.hasValue = function () {
    return true;
  };

  StaticIterator.prototype.next = function () {
    var result = this.nextResult;
    this.nextResult = this.iterator.next();
    return result;
  };

  StaticIterator.prototype.hasCompleted = function () {
    var nextResult = this.nextResult;
    return Boolean(nextResult && nextResult.done);
  };

  return StaticIterator;
}();

var StaticArrayIterator = /*@__PURE__*/function () {
  function StaticArrayIterator(array) {
    this.array = array;
    this.index = 0;
    this.length = 0;
    this.length = array.length;
  }

  StaticArrayIterator.prototype[_iterator.iterator] = function () {
    return this;
  };

  StaticArrayIterator.prototype.next = function (value) {
    var i = this.index++;
    var array = this.array;
    return i < this.length ? {
      value: array[i],
      done: false
    } : {
      value: null,
      done: true
    };
  };

  StaticArrayIterator.prototype.hasValue = function () {
    return this.array.length > this.index;
  };

  StaticArrayIterator.prototype.hasCompleted = function () {
    return this.array.length === this.index;
  };

  return StaticArrayIterator;
}();

var ZipBufferIterator = /*@__PURE__*/function (_super) {
  tslib_1.__extends(ZipBufferIterator, _super);

  function ZipBufferIterator(destination, parent, observable) {
    var _this = _super.call(this, destination) || this;

    _this.parent = parent;
    _this.observable = observable;
    _this.stillUnsubscribed = true;
    _this.buffer = [];
    _this.isComplete = false;
    return _this;
  }

  ZipBufferIterator.prototype[_iterator.iterator] = function () {
    return this;
  };

  ZipBufferIterator.prototype.next = function () {
    var buffer = this.buffer;

    if (buffer.length === 0 && this.isComplete) {
      return {
        value: null,
        done: true
      };
    } else {
      return {
        value: buffer.shift(),
        done: false
      };
    }
  };

  ZipBufferIterator.prototype.hasValue = function () {
    return this.buffer.length > 0;
  };

  ZipBufferIterator.prototype.hasCompleted = function () {
    return this.buffer.length === 0 && this.isComplete;
  };

  ZipBufferIterator.prototype.notifyComplete = function () {
    if (this.buffer.length > 0) {
      this.isComplete = true;
      this.parent.notifyInactive();
    } else {
      this.destination.complete();
    }
  };

  ZipBufferIterator.prototype.notifyNext = function (innerValue) {
    this.buffer.push(innerValue);
    this.parent.checkIterators();
  };

  ZipBufferIterator.prototype.subscribe = function () {
    return (0, _innerSubscribe.innerSubscribe)(this.observable, new _innerSubscribe.SimpleInnerSubscriber(this));
  };

  return ZipBufferIterator;
}(_innerSubscribe.SimpleOuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","./fromArray":"node_modules/rxjs/_esm5/internal/observable/fromArray.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../../internal/symbol/iterator":"node_modules/rxjs/_esm5/internal/symbol/iterator.js","../innerSubscribe":"node_modules/rxjs/_esm5/internal/innerSubscribe.js"}],"node_modules/rxjs/_esm5/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Observable", {
  enumerable: true,
  get: function () {
    return _Observable.Observable;
  }
});
Object.defineProperty(exports, "ConnectableObservable", {
  enumerable: true,
  get: function () {
    return _ConnectableObservable.ConnectableObservable;
  }
});
Object.defineProperty(exports, "GroupedObservable", {
  enumerable: true,
  get: function () {
    return _groupBy.GroupedObservable;
  }
});
Object.defineProperty(exports, "observable", {
  enumerable: true,
  get: function () {
    return _observable.observable;
  }
});
Object.defineProperty(exports, "Subject", {
  enumerable: true,
  get: function () {
    return _Subject.Subject;
  }
});
Object.defineProperty(exports, "BehaviorSubject", {
  enumerable: true,
  get: function () {
    return _BehaviorSubject.BehaviorSubject;
  }
});
Object.defineProperty(exports, "ReplaySubject", {
  enumerable: true,
  get: function () {
    return _ReplaySubject.ReplaySubject;
  }
});
Object.defineProperty(exports, "AsyncSubject", {
  enumerable: true,
  get: function () {
    return _AsyncSubject.AsyncSubject;
  }
});
Object.defineProperty(exports, "asap", {
  enumerable: true,
  get: function () {
    return _asap.asap;
  }
});
Object.defineProperty(exports, "asapScheduler", {
  enumerable: true,
  get: function () {
    return _asap.asapScheduler;
  }
});
Object.defineProperty(exports, "async", {
  enumerable: true,
  get: function () {
    return _async.async;
  }
});
Object.defineProperty(exports, "asyncScheduler", {
  enumerable: true,
  get: function () {
    return _async.asyncScheduler;
  }
});
Object.defineProperty(exports, "queue", {
  enumerable: true,
  get: function () {
    return _queue.queue;
  }
});
Object.defineProperty(exports, "queueScheduler", {
  enumerable: true,
  get: function () {
    return _queue.queueScheduler;
  }
});
Object.defineProperty(exports, "animationFrame", {
  enumerable: true,
  get: function () {
    return _animationFrame.animationFrame;
  }
});
Object.defineProperty(exports, "animationFrameScheduler", {
  enumerable: true,
  get: function () {
    return _animationFrame.animationFrameScheduler;
  }
});
Object.defineProperty(exports, "VirtualTimeScheduler", {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualTimeScheduler;
  }
});
Object.defineProperty(exports, "VirtualAction", {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualAction;
  }
});
Object.defineProperty(exports, "Scheduler", {
  enumerable: true,
  get: function () {
    return _Scheduler.Scheduler;
  }
});
Object.defineProperty(exports, "Subscription", {
  enumerable: true,
  get: function () {
    return _Subscription.Subscription;
  }
});
Object.defineProperty(exports, "Subscriber", {
  enumerable: true,
  get: function () {
    return _Subscriber.Subscriber;
  }
});
Object.defineProperty(exports, "Notification", {
  enumerable: true,
  get: function () {
    return _Notification.Notification;
  }
});
Object.defineProperty(exports, "NotificationKind", {
  enumerable: true,
  get: function () {
    return _Notification.NotificationKind;
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function () {
    return _noop.noop;
  }
});
Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function () {
    return _identity.identity;
  }
});
Object.defineProperty(exports, "isObservable", {
  enumerable: true,
  get: function () {
    return _isObservable.isObservable;
  }
});
Object.defineProperty(exports, "ArgumentOutOfRangeError", {
  enumerable: true,
  get: function () {
    return _ArgumentOutOfRangeError.ArgumentOutOfRangeError;
  }
});
Object.defineProperty(exports, "EmptyError", {
  enumerable: true,
  get: function () {
    return _EmptyError.EmptyError;
  }
});
Object.defineProperty(exports, "ObjectUnsubscribedError", {
  enumerable: true,
  get: function () {
    return _ObjectUnsubscribedError.ObjectUnsubscribedError;
  }
});
Object.defineProperty(exports, "UnsubscriptionError", {
  enumerable: true,
  get: function () {
    return _UnsubscriptionError.UnsubscriptionError;
  }
});
Object.defineProperty(exports, "TimeoutError", {
  enumerable: true,
  get: function () {
    return _TimeoutError.TimeoutError;
  }
});
Object.defineProperty(exports, "bindCallback", {
  enumerable: true,
  get: function () {
    return _bindCallback.bindCallback;
  }
});
Object.defineProperty(exports, "bindNodeCallback", {
  enumerable: true,
  get: function () {
    return _bindNodeCallback.bindNodeCallback;
  }
});
Object.defineProperty(exports, "combineLatest", {
  enumerable: true,
  get: function () {
    return _combineLatest.combineLatest;
  }
});
Object.defineProperty(exports, "concat", {
  enumerable: true,
  get: function () {
    return _concat.concat;
  }
});
Object.defineProperty(exports, "defer", {
  enumerable: true,
  get: function () {
    return _defer.defer;
  }
});
Object.defineProperty(exports, "empty", {
  enumerable: true,
  get: function () {
    return _empty.empty;
  }
});
Object.defineProperty(exports, "EMPTY", {
  enumerable: true,
  get: function () {
    return _empty.EMPTY;
  }
});
Object.defineProperty(exports, "forkJoin", {
  enumerable: true,
  get: function () {
    return _forkJoin.forkJoin;
  }
});
Object.defineProperty(exports, "from", {
  enumerable: true,
  get: function () {
    return _from.from;
  }
});
Object.defineProperty(exports, "fromEvent", {
  enumerable: true,
  get: function () {
    return _fromEvent.fromEvent;
  }
});
Object.defineProperty(exports, "fromEventPattern", {
  enumerable: true,
  get: function () {
    return _fromEventPattern.fromEventPattern;
  }
});
Object.defineProperty(exports, "generate", {
  enumerable: true,
  get: function () {
    return _generate.generate;
  }
});
Object.defineProperty(exports, "iif", {
  enumerable: true,
  get: function () {
    return _iif.iif;
  }
});
Object.defineProperty(exports, "interval", {
  enumerable: true,
  get: function () {
    return _interval.interval;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function () {
    return _merge.merge;
  }
});
Object.defineProperty(exports, "never", {
  enumerable: true,
  get: function () {
    return _never.never;
  }
});
Object.defineProperty(exports, "NEVER", {
  enumerable: true,
  get: function () {
    return _never.NEVER;
  }
});
Object.defineProperty(exports, "of", {
  enumerable: true,
  get: function () {
    return _of.of;
  }
});
Object.defineProperty(exports, "onErrorResumeNext", {
  enumerable: true,
  get: function () {
    return _onErrorResumeNext.onErrorResumeNext;
  }
});
Object.defineProperty(exports, "pairs", {
  enumerable: true,
  get: function () {
    return _pairs.pairs;
  }
});
Object.defineProperty(exports, "partition", {
  enumerable: true,
  get: function () {
    return _partition.partition;
  }
});
Object.defineProperty(exports, "race", {
  enumerable: true,
  get: function () {
    return _race.race;
  }
});
Object.defineProperty(exports, "range", {
  enumerable: true,
  get: function () {
    return _range.range;
  }
});
Object.defineProperty(exports, "throwError", {
  enumerable: true,
  get: function () {
    return _throwError.throwError;
  }
});
Object.defineProperty(exports, "timer", {
  enumerable: true,
  get: function () {
    return _timer.timer;
  }
});
Object.defineProperty(exports, "using", {
  enumerable: true,
  get: function () {
    return _using.using;
  }
});
Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function () {
    return _zip.zip;
  }
});
Object.defineProperty(exports, "scheduled", {
  enumerable: true,
  get: function () {
    return _scheduled.scheduled;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _config.config;
  }
});

var _Observable = require("./internal/Observable");

var _ConnectableObservable = require("./internal/observable/ConnectableObservable");

var _groupBy = require("./internal/operators/groupBy");

var _observable = require("./internal/symbol/observable");

var _Subject = require("./internal/Subject");

var _BehaviorSubject = require("./internal/BehaviorSubject");

var _ReplaySubject = require("./internal/ReplaySubject");

var _AsyncSubject = require("./internal/AsyncSubject");

var _asap = require("./internal/scheduler/asap");

var _async = require("./internal/scheduler/async");

var _queue = require("./internal/scheduler/queue");

var _animationFrame = require("./internal/scheduler/animationFrame");

var _VirtualTimeScheduler = require("./internal/scheduler/VirtualTimeScheduler");

var _Scheduler = require("./internal/Scheduler");

var _Subscription = require("./internal/Subscription");

var _Subscriber = require("./internal/Subscriber");

var _Notification = require("./internal/Notification");

var _pipe = require("./internal/util/pipe");

var _noop = require("./internal/util/noop");

var _identity = require("./internal/util/identity");

var _isObservable = require("./internal/util/isObservable");

var _ArgumentOutOfRangeError = require("./internal/util/ArgumentOutOfRangeError");

var _EmptyError = require("./internal/util/EmptyError");

var _ObjectUnsubscribedError = require("./internal/util/ObjectUnsubscribedError");

var _UnsubscriptionError = require("./internal/util/UnsubscriptionError");

var _TimeoutError = require("./internal/util/TimeoutError");

var _bindCallback = require("./internal/observable/bindCallback");

var _bindNodeCallback = require("./internal/observable/bindNodeCallback");

var _combineLatest = require("./internal/observable/combineLatest");

var _concat = require("./internal/observable/concat");

var _defer = require("./internal/observable/defer");

var _empty = require("./internal/observable/empty");

var _forkJoin = require("./internal/observable/forkJoin");

var _from = require("./internal/observable/from");

var _fromEvent = require("./internal/observable/fromEvent");

var _fromEventPattern = require("./internal/observable/fromEventPattern");

var _generate = require("./internal/observable/generate");

var _iif = require("./internal/observable/iif");

var _interval = require("./internal/observable/interval");

var _merge = require("./internal/observable/merge");

var _never = require("./internal/observable/never");

var _of = require("./internal/observable/of");

var _onErrorResumeNext = require("./internal/observable/onErrorResumeNext");

var _pairs = require("./internal/observable/pairs");

var _partition = require("./internal/observable/partition");

var _race = require("./internal/observable/race");

var _range = require("./internal/observable/range");

var _throwError = require("./internal/observable/throwError");

var _timer = require("./internal/observable/timer");

var _using = require("./internal/observable/using");

var _zip = require("./internal/observable/zip");

var _scheduled = require("./internal/scheduled/scheduled");

var _config = require("./internal/config");
},{"./internal/Observable":"node_modules/rxjs/_esm5/internal/Observable.js","./internal/observable/ConnectableObservable":"node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js","./internal/operators/groupBy":"node_modules/rxjs/_esm5/internal/operators/groupBy.js","./internal/symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js","./internal/Subject":"node_modules/rxjs/_esm5/internal/Subject.js","./internal/BehaviorSubject":"node_modules/rxjs/_esm5/internal/BehaviorSubject.js","./internal/ReplaySubject":"node_modules/rxjs/_esm5/internal/ReplaySubject.js","./internal/AsyncSubject":"node_modules/rxjs/_esm5/internal/AsyncSubject.js","./internal/scheduler/asap":"node_modules/rxjs/_esm5/internal/scheduler/asap.js","./internal/scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","./internal/scheduler/queue":"node_modules/rxjs/_esm5/internal/scheduler/queue.js","./internal/scheduler/animationFrame":"node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js","./internal/scheduler/VirtualTimeScheduler":"node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js","./internal/Scheduler":"node_modules/rxjs/_esm5/internal/Scheduler.js","./internal/Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","./internal/Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","./internal/Notification":"node_modules/rxjs/_esm5/internal/Notification.js","./internal/util/pipe":"node_modules/rxjs/_esm5/internal/util/pipe.js","./internal/util/noop":"node_modules/rxjs/_esm5/internal/util/noop.js","./internal/util/identity":"node_modules/rxjs/_esm5/internal/util/identity.js","./internal/util/isObservable":"node_modules/rxjs/_esm5/internal/util/isObservable.js","./internal/util/ArgumentOutOfRangeError":"node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js","./internal/util/EmptyError":"node_modules/rxjs/_esm5/internal/util/EmptyError.js","./internal/util/ObjectUnsubscribedError":"node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./internal/util/UnsubscriptionError":"node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js","./internal/util/TimeoutError":"node_modules/rxjs/_esm5/internal/util/TimeoutError.js","./internal/observable/bindCallback":"node_modules/rxjs/_esm5/internal/observable/bindCallback.js","./internal/observable/bindNodeCallback":"node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js","./internal/observable/combineLatest":"node_modules/rxjs/_esm5/internal/observable/combineLatest.js","./internal/observable/concat":"node_modules/rxjs/_esm5/internal/observable/concat.js","./internal/observable/defer":"node_modules/rxjs/_esm5/internal/observable/defer.js","./internal/observable/empty":"node_modules/rxjs/_esm5/internal/observable/empty.js","./internal/observable/forkJoin":"node_modules/rxjs/_esm5/internal/observable/forkJoin.js","./internal/observable/from":"node_modules/rxjs/_esm5/internal/observable/from.js","./internal/observable/fromEvent":"node_modules/rxjs/_esm5/internal/observable/fromEvent.js","./internal/observable/fromEventPattern":"node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js","./internal/observable/generate":"node_modules/rxjs/_esm5/internal/observable/generate.js","./internal/observable/iif":"node_modules/rxjs/_esm5/internal/observable/iif.js","./internal/observable/interval":"node_modules/rxjs/_esm5/internal/observable/interval.js","./internal/observable/merge":"node_modules/rxjs/_esm5/internal/observable/merge.js","./internal/observable/never":"node_modules/rxjs/_esm5/internal/observable/never.js","./internal/observable/of":"node_modules/rxjs/_esm5/internal/observable/of.js","./internal/observable/onErrorResumeNext":"node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js","./internal/observable/pairs":"node_modules/rxjs/_esm5/internal/observable/pairs.js","./internal/observable/partition":"node_modules/rxjs/_esm5/internal/observable/partition.js","./internal/observable/race":"node_modules/rxjs/_esm5/internal/observable/race.js","./internal/observable/range":"node_modules/rxjs/_esm5/internal/observable/range.js","./internal/observable/throwError":"node_modules/rxjs/_esm5/internal/observable/throwError.js","./internal/observable/timer":"node_modules/rxjs/_esm5/internal/observable/timer.js","./internal/observable/using":"node_modules/rxjs/_esm5/internal/observable/using.js","./internal/observable/zip":"node_modules/rxjs/_esm5/internal/observable/zip.js","./internal/scheduled/scheduled":"node_modules/rxjs/_esm5/internal/scheduled/scheduled.js","./internal/config":"node_modules/rxjs/_esm5/internal/config.js"}],"node_modules/fbjs/lib/invariant.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
'use strict';

var validateFormat = "development" !== "production" ? function (format) {} : function (format) {
  if (format === undefined) {
    throw new Error('invariant(...): Second argument must be a string.');
  }
};
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */

function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return String(args[argIndex++]);
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

module.exports = invariant;
},{}],"node_modules/fbjs/lib/nullthrows.js":[function(require,module,exports) {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var nullthrows = function nullthrows(x) {
  if (x != null) {
    return x;
  }

  throw new Error("Got unexpected null or undefined");
};

module.exports = nullthrows;
},{}],"node_modules/rsocket-flowable/build/FlowableMapOperator.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});

var _nullthrows = require('fbjs/lib/nullthrows');
var _nullthrows2 = _interopRequireDefault(_nullthrows);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                       * An operator that acts like Array.map, applying a given function to
                                                                                                                                                                                                       * all values provided by its `Subscription` and passing the result to its
                                                                                                                                                                                                       * `Subscriber`.
                                                                                                                                                                                                       */
class FlowableMapOperator {
  constructor(subscriber, fn) {
    this._fn = fn;
    this._subscriber = subscriber;
    this._subscription = null;
  }

  onComplete() {
    this._subscriber.onComplete();
  }

  onError(error) {
    this._subscriber.onError(error);
  }

  onNext(t) {
    try {
      this._subscriber.onNext(this._fn(t));
    } catch (e) {
      (0, _nullthrows2.default)(this._subscription).cancel();
      this._subscriber.onError(e);
    }
  }

  onSubscribe(subscription) {
    this._subscription = subscription;
    this._subscriber.onSubscribe(subscription);
  }
}
exports.default = FlowableMapOperator;

},{"fbjs/lib/nullthrows":"node_modules/fbjs/lib/nullthrows.js"}],"node_modules/rsocket-flowable/build/FlowableTakeOperator.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});

var _nullthrows = require('fbjs/lib/nullthrows');
var _nullthrows2 = _interopRequireDefault(_nullthrows);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                       * An operator that requests a fixed number of values from its source
                                                                                                                                                                                                       * `Subscription` and forwards them to its `Subscriber`, cancelling the
                                                                                                                                                                                                       * subscription when the requested number of items has been reached.
                                                                                                                                                                                                       */
class FlowableTakeOperator {
  constructor(subscriber, toTake) {
    this._subscriber = subscriber;
    this._subscription = null;
    this._toTake = toTake;
  }

  onComplete() {
    this._subscriber.onComplete();
  }

  onError(error) {
    this._subscriber.onError(error);
  }

  onNext(t) {
    try {
      this._subscriber.onNext(t);
      if (--this._toTake === 0) {
        this._cancelAndComplete();
      }
    } catch (e) {
      (0, _nullthrows2.default)(this._subscription).cancel();
      this._subscriber.onError(e);
    }
  }

  onSubscribe(subscription) {
    this._subscription = subscription;
    this._subscriber.onSubscribe(subscription);
    if (this._toTake <= 0) {
      this._cancelAndComplete();
    }
  }

  _cancelAndComplete() {
    (0, _nullthrows2.default)(this._subscription).cancel();
    this._subscriber.onComplete();
  }
}
exports.default = FlowableTakeOperator;

},{"fbjs/lib/nullthrows":"node_modules/fbjs/lib/nullthrows.js"}],"node_modules/fbjs/lib/emptyFunction.js":[function(require,module,exports) {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */


var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);

emptyFunction.thatReturnsThis = function () {
  return this;
};

emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],"node_modules/fbjs/lib/warning.js":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
'use strict';

var emptyFunction = require("./emptyFunction");
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */


function printWarning(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var argIndex = 0;
  var message = 'Warning: ' + format.replace(/%s/g, function () {
    return args[argIndex++];
  });

  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try {
    // --- Welcome to debugging React ---
    // This error was thrown as a convenience so that you can use this stack
    // to find the callsite that caused this warning to fire.
    throw new Error(message);
  } catch (x) {}
}

var warning = "development" !== "production" ? function (condition, format) {
  if (format === undefined) {
    throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
  }

  if (!condition) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    printWarning.apply(void 0, [format].concat(args));
  }
} : emptyFunction;
module.exports = warning;
},{"./emptyFunction":"node_modules/fbjs/lib/emptyFunction.js"}],"node_modules/rsocket-flowable/build/Flowable.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});

var _FlowableMapOperator = require('./FlowableMapOperator');
var _FlowableMapOperator2 = _interopRequireDefault(_FlowableMapOperator);
var _FlowableTakeOperator = require('./FlowableTakeOperator');
var _FlowableTakeOperator2 = _interopRequireDefault(_FlowableTakeOperator);

var _invariant = require('fbjs/lib/invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _warning = require('fbjs/lib/warning');
var _warning2 = _interopRequireDefault(_warning);
var _emptyFunction = require('fbjs/lib/emptyFunction');
var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                                   * Implements the ReactiveStream `Publisher` interface with Rx-style operators.
                                                                                                                                                                                                                   */
class Flowable {
  static just(...values) {
    return new Flowable(subscriber => {
      let cancelled = false;
      let i = 0;
      subscriber.onSubscribe({
        cancel: () => {
          cancelled = true;
        },
        request: n => {
          while (!cancelled && n > 0 && i < values.length) {
            subscriber.onNext(values[i++]);
            n--;
          }
          if (!cancelled && i == values.length) {
            subscriber.onComplete();
          }
        },
      });
    });
  }

  static error(error) {
    return new Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: () => {},
        request: () => {
          subscriber.onError(error);
        },
      });
    });
  }

  static never() {
    return new Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: _emptyFunction2.default,
        request: _emptyFunction2.default,
      });
    });
  }

  constructor(source, max = Number.MAX_SAFE_INTEGER) {
    this._max = max;
    this._source = source;
  }

  subscribe(subscriberOrCallback) {
    let partialSubscriber;
    if (typeof subscriberOrCallback === 'function') {
      partialSubscriber = this._wrapCallback(subscriberOrCallback);
    } else {
      partialSubscriber = subscriberOrCallback;
    }
    const subscriber = new FlowableSubscriber(partialSubscriber, this._max);
    this._source(subscriber);
  }

  lift(onSubscribeLift) {
    return new Flowable(subscriber =>
      this._source(onSubscribeLift(subscriber)));
  }

  map(fn) {
    return this.lift(
      subscriber => new _FlowableMapOperator2.default(subscriber, fn)
    );
  }

  take(toTake) {
    return this.lift(
      subscriber => new _FlowableTakeOperator2.default(subscriber, toTake)
    );
  }

  _wrapCallback(callback) {
    const max = this._max;
    return {
      onNext: callback,
      onSubscribe(subscription) {
        subscription.request(max);
      },
    };
  }
}
exports.default = Flowable;

/**
                                 * @private
                                 */
class FlowableSubscriber {
  constructor(subscriber, max) {
    this._cancel = () => {
      if (!this._active) {
        return;
      }
      this._active = false;
      if (this._subscription) {
        this._subscription.cancel();
      }
    };
    this._request = n => {
      (0, _invariant2.default)(
        Number.isInteger(n) && n >= 1 && n <= this._max,
        'Flowable: Expected request value to be an integer with a ' +
          'value greater than 0 and less than or equal to %s, got ' +
          '`%s`.',
        this._max,
        n
      );

      if (!this._active) {
        return;
      }
      if (n === this._max) {
        this._pending = this._max;
      } else {
        this._pending += n;
        if (this._pending >= this._max) {
          this._pending = this._max;
        }
      }
      if (this._subscription) {
        this._subscription.request(n);
      }
    };
    this._active = false;
    this._max = max;
    this._pending = 0;
    this._started = false;
    this._subscriber = subscriber || {};
    this._subscription = null;
  }
  onComplete() {
    if (!this._active) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onComplete(): %s.',
        this._started
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    this._active = false;
    this._started = true;
    try {
      if (this._subscriber.onComplete) {
        this._subscriber.onComplete();
      }
    } catch (error) {
      if (this._subscriber.onError) {
        this._subscriber.onError(error);
      }
    }
  }
  onError(error) {
    if (this._started && !this._active) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onError(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    this._active = false;
    this._started = true;
    this._subscriber.onError && this._subscriber.onError(error);
  }
  onNext(data) {
    if (!this._active) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onNext(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    if (this._pending === 0) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onNext(), all request()ed values have been ' +
          'published.'
      );
      return;
    }
    if (this._pending !== this._max) {
      this._pending--;
    }
    try {
      this._subscriber.onNext && this._subscriber.onNext(data);
    } catch (error) {
      if (this._subscription) {
        this._subscription.cancel();
      }
      this.onError(error);
    }
  }
  onSubscribe(subscription) {
    if (this._started) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onSubscribe(): already called.'
      );
      return;
    }
    this._active = true;
    this._started = true;
    this._subscription = subscription;
    try {
      this._subscriber.onSubscribe &&
        this._subscriber.onSubscribe({
          cancel: this._cancel,
          request: this._request,
        });
    } catch (error) {
      this.onError(error);
    }
  }
}

},{"./FlowableMapOperator":"node_modules/rsocket-flowable/build/FlowableMapOperator.js","./FlowableTakeOperator":"node_modules/rsocket-flowable/build/FlowableTakeOperator.js","fbjs/lib/invariant":"node_modules/fbjs/lib/invariant.js","fbjs/lib/warning":"node_modules/fbjs/lib/warning.js","fbjs/lib/emptyFunction":"node_modules/fbjs/lib/emptyFunction.js"}],"node_modules/rsocket-flowable/build/Single.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});

var _warning = require('fbjs/lib/warning');
var _warning2 = _interopRequireDefault(_warning);
var _emptyFunction = require('fbjs/lib/emptyFunction');
var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                                   * Represents a lazy computation that will either produce a value of type T
                                                                                                                                                                                                                   * or fail with an error. Calling `subscribe()` starts the
                                                                                                                                                                                                                   * computation and returns a subscription object, which has an `unsubscribe()`
                                                                                                                                                                                                                   * method that can be called to prevent completion/error callbacks from being
                                                                                                                                                                                                                   * invoked and, where supported, to also cancel the computation.
                                                                                                                                                                                                                   * Implementations may optionally implement cancellation; if they do not
                                                                                                                                                                                                                   * `cancel()` is a no-op.
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Note: Unlike Promise, callbacks (onComplete/onError) may be invoked
                                                                                                                                                                                                                   * synchronously.
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Example:
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * ```
                                                                                                                                                                                                                   * const value = new Single(subscriber => {
                                                                                                                                                                                                                   *   const id = setTimeout(
                                                                                                                                                                                                                   *     () => subscriber.onComplete('Hello!'),
                                                                                                                                                                                                                   *     250
                                                                                                                                                                                                                   *   );
                                                                                                                                                                                                                   *   // Optional: Call `onSubscribe` with a cancellation callback
                                                                                                                                                                                                                   *   subscriber.onSubscribe(() => clearTimeout(id));
                                                                                                                                                                                                                   * });
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * // Start the computation. onComplete will be called after the timeout
                                                                                                                                                                                                                   * // with 'hello'  unless `cancel()` is called first.
                                                                                                                                                                                                                   * value.subscribe({
                                                                                                                                                                                                                   *   onComplete: value => console.log(value),
                                                                                                                                                                                                                   *   onError: error => console.error(error),
                                                                                                                                                                                                                   *   onSubscribe: cancel => ...
                                                                                                                                                                                                                   * });
                                                                                                                                                                                                                   * ```
                                                                                                                                                                                                                   */
class Single {
  static of(value) {
    return new Single(subscriber => {
      subscriber.onSubscribe();
      subscriber.onComplete(value);
    });
  }

  static error(error) {
    return new Single(subscriber => {
      subscriber.onSubscribe();
      subscriber.onError(error);
    });
  }

  constructor(source) {
    this._source = source;
  }

  subscribe(partialSubscriber) {
    const subscriber = new FutureSubscriber(partialSubscriber);
    try {
      this._source(subscriber);
    } catch (error) {
      subscriber.onError(error);
    }
  }

  flatMap(fn) {
    return new Single(subscriber => {
      let currentCancel;
      const cancel = () => {
        currentCancel && currentCancel();
        currentCancel = null;
      };
      this._source({
        onComplete: value => {
          fn(value).subscribe({
            onComplete: mapValue => {
              subscriber.onComplete(mapValue);
            },
            onError: error => subscriber.onError(error),
            onSubscribe: _cancel => {
              currentCancel = _cancel;
            },
          });
        },
        onError: error => subscriber.onError(error),
        onSubscribe: _cancel => {
          currentCancel = _cancel;
          subscriber.onSubscribe(cancel);
        },
      });
    });
  }

  /**
     * Return a new Single that resolves to the value of this Single applied to
     * the given mapping function.
     */
  map(fn) {
    return new Single(subscriber => {
      return this._source({
        onComplete: value => subscriber.onComplete(fn(value)),
        onError: error => subscriber.onError(error),
        onSubscribe: cancel => subscriber.onSubscribe(cancel),
      });
    });
  }

  then(successFn, errorFn) {
    this.subscribe({
      onComplete: successFn || _emptyFunction2.default,
      onError: errorFn || _emptyFunction2.default,
    });
  }
}
exports.default = Single;

/**
                               * @private
                               */
class FutureSubscriber {
  constructor(subscriber) {
    this._active = false;
    this._started = false;
    this._subscriber = subscriber || {};
  }

  onComplete(value) {
    if (!this._active) {
      (0, _warning2.default)(
        false,
        'Single: Invalid call to onComplete(): %s.',
        this._started
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );

      return;
    }
    this._active = false;
    this._started = true;
    try {
      if (this._subscriber.onComplete) {
        this._subscriber.onComplete(value);
      }
    } catch (error) {
      if (this._subscriber.onError) {
        this._subscriber.onError(error);
      }
    }
  }

  onError(error) {
    if (this._started && !this._active) {
      (0, _warning2.default)(
        false,
        'Single: Invalid call to onError(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );

      return;
    }
    this._active = false;
    this._started = true;
    this._subscriber.onError && this._subscriber.onError(error);
  }

  onSubscribe(cancel) {
    if (this._started) {
      (0, _warning2.default)(
        false,
        'Single: Invalid call to onSubscribe(): already called.'
      );
      return;
    }
    this._active = true;
    this._started = true;
    try {
      this._subscriber.onSubscribe &&
        this._subscriber.onSubscribe(() => {
          if (!this._active) {
            return;
          }
          this._active = false;
          cancel && cancel();
        });
    } catch (error) {
      this.onError(error);
    }
  }
}

},{"fbjs/lib/warning":"node_modules/fbjs/lib/warning.js","fbjs/lib/emptyFunction":"node_modules/fbjs/lib/emptyFunction.js"}],"node_modules/rsocket-flowable/build/FlowableProcessor.js":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var _warning = require('fbjs/lib/warning');
var _warning2 = _interopRequireDefault(_warning);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

class FlowableProcessor {
  constructor(source, fn) {
    this._source = source;
    this._transformer = fn;
    this._done = false;
    this._mappers = []; //mappers for map function
  }

  onSubscribe(subscription) {
    this._subscription = subscription;
  }

  onNext(t) {
    if (!this._sink) {
      (0, _warning2.default)(
        'Warning, premature onNext for processor, dropping value'
      );
      return;
    }

    let val = t;
    if (this._transformer) {
      val = this._transformer(t);
    }
    const finalVal = this._mappers.reduce(
      (interimVal, mapper) => mapper(interimVal),
      val
    );

    this._sink.onNext(finalVal);
  }

  onError(error) {
    this._error = error;
    if (!this._sink) {
      (0, _warning2.default)(
        'Warning, premature onError for processor, marking complete/errored'
      );
    } else {
      this._sink.onError(error);
    }
  }

  onComplete() {
    this._done = true;
    if (!this._sink) {
      (0, _warning2.default)(
        'Warning, premature onError for processor, marking complete'
      );
    } else {
      this._sink.onComplete();
    }
  }

  subscribe(subscriber) {
    if (this._source.subscribe) {
      this._source.subscribe(this);
    }
    this._sink = subscriber;
    this._sink.onSubscribe(this);

    if (this._error) {
      this._sink.onError(this._error);
    } else if (this._done) {
      this._sink.onComplete();
    }
  }

  map(fn) {
    this._mappers.push(fn);
    return this;
  }

  request(n) {
    this._subscription && this._subscription.request(n);
  }

  cancel() {
    this._subscription && this._subscription.cancel();
  }
}
exports.default = FlowableProcessor;

},{"fbjs/lib/warning":"node_modules/fbjs/lib/warning.js"}],"node_modules/rsocket-flowable/build/FlowableTimer.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.every = every;
var _Flowable = require('./Flowable');
var _Flowable2 = _interopRequireDefault(_Flowable);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
                                                                                                                                                                                                      * Returns a Publisher that provides the current time (Date.now()) every `ms`
                                                                                                                                                                                                      * milliseconds.
                                                                                                                                                                                                      *
                                                                                                                                                                                                      * The timer is established on the first call to `request`: on each
                                                                                                                                                                                                      * interval a value is published if there are outstanding requests,
                                                                                                                                                                                                      * otherwise nothing occurs for that interval. This approach ensures
                                                                                                                                                                                                      * that the interval between `onNext` calls is as regular as possible
                                                                                                                                                                                                      * and means that overlapping `request` calls (ie calling again before
                                                                                                                                                                                                      * the previous values have been vended) behaves consistently.
                                                                                                                                                                                                      */ function every(
  ms
) {
  return new _Flowable2.default(subscriber => {
    let intervalId = null;
    let pending = 0;
    subscriber.onSubscribe({
      cancel: () => {
        if (intervalId != null) {
          clearInterval(intervalId);
          intervalId = null;
        }
      },
      request: n => {
        if (n < Number.MAX_SAFE_INTEGER) {
          pending += n;
        } else {
          pending = Number.MAX_SAFE_INTEGER;
        }
        if (intervalId != null) {
          return;
        }
        intervalId = setInterval(
          () => {
            if (pending > 0) {
              if (pending !== Number.MAX_SAFE_INTEGER) {
                pending--;
              }
              subscriber.onNext(Date.now());
            }
          },
          ms
        );
      },
    });
  });
}

},{"./Flowable":"node_modules/rsocket-flowable/build/Flowable.js"}],"node_modules/rsocket-flowable/build/index.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.every = (exports.Single = (exports.FlowableProcessor = (exports.Flowable = undefined)));

var _Flowable = require('./Flowable');
var _Flowable2 = _interopRequireDefault(_Flowable);
var _Single = require('./Single');
var _Single2 = _interopRequireDefault(_Single);
var _FlowableProcessor = require('./FlowableProcessor');
var _FlowableProcessor2 = _interopRequireDefault(_FlowableProcessor);
var _FlowableTimer = require('./FlowableTimer');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                               * The public API of the `flowable` package.
                                                                                                                                               */ exports.Flowable = _Flowable2.default;
exports.FlowableProcessor = _FlowableProcessor2.default;
exports.Single = _Single2.default;
exports.every = _FlowableTimer.every;

},{"./Flowable":"node_modules/rsocket-flowable/build/Flowable.js","./Single":"node_modules/rsocket-flowable/build/Single.js","./FlowableProcessor":"node_modules/rsocket-flowable/build/FlowableProcessor.js","./FlowableTimer":"node_modules/rsocket-flowable/build/FlowableTimer.js"}],"node_modules/fbjs/lib/forEachObject.js":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Executes the provided `callback` once for each enumerable own property in the
 * object. The `callback` is invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `forEachObject` will not be
 * visited by `callback`. If the values of existing properties are changed, the
 * value passed to `callback` will be the value at the time `forEachObject`
 * visits them. Properties that are deleted before being visited are not
 * visited.
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 */

function forEachObject(object, callback, context) {
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      callback.call(context, object[name], name, object);
    }
  }
}

module.exports = forEachObject;
},{}],"node_modules/fbjs/lib/sprintf.js":[function(require,module,exports) {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * Simple function for formatting strings.
 *
 * Replaces placeholders with values passed as extra arguments
 *
 * @param {string} format the base string
 * @param ...args the values to insert
 * @return {string} the replaced string
 */
function sprintf(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var index = 0;
  return format.replace(/%s/g, function (match) {
    return args[index++];
  });
}

module.exports = sprintf;
},{}],"node_modules/rsocket-core/build/RSocketFrame.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */
'use strict';

/* eslint-disable max-len, no-bitwise */ Object.defineProperty(
  exports,
  '__esModule',
  {value: true}
);
exports.MAX_VERSION = (exports.MAX_TTL = (exports.MAX_STREAM_ID = (exports.MAX_RESUME_LENGTH = (exports.MAX_REQUEST_N = (exports.MAX_REQUEST_COUNT = (exports.MAX_MIME_LENGTH = (exports.MAX_METADATA_LENGTH = (exports.MAX_LIFETIME = (exports.MAX_KEEPALIVE = (exports.MAX_CODE = (exports.FRAME_TYPE_OFFFSET = (exports.FLAGS_MASK = (exports.ERROR_EXPLANATIONS = (exports.ERROR_CODES = (exports.FLAGS = (exports.FRAME_TYPE_NAMES = (exports.FRAME_TYPES = (exports.CONNECTION_STREAM_ID = undefined))))))))))))))))));
exports.isIgnore = isIgnore;
exports.isMetadata = isMetadata;
exports.isComplete = isComplete;
exports.isNext = isNext;
exports.isRespond = isRespond;
exports.isResumeEnable = isResumeEnable;
exports.isLease = isLease;
exports.isResumePositionFrameType = isResumePositionFrameType;
exports.getFrameTypeName = getFrameTypeName;
exports.createErrorFromFrame = createErrorFromFrame;
exports.getErrorCodeExplanation = getErrorCodeExplanation;
exports.printFrame = printFrame;
var _forEachObject = require('fbjs/lib/forEachObject');
var _forEachObject2 = _interopRequireDefault(_forEachObject);
var _sprintf = require('fbjs/lib/sprintf');
var _sprintf2 = _interopRequireDefault(_sprintf);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
const CONNECTION_STREAM_ID = (exports.CONNECTION_STREAM_ID = 0);
const FRAME_TYPES = (exports.FRAME_TYPES = {
  CANCEL: 0x09, // Cancel Request: Cancel outstanding request.
  ERROR: 0x0b, // Error: Error at connection or application level.
  EXT: 0x3f, // Extension Header: Used To Extend more frame types as well as extensions.
  KEEPALIVE: 0x03, // Keepalive: Connection keepalive.
  LEASE: 0x02, // Lease: Sent by Responder to grant the ability to send requests.
  METADATA_PUSH: 0x0c, // Metadata: Asynchronous Metadata frame
  PAYLOAD: 0x0a, // Payload: Payload on a stream. For example, response to a request, or message on a channel.
  REQUEST_CHANNEL: 0x07, // Request Channel: Request a completable stream in both directions.
  REQUEST_FNF: 0x05, // Fire And Forget: A single one-way message.
  REQUEST_N: 0x08, // Request N: Request N more items with Reactive Streams semantics.
  REQUEST_RESPONSE: 0x04, // Request Response: Request single response.
  REQUEST_STREAM: 0x06, // Request Stream: Request a completable stream.
  RESERVED: 0x00, // Reserved
  RESUME: 0x0d, // Resume: Replaces SETUP for Resuming Operation (optional)
  RESUME_OK: 0x0e, // Resume OK : Sent in response to a RESUME if resuming operation possible (optional)
  SETUP: 0x01, // Setup: Sent by client to initiate protocol processing.
}); // Maps frame type codes to type names
const FRAME_TYPE_NAMES = (exports.FRAME_TYPE_NAMES = {});
(0, _forEachObject2.default)(FRAME_TYPES, (value, name) => {
  FRAME_TYPE_NAMES[value] = name;
});
const FLAGS = (exports.FLAGS = {
  COMPLETE: 0x40, // PAYLOAD, REQUEST_CHANNEL: indicates stream completion, if set onComplete will be invoked on receiver.
  FOLLOWS: 0x80, // (unused)
  IGNORE: 0x200, // (all): Ignore frame if not understood.
  LEASE: 0x40, // SETUP: Will honor lease or not.
  METADATA: 0x100, // (all): must be set if metadata is present in the frame.
  NEXT: 0x20, // PAYLOAD: indicates data/metadata present, if set onNext will be invoked on receiver.
  RESPOND: 0x80, // KEEPALIVE: should KEEPALIVE be sent by peer on receipt.
  RESUME_ENABLE: 0x80, // SETUP: Client requests resume capability if possible. Resume Identification Token present.
}); // Maps error names to codes
const ERROR_CODES = (exports.ERROR_CODES = {
  APPLICATION_ERROR: 0x00000201,
  CANCELED: 0x00000203,
  CONNECTION_CLOSE: 0x00000102,
  CONNECTION_ERROR: 0x00000101,
  INVALID: 0x00000204,
  INVALID_SETUP: 0x00000001,
  REJECTED: 0x00000202,
  REJECTED_RESUME: 0x00000004,
  REJECTED_SETUP: 0x00000003,
  RESERVED: 0x00000000,
  RESERVED_EXTENSION: 0xffffffff,
  UNSUPPORTED_SETUP: 0x00000002,
}); // Maps error codes to names
const ERROR_EXPLANATIONS = (exports.ERROR_EXPLANATIONS = {});
(0, _forEachObject2.default)(ERROR_CODES, (code, explanation) => {
  ERROR_EXPLANATIONS[code] = explanation;
});
const FLAGS_MASK = (exports.FLAGS_MASK = 0x3ff); // low 10 bits
const FRAME_TYPE_OFFFSET = (exports.FRAME_TYPE_OFFFSET = 10); // frame type is offset 10 bytes within the uint16 containing type + flags
const MAX_CODE = (exports.MAX_CODE = 0x7fffffff); // uint31
const MAX_KEEPALIVE = (exports.MAX_KEEPALIVE = 0x7fffffff); // uint31
const MAX_LIFETIME = (exports.MAX_LIFETIME = 0x7fffffff); // uint31
const MAX_METADATA_LENGTH = (exports.MAX_METADATA_LENGTH = 0xffffff); // uint24
const MAX_MIME_LENGTH = (exports.MAX_MIME_LENGTH = 0xff); // int8
const MAX_REQUEST_COUNT = (exports.MAX_REQUEST_COUNT = 0x7fffffff); // uint31
const MAX_REQUEST_N = (exports.MAX_REQUEST_N = 0x7fffffff); // uint31
const MAX_RESUME_LENGTH = (exports.MAX_RESUME_LENGTH = 0xffff); // uint16
const MAX_STREAM_ID = (exports.MAX_STREAM_ID = 0x7fffffff); // uint31
const MAX_TTL = (exports.MAX_TTL = 0x7fffffff); // uint31
const MAX_VERSION = (exports.MAX_VERSION = 0xffff); // uint16
/**
 * Returns true iff the flags have the IGNORE bit set.
 */ function isIgnore(
  flags
) {
  return (flags & FLAGS.IGNORE) === FLAGS.IGNORE;
}
/**
                                                                               * Returns true iff the flags have the METADATA bit set.
                                                                               */ function isMetadata(
  flags
) {
  return (flags & FLAGS.METADATA) === FLAGS.METADATA;
}
/**
                                                                                                                                                                   * Returns true iff the flags have the COMPLETE bit set.
                                                                                                                                                                   */ function isComplete(
  flags
) {
  return (flags & FLAGS.COMPLETE) === FLAGS.COMPLETE;
}
/**
                                                                                                                                                                                                                                                       * Returns true iff the flags have the NEXT bit set.
                                                                                                                                                                                                                                                       */ function isNext(
  flags
) {
  return (flags & FLAGS.NEXT) === FLAGS.NEXT;
}
/**
                                                                                                                                                                                                                                                                                                                               * Returns true iff the flags have the RESPOND bit set.
                                                                                                                                                                                                                                                                                                                               */ function isRespond(
  flags
) {
  return (flags & FLAGS.RESPOND) === FLAGS.RESPOND;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                * Returns true iff the flags have the RESUME_ENABLE bit set.
                                                                                                                                                                                                                                                                                                                                                                                                                */ function isResumeEnable(
  flags
) {
  return (flags & FLAGS.RESUME_ENABLE) === FLAGS.RESUME_ENABLE;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Returns true iff the flags have the LEASE bit set.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */ function isLease(
  flags
) {
  return (flags & FLAGS.LEASE) === FLAGS.LEASE;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Returns true iff the frame type is counted toward the implied
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * client/server position used for the resumption protocol.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */ function isResumePositionFrameType(
  type
) {
  return type === FRAME_TYPES.CANCEL ||
    type === FRAME_TYPES.ERROR ||
    type === FRAME_TYPES.PAYLOAD ||
    type === FRAME_TYPES.REQUEST_CHANNEL ||
    type === FRAME_TYPES.REQUEST_FNF ||
    type === FRAME_TYPES.REQUEST_RESPONSE ||
    type === FRAME_TYPES.REQUEST_STREAM ||
    type === FRAME_TYPES.REQUEST_N;
}
function getFrameTypeName(type) {
  const name = FRAME_TYPE_NAMES[type];
  return name != null ? name : toHex(type);
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Constructs an Error object given the contents of an error frame. The
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * `source` property contains metadata about the error for use in introspecting
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * the error at runtime:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * - `error.source.code: number`: the error code returned by the server.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * - `error.source.explanation: string`: human-readable explanation of the code
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *   (this value is not standardized and may change).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * - `error.source.message: string`: the error string returned by the server.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */ function createErrorFromFrame(
  frame
) {
  const {code, message} = frame;
  const explanation = getErrorCodeExplanation(code);
  const error = new Error(
    (0, _sprintf2.default)(
      'RSocket error %s (%s): %s. See error `source` property for details.',
      toHex(code),
      explanation,
      message
    )
  );
  error.source = {code, explanation, message};
  return error;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Given a RSocket error code, returns a human-readable explanation of that
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * code, following the names used in the protocol specification.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */ function getErrorCodeExplanation(
  code
) {
  const explanation = ERROR_EXPLANATIONS[code];
  if (explanation != null) {
    return explanation;
  } else if (code <= 0x00300) {
    return 'RESERVED (PROTOCOL)';
  } else {
    return 'RESERVED (APPLICATION)';
  }
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Pretty-prints the frame for debugging purposes, with types, flags, and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * error codes annotated with descriptive names.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */ function printFrame(
  frame
) {
  const obj = Object.assign({}, frame);
  obj.type = getFrameTypeName(frame.type) + ` (${toHex(frame.type)})`;
  const flagNames = [];
  (0, _forEachObject2.default)(FLAGS, (flag, name) => {
    if ((frame.flags & flag) === flag) {
      flagNames.push(name);
    }
  });
  if (!flagNames.length) {
    flagNames.push('NO FLAGS');
  }
  obj.flags = flagNames.join(' | ') + ` (${toHex(frame.flags)})`;
  if (frame.type === FRAME_TYPES.ERROR) {
    obj.code = getErrorCodeExplanation(frame.code) + ` (${toHex(frame.code)})`;
  }
  return JSON.stringify(obj, null, 2);
}
function toHex(n) {
  return '0x' + n.toString(16);
}

},{"fbjs/lib/forEachObject":"node_modules/fbjs/lib/forEachObject.js","fbjs/lib/sprintf":"node_modules/fbjs/lib/sprintf.js"}],"node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"node_modules/ieee754/index.js":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"node_modules/base64-js/index.js","ieee754":"node_modules/ieee754/index.js","isarray":"node_modules/isarray/index.js","buffer":"node_modules/buffer/index.js"}],"node_modules/rsocket-core/build/LiteBuffer.js":[function(require,module,exports) {

var global = arguments[3];
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.Buffer = Buffer;
const K_MAX_LENGTH = 0x7fffffff;
function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError(
      'The value "' + length + '" is invalid for option "size"'
    );
  } // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length); // $FlowFixMe
  buf.__proto__ = Buffer.prototype;
  return buf;
}
const bufferExists = typeof global !== 'undefined' &&
  global.hasOwnProperty('Buffer'); // export const LiteBuffer =  bufferExists ? gloval.Buffer : Buffer;
const LiteBuffer = (exports.LiteBuffer = bufferExists ? global.Buffer : Buffer);
function Buffer(arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      );
    }
    return allocUnsafe(arg);
  }
  return from(arg, encodingOrOffset, length);
}

function from(value, encodingOrOffset, length) {
  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value);
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type, Buffer, ArrayBuffer, Array, ' +
        'or Array-like Object. Received type ' +
        typeof value
    );
  }

  if (
    isInstance(value, ArrayBuffer) ||
    (value && isInstance(value.buffer, ArrayBuffer))
  ) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    );
  }

  const valueOf = value.valueOf && value.valueOf();
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length);
  }

  const b = fromObject(value);
  if (b) {
    return b;
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, ' +
      'Array, or Array-like Object. Received type ' +
      typeof value
  );
}

Buffer.from = function(value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length);
};

// $FlowFixMe
Buffer.prototype.__proto__ = Uint8Array.prototype;

// $FlowFixMe
Buffer.__proto__ = Uint8Array;

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number');
  } else if (size < 0) {
    throw new RangeError(
      'The value "' + size + '" is invalid for option "size"'
    );
  }
}

function alloc(size, fill, encoding) {
  assertSize(size);

  return createBuffer(size);
}

Buffer.alloc = function(size, fill, encoding) {
  return alloc(size, fill, encoding);
};

function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}

function fromArrayLike(array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0;
  const buf = createBuffer(length);
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf;
}

function fromArrayBuffer(array, byteOffset, length) {
  let buf;
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }

  // $FlowFixMe
  buf.__proto__ = Buffer.prototype;
  return buf;
}

function fromObject(obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0;
    const buf = createBuffer(len);

    if (buf.length === 0) {
      return buf;
    }

    obj.copy(buf, 0, 0, len);
    return buf;
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0);
    }
    return fromArrayLike(obj);
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}

function checked(length) {
  if (length >= K_MAX_LENGTH) {
    throw new RangeError(
      'Attempt to allocate Buffer larger than maximum ' +
        'size: 0x' +
        K_MAX_LENGTH.toString(16) +
        ' bytes'
    );
  }
  return length | 0;
}

Buffer.isBuffer = function isBuffer(b) {
  return b != null && b._isBuffer === true && b !== Buffer.prototype;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.prototype._isBuffer = true;

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

function blitBuffer(src, dst, offset, length) {
  let i = 0;
  for (; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function utf8Write(buf, input, offset, length) {
  return blitBuffer(
    utf8ToBytes(input, buf.length - offset),
    buf,
    offset,
    length
  );
}

Buffer.prototype.write = function write(input, offset, length, encoding) {
  switch (encoding) {
    case 'utf8':
      return utf8Write(this, input, offset, length);
    default:
      throw new TypeError('Unknown encoding: ' + encoding);
  }
};

const MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = '';
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, (i += MAX_ARGUMENTS_LENGTH))
    );
  }
  return res;
}

function asciiSlice(buf, start, end) {
  let ret = '';
  end = Math.min(buf.length, end);

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7f);
  }
  return ret;
}

Buffer.prototype.slice = function slice(start, end) {
  const len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  const newBuf = this.subarray(start, end);
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype;
  return newBuf;
};

function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0)
    throw new RangeError('offset is not uint');
  if (offset + ext > length)
    throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 +
    (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  const val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xffff0000 : val;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 |
    this[offset + 1] << 16 |
    this[offset + 2] << 8 |
    this[offset + 3];
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min)
    throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(
  value,
  offset,
  noAssert
) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(
  value,
  offset,
  noAssert
) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

// $FlowFixMe
Buffer.prototype.toString = function toString() {
  const length = this.length;
  if (length === 0) return '';
  return slowToString.apply(this, arguments);
};

function slowToString(encoding, start, end) {
  let loweredCase = false;

  if (start === undefined || start < 0) {
    start = 0;
  }

  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);
      default:
        if (loweredCase)
          throw new TypeError('Unsupported encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}
function utf8ToBytes(str, pUnits = Infinity) {
  let units = pUnits;
  let codePoint;
  const length = str.length;
  let leadSurrogate = null;
  const bytes = [];

  for (let i = 0; i < length; ++i) {
    codePoint = str.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xd7ff && codePoint < 0xe000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xdbff) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xdc00) {
        if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xd800 << 10 | codePoint - 0xdc00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xc0, codePoint & 0x3f | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(
        codePoint >> 0xc | 0xe0,
        codePoint >> 0x6 & 0x3f | 0x80,
        codePoint & 0x3f | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(
        codePoint >> 0x12 | 0xf0,
        codePoint >> 0xc & 0x3f | 0x80,
        codePoint >> 0x6 & 0x3f | 0x80,
        codePoint & 0x3f | 0x80
      );
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ' +
        'ArrayBuffer. Received type ' +
        typeof string
    );
  }

  const len = string.length;
  const mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) return 0;

  // Use a for loop to avoid recursion
  let loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length;

      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
        }
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
  throw new Error('Unexpected path in function');
}

Buffer.byteLength = byteLength;

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  const res = [];

  let i = start;
  while (i < end) {
    const firstByte = buf[i];
    let codePoint = null;
    let bytesPerSequence = firstByte > 0xef
      ? 4
      : firstByte > 0xdf ? 3 : firstByte > 0xbf ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xc0) === 0x80) {
            tempCodePoint = (firstByte & 0x1f) << 0x6 | secondByte & 0x3f;
            if (tempCodePoint > 0x7f) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xc0) === 0x80 && (thirdByte & 0xc0) === 0x80) {
            tempCodePoint = (firstByte & 0xf) << 0xc |
              (secondByte & 0x3f) << 0x6 |
              thirdByte & 0x3f;
            if (
              tempCodePoint > 0x7ff &&
              (tempCodePoint < 0xd800 || tempCodePoint > 0xdfff)
            ) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if (
            (secondByte & 0xc0) === 0x80 &&
            (thirdByte & 0xc0) === 0x80 &&
            (fourthByte & 0xc0) === 0x80
          ) {
            tempCodePoint = (firstByte & 0xf) << 0x12 |
              (secondByte & 0x3f) << 0xc |
              (thirdByte & 0x3f) << 0x6 |
              fourthByte & 0x3f;
            if (tempCodePoint > 0xffff && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xfffd;
      bytesPerSequence = 1;
    } else if (codePoint > 0xffff) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3ff | 0xd800);
      codePoint = 0xdc00 | codePoint & 0x3ff;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!Buffer.isBuffer(target))
    throw new TypeError('argument should be a Buffer');
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length)
    throw new RangeError('Index out of range');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  const len = end - start;

  if (
    this === target && typeof Uint8Array.prototype.copyWithin === 'function'
  ) {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (let i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    );
  }

  return len;
};

function isInstance(obj, type) {
  return obj instanceof type ||
    (obj != null &&
      obj.constructor != null &&
      obj.constructor.name != null &&
      obj.constructor.name === type.name);
}
function numberIsNaN(obj) {
  // For IE11 support
  return obj !== obj; // eslint-disable-line no-self-compare
}

},{"buffer":"node_modules/buffer/index.js"}],"node_modules/rsocket-core/build/RSocketBufferUtils.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';

/* eslint-disable no-bitwise */ Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.createBuffer = undefined;
exports.readUInt24BE = readUInt24BE;
exports.writeUInt24BE = writeUInt24BE;
exports.readUInt64BE = readUInt64BE;
exports.writeUInt64BE = writeUInt64BE;
exports.byteLength = byteLength;
exports.toBuffer = toBuffer;
var _LiteBuffer = require('./LiteBuffer');
var _invariant = require('fbjs/lib/invariant');
var _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
                                                                                                                                                                                                                                                                 * Mimimum value that would overflow bitwise operators (2^32).
                                                                                                                                                                                                                                                                 */ const BITWISE_OVERFLOW = 0x100000000;
/**
                                                                                                                                                                                                                                                                                                          * Read a uint24 from a buffer starting at the given offset.
                                                                                                                                                                                                                                                                                                          */ function readUInt24BE(
  buffer,
  offset
) {
  const val1 = buffer.readUInt8(offset) << 16;
  const val2 = buffer.readUInt8(offset + 1) << 8;
  const val3 = buffer.readUInt8(offset + 2);
  return val1 | val2 | val3;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Writes a uint24 to a buffer starting at the given offset, returning the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * offset of the next byte.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */ function writeUInt24BE(
  buffer,
  value,
  offset
) {
  offset = buffer.writeUInt8(value >>> 16, offset); // 3rd byte
  offset = buffer.writeUInt8(value >>> 8 & 0xff, offset); // 2nd byte
  return buffer.writeUInt8(value & 0xff, offset); // 1st byte
}
/**
   * Read a uint64 (technically supports up to 53 bits per JS number
   * representation).
   */ function readUInt64BE(
  buffer,
  offset
) {
  const high = buffer.readUInt32BE(offset);
  const low = buffer.readUInt32BE(offset + 4);
  return high * BITWISE_OVERFLOW + low;
}
/**
                                                                                                                                                                         * Write a uint64 (technically supports up to 53 bits per JS number
                                                                                                                                                                         * representation).
                                                                                                                                                                         */ function writeUInt64BE(
  buffer,
  value,
  offset
) {
  const high = value / BITWISE_OVERFLOW | 0;
  const low = value % BITWISE_OVERFLOW;
  offset = buffer.writeUInt32BE(high, offset); // first half of uint64
  return buffer.writeUInt32BE(low, offset); // second half of uint64
}
/**
   * Determine the number of bytes it would take to encode the given data with the
   * given encoding.
   */ function byteLength(
  data,
  encoding
) {
  if (data == null) {
    return 0;
  }
  return _LiteBuffer.LiteBuffer.byteLength(data, encoding);
}
/**
                                                                                                                                   * Attempts to construct a buffer from the input, throws if invalid.
                                                                                                                                   */ function toBuffer(
  data
) {
  // Buffer.from(buffer) copies which we don't want here
  if (data instanceof _LiteBuffer.LiteBuffer) {
    return data;
  }
  (0, _invariant2.default)(
    data instanceof ArrayBuffer,
    'RSocketBufferUtils: Cannot construct buffer. Expected data to be an ' +
      'arraybuffer, got `%s`.',
    data
  );
  return _LiteBuffer.LiteBuffer.from(data);
}
/**
                                                                                                                                                                                                                                                                       * Function to create a buffer of a given sized filled with zeros.
                                                                                                                                                                                                                                                                       */ const createBuffer = (exports.createBuffer = typeof _LiteBuffer.LiteBuffer.alloc ===
  'function'
  ? length => _LiteBuffer.LiteBuffer.alloc(length) // $FlowFixMe
  : length => new _LiteBuffer.LiteBuffer(length).fill(0));

},{"./LiteBuffer":"node_modules/rsocket-core/build/LiteBuffer.js","fbjs/lib/invariant":"node_modules/fbjs/lib/invariant.js"}],"node_modules/rsocket-core/build/RSocketEncoding.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.BufferEncoders = (exports.Utf8Encoders = (exports.BufferEncoder = (exports.UTF8Encoder = undefined)));

var _RSocketBufferUtils = require('./RSocketBufferUtils');
var _invariant = require('fbjs/lib/invariant');
var _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                   * Commonly used subset of the allowed Node Buffer Encoder types.
                                                                                                                                                                                                   */

/**
                                                                                                                                                                                                       * The Encoders object specifies how values should be serialized/deserialized
                                                                                                                                                                                                       * to/from binary.
                                                                                                                                                                                                       */

const UTF8Encoder = (exports.UTF8Encoder = {
  byteLength: value => (0, _RSocketBufferUtils.byteLength)(value, 'utf8'),
  decode: (buffer, start, end) => {
    return buffer.toString('utf8', start, end);
  },
  encode: (value, buffer, start, end) => {
    (0, _invariant2.default)(
      typeof value === 'string',
      'RSocketEncoding: Expected value to be a string, got `%s`.',
      value
    );

    buffer.write(value, start, end - start, 'utf8');
    return end;
  },
});

const BufferEncoder = (exports.BufferEncoder = {
  byteLength: value => {
    (0, _invariant2.default)(
      Buffer.isBuffer(value),
      'RSocketEncoding: Expected value to be a buffer, got `%s`.',
      value
    );

    return value.length;
  },
  decode: (buffer, start, end) => {
    return buffer.slice(start, end);
  },
  encode: (value, buffer, start, end) => {
    (0, _invariant2.default)(
      Buffer.isBuffer(value),
      'RSocketEncoding: Expected value to be a buffer, got `%s`.',
      value
    );

    value.copy(buffer, start, 0, value.length);
    return end;
  },
});

/**
        * Encode all values as UTF8 strings.
        */
const Utf8Encoders = (exports.Utf8Encoders = {
  data: UTF8Encoder,
  dataMimeType: UTF8Encoder,
  message: UTF8Encoder,
  metadata: UTF8Encoder,
  metadataMimeType: UTF8Encoder,
  resumeToken: UTF8Encoder,
});

/**
                               * Encode all values as buffers.
                               */
const BufferEncoders = (exports.BufferEncoders = {
  data: BufferEncoder,
  dataMimeType: UTF8Encoder,
  message: UTF8Encoder,
  metadata: BufferEncoder,
  metadataMimeType: UTF8Encoder,
  resumeToken: BufferEncoder,
});

},{"./RSocketBufferUtils":"node_modules/rsocket-core/build/RSocketBufferUtils.js","fbjs/lib/invariant":"node_modules/fbjs/lib/invariant.js","buffer":"node_modules/buffer/index.js"}],"node_modules/rsocket-core/build/RSocketBinaryFraming.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';

/* eslint-disable consistent-return, no-bitwise */ Object.defineProperty(
  exports,
  '__esModule',
  {value: true}
);
exports.deserializeFrameWithLength = deserializeFrameWithLength;
exports.deserializeFrames = deserializeFrames;
exports.serializeFrameWithLength = serializeFrameWithLength;
exports.deserializeFrame = deserializeFrame;
exports.serializeFrame = serializeFrame;
exports.sizeOfFrame = sizeOfFrame;
var _invariant = require('fbjs/lib/invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = require('./RSocketFrame');
var _RSocketEncoding = require('./RSocketEncoding');
var _RSocketBufferUtils = require('./RSocketBufferUtils');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
                                                                                                                                                                                                                                                                                                                                                                                         * Frame header is:
                                                                                                                                                                                                                                                                                                                                                                                         * - stream id (uint32 = 4)
                                                                                                                                                                                                                                                                                                                                                                                         * - type + flags (uint 16 = 2)
                                                                                                                                                                                                                                                                                                                                                                                         */ const FRAME_HEADER_SIZE = 6;
/**
                                                                                                                                                                                                                                                                                                                                                                                                                         * Size of frame length and metadata length fields.
                                                                                                                                                                                                                                                                                                                                                                                                                         */ const UINT24_SIZE = 3;
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Reads a frame from a buffer that is prefixed with the frame length.
                                                                                                                                                                                                                                                                                                                                                                                                                                                   */ function deserializeFrameWithLength(
  buffer,
  encoders
) {
  const frameLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, 0);
  return deserializeFrame(
    buffer.slice(UINT24_SIZE, UINT24_SIZE + frameLength),
    encoders
  );
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Given a buffer that may contain zero or more length-prefixed frames followed
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * by zero or more bytes of a (partial) subsequent frame, returns an array of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * the frames and a buffer of the leftover bytes.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */ function deserializeFrames(
  buffer,
  encoders
) {
  const frames = [];
  let offset = 0;
  while (offset + UINT24_SIZE < buffer.length) {
    const frameLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, offset);
    const frameStart = offset + UINT24_SIZE;
    const frameEnd = frameStart + frameLength;
    if (frameEnd > buffer.length) {
      // not all bytes of next frame received
      break;
    }
    const frameBuffer = buffer.slice(frameStart, frameEnd);
    const frame = deserializeFrame(frameBuffer, encoders);
    frames.push(frame);
    offset = frameEnd;
  }
  return [frames, buffer.slice(offset, buffer.length)];
}
/**
                                                                                                                                                                                                                        * Writes a frame to a buffer with a length prefix.
                                                                                                                                                                                                                        */ function serializeFrameWithLength(
  frame,
  encoders
) {
  const buffer = serializeFrame(frame, encoders);
  const lengthPrefixed = (0, _RSocketBufferUtils.createBuffer)(
    buffer.length + UINT24_SIZE
  );
  (0, _RSocketBufferUtils.writeUInt24BE)(lengthPrefixed, buffer.length, 0);
  buffer.copy(lengthPrefixed, UINT24_SIZE, 0, buffer.length);
  return lengthPrefixed;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * Read a frame from the buffer.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */ function deserializeFrame(
  buffer,
  encoders
) {
  encoders = encoders || _RSocketEncoding.Utf8Encoders;
  let offset = 0;
  const streamId = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    streamId >= 0,
    'RSocketBinaryFraming: Invalid frame, expected a positive stream id, got `%s.',
    streamId
  );
  const typeAndFlags = buffer.readUInt16BE(offset);
  offset += 2;
  const type = typeAndFlags >>> _RSocketFrame.FRAME_TYPE_OFFFSET; // keep highest 6 bits
  const flags = typeAndFlags & _RSocketFrame.FLAGS_MASK; // keep lowest 10 bits
  switch (type) {
    case _RSocketFrame.FRAME_TYPES.SETUP:
      return deserializeSetupFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.PAYLOAD:
      return deserializePayloadFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.ERROR:
      return deserializeErrorFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
      return deserializeKeepAliveFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
      return deserializeRequestFnfFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      return deserializeRequestResponseFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
      return deserializeRequestStreamFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      return deserializeRequestChannelFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_N:
      return deserializeRequestNFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME:
      return deserializeResumeFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME_OK:
      return deserializeResumeOkFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.CANCEL:
      return deserializeCancelFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.LEASE:
      return deserializeLeaseFrame(buffer, streamId, flags, encoders);
    default:
      (0, _invariant2.default)(
        false,
        'RSocketBinaryFraming: Unsupported frame type `%s`.',
        (0, _RSocketFrame.getFrameTypeName)(type)
      );
  }
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Convert the frame to a (binary) buffer.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */ function serializeFrame(
  frame,
  encoders
) {
  encoders = encoders || _RSocketEncoding.Utf8Encoders;
  switch (frame.type) {
    case _RSocketFrame.FRAME_TYPES.SETUP:
      return serializeSetupFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.PAYLOAD:
      return serializePayloadFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.ERROR:
      return serializeErrorFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
      return serializeKeepAliveFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
    case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      return serializeRequestFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
    case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      return serializeRequestManyFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_N:
      return serializeRequestNFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME:
      return serializeResumeFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME_OK:
      return serializeResumeOkFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.CANCEL:
      return serializeCancelFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.LEASE:
      return serializeLeaseFrame(frame, encoders);
    default:
      (0, _invariant2.default)(
        false,
        'RSocketBinaryFraming: Unsupported frame type `%s`.',
        (0, _RSocketFrame.getFrameTypeName)(frame.type)
      );
  }
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * Byte size of frame without size prefix
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */ function sizeOfFrame(
  frame,
  encoders
) {
  encoders = encoders || _RSocketEncoding.Utf8Encoders;
  switch (frame.type) {
    case _RSocketFrame.FRAME_TYPES.SETUP:
      return sizeOfSetupFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.PAYLOAD:
      return sizeOfPayloadFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.ERROR:
      return sizeOfErrorFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
      return sizeOfKeepAliveFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
    case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      return sizeOfRequestFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
    case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      return sizeOfRequestManyFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_N:
      return sizeOfRequestNFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME:
      return sizeOfResumeFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME_OK:
      return sizeOfResumeOkFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.CANCEL:
      return sizeOfCancelFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.LEASE:
      return sizeOfLeaseFrame(frame, encoders);
    default:
      (0, _invariant2.default)(
        false,
        'RSocketBinaryFraming: Unsupported frame type `%s`.',
        (0, _RSocketFrame.getFrameTypeName)(frame.type)
      );
  }
}

/**
   * Writes a SETUP frame into a new buffer and returns it.
   *
   * Prefix size is:
   * - version (2x uint16 = 4)
   * - keepalive (uint32 = 4)
   * - lifetime (uint32 = 4)
   * - mime lengths (2x uint8 = 2)
   */
const SETUP_FIXED_SIZE = 14;
const RESUME_TOKEN_LENGTH_SIZE = 2;
function serializeSetupFrame(frame, encoders) {
  const resumeTokenLength = frame.resumeToken != null
    ? encoders.resumeToken.byteLength(frame.resumeToken)
    : 0;
  const metadataMimeTypeLength = frame.metadataMimeType != null
    ? encoders.metadataMimeType.byteLength(frame.metadataMimeType)
    : 0;
  const dataMimeTypeLength = frame.dataMimeType != null
    ? encoders.dataMimeType.byteLength(frame.dataMimeType)
    : 0;
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE +
      SETUP_FIXED_SIZE + //
      (resumeTokenLength ? RESUME_TOKEN_LENGTH_SIZE + resumeTokenLength : 0) +
      metadataMimeTypeLength +
      dataMimeTypeLength +
      payloadLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt16BE(frame.majorVersion, offset);
  offset = buffer.writeUInt16BE(frame.minorVersion, offset);
  offset = buffer.writeUInt32BE(frame.keepAlive, offset);
  offset = buffer.writeUInt32BE(frame.lifetime, offset);

  if (frame.flags & _RSocketFrame.FLAGS.RESUME_ENABLE) {
    offset = buffer.writeUInt16BE(resumeTokenLength, offset);
    if (frame.resumeToken != null) {
      offset = encoders.resumeToken.encode(
        frame.resumeToken,
        buffer,
        offset,
        offset + resumeTokenLength
      );
    }
  }

  offset = buffer.writeUInt8(metadataMimeTypeLength, offset);
  if (frame.metadataMimeType != null) {
    offset = encoders.metadataMimeType.encode(
      frame.metadataMimeType,
      buffer,
      offset,
      offset + metadataMimeTypeLength
    );
  }

  offset = buffer.writeUInt8(dataMimeTypeLength, offset);
  if (frame.dataMimeType != null) {
    offset = encoders.dataMimeType.encode(
      frame.dataMimeType,
      buffer,
      offset,
      offset + dataMimeTypeLength
    );
  }

  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfSetupFrame(frame, encoders) {
  const resumeTokenLength = frame.resumeToken != null
    ? encoders.resumeToken.byteLength(frame.resumeToken)
    : 0;
  const metadataMimeTypeLength = frame.metadataMimeType != null
    ? encoders.metadataMimeType.byteLength(frame.metadataMimeType)
    : 0;
  const dataMimeTypeLength = frame.dataMimeType != null
    ? encoders.dataMimeType.byteLength(frame.dataMimeType)
    : 0;
  const payloadLength = getPayloadLength(frame, encoders);
  return FRAME_HEADER_SIZE +
    SETUP_FIXED_SIZE + //
    (resumeTokenLength ? RESUME_TOKEN_LENGTH_SIZE + resumeTokenLength : 0) +
    metadataMimeTypeLength +
    dataMimeTypeLength +
    payloadLength;
}

/**
   * Reads a SETUP frame from the buffer and returns it.
   */
function deserializeSetupFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid SETUP frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const majorVersion = buffer.readUInt16BE(offset);
  offset += 2;
  const minorVersion = buffer.readUInt16BE(offset);
  offset += 2;

  const keepAlive = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    keepAlive >= 0 && keepAlive <= _RSocketFrame.MAX_KEEPALIVE,
    'RSocketBinaryFraming: Invalid SETUP frame, expected keepAlive to be ' +
      '>= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_KEEPALIVE,
    keepAlive
  );

  const lifetime = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    lifetime >= 0 && lifetime <= _RSocketFrame.MAX_LIFETIME,
    'RSocketBinaryFraming: Invalid SETUP frame, expected lifetime to be ' +
      '>= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_LIFETIME,
    lifetime
  );

  let resumeToken = null;
  if (flags & _RSocketFrame.FLAGS.RESUME_ENABLE) {
    const resumeTokenLength = buffer.readInt16BE(offset);
    offset += 2;
    (0, _invariant2.default)(
      resumeTokenLength >= 0 &&
        resumeTokenLength <= _RSocketFrame.MAX_RESUME_LENGTH,
      'RSocketBinaryFraming: Invalid SETUP frame, expected resumeToken length ' +
        'to be >= 0 and <= %s. Got `%s`.',
      _RSocketFrame.MAX_RESUME_LENGTH,
      resumeTokenLength
    );

    resumeToken = encoders.resumeToken.decode(
      buffer,
      offset,
      offset + resumeTokenLength
    );

    offset += resumeTokenLength;
  }

  const metadataMimeTypeLength = buffer.readUInt8(offset);
  offset += 1;
  const metadataMimeType = encoders.metadataMimeType.decode(
    buffer,
    offset,
    offset + metadataMimeTypeLength
  );

  offset += metadataMimeTypeLength;

  const dataMimeTypeLength = buffer.readUInt8(offset);
  offset += 1;
  const dataMimeType = encoders.dataMimeType.decode(
    buffer,
    offset,
    offset + dataMimeTypeLength
  );

  offset += dataMimeTypeLength;

  const frame = {
    data: null,
    dataMimeType,
    flags,
    keepAlive,
    length,
    lifetime,
    majorVersion,
    metadata: null,
    metadataMimeType,
    minorVersion,
    resumeToken,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.SETUP,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

/**
   * Writes an ERROR frame into a new buffer and returns it.
   *
   * Prefix size is for the error code (uint32 = 4).
   */
const ERROR_FIXED_SIZE = 4;
function serializeErrorFrame(frame, encoders) {
  const messageLength = frame.message != null
    ? encoders.message.byteLength(frame.message)
    : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + ERROR_FIXED_SIZE + messageLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.code, offset);
  if (frame.message != null) {
    encoders.message.encode(
      frame.message,
      buffer,
      offset,
      offset + messageLength
    );
  }
  return buffer;
}

function sizeOfErrorFrame(frame, encoders) {
  const messageLength = frame.message != null
    ? encoders.message.byteLength(frame.message)
    : 0;
  return FRAME_HEADER_SIZE + ERROR_FIXED_SIZE + messageLength;
}

/**
   * Reads an ERROR frame from the buffer and returns it.
   */
function deserializeErrorFrame(buffer, streamId, flags, encoders) {
  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const code = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    code >= 0 && code <= _RSocketFrame.MAX_CODE,
    'RSocketBinaryFraming: Invalid ERROR frame, expected code to be >= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_CODE,
    code
  );

  const messageLength = buffer.length - offset;
  let message = '';
  if (messageLength > 0) {
    message = encoders.message.decode(buffer, offset, offset + messageLength);
    offset += messageLength;
  }

  return {
    code,
    flags,
    length,
    message,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.ERROR,
  };
}

/**
   * Writes a KEEPALIVE frame into a new buffer and returns it.
   *
   * Prefix size is for the last received position (uint64 = 8).
   */
const KEEPALIVE_FIXED_SIZE = 8;
function serializeKeepAliveFrame(frame, encoders) {
  const dataLength = frame.data != null
    ? encoders.data.byteLength(frame.data)
    : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + KEEPALIVE_FIXED_SIZE + dataLength
  );

  let offset = writeHeader(frame, buffer);
  offset = (0, _RSocketBufferUtils.writeUInt64BE)(
    buffer,
    frame.lastReceivedPosition,
    offset
  );
  if (frame.data != null) {
    encoders.data.encode(frame.data, buffer, offset, offset + dataLength);
  }
  return buffer;
}

function sizeOfKeepAliveFrame(frame, encoders) {
  const dataLength = frame.data != null
    ? encoders.data.byteLength(frame.data)
    : 0;
  return FRAME_HEADER_SIZE + KEEPALIVE_FIXED_SIZE + dataLength;
}

/**
   * Reads a KEEPALIVE frame from the buffer and returns it.
   */
function deserializeKeepAliveFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid KEEPALIVE frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const lastReceivedPosition = (0, _RSocketBufferUtils.readUInt64BE)(
    buffer,
    offset
  );
  offset += 8;
  let data = null;
  if (offset < buffer.length) {
    data = encoders.data.decode(buffer, offset, buffer.length);
  }

  return {
    data,
    flags,
    lastReceivedPosition,
    length,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.KEEPALIVE,
  };
}

/**
   * Writes a LEASE frame into a new buffer and returns it.
   *
   * Prefix size is for the ttl (uint32) and requestcount (uint32).
   */
const LEASE_FIXED_SIZE = 8;
function serializeLeaseFrame(frame, encoders) {
  const metaLength = frame.metadata != null
    ? encoders.metadata.byteLength(frame.metadata)
    : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + LEASE_FIXED_SIZE + metaLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.ttl, offset);
  offset = buffer.writeUInt32BE(frame.requestCount, offset);
  if (frame.metadata != null) {
    encoders.metadata.encode(
      frame.metadata,
      buffer,
      offset,
      offset + metaLength
    );
  }
  return buffer;
}

function sizeOfLeaseFrame(frame, encoders) {
  const metaLength = frame.metadata != null
    ? encoders.metadata.byteLength(frame.metadata)
    : 0;
  return FRAME_HEADER_SIZE + LEASE_FIXED_SIZE + metaLength;
}

/**
   * Reads a LEASE frame from the buffer and returns it.
   */
function deserializeLeaseFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid LEASE frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const ttl = buffer.readUInt32BE(offset);
  offset += 4;
  const requestCount = buffer.readUInt32BE(offset);
  offset += 4;
  let metadata = null;
  if (offset < buffer.length) {
    metadata = encoders.metadata.decode(buffer, offset, buffer.length);
  }
  return {
    flags,
    length,
    metadata,
    requestCount,
    streamId,
    ttl,
    type: _RSocketFrame.FRAME_TYPES.LEASE,
  };
}

/**
   * Writes a REQUEST_FNF or REQUEST_RESPONSE frame to a new buffer and returns
   * it.
   *
   * Note that these frames have the same shape and only differ in their type.
   */
function serializeRequestFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + payloadLength
  );
  const offset = writeHeader(frame, buffer);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfRequestFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  return FRAME_HEADER_SIZE + payloadLength;
}

function deserializeRequestFnfFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_FNF frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_FNF,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

function deserializeRequestResponseFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_RESPONSE frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

/**
   * Writes a REQUEST_STREAM or REQUEST_CHANNEL frame to a new buffer and returns
   * it.
   *
   * Note that these frames have the same shape and only differ in their type.
   *
   * Prefix size is for requestN (uint32 = 4).
   */
const REQUEST_MANY_HEADER = 4;
function serializeRequestManyFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + REQUEST_MANY_HEADER + payloadLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.requestN, offset);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfRequestManyFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  return FRAME_HEADER_SIZE + REQUEST_MANY_HEADER + payloadLength;
}

function deserializeRequestStreamFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const requestN = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_STREAM,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

function deserializeRequestChannelFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_CHANNEL frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const requestN = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

/**
   * Writes a REQUEST_N frame to a new buffer and returns it.
   *
   * Prefix size is for requestN (uint32 = 4).
   */
const REQUEST_N_HEADER = 4;
function serializeRequestNFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + REQUEST_N_HEADER
  );
  const offset = writeHeader(frame, buffer);
  buffer.writeUInt32BE(frame.requestN, offset);
  return buffer;
}

function sizeOfRequestNFrame(frame, encoders) {
  return FRAME_HEADER_SIZE + REQUEST_N_HEADER;
}

function deserializeRequestNFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_N frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const requestN = buffer.readInt32BE(FRAME_HEADER_SIZE);
  (0, _invariant2.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  return {
    flags,
    length,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
  };
}

/**
   * Writes a CANCEL frame to a new buffer and returns it.
   */
function serializeCancelFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(FRAME_HEADER_SIZE);
  writeHeader(frame, buffer);
  return buffer;
}

function sizeOfCancelFrame(frame, encoders) {
  return FRAME_HEADER_SIZE;
}

function deserializeCancelFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid CANCEL frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  return {
    flags,
    length,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.CANCEL,
  };
}

/**
   * Writes a PAYLOAD frame to a new buffer and returns it.
   */
function serializePayloadFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + payloadLength
  );
  const offset = writeHeader(frame, buffer);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfPayloadFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  return FRAME_HEADER_SIZE + payloadLength;
}

function deserializePayloadFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid PAYLOAD frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

/**
   * Writes a RESUME frame into a new buffer and returns it.
   *
   * Fixed size is:
   * - major version (uint16 = 2)
   * - minor version (uint16 = 2)
   * - token length (uint16 = 2)
   * - client position (uint64 = 8)
   * - server position (uint64 = 8)
   */
const RESUME_FIXED_SIZE = 22;
function serializeResumeFrame(frame, encoders) {
  const resumeTokenLength = encoders.resumeToken.byteLength(frame.resumeToken);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + RESUME_FIXED_SIZE + resumeTokenLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt16BE(frame.majorVersion, offset);
  offset = buffer.writeUInt16BE(frame.minorVersion, offset);
  offset = buffer.writeUInt16BE(resumeTokenLength, offset);
  offset = encoders.resumeToken.encode(
    frame.resumeToken,
    buffer,
    offset,
    offset + resumeTokenLength
  );

  offset = (0, _RSocketBufferUtils.writeUInt64BE)(
    buffer,
    frame.serverPosition,
    offset
  );
  (0, _RSocketBufferUtils.writeUInt64BE)(buffer, frame.clientPosition, offset);
  return buffer;
}

function sizeOfResumeFrame(frame, encoders) {
  const resumeTokenLength = encoders.resumeToken.byteLength(frame.resumeToken);
  return FRAME_HEADER_SIZE + RESUME_FIXED_SIZE + resumeTokenLength;
}

function deserializeResumeFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid RESUME frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const majorVersion = buffer.readUInt16BE(offset);
  offset += 2;
  const minorVersion = buffer.readUInt16BE(offset);
  offset += 2;

  const resumeTokenLength = buffer.readInt16BE(offset);
  offset += 2;
  (0, _invariant2.default)(
    resumeTokenLength >= 0 &&
      resumeTokenLength <= _RSocketFrame.MAX_RESUME_LENGTH,
    'RSocketBinaryFraming: Invalid SETUP frame, expected resumeToken length ' +
      'to be >= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_RESUME_LENGTH,
    resumeTokenLength
  );

  const resumeToken = encoders.resumeToken.decode(
    buffer,
    offset,
    offset + resumeTokenLength
  );

  offset += resumeTokenLength;
  const serverPosition = (0, _RSocketBufferUtils.readUInt64BE)(buffer, offset);
  offset += 8;
  const clientPosition = (0, _RSocketBufferUtils.readUInt64BE)(buffer, offset);
  offset += 8;
  return {
    clientPosition,
    flags,
    length,
    majorVersion,
    minorVersion,
    resumeToken,
    serverPosition,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.RESUME,
  };
}

/**
   * Writes a RESUME_OK frame into a new buffer and returns it.
   *
   * Fixed size is:
   * - client position (uint64 = 8)
   */
const RESUME_OK_FIXED_SIZE = 8;
function serializeResumeOkFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + RESUME_OK_FIXED_SIZE
  );
  const offset = writeHeader(frame, buffer);
  (0, _RSocketBufferUtils.writeUInt64BE)(buffer, frame.clientPosition, offset);
  return buffer;
}

function sizeOfResumeOkFrame(frame, encoders) {
  return FRAME_HEADER_SIZE + RESUME_OK_FIXED_SIZE;
}

function deserializeResumeOkFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid RESUME frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  const clientPosition = (0, _RSocketBufferUtils.readUInt64BE)(
    buffer,
    FRAME_HEADER_SIZE
  );
  return {
    clientPosition,
    flags,
    length,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.RESUME_OK,
  };
}

/**
   * Write the header of the frame into the buffer.
   */
function writeHeader(frame, buffer) {
  const offset = buffer.writeInt32BE(frame.streamId, 0);
  // shift frame to high 6 bits, extract lowest 10 bits from flags
  return buffer.writeUInt16BE(
    frame.type << _RSocketFrame.FRAME_TYPE_OFFFSET |
      frame.flags & _RSocketFrame.FLAGS_MASK,
    offset
  );
}

/**
   * Determine the length of the payload section of a frame. Only applies to
   * frame types that MAY have both metadata and data.
   */
function getPayloadLength(frame, encoders) {
  let payloadLength = 0;
  if (frame.data != null) {
    payloadLength += encoders.data.byteLength(frame.data);
  }
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    payloadLength += UINT24_SIZE;
    if (frame.metadata != null) {
      payloadLength += encoders.metadata.byteLength(frame.metadata);
    }
  }
  return payloadLength;
}

/**
   * Write the payload of a frame into the given buffer. Only applies to frame
   * types that MAY have both metadata and data.
   */
function writePayload(frame, buffer, encoders, offset) {
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    if (frame.metadata != null) {
      const metaLength = encoders.metadata.byteLength(frame.metadata);
      offset = (0, _RSocketBufferUtils.writeUInt24BE)(
        buffer,
        metaLength,
        offset
      );
      offset = encoders.metadata.encode(
        frame.metadata,
        buffer,
        offset,
        offset + metaLength
      );
    } else {
      offset = (0, _RSocketBufferUtils.writeUInt24BE)(buffer, 0, offset);
    }
  }
  if (frame.data != null) {
    encoders.data.encode(frame.data, buffer, offset, buffer.length);
  }
}

/**
   * Read the payload from a buffer and write it into the frame. Only applies to
   * frame types that MAY have both metadata and data.
   */
function readPayload(buffer, frame, encoders, offset) {
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    const metaLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, offset);
    offset += UINT24_SIZE;
    if (metaLength > 0) {
      frame.metadata = encoders.metadata.decode(
        buffer,
        offset,
        offset + metaLength
      );

      offset += metaLength;
    }
  }
  if (offset < buffer.length) {
    frame.data = encoders.data.decode(buffer, offset, buffer.length);
  }
}

},{"fbjs/lib/invariant":"node_modules/fbjs/lib/invariant.js","./RSocketFrame":"node_modules/rsocket-core/build/RSocketFrame.js","./RSocketEncoding":"node_modules/rsocket-core/build/RSocketEncoding.js","./RSocketBufferUtils":"node_modules/rsocket-core/build/RSocketBufferUtils.js"}],"node_modules/rsocket-core/build/RSocketSerialization.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.IdentitySerializers = (exports.IdentitySerializer = (exports.JsonSerializers = (exports.JsonSerializer = undefined)));

var _LiteBuffer = require('./LiteBuffer');
var _invariant = require('fbjs/lib/invariant');
var _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

// JSON serializer
/**
 * A Serializer transforms data between the application encoding used in
 * Payloads and the Encodable type accepted by the transport client.
 */ const JsonSerializer = (exports.JsonSerializer = {
  deserialize: data => {
    let str;
    if (data == null) {
      return null;
    } else if (typeof data === 'string') {
      str = data;
    } else if (_LiteBuffer.LiteBuffer.isBuffer(data)) {
      const buffer = data;
      str = buffer.toString('utf8');
    } else {
      const buffer = _LiteBuffer.LiteBuffer.from(data);
      str = buffer.toString('utf8');
    }
    return JSON.parse(str);
  },
  serialize: JSON.stringify,
});

const JsonSerializers = (exports.JsonSerializers = {
  data: JsonSerializer,
  metadata: JsonSerializer,
});

// Pass-through serializer
const IdentitySerializer = (exports.IdentitySerializer = {
  deserialize: data => {
    (0, _invariant2.default)(
      data == null ||
        typeof data === 'string' ||
        _LiteBuffer.LiteBuffer.isBuffer(data) ||
        data instanceof Uint8Array,
      'RSocketSerialization: Expected data to be a string, Buffer, or ' +
        'Uint8Array. Got `%s`.',
      data
    );

    return data;
  },
  serialize: data => data,
});

const IdentitySerializers = (exports.IdentitySerializers = {
  data: IdentitySerializer,
  metadata: IdentitySerializer,
});

},{"./LiteBuffer":"node_modules/rsocket-core/build/LiteBuffer.js","fbjs/lib/invariant":"node_modules/fbjs/lib/invariant.js"}],"node_modules/rsocket-core/build/RSocketLease.js":[function(require,module,exports) {
/** Copyright 2015-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.ResponderLeaseHandler = (exports.RequesterLeaseHandler = (exports.Leases = (exports.Lease = undefined)));

var _invariant = require('fbjs/lib/invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _rsocketFlowable = require('rsocket-flowable');

var _RSocketFrame = require('./RSocketFrame');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

class Lease {
  constructor(timeToLiveMillis, allowedRequests, metadata) {
    (0, _invariant2.default)(
      timeToLiveMillis > 0,
      'Lease time-to-live must be positive'
    );
    (0, _invariant2.default)(
      allowedRequests > 0,
      'Lease allowed requests must be positive'
    );
    this.timeToLiveMillis = timeToLiveMillis;
    this.allowedRequests = allowedRequests;
    this.startingAllowedRequests = allowedRequests;
    this.expiry = Date.now() + timeToLiveMillis;
    this.metadata = metadata;
  }

  expired() {
    return Date.now() > this.expiry;
  }

  valid() {
    return this.allowedRequests > 0 && !this.expired();
  }

  // todo hide
  _use() {
    if (this.expired()) {
      return false;
    }
    const allowed = this.allowedRequests;
    const success = allowed > 0;
    if (success) {
      this.allowedRequests = allowed - 1;
    }
    return success;
  }
}
exports.Lease = Lease;

class Leases {
  constructor() {
    this._sender = () => _rsocketFlowable.Flowable.never();
    this._receiver = leases => {};
  }

  sender(sender) {
    this._sender = sender;
    return this;
  }

  receiver(receiver) {
    this._receiver = receiver;
    return this;
  }

  stats(stats) {
    this._stats = stats;
    return this;
  }
}
exports.Leases = Leases;

class RequesterLeaseHandler {
  constructor(leaseReceiver) {
    this._requestN = -1;
    leaseReceiver(
      new _rsocketFlowable.Flowable(subscriber => {
        if (this._subscriber) {
          subscriber.onError(new Error('only 1 subscriber is allowed'));
          return;
        }
        if (this.isDisposed()) {
          subscriber.onComplete();
          return;
        }
        this._subscriber = subscriber;
        subscriber.onSubscribe({
          cancel: () => {
            this.dispose();
          },
          request: n => {
            if (n <= 0) {
              subscriber.onError(
                new Error(`request demand must be positive: ${n}`)
              );
            }
            if (!this.isDisposed()) {
              const curReqN = this._requestN;
              this._onRequestN(curReqN);
              this._requestN = Math.min(
                Number.MAX_SAFE_INTEGER,
                Math.max(0, curReqN) + n
              );
            }
          },
        });
      })
    );
  } /*negative value means received lease was not signalled due to missing requestN*/

  use() {
    const l = this._lease;
    return l ? l._use() : false;
  }

  errorMessage() {
    return _errorMessage(this._lease);
  }

  receive(frame) {
    if (!this.isDisposed()) {
      const timeToLiveMillis = frame.ttl;
      const requestCount = frame.requestCount;
      const metadata = frame.metadata;
      this._onLease(new Lease(timeToLiveMillis, requestCount, metadata));
    }
  }

  availability() {
    const l = this._lease;
    if (l && l.valid()) {
      return l.allowedRequests / l.startingAllowedRequests;
    }
    return 0.0;
  }

  dispose() {
    if (!this._isDisposed) {
      this._isDisposed = true;
      const s = this._subscriber;
      if (s) {
        s.onComplete();
      }
    }
  }

  isDisposed() {
    return this._isDisposed;
  }

  _onRequestN(requestN) {
    const l = this._lease;
    const s = this._subscriber;
    if (requestN < 0 && l && s) {
      s.onNext(l);
    }
  }

  _onLease(lease) {
    const s = this._subscriber;
    const newReqN = this._requestN - 1;
    if (newReqN >= 0 && s) {
      s.onNext(lease);
    }
    this._requestN = Math.max(-1, newReqN);
    this._lease = lease;
  }
}
exports.RequesterLeaseHandler = RequesterLeaseHandler;

class ResponderLeaseHandler {
  constructor(leaseSender, stats, errorConsumer) {
    this._leaseSender = leaseSender;
    this._stats = stats;
    this._errorConsumer = errorConsumer;
  }

  use() {
    const l = this._lease;
    const success = l ? l._use() : false;
    this._onStatsEvent(success);
    return success;
  }

  errorMessage() {
    return _errorMessage(this._lease);
  }

  send(send) {
    let subscription;
    let isDisposed;

    this._leaseSender(this._stats).subscribe({
      onComplete: () => this._onStatsEvent(),
      onError: error => {
        this._onStatsEvent();
        const errConsumer = this._errorConsumer;
        if (errConsumer) {
          errConsumer(error);
        }
      },
      onNext: lease => {
        this._lease = lease;
        send(lease);
      },
      onSubscribe: s => {
        if (isDisposed) {
          s.cancel();
          return;
        }
        s.request(_RSocketFrame.MAX_REQUEST_N);
        subscription = s;
      },
    });

    return {
      dispose() {
        if (!isDisposed) {
          isDisposed = true;
          this._onStatsEvent();
          if (subscription) {
            subscription.cancel();
          }
        }
      },

      isDisposed() {
        return isDisposed;
      },
    };
  }

  _onStatsEvent(success) {
    const s = this._stats;
    if (s) {
      const event = success === undefined
        ? 'Terminate'
        : success ? 'Accept' : 'Reject';
      s.onEvent(event);
    }
  }
}
exports.ResponderLeaseHandler = ResponderLeaseHandler;

function _errorMessage(lease) {
  if (!lease) {
    return 'Lease was not received yet';
  }
  if (lease.valid()) {
    return 'Missing leases';
  } else {
    const isExpired = lease.expired();
    const requests = lease.allowedRequests;
    return `Missing leases. Expired: ${isExpired.toString()}, allowedRequests: ${requests}`;
  }
}

},{"fbjs/lib/invariant":"node_modules/fbjs/lib/invariant.js","rsocket-flowable":"node_modules/rsocket-flowable/build/index.js","./RSocketFrame":"node_modules/rsocket-core/build/RSocketFrame.js"}],"node_modules/rsocket-core/build/RSocketVersion.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});

const MAJOR_VERSION = (exports.MAJOR_VERSION = 1);
const MINOR_VERSION = (exports.MINOR_VERSION = 0);

},{}],"node_modules/rsocket-core/build/RSocketMachine.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.createServerMachine = createServerMachine;
exports.createClientMachine = createClientMachine;
var _rsocketFlowable = require('rsocket-flowable');
var _emptyFunction = require('fbjs/lib/emptyFunction');
var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
var _invariant = require('fbjs/lib/invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _warning = require('fbjs/lib/warning');
var _warning2 = _interopRequireDefault(_warning);
var _RSocketFrame = require('./RSocketFrame');
var _RSocketSerialization = require('./RSocketSerialization');
var _RSocketLease = require('./RSocketLease');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
class ResponderWrapper {
  constructor(responder) {
    this._responder = responder || {};
  }
  setResponder(responder) {
    this._responder = responder || {};
  }
  fireAndForget(payload) {
    if (this._responder.fireAndForget) {
      try {
        this._responder.fireAndForget(payload);
      } catch (error) {
        console.error('fireAndForget threw an exception', error);
      }
    }
  }
  requestResponse(payload) {
    let error;
    if (this._responder.requestResponse) {
      try {
        return this._responder.requestResponse(payload);
      } catch (_error) {
        console.error('requestResponse threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Single.error(error || new Error('not implemented'));
  }
  requestStream(payload) {
    let error;
    if (this._responder.requestStream) {
      try {
        return this._responder.requestStream(payload);
      } catch (_error) {
        console.error('requestStream threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Flowable.error(
      error || new Error('not implemented')
    );
  }
  requestChannel(payloads) {
    let error;
    if (this._responder.requestChannel) {
      try {
        return this._responder.requestChannel(payloads);
      } catch (_error) {
        console.error('requestChannel threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Flowable.error(
      error || new Error('not implemented')
    );
  }
  metadataPush(payload) {
    let error;
    if (this._responder.metadataPush) {
      try {
        return this._responder.metadataPush(payload);
      } catch (_error) {
        console.error('metadataPush threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Single.error(error || new Error('not implemented'));
  }
}
function createServerMachine(
  connection,
  connectionPublisher,
  serializers,
  requesterLeaseHandler,
  responderLeaseHandler
) {
  return new RSocketMachineImpl(
    'SERVER',
    connection,
    connectionPublisher,
    serializers,
    undefined,
    requesterLeaseHandler,
    responderLeaseHandler
  );
}
function createClientMachine(
  connection,
  connectionPublisher,
  serializers,
  requestHandler,
  requesterLeaseHandler,
  responderLeaseHandler
) {
  return new RSocketMachineImpl(
    'CLIENT',
    connection,
    connectionPublisher,
    serializers,
    requestHandler,
    requesterLeaseHandler,
    responderLeaseHandler
  );
}

class RSocketMachineImpl {
  constructor(
    role,
    connection,
    connectionPublisher,
    serializers,
    requestHandler,
    requesterLeaseHandler,
    responderLeaseHandler
  ) {
    this._connectionAvailability = 1.0;
    this._handleTransportClose = () => {
      this._handleError(new Error('RSocket: The connection was closed.'));
    };
    this._handleError = error => {
      // Error any open request streams
      this._receivers.forEach(receiver => {
        receiver.onError(error);
      });
      this._receivers.clear();
      // Cancel any active subscriptions
      this._subscriptions.forEach(subscription => {
        subscription.cancel();
      });
      this._subscriptions.clear();
      this._connectionAvailability = 0.0;
      this._dispose(
        this._requesterLeaseHandler,
        this._responderLeaseSenderDisposable
      );
    };
    this._handleFrame = frame => {
      const {streamId} = frame;
      if (streamId === _RSocketFrame.CONNECTION_STREAM_ID) {
        this._handleConnectionFrame(frame);
      } else {
        this._handleStreamFrame(streamId, frame);
      }
    };
    this._connection = connection;
    this._requesterLeaseHandler = requesterLeaseHandler;
    this._responderLeaseHandler = responderLeaseHandler;
    this._nextStreamId = role === 'CLIENT' ? 1 : 2;
    this._receivers = new Map();
    this._subscriptions = new Map();
    this._serializers = serializers ||
      _RSocketSerialization.IdentitySerializers;
    this._requestHandler = new ResponderWrapper(requestHandler); // Subscribe to completion/errors before sending anything
    connectionPublisher({
      onComplete: this._handleTransportClose,
      onError: this._handleError,
      onNext: this._handleFrame,
      onSubscribe: subscription =>
        subscription.request(Number.MAX_SAFE_INTEGER),
    });
    const responderHandler = this._responderLeaseHandler;
    if (responderHandler) {
      this._responderLeaseSenderDisposable = responderHandler.send(
        this._leaseFrameSender()
      );
    } // Cleanup when the connection closes
    this._connection.connectionStatus().subscribe({
      onNext: status => {
        if (status.kind === 'CLOSED') {
          this._handleTransportClose();
        } else if (status.kind === 'ERROR') {
          this._handleError(status.error);
        }
      },
      onSubscribe: subscription =>
        subscription.request(Number.MAX_SAFE_INTEGER),
    });
  }
  setRequestHandler(requestHandler) {
    this._requestHandler.setResponder(requestHandler);
  }
  close() {
    this._connection.close();
  }
  connectionStatus() {
    return this._connection.connectionStatus();
  }
  availability() {
    const r = this._requesterLeaseHandler;
    const requesterAvailability = r ? r.availability() : 1.0;
    return Math.min(this._connectionAvailability, requesterAvailability);
  }
  fireAndForget(payload) {
    if (this._useLeaseOrError(this._requesterLeaseHandler)) {
      //todo need to signal error to user provided error handler
      return;
    }
    const streamId = this._getNextStreamId(this._receivers);
    const data = this._serializers.data.serialize(payload.data);
    const metadata = this._serializers.metadata.serialize(payload.metadata);
    const frame = {
      data,
      flags: payload.metadata !== undefined ? _RSocketFrame.FLAGS.METADATA : 0,
      metadata,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.REQUEST_FNF,
    };
    this._connection.sendOne(frame);
  }
  requestResponse(payload) {
    const leaseError = this._useLeaseOrError(this._requesterLeaseHandler);
    if (leaseError) {
      return _rsocketFlowable.Single.error(new Error(leaseError));
    }
    const streamId = this._getNextStreamId(this._receivers);
    return new _rsocketFlowable.Single(subscriber => {
      this._receivers.set(streamId, {
        onComplete: _emptyFunction2.default,
        onError: error => subscriber.onError(error),
        onNext: data => subscriber.onComplete(data),
      });
      const data = this._serializers.data.serialize(payload.data);
      const metadata = this._serializers.metadata.serialize(payload.metadata);
      const frame = {
        data,
        flags: payload.metadata !== undefined
          ? _RSocketFrame.FLAGS.METADATA
          : 0,
        metadata,
        streamId,
        type: _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE,
      };
      this._connection.sendOne(frame);
      subscriber.onSubscribe(() => {
        this._receivers.delete(streamId);
        const cancelFrame = {
          flags: 0,
          streamId,
          type: _RSocketFrame.FRAME_TYPES.CANCEL,
        };
        this._connection.sendOne(cancelFrame);
      });
    });
  }
  requestStream(payload) {
    const leaseError = this._useLeaseOrError(this._requesterLeaseHandler);
    if (leaseError) {
      return _rsocketFlowable.Flowable.error(new Error(leaseError));
    }
    const streamId = this._getNextStreamId(this._receivers);
    return new _rsocketFlowable.Flowable(
      subscriber => {
        this._receivers.set(streamId, subscriber);
        let initialized = false;
        subscriber.onSubscribe({
          cancel: () => {
            this._receivers.delete(streamId);
            if (!initialized) {
              return;
            }
            const cancelFrame = {
              flags: 0,
              streamId,
              type: _RSocketFrame.FRAME_TYPES.CANCEL,
            };
            this._connection.sendOne(cancelFrame);
          },
          request: n => {
            if (n > _RSocketFrame.MAX_REQUEST_N) {
              n = _RSocketFrame.MAX_REQUEST_N;
            }
            if (initialized) {
              const requestNFrame = {
                flags: 0,
                requestN: n,
                streamId,
                type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
              };
              this._connection.sendOne(requestNFrame);
            } else {
              initialized = true;
              const data = this._serializers.data.serialize(payload.data);
              const metadata = this._serializers.metadata.serialize(
                payload.metadata
              );
              const requestStreamFrame = {
                data,
                flags: payload.metadata !== undefined
                  ? _RSocketFrame.FLAGS.METADATA
                  : 0,
                metadata,
                requestN: n,
                streamId,
                type: _RSocketFrame.FRAME_TYPES.REQUEST_STREAM,
              };
              this._connection.sendOne(requestStreamFrame);
            }
          },
        });
      },
      _RSocketFrame.MAX_REQUEST_N
    );
  }
  requestChannel(payloads) {
    const leaseError = this._useLeaseOrError(this._requesterLeaseHandler);
    if (leaseError) {
      return _rsocketFlowable.Flowable.error(new Error(leaseError));
    }
    const streamId = this._getNextStreamId(this._receivers);
    let payloadsSubscribed = false;
    return new _rsocketFlowable.Flowable(
      subscriber => {
        try {
          this._receivers.set(streamId, subscriber);
          let initialized = false;
          subscriber.onSubscribe({
            cancel: () => {
              this._receivers.delete(streamId);
              if (!initialized) {
                return;
              }
              const cancelFrame = {
                flags: 0,
                streamId,
                type: _RSocketFrame.FRAME_TYPES.CANCEL,
              };
              this._connection.sendOne(cancelFrame);
            },
            request: n => {
              if (n > _RSocketFrame.MAX_REQUEST_N) {
                n = _RSocketFrame.MAX_REQUEST_N;
              }
              if (initialized) {
                const requestNFrame = {
                  flags: 0,
                  requestN: n,
                  streamId,
                  type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
                };
                this._connection.sendOne(requestNFrame);
              } else {
                if (!payloadsSubscribed) {
                  payloadsSubscribed = true;
                  payloads.subscribe({
                    onComplete: () => {
                      this._sendStreamComplete(streamId);
                    },
                    onError: error => {
                      this._sendStreamError(streamId, error.message);
                    }, //Subscriber methods
                    onNext: payload => {
                      const data = this._serializers.data.serialize(
                        payload.data
                      );
                      const metadata = this._serializers.metadata.serialize(
                        payload.metadata
                      );
                      if (!initialized) {
                        initialized = true;
                        const requestChannelFrame = {
                          data,
                          flags: payload.metadata !== undefined
                            ? _RSocketFrame.FLAGS.METADATA
                            : 0,
                          metadata,
                          requestN: n,
                          streamId,
                          type: _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL,
                        };
                        this._connection.sendOne(requestChannelFrame);
                      } else {
                        const payloadFrame = {
                          data,
                          flags: _RSocketFrame.FLAGS.NEXT |
                            (payload.metadata !== undefined
                              ? _RSocketFrame.FLAGS.METADATA
                              : 0),
                          metadata,
                          streamId,
                          type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
                        };
                        this._connection.sendOne(payloadFrame);
                      }
                    },
                    onSubscribe: subscription => {
                      this._subscriptions.set(streamId, subscription);
                      subscription.request(1);
                    },
                  });
                } else {
                  (0, _warning2.default)(
                    false,
                    'RSocketClient: re-entrant call to request n before initial' +
                      ' channel established.'
                  );
                }
              }
            },
          });
        } catch (err) {
          console.warn(
            'Exception while subscribing to channel flowable:' + err
          );
        }
      },
      _RSocketFrame.MAX_REQUEST_N
    );
  }
  metadataPush(payload) {
    // TODO #18065331: implement metadataPush
    throw new Error('metadataPush() is not implemented');
  }
  _getNextStreamId(streamIds) {
    const streamId = this._nextStreamId;
    do {
      this._nextStreamId = this._nextStreamId + 2 & _RSocketFrame.MAX_STREAM_ID;
    } while (this._nextStreamId === 0 || streamIds.has(streamId));
    return streamId;
  }
  _useLeaseOrError(leaseHandler) {
    if (leaseHandler) {
      if (!leaseHandler.use()) {
        return leaseHandler.errorMessage();
      }
    }
  }
  _leaseFrameSender() {
    return lease =>
      this._connection.sendOne({
        flags: 0,
        metadata: lease.metadata,
        requestCount: lease.allowedRequests,
        streamId: _RSocketFrame.CONNECTION_STREAM_ID,
        ttl: lease.timeToLiveMillis,
        type: _RSocketFrame.FRAME_TYPES.LEASE,
      });
  }
  _dispose(...disposables) {
    disposables.forEach(d => {
      if (d) {
        d.dispose();
      }
    });
  }
  _isRequest(frameType) {
    switch (frameType) {
      case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
      case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
      case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
        return true;
      default:
        return false;
    }
  }
  /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * Handle the connection closing normally: this is an error for any open streams.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */ /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Handle the transport connection closing abnormally or a connection-level protocol error.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */ _handleConnectionError(
    error
  ) {
    this._handleError(error);
    this._connection.close();
  }
  /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Handle a frame received from the transport client.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */ /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Handle connection frames (stream id === 0).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */ _handleConnectionFrame(
    frame
  ) {
    switch (frame.type) {
      case _RSocketFrame.FRAME_TYPES.ERROR:
        const error = (0, _RSocketFrame.createErrorFromFrame)(frame);
        this._handleConnectionError(error);
        break;
      case _RSocketFrame.FRAME_TYPES.EXT: // Extensions are not supported
        break;
      case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
        if ((0, _RSocketFrame.isRespond)(frame.flags)) {
          this._connection.sendOne(
            Object.assign({}, frame, {
              flags: frame.flags ^ _RSocketFrame.FLAGS.RESPOND, // eslint-disable-line no-bitwise
              lastReceivedPosition: 0,
            })
          );
        }
        break;
      case _RSocketFrame.FRAME_TYPES.LEASE:
        const r = this._requesterLeaseHandler;
        if (r) {
          r.receive(frame);
        }
        break;
      case _RSocketFrame.FRAME_TYPES.METADATA_PUSH:
      case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
      case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
        // TODO #18064706: handle requests from server
        break;
      case _RSocketFrame.FRAME_TYPES.RESERVED:
        // No-op
        break;
      case _RSocketFrame.FRAME_TYPES.RESUME:
      case _RSocketFrame.FRAME_TYPES.RESUME_OK:
        // TODO #18065016: support resumption
        break;
      default:
        if (false) {
          console.log(
            'RSocketClient: Unsupported frame type `%s` on stream `%s`.',
            (0, _RSocketFrame.getFrameTypeName)(frame.type),
            _RSocketFrame.CONNECTION_STREAM_ID
          );
        }
        break;
    }
  }

  /**
     * Handle stream-specific frames (stream id !== 0).
     */
  _handleStreamFrame(streamId, frame) {
    if (this._isRequest(frame.type)) {
      const leaseError = this._useLeaseOrError(this._responderLeaseHandler);
      if (leaseError) {
        this._sendStreamError(streamId, leaseError);
        return;
      }
    }
    switch (frame.type) {
      case _RSocketFrame.FRAME_TYPES.CANCEL:
        this._handleCancel(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_N:
        this._handleRequestN(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
        this._handleFireAndForget(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
        this._handleRequestResponse(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
        this._handleRequestStream(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
        this._handleRequestChannel(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.ERROR:
        const error = (0, _RSocketFrame.createErrorFromFrame)(frame);
        this._handleStreamError(streamId, error);
        break;
      case _RSocketFrame.FRAME_TYPES.PAYLOAD:
        const receiver = this._receivers.get(streamId);
        if (receiver != null) {
          if ((0, _RSocketFrame.isNext)(frame.flags)) {
            const payload = {
              data: this._serializers.data.deserialize(frame.data),
              metadata: this._serializers.metadata.deserialize(frame.metadata),
            };

            receiver.onNext(payload);
          }
          if ((0, _RSocketFrame.isComplete)(frame.flags)) {
            this._receivers.delete(streamId);
            receiver.onComplete();
          }
        }
        break;
      default:
        if (false) {
          console.log(
            'RSocketClient: Unsupported frame type `%s` on stream `%s`.',
            (0, _RSocketFrame.getFrameTypeName)(frame.type),
            streamId
          );
        }
        break;
    }
  }

  _handleCancel(streamId, frame) {
    const subscription = this._subscriptions.get(streamId);
    if (subscription) {
      subscription.cancel();
      this._subscriptions.delete(streamId);
    }
  }

  _handleRequestN(streamId, frame) {
    const subscription = this._subscriptions.get(streamId);
    if (subscription) {
      subscription.request(frame.requestN);
    }
  }

  _handleFireAndForget(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.fireAndForget(payload);
  }

  _handleRequestResponse(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.requestResponse(payload).subscribe({
      onComplete: payload => {
        this._sendStreamPayload(streamId, payload, true);
      },
      onError: error => this._sendStreamError(streamId, error.message),
      onSubscribe: cancel => {
        const subscription = {
          cancel,
          request: _emptyFunction2.default,
        };

        this._subscriptions.set(streamId, subscription);
      },
    });
  }

  _handleRequestStream(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.requestStream(payload).subscribe({
      onComplete: () => this._sendStreamComplete(streamId),
      onError: error => this._sendStreamError(streamId, error.message),
      onNext: payload => this._sendStreamPayload(streamId, payload),
      onSubscribe: subscription => {
        this._subscriptions.set(streamId, subscription);
        subscription.request(frame.requestN);
      },
    });
  }

  _handleRequestChannel(streamId, frame) {
    const existingSubscription = this._subscriptions.get(streamId);
    if (existingSubscription) {
      //Likely a duplicate REQUEST_CHANNEL frame, ignore per spec
      return;
    }

    const payloads = new _rsocketFlowable.Flowable(
      subscriber => {
        let firstRequest = true;

        subscriber.onSubscribe({
          cancel: () => {
            this._receivers.delete(streamId);
            const cancelFrame = {
              flags: 0,
              streamId,
              type: _RSocketFrame.FRAME_TYPES.CANCEL,
            };

            this._connection.sendOne(cancelFrame);
          },
          request: n => {
            if (n > _RSocketFrame.MAX_REQUEST_N) {
              n = _RSocketFrame.MAX_REQUEST_N;
            }
            if (firstRequest) {
              n--;
            }

            if (n > 0) {
              const requestNFrame = {
                flags: 0,
                requestN: n,
                streamId,
                type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
              };

              this._connection.sendOne(requestNFrame);
            }
            //critically, if n is 0 now, that's okay because we eagerly decremented it
            if (firstRequest && n >= 0) {
              firstRequest = false;
              //release the initial frame we received in frame form due to map operator
              subscriber.onNext(frame);
            }
          },
        });
      },
      _RSocketFrame.MAX_REQUEST_N
    );

    const framesToPayloads = new _rsocketFlowable.FlowableProcessor(
      payloads,
      frame => this._deserializePayload(frame)
    );
    this._receivers.set(streamId, framesToPayloads);

    this._requestHandler.requestChannel(framesToPayloads).subscribe({
      onComplete: () => this._sendStreamComplete(streamId),
      onError: error => this._sendStreamError(streamId, error.message),
      onNext: payload => this._sendStreamPayload(streamId, payload),
      onSubscribe: subscription => {
        this._subscriptions.set(streamId, subscription);
        subscription.request(frame.requestN);
      },
    });
  }

  _sendStreamComplete(streamId) {
    this._subscriptions.delete(streamId);
    this._connection.sendOne({
      data: null,
      flags: _RSocketFrame.FLAGS.COMPLETE,
      metadata: null,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
    });
  }

  _sendStreamError(streamId, errorMessage) {
    this._subscriptions.delete(streamId);
    this._connection.sendOne({
      code: _RSocketFrame.ERROR_CODES.APPLICATION_ERROR,
      flags: 0,
      message: errorMessage,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.ERROR,
    });
  }

  _sendStreamPayload(streamId, payload, complete = false) {
    let flags = _RSocketFrame.FLAGS.NEXT;
    if (complete) {
      // eslint-disable-next-line no-bitwise
      flags |= _RSocketFrame.FLAGS.COMPLETE;
      this._subscriptions.delete(streamId);
    }
    const data = this._serializers.data.serialize(payload.data);
    const metadata = this._serializers.metadata.serialize(payload.metadata);
    this._connection.sendOne({
      data,
      flags,
      metadata,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
    });
  }

  _deserializePayload(frame) {
    return deserializePayload(this._serializers, frame);
  }

  /**
     * Handle an error specific to a stream.
     */
  _handleStreamError(streamId, error) {
    const receiver = this._receivers.get(streamId);
    if (receiver != null) {
      this._receivers.delete(streamId);
      receiver.onError(error);
    }
  }
}

function deserializePayload(serializers, frame) {
  return {
    data: serializers.data.deserialize(frame.data),
    metadata: serializers.metadata.deserialize(frame.metadata),
  };
}

},{"rsocket-flowable":"node_modules/rsocket-flowable/build/index.js","fbjs/lib/emptyFunction":"node_modules/fbjs/lib/emptyFunction.js","fbjs/lib/invariant":"node_modules/fbjs/lib/invariant.js","fbjs/lib/warning":"node_modules/fbjs/lib/warning.js","./RSocketFrame":"node_modules/rsocket-core/build/RSocketFrame.js","./RSocketSerialization":"node_modules/rsocket-core/build/RSocketSerialization.js","./RSocketLease":"node_modules/rsocket-core/build/RSocketLease.js"}],"node_modules/rsocket-core/build/RSocketClient.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});

var _rsocketFlowable = require('rsocket-flowable');
var _invariant = require('fbjs/lib/invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = require('./RSocketFrame');
var _RSocketVersion = require('./RSocketVersion');
var _RSocketMachine = require('./RSocketMachine');
var _RSocketLease = require('./RSocketLease');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                             * RSocketClient: A client in an RSocket connection that will communicates with
                                                                                                                                             * the peer via the given transport client. Provides methods for establishing a
                                                                                                                                             * connection and initiating the RSocket interactions:
                                                                                                                                             * - fireAndForget()
                                                                                                                                             * - requestResponse()
                                                                                                                                             * - requestStream()
                                                                                                                                             * - requestChannel()
                                                                                                                                             * - metadataPush()
                                                                                                                                             */
class RSocketClient {
  constructor(config) {
    this._cancel = null;
    this._config = config;
    this._connection = null;
    this._socket = null;
  }

  close() {
    this._config.transport.close();
  }

  connect() {
    (0, _invariant2.default)(
      !this._connection,
      'RSocketClient: Unexpected call to connect(), already connected.'
    );

    this._connection = new _rsocketFlowable.Single(subscriber => {
      const transport = this._config.transport;
      let subscription;
      transport.connectionStatus().subscribe({
        onNext: status => {
          if (status.kind === 'CONNECTED') {
            subscription && subscription.cancel();
            subscriber.onComplete(
              new RSocketClientSocket(this._config, transport)
            );
          } else if (status.kind === 'ERROR') {
            subscription && subscription.cancel();
            subscriber.onError(status.error);
          } else if (status.kind === 'CLOSED') {
            subscription && subscription.cancel();
            subscriber.onError(new Error('RSocketClient: Connection closed.'));
          }
        },
        onSubscribe: _subscription => {
          subscriber.onSubscribe(() => _subscription.cancel());
          subscription = _subscription;
          subscription.request(Number.MAX_SAFE_INTEGER);
        },
      });

      transport.connect();
    });
    return this._connection;
  }
}
exports.default = RSocketClient;

/**
                                      * @private
                                      */
class RSocketClientSocket {
  constructor(config, connection) {
    let requesterLeaseHandler;
    let responderLeaseHandler;

    const leasesSupplier = config.leases;
    if (leasesSupplier) {
      const lease = leasesSupplier();
      requesterLeaseHandler = new _RSocketLease.RequesterLeaseHandler(
        lease._receiver
      );
      responderLeaseHandler = new _RSocketLease.ResponderLeaseHandler(
        lease._sender,
        lease._stats
      );
    }
    this._machine = (0, _RSocketMachine.createClientMachine)(
      connection,
      subscriber => connection.receive().subscribe(subscriber),
      config.serializers,
      config.responder,
      requesterLeaseHandler,
      responderLeaseHandler
    );

    // Send SETUP
    connection.sendOne(this._buildSetupFrame(config));

    // Send KEEPALIVE frames
    const {keepAlive} = config.setup;
    const navigator = config.navigator;
    if (
      keepAlive > 30000 &&
      navigator &&
      navigator.userAgent &&
      (navigator.userAgent.includes('Trident') ||
        navigator.userAgent.includes('Edg'))
    ) {
      console.warn(
        'rsocket-js: Due to a browser bug, Internet Explorer and Edge users may experience WebSocket instability with keepAlive values longer than 30 seconds.'
      );
    }
    const keepAliveFrames = (0, _rsocketFlowable.every)(keepAlive).map(() => ({
      data: null,
      flags: _RSocketFrame.FLAGS.RESPOND,
      lastReceivedPosition: 0,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.KEEPALIVE,
    }));

    connection.send(keepAliveFrames);
  }

  fireAndForget(payload) {
    this._machine.fireAndForget(payload);
  }

  requestResponse(payload) {
    return this._machine.requestResponse(payload);
  }

  requestStream(payload) {
    return this._machine.requestStream(payload);
  }

  requestChannel(payloads) {
    return this._machine.requestChannel(payloads);
  }

  metadataPush(payload) {
    return this._machine.metadataPush(payload);
  }

  close() {
    this._machine.close();
  }

  connectionStatus() {
    return this._machine.connectionStatus();
  }

  availability() {
    return this._machine.availability();
  }

  _buildSetupFrame(config) {
    const {
      dataMimeType,
      keepAlive,
      lifetime,
      metadata,
      metadataMimeType,
      data,
    } = config.setup;

    let flags = 0;
    if (metadata !== undefined) {
      flags |= _RSocketFrame.FLAGS.METADATA;
    }
    return {
      data,
      dataMimeType,
      flags: flags | (config.leases ? _RSocketFrame.FLAGS.LEASE : 0),
      keepAlive,
      lifetime,
      majorVersion: _RSocketVersion.MAJOR_VERSION,
      metadata,
      metadataMimeType,
      minorVersion: _RSocketVersion.MINOR_VERSION,
      resumeToken: null,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.SETUP,
    };
  }
}

},{"rsocket-flowable":"node_modules/rsocket-flowable/build/index.js","fbjs/lib/invariant":"node_modules/fbjs/lib/invariant.js","./RSocketFrame":"node_modules/rsocket-core/build/RSocketFrame.js","./RSocketVersion":"node_modules/rsocket-core/build/RSocketVersion.js","./RSocketMachine":"node_modules/rsocket-core/build/RSocketMachine.js","./RSocketLease":"node_modules/rsocket-core/build/RSocketLease.js"}],"node_modules/rsocket-core/build/RSocketServer.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});

var _rsocketFlowable = require('rsocket-flowable');
var _invariant = require('fbjs/lib/invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = require('./RSocketFrame');

var _RSocketSerialization = require('./RSocketSerialization');
var _RSocketMachine = require('./RSocketMachine');
var _RSocketLease = require('./RSocketLease');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                             * RSocketServer: A server in an RSocket connection that accepts connections
                                                                                                                                             * from peers via the given transport server.
                                                                                                                                             */
class RSocketServer {
  constructor(config) {
    this._handleTransportComplete = () => {
      this._handleTransportError(
        new Error('RSocketServer: Connection closed unexpectedly.')
      );
    };
    this._handleTransportError = error => {
      this._connections.forEach(connection => {
        // TODO: Allow passing in error
        connection.close();
      });
    };
    this._handleTransportConnection = connection => {
      const swapper = new SubscriberSwapper();
      let subscription;
      connection.receive().subscribe(
        swapper.swap({
          onError: error => console.error(error),
          onNext: frame => {
            switch (frame.type) {
              case _RSocketFrame.FRAME_TYPES.RESUME:
                connection.sendOne({
                  code: _RSocketFrame.ERROR_CODES.REJECTED_RESUME,
                  flags: 0,
                  message: 'RSocketServer: RESUME not supported.',
                  streamId: _RSocketFrame.CONNECTION_STREAM_ID,
                  type: _RSocketFrame.FRAME_TYPES.ERROR,
                });

                connection.close();
                break;
              case _RSocketFrame.FRAME_TYPES.SETUP:
                if (this._setupLeaseError(frame)) {
                  connection.sendOne({
                    code: _RSocketFrame.ERROR_CODES.INVALID_SETUP,
                    flags: 0,
                    message: 'RSocketServer: LEASE not supported.',
                    streamId: _RSocketFrame.CONNECTION_STREAM_ID,
                    type: _RSocketFrame.FRAME_TYPES.ERROR,
                  });

                  connection.close();
                  break;
                }
                const serializers = this._getSerializers();

                let requesterLeaseHandler;
                let responderLeaseHandler;

                const leasesSupplier = this._config.leases;
                if (leasesSupplier) {
                  const lease = leasesSupplier();
                  requesterLeaseHandler = new _RSocketLease.RequesterLeaseHandler(
                    lease._receiver
                  );

                  responderLeaseHandler = new _RSocketLease.ResponderLeaseHandler(
                    lease._sender,
                    lease._stats
                  );
                }
                const serverMachine = (0, _RSocketMachine.createServerMachine)(
                  connection,
                  subscriber => {
                    swapper.swap(subscriber);
                  },
                  serializers,
                  requesterLeaseHandler,
                  responderLeaseHandler
                );

                try {
                  const requestHandler = this._config.getRequestHandler(
                    serverMachine,
                    deserializePayload(serializers, frame)
                  );

                  serverMachine.setRequestHandler(requestHandler);
                  this._connections.add(serverMachine);
                } catch (error) {
                  connection.sendOne({
                    code: _RSocketFrame.ERROR_CODES.REJECTED_SETUP,
                    flags: 0,
                    message: 'Application rejected setup, reason: ' +
                      error.message,
                    streamId: _RSocketFrame.CONNECTION_STREAM_ID,
                    type: _RSocketFrame.FRAME_TYPES.ERROR,
                  });

                  connection.close();
                }

                // TODO(blom): We should subscribe to connection status
                // so we can remove the connection when it goes away
                break;
              default:
                (0, _invariant2.default)(
                  false,
                  'RSocketServer: Expected first frame to be SETUP or RESUME, ' +
                    'got `%s`.',
                  (0, _RSocketFrame.getFrameTypeName)(frame.type)
                );
            }
          },
          onSubscribe: _subscription => {
            subscription = _subscription;
            subscription.request(1);
          },
        })
      );
    };
    this._config = config;
    this._connections = new Set();
    this._started = false;
    this._subscription = null;
  }
  start() {
    (0, _invariant2.default)(
      !this._started,
      'RSocketServer: Unexpected call to start(), already started.'
    );
    this._started = true;
    this._config.transport.start().subscribe({
      onComplete: this._handleTransportComplete,
      onError: this._handleTransportError,
      onNext: this._handleTransportConnection,
      onSubscribe: subscription => {
        this._subscription = subscription;
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }
  stop() {
    if (this._subscription) {
      this._subscription.cancel();
    }
    this._config.transport.stop();
    this._handleTransportError(
      new Error('RSocketServer: Connection terminated via stop().')
    );
  }

  _getSerializers() {
    return this._config.serializers ||
      _RSocketSerialization.IdentitySerializers;
  }

  _setupLeaseError(frame) {
    const clientLeaseEnabled = (frame.flags & _RSocketFrame.FLAGS.LEASE) ===
      _RSocketFrame.FLAGS.LEASE;
    const serverLeaseEnabled = this._config.leases;
    return clientLeaseEnabled && !serverLeaseEnabled;
  }
}
exports.default = RSocketServer;

class SubscriberSwapper {
  constructor(target) {
    this._target = target;
  }

  swap(next) {
    this._target = next;
    if (this._subscription) {
      this._target.onSubscribe && this._target.onSubscribe(this._subscription);
    }
    return this;
  }

  onComplete() {
    (0, _invariant2.default)(this._target, 'must have target');
    this._target.onComplete && this._target.onComplete();
  }
  onError(error) {
    (0, _invariant2.default)(this._target, 'must have target');
    this._target.onError && this._target.onError(error);
  }
  onNext(value) {
    (0, _invariant2.default)(this._target, 'must have target');
    this._target.onNext && this._target.onNext(value);
  }
  onSubscribe(subscription) {
    (0, _invariant2.default)(this._target, 'must have target');
    this._subscription = subscription;
    this._target.onSubscribe && this._target.onSubscribe(subscription);
  }
}

function deserializePayload(serializers, frame) {
  return {
    data: serializers.data.deserialize(frame.data),
    metadata: serializers.metadata.deserialize(frame.metadata),
  };
}

},{"rsocket-flowable":"node_modules/rsocket-flowable/build/index.js","fbjs/lib/invariant":"node_modules/fbjs/lib/invariant.js","./RSocketFrame":"node_modules/rsocket-core/build/RSocketFrame.js","./RSocketSerialization":"node_modules/rsocket-core/build/RSocketSerialization.js","./RSocketMachine":"node_modules/rsocket-core/build/RSocketMachine.js","./RSocketLease":"node_modules/rsocket-core/build/RSocketLease.js"}],"node_modules/rsocket-types/build/ReactiveSocketTypes.js":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true,
}); /** Copyright (c) Facebook, Inc. and its affiliates.
                                                                                 *
                                                                                 * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                 * you may not use this file except in compliance with the License.
                                                                                 * You may obtain a copy of the License at
                                                                                 *
                                                                                 *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                 *
                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                 * See the License for the specific language governing permissions and
                                                                                 * limitations under the License.
                                                                                 *
                                                                                 * 
                                                                                 */

/**
                                                                             * Represents a network connection with input/output used by a ReactiveSocket to
                                                                             * send/receive data.
                                                                             */ const CONNECTION_STATUS = (exports.CONNECTION_STATUS = {
  CLOSED: Object.freeze({kind: 'CLOSED'}),
  CONNECTED: Object.freeze({kind: 'CONNECTED'}),
  CONNECTING: Object.freeze({kind: 'CONNECTING'}),
  NOT_CONNECTED: Object.freeze({kind: 'NOT_CONNECTED'}),
}); /**
                                                                  * Describes the connection status of a ReactiveSocket/DuplexConnection.
                                                                  * - NOT_CONNECTED: no connection established or pending.
                                                                  * - CONNECTING: when `connect()` has been called but a connection is not yet
                                                                  *   established.
                                                                  * - CONNECTED: when a connection is established.
                                                                  * - CLOSED: when the connection has been explicitly closed via `close()`.
                                                                  * - ERROR: when the connection has been closed for any other reason.
                                                                  */ /**
                                                                      * A contract providing different interaction models per the [ReactiveSocket protocol]
                                                                      (https://github.com/ReactiveSocket/reactivesocket/blob/master/Protocol.md).
                                                                      */ /**
                                                                          * A single unit of data exchanged between the peers of a `ReactiveSocket`.
                                                                          */

/**
                                                              * A type that can be written to a buffer.
                                                              */

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

},{}],"node_modules/rsocket-types/build/ReactiveStreamTypes.js":[function(require,module,exports) {
'use strict';

},{}],"node_modules/rsocket-types/build/index.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var _ReactiveSocketTypes = require('./ReactiveSocketTypes');

Object.keys(_ReactiveSocketTypes).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function() {
      return _ReactiveSocketTypes[key];
    },
  });
});
var _ReactiveStreamTypes = require('./ReactiveStreamTypes');

Object.keys(_ReactiveStreamTypes).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function() {
      return _ReactiveStreamTypes[key];
    },
  });
});

},{"./ReactiveSocketTypes":"node_modules/rsocket-types/build/ReactiveSocketTypes.js","./ReactiveStreamTypes":"node_modules/rsocket-types/build/ReactiveStreamTypes.js"}],"node_modules/rsocket-core/build/RSocketResumableTransport.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});

var _rsocketFlowable = require('rsocket-flowable');
var _invariant = require('fbjs/lib/invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = require('./RSocketFrame');

var _rsocketTypes = require('rsocket-types');

var _RSocketBinaryFraming = require('./RSocketBinaryFraming');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                             * NOTE: This implementation conforms to an upcoming version of the RSocket protocol
                                                                                                                                                             *       and will not work with version 1.0 servers.
                                                                                                                                                             *
                                                                                                                                                             * An implementation of the DuplexConnection interface that supports automatic
                                                                                                                                                             * resumption per the RSocket protocol.
                                                                                                                                                             *
                                                                                                                                                             * # Example
                                                                                                                                                             *
                                                                                                                                                             * Create a client instance:
                                                                                                                                                             * ```
                                                                                                                                                             * const client = new RSocketClient({
                                                                                                                                                             *   ...,
                                                                                                                                                             *   transport: new RSocketResumableTransport(
                                                                                                                                                             *     () => new RSocketWebSocketClient(...), // provider for low-level transport instances
                                                                                                                                                             *     {
                                                                                                                                                             *       bufferSize: 10, // max number of sent & pending frames to buffer before failing
                                                                                                                                                             *       resumeToken: 'abc123', // string to uniquely identify the session across connections
                                                                                                                                                             *     }
                                                                                                                                                             *   ),
                                                                                                                                                             * })
                                                                                                                                                             *
                                                                                                                                                             * Open the connection. After this if the connection dies it will be auto-resumed:
                                                                                                                                                             * ```
                                                                                                                                                             * client.connect().subscribe(...);
                                                                                                                                                             * ```
                                                                                                                                                             *
                                                                                                                                                             * Optionally, subscribe to the status of the connection:
                                                                                                                                                             * ```
                                                                                                                                                             * client.connectionStatus().subscribe(...);
                                                                                                                                                             * ```
                                                                                                                                                             *
                                                                                                                                                             * # Implementation Notes
                                                                                                                                                             *
                                                                                                                                                             * This transport maintains:
                                                                                                                                                             * - _currentConnection: a current low-level transport, which is null when not
                                                                                                                                                             *   connected
                                                                                                                                                             * - _sentFrames: a buffer of frames written to a low-level transport (which
                                                                                                                                                             *   may or may not have been received by the server)
                                                                                                                                                             * - _pendingFrames: a buffer of frames not yet written to the low-level
                                                                                                                                                             *   connection, because they were sent while not connected.
                                                                                                                                                             *
                                                                                                                                                             * The initial connection is simple: connect using the low-level transport and
                                                                                                                                                             * flush any _pendingFrames (write them and add them to _sentFrames).
                                                                                                                                                             *
                                                                                                                                                             * Thereafter if the low-level transport drops, this transport attempts resumption.
                                                                                                                                                             * It obtains a fresh low-level transport from the given transport `source`
                                                                                                                                                             * and attempts to connect. Once connected, it sends a RESUME frame and waits.
                                                                                                                                                             * If RESUME_OK is received, _sentFrames and _pendingFrames are adjusted such
                                                                                                                                                             * that:
                                                                                                                                                             * - any frames the server has received are removed from _sentFrames
                                                                                                                                                             * - the remaining frames are merged (in correct order) into _pendingFrames
                                                                                                                                                             *
                                                                                                                                                             * Then the connection proceeds as above, where all pending frames are flushed.
                                                                                                                                                             * If anything other than RESUME_OK is received, resumption is considered to
                                                                                                                                                             * have failed and the connection is set to the ERROR status.
                                                                                                                                                             */
class RSocketResumableTransport {
  constructor(source, options, encoders) {
    (0, _invariant2.default)(
      options.bufferSize >= 0,
      'RSocketResumableTransport: bufferSize option must be >= 0, got `%s`.',
      options.bufferSize
    );

    this._encoders = encoders;
    this._bufferSize = options.bufferSize;
    this._sentFramesSize = 0;
    this._position = {
      client: 0,
      server: 0,
    };

    this._currentConnection = null;
    this._statusSubscription = null;
    this._receiveSubscription = null;
    this._receivers = new Set();
    this._resumeToken = options.resumeToken;
    this._sessionTimeoutMillis = options.sessionDurationSeconds * 1000;
    this._sessionTimeoutHandle = null;
    this._senders = new Set();
    this._sentFrames = [];
    this._setupFrame = null;
    this._source = source;
    this._status = _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED;
    this._statusSubscribers = new Set();
  }

  close() {
    this._close();
  }

  connect() {
    (0, _invariant2.default)(
      !this._isTerminated(),
      'RSocketResumableTransport: Cannot connect(), connection terminated (%s: %s).',
      this._status.kind,
      this._status.kind === 'ERROR' ? this._status.error.message : 'no message'
    );

    try {
      this._disconnect();
      this._currentConnection = null;
      this._receiveSubscription = null;
      this._statusSubscription = null;
      this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTING);
      const connection = this._source();
      connection.connectionStatus().subscribe({
        onNext: status => {
          if (status.kind === this._status.kind) {
            return;
          }
          if (status.kind === 'CONNECTED') {
            if (this._sessionTimeoutHandle) {
              clearTimeout(this._sessionTimeoutHandle);
              this._sessionTimeoutHandle = null;
            }
            //Setup
            if (this._setupFrame == null) {
              this._handleConnected(connection);
              //Resume
            } else {
              this._handleResume(connection);
            }
          } else if (this._isTerminationStatus(status)) {
            if (!this._sessionTimeoutHandle) {
              this._sessionTimeoutHandle = setTimeout(
                () => this._close(this._resumeTimeoutError()),
                this._sessionTimeoutMillis
              );
            }
            this._disconnect();
            this._setConnectionStatus(
              _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED
            );
          }
        },
        onSubscribe: subscription => {
          this._statusSubscription = subscription;
          subscription.request(Number.MAX_SAFE_INTEGER);
        },
      });

      connection.connect();
    } catch (error) {
      this._close(error);
    }
  }

  connectionStatus() {
    return new _rsocketFlowable.Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: () => {
          this._statusSubscribers.delete(subscriber);
        },
        request: () => {
          this._statusSubscribers.add(subscriber);
          subscriber.onNext(this._status);
        },
      });
    });
  }

  receive() {
    return new _rsocketFlowable.Flowable(subject => {
      let added = false;
      subject.onSubscribe({
        cancel: () => {
          this._receivers.delete(subject);
        },
        request: () => {
          if (!added) {
            added = true;
            this._receivers.add(subject);
          }
        },
      });
    });
  }

  sendOne(frame) {
    try {
      this._writeFrame(frame);
    } catch (error) {
      this._close(error);
    }
  }

  send(frames) {
    let subscription;
    frames.subscribe({
      onComplete: () => {
        subscription && this._senders.delete(subscription);
      },
      onError: error => {
        subscription && this._senders.delete(subscription);
        this._close(error);
      },
      onNext: frame => this._writeFrame(frame),
      onSubscribe: _subscription => {
        subscription = _subscription;
        this._senders.add(subscription);
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }

  _close(error) {
    if (this._isTerminated()) {
      return;
    }
    if (error) {
      this._setConnectionStatus({error, kind: 'ERROR'});
    } else {
      this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CLOSED);
    }
    const receivers = this._receivers;
    receivers.forEach(r => r.onComplete());
    receivers.clear();

    const senders = this._senders;
    senders.forEach(s => s.cancel());
    senders.clear();
    this._sentFrames.length = 0;

    this._disconnect();
  }

  _disconnect() {
    if (this._statusSubscription) {
      this._statusSubscription.cancel();
      this._statusSubscription = null;
    }
    if (this._receiveSubscription) {
      this._receiveSubscription.cancel();
      this._receiveSubscription = null;
    }
    if (this._currentConnection) {
      this._currentConnection.close();
      this._currentConnection = null;
    }
  }

  _handleConnected(connection) {
    this._currentConnection = connection;
    this._flushFrames();
    this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTED);
    connection.receive().subscribe({
      onNext: frame => {
        try {
          this._receiveFrame(frame);
        } catch (error) {
          this._close(error);
        }
      },
      onSubscribe: subscription => {
        this._receiveSubscription = subscription;
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }

  _handleResume(connection) {
    connection.receive().take(1).subscribe({
      onNext: frame => {
        try {
          if (frame.type === _RSocketFrame.FRAME_TYPES.RESUME_OK) {
            const {clientPosition} = frame;
            // clientPosition indicates which frames the server is missing:
            // - anything after that still needs to be sent
            // - anything before that can be discarded
            if (clientPosition < this._position.client) {
              // Invalid RESUME_OK frame: server asked for an older
              // client frame than is available
              this._close(this._nonResumableStateError());
              return;
            }
            // remove tail frames of total length = remoteImpliedPos-localPos
            let removeSize = clientPosition - this._position.client;
            let index = 0;
            while (removeSize > 0) {
              const frameSize = this._onReleasedTailFrame(
                this._sentFrames[index]
              );

              if (!frameSize) {
                this._close(this._absentLengthError(frame));
                return;
              }
              removeSize -= frameSize;
              index++;
            }
            if (removeSize !== 0) {
              this._close(this._inconsistentImpliedPositionError());
              return;
            }
            // Drop sent frames that the server has received
            if (index > 0) {
              this._sentFrames.splice(0, index);
            }
            // Continue connecting, which will flush pending frames
            this._handleConnected(connection);
          } else {
            const error = frame.type === _RSocketFrame.FRAME_TYPES.ERROR
              ? (0, _RSocketFrame.createErrorFromFrame)(frame)
              : new Error(
                  'RSocketResumableTransport: Resumption failed for an ' +
                    'unspecified reason.'
                );

            this._close(error);
          }
        } catch (error) {
          this._close(error);
        }
      },
      onSubscribe: subscription => {
        this._receiveSubscription = subscription;
        subscription.request(1);
      },
    });

    const setupFrame = this._setupFrame;
    (0, _invariant2.default)(
      setupFrame,
      'RSocketResumableTransport: Cannot resume, setup frame has not been sent.'
    );

    connection.sendOne({
      clientPosition: this._position.client,
      flags: 0,
      majorVersion: setupFrame.majorVersion,
      minorVersion: setupFrame.minorVersion,
      resumeToken: this._resumeToken,
      serverPosition: this._position.server,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.RESUME,
    });
  }

  _absentLengthError(frame) {
    return new Error(
      'RSocketResumableTransport: absent frame.length for type ' + frame.type
    );
  }

  _inconsistentImpliedPositionError() {
    return new Error(
      'RSocketResumableTransport: local frames are inconsistent with remote implied position'
    );
  }

  _nonResumableStateError() {
    return new Error(
      'RSocketResumableTransport: resumption failed, server is ' +
        'missing frames that are no longer in the client buffer.'
    );
  }

  _resumeTimeoutError() {
    return new Error('RSocketResumableTransport: resumable session timed out');
  }

  _isTerminated() {
    return this._isTerminationStatus(this._status);
  }

  _isTerminationStatus(status) {
    const kind = status.kind;
    return kind === 'CLOSED' || kind === 'ERROR';
  }

  _setConnectionStatus(status) {
    if (status.kind === this._status.kind) {
      return;
    }
    this._status = status;
    this._statusSubscribers.forEach(subscriber => subscriber.onNext(status));
  }

  _receiveFrame(frame) {
    if ((0, _RSocketFrame.isResumePositionFrameType)(frame.type)) {
      this._position.server += frame.length;
    }
    // TODO: trim _sentFrames on KEEPALIVE frame
    this._receivers.forEach(subscriber => subscriber.onNext(frame));
  }

  _flushFrames() {
    this._sentFrames.forEach(frame => {
      const connection = this._currentConnection;
      if (connection) {
        connection.sendOne(frame);
      }
    });
  }

  _onReleasedTailFrame(frame) {
    const removedFrameSize = frame.length;
    if (removedFrameSize) {
      this._sentFramesSize -= removedFrameSize;
      this._position.client += removedFrameSize;
      return removedFrameSize;
    }
  }

  _writeFrame(frame) {
    // Ensure that SETUP frames contain the resume token
    if (frame.type === _RSocketFrame.FRAME_TYPES.SETUP) {
      frame = Object.assign({}, frame, {
        flags: frame.flags | _RSocketFrame.FLAGS.RESUME_ENABLE, // eslint-disable-line no-bitwise
        resumeToken: this._resumeToken,
      });

      this._setupFrame = frame; // frame can only be a SetupFrame
    }
    frame.length = (0, _RSocketBinaryFraming.sizeOfFrame)(
      frame,
      this._encoders
    );
    // If connected, immediately write frames to the low-level transport
    // and consider them "sent". The resumption protocol will figure out
    // which frames may not have been received and recover.
    if ((0, _RSocketFrame.isResumePositionFrameType)(frame.type)) {
      let available = this._bufferSize - this._sentFramesSize;
      const frameSize = frame.length;
      if (frameSize) {
        // remove tail until there is space for new frame
        while (available < frameSize) {
          const removedFrame = this._sentFrames.shift();
          if (removedFrame) {
            const removedFrameSize = this._onReleasedTailFrame(removedFrame);
            if (!removedFrameSize) {
              this._close(this._absentLengthError(frame));
              return;
            }
            available += removedFrameSize;
          } else {
            break;
          }
        }
        if (available >= frameSize) {
          this._sentFrames.push(frame);
          this._sentFramesSize += frameSize;
        } else {
          this._position.client += frameSize;
        }
      } else {
        this._close(this._absentLengthError(frame));
        return;
      }
    }
    const currentConnection = this._currentConnection;
    if (currentConnection) {
      currentConnection.sendOne(frame);
    }
  }
}
exports.default = RSocketResumableTransport;

},{"rsocket-flowable":"node_modules/rsocket-flowable/build/index.js","fbjs/lib/invariant":"node_modules/fbjs/lib/invariant.js","./RSocketFrame":"node_modules/rsocket-core/build/RSocketFrame.js","rsocket-types":"node_modules/rsocket-types/build/index.js","./RSocketBinaryFraming":"node_modules/rsocket-core/build/RSocketBinaryFraming.js"}],"node_modules/rsocket-core/build/index.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.Lease = (exports.Leases = (exports.JsonSerializers = (exports.JsonSerializer = (exports.IdentitySerializers = (exports.IdentitySerializer = (exports.UTF8Encoder = (exports.Utf8Encoders = (exports.BufferEncoder = (exports.BufferEncoders = (exports.writeUInt24BE = (exports.toBuffer = (exports.readUInt24BE = (exports.createBuffer = (exports.byteLength = (exports.serializeFrameWithLength = (exports.serializeFrame = (exports.deserializeFrames = (exports.deserializeFrameWithLength = (exports.deserializeFrame = (exports.printFrame = (exports.isResumeEnable = (exports.isRespond = (exports.isNext = (exports.isMetadata = (exports.isLease = (exports.isIgnore = (exports.isComplete = (exports.getErrorCodeExplanation = (exports.createErrorFromFrame = (exports.MAX_VERSION = (exports.MAX_STREAM_ID = (exports.MAX_RESUME_LENGTH = (exports.MAX_MIME_LENGTH = (exports.MAX_LIFETIME = (exports.MAX_KEEPALIVE = (exports.MAX_CODE = (exports.FRAME_TYPES = (exports.FRAME_TYPE_OFFFSET = (exports.FLAGS = (exports.FLAGS_MASK = (exports.ERROR_EXPLANATIONS = (exports.ERROR_CODES = (exports.CONNECTION_STREAM_ID = (exports.RSocketResumableTransport = (exports.RSocketServer = (exports.RSocketClient = undefined))))))))))))))))))))))))))))))))))))))))))))));
var _RSocketFrame = require('./RSocketFrame');
Object.defineProperty(exports, 'CONNECTION_STREAM_ID', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.CONNECTION_STREAM_ID;
  },
});
Object.defineProperty(exports, 'ERROR_CODES', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.ERROR_CODES;
  },
});
Object.defineProperty(exports, 'ERROR_EXPLANATIONS', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.ERROR_EXPLANATIONS;
  },
});
Object.defineProperty(exports, 'FLAGS_MASK', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FLAGS_MASK;
  },
});
Object.defineProperty(exports, 'FLAGS', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FLAGS;
  },
});
Object.defineProperty(exports, 'FRAME_TYPE_OFFFSET', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FRAME_TYPE_OFFFSET;
  },
});
Object.defineProperty(exports, 'FRAME_TYPES', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FRAME_TYPES;
  },
});
Object.defineProperty(exports, 'MAX_CODE', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_CODE;
  },
});
Object.defineProperty(exports, 'MAX_KEEPALIVE', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_KEEPALIVE;
  },
});
Object.defineProperty(exports, 'MAX_LIFETIME', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_LIFETIME;
  },
});
Object.defineProperty(exports, 'MAX_MIME_LENGTH', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_MIME_LENGTH;
  },
});
Object.defineProperty(exports, 'MAX_RESUME_LENGTH', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_RESUME_LENGTH;
  },
});
Object.defineProperty(exports, 'MAX_STREAM_ID', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_STREAM_ID;
  },
});
Object.defineProperty(exports, 'MAX_VERSION', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_VERSION;
  },
});
Object.defineProperty(exports, 'createErrorFromFrame', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.createErrorFromFrame;
  },
});
Object.defineProperty(exports, 'getErrorCodeExplanation', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.getErrorCodeExplanation;
  },
});
Object.defineProperty(exports, 'isComplete', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isComplete;
  },
});
Object.defineProperty(exports, 'isIgnore', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isIgnore;
  },
});
Object.defineProperty(exports, 'isLease', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isLease;
  },
});
Object.defineProperty(exports, 'isMetadata', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isMetadata;
  },
});
Object.defineProperty(exports, 'isNext', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isNext;
  },
});
Object.defineProperty(exports, 'isRespond', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isRespond;
  },
});
Object.defineProperty(exports, 'isResumeEnable', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isResumeEnable;
  },
});
Object.defineProperty(exports, 'printFrame', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.printFrame;
  },
});
var _RSocketBinaryFraming = require('./RSocketBinaryFraming');
Object.defineProperty(exports, 'deserializeFrame', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.deserializeFrame;
  },
});
Object.defineProperty(exports, 'deserializeFrameWithLength', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.deserializeFrameWithLength;
  },
});
Object.defineProperty(exports, 'deserializeFrames', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.deserializeFrames;
  },
});
Object.defineProperty(exports, 'serializeFrame', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.serializeFrame;
  },
});
Object.defineProperty(exports, 'serializeFrameWithLength', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.serializeFrameWithLength;
  },
});
var _RSocketBufferUtils = require('./RSocketBufferUtils');
Object.defineProperty(exports, 'byteLength', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.byteLength;
  },
});
Object.defineProperty(exports, 'createBuffer', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.createBuffer;
  },
});
Object.defineProperty(exports, 'readUInt24BE', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.readUInt24BE;
  },
});
Object.defineProperty(exports, 'toBuffer', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.toBuffer;
  },
});
Object.defineProperty(exports, 'writeUInt24BE', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.writeUInt24BE;
  },
});
var _RSocketEncoding = require('./RSocketEncoding');
Object.defineProperty(exports, 'BufferEncoders', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.BufferEncoders;
  },
});
Object.defineProperty(exports, 'BufferEncoder', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.BufferEncoder;
  },
});
Object.defineProperty(exports, 'Utf8Encoders', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.Utf8Encoders;
  },
});
Object.defineProperty(exports, 'UTF8Encoder', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.UTF8Encoder;
  },
});
var _RSocketSerialization = require('./RSocketSerialization');
Object.defineProperty(exports, 'IdentitySerializer', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.IdentitySerializer;
  },
});
Object.defineProperty(exports, 'IdentitySerializers', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.IdentitySerializers;
  },
});
Object.defineProperty(exports, 'JsonSerializer', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.JsonSerializer;
  },
});
Object.defineProperty(exports, 'JsonSerializers', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.JsonSerializers;
  },
});
var _RSocketLease = require('./RSocketLease');
Object.defineProperty(exports, 'Leases', {
  enumerable: true,
  get: function() {
    return _RSocketLease.Leases;
  },
});
Object.defineProperty(exports, 'Lease', {
  enumerable: true,
  get: function() {
    return _RSocketLease.Lease;
  },
});
var _RSocketClient = require('./RSocketClient');
var _RSocketClient2 = _interopRequireDefault(_RSocketClient);
var _RSocketServer = require('./RSocketServer');
var _RSocketServer2 = _interopRequireDefault(_RSocketServer);
var _RSocketResumableTransport = require('./RSocketResumableTransport');
var _RSocketResumableTransport2 = _interopRequireDefault(
  _RSocketResumableTransport
);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
exports.RSocketClient = _RSocketClient2.default;
exports.RSocketServer = _RSocketServer2.default;
exports.RSocketResumableTransport = _RSocketResumableTransport2.default;

},{"./RSocketFrame":"node_modules/rsocket-core/build/RSocketFrame.js","./RSocketBinaryFraming":"node_modules/rsocket-core/build/RSocketBinaryFraming.js","./RSocketBufferUtils":"node_modules/rsocket-core/build/RSocketBufferUtils.js","./RSocketEncoding":"node_modules/rsocket-core/build/RSocketEncoding.js","./RSocketSerialization":"node_modules/rsocket-core/build/RSocketSerialization.js","./RSocketLease":"node_modules/rsocket-core/build/RSocketLease.js","./RSocketClient":"node_modules/rsocket-core/build/RSocketClient.js","./RSocketServer":"node_modules/rsocket-core/build/RSocketServer.js","./RSocketResumableTransport":"node_modules/rsocket-core/build/RSocketResumableTransport.js"}],"node_modules/rsocket-websocket-client/build/RSocketWebSocketClient.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});

var _invariant = require('fbjs/lib/invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _rsocketFlowable = require('rsocket-flowable');
var _rsocketCore = require('rsocket-core');

var _rsocketTypes = require('rsocket-types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                            * A WebSocket transport client for use in browser environments.
                                                                                                                                            */
class RSocketWebSocketClient {
  constructor(options, encoders) {
    this._handleClosed = e => {
      this._close(
        new Error(
          e.reason || 'RSocketWebSocketClient: Socket closed unexpectedly.'
        )
      );
    };
    this._handleError = e => {
      this._close(e.error);
    };
    this._handleOpened = () => {
      this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTED);
    };
    this._handleMessage = message => {
      try {
        const frame = this._readFrame(message);
        this._receivers.forEach(subscriber => subscriber.onNext(frame));
      } catch (error) {
        this._close(error);
      }
    };
    this._encoders = encoders;
    this._options = options;
    this._receivers = new Set();
    this._senders = new Set();
    this._socket = null;
    this._status = _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED;
    this._statusSubscribers = new Set();
  }
  close() {
    this._close();
  }
  connect() {
    (0, _invariant2.default)(
      this._status.kind === 'NOT_CONNECTED',
      'RSocketWebSocketClient: Cannot connect(), a connection is already ' +
        'established.'
    );
    this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTING);
    const wsCreator = this._options.wsCreator;
    const url = this._options.url;
    this._socket = wsCreator ? wsCreator(url) : new WebSocket(url);
    const socket = this._socket;
    socket.binaryType = 'arraybuffer';
    socket.addEventListener('close', this._handleClosed);
    socket.addEventListener('error', this._handleError);
    socket.addEventListener('open', this._handleOpened);
    socket.addEventListener('message', this._handleMessage);
  }
  connectionStatus() {
    return new _rsocketFlowable.Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: () => {
          this._statusSubscribers.delete(subscriber);
        },
        request: () => {
          this._statusSubscribers.add(subscriber);
          subscriber.onNext(this._status);
        },
      });
    });
  }
  receive() {
    return new _rsocketFlowable.Flowable(subject => {
      subject.onSubscribe({
        cancel: () => {
          this._receivers.delete(subject);
        },
        request: () => {
          this._receivers.add(subject);
        },
      });
    });
  }
  sendOne(frame) {
    this._writeFrame(frame);
  }
  send(frames) {
    let subscription;
    frames.subscribe({
      onComplete: () => {
        subscription && this._senders.delete(subscription);
      },
      onError: error => {
        subscription && this._senders.delete(subscription);
        this._close(error);
      },
      onNext: frame => this._writeFrame(frame),
      onSubscribe: _subscription => {
        subscription = _subscription;
        this._senders.add(subscription);
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }
  _close(error) {
    if (this._status.kind === 'CLOSED' || this._status.kind === 'ERROR') {
      // already closed
      return;
    }
    const status = error
      ? {error, kind: 'ERROR'}
      : _rsocketTypes.CONNECTION_STATUS.CLOSED;
    this._setConnectionStatus(status);
    this._receivers.forEach(subscriber => {
      if (error) {
        subscriber.onError(error);
      } else {
        subscriber.onComplete();
      }
    });
    this._receivers.clear();
    this._senders.forEach(subscription => subscription.cancel());
    this._senders.clear();
    const socket = this._socket;
    if (socket) {
      socket.removeEventListener('close', this._handleClosed);
      socket.removeEventListener('error', this._handleClosed);
      socket.removeEventListener('open', this._handleOpened);
      socket.removeEventListener('message', this._handleMessage);
      socket.close();
      this._socket = null;
    }
  }
  _setConnectionStatus(status) {
    this._status = status;
    this._statusSubscribers.forEach(subscriber => subscriber.onNext(status));
  }
  _readFrame(message) {
    const buffer = (0, _rsocketCore.toBuffer)(message.data);
    const frame = this._options.lengthPrefixedFrames
      ? (0, _rsocketCore.deserializeFrameWithLength)(buffer, this._encoders)
      : (0, _rsocketCore.deserializeFrame)(buffer, this._encoders);
    if (false) {
      if (this._options.debug) {
        console.log(printFrame(frame));
      }
    }
    return frame;
  }

  _writeFrame(frame) {
    try {
      if (false) {
        if (this._options.debug) {
          console.log(printFrame(frame));
        }
      }
      const buffer = this._options.lengthPrefixedFrames
        ? (0, _rsocketCore.serializeFrameWithLength)(frame, this._encoders)
        : (0, _rsocketCore.serializeFrame)(frame, this._encoders);
      (0, _invariant2.default)(
        this._socket,
        'RSocketWebSocketClient: Cannot send frame, not connected.'
      );

      this._socket.send(buffer);
    } catch (error) {
      this._close(error);
    }
  }
}
exports.default = RSocketWebSocketClient;

},{"fbjs/lib/invariant":"node_modules/fbjs/lib/invariant.js","rsocket-flowable":"node_modules/rsocket-flowable/build/index.js","rsocket-core":"node_modules/rsocket-core/build/index.js","rsocket-types":"node_modules/rsocket-types/build/index.js"}],"node_modules/rsocket-websocket-client/build/index.js":[function(require,module,exports) {
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

'use strict';
Object.defineProperty(exports, '__esModule', {value: true});

var _RSocketWebSocketClient = require('./RSocketWebSocketClient');
var _RSocketWebSocketClient2 = _interopRequireDefault(_RSocketWebSocketClient);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
exports.default = _RSocketWebSocketClient2.default;

},{"./RSocketWebSocketClient":"node_modules/rsocket-websocket-client/build/RSocketWebSocketClient.js"}],"node_modules/@scalecube/utils/es/check.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNumber = exports.isNumber = exports.assertClass = exports.assertFunction = exports.isFunctionConstructor = exports.isFunction = exports.assertOneOf = exports.isOneOf = exports.assertNonEmptyObject = exports.assertObject = exports.isObject = exports.asserNotEmptytArray = exports.assertArray = exports.isNonEmptyArray = exports.isArray = exports.assertNonEmptyString = exports.assertString = exports.isString = exports.assertDefined = exports.isDefined = exports.assert = void 0;

const assert = (predicate, msg) => {
  if (!predicate) {
    throw new Error(msg);
  }
};

exports.assert = assert;

const isDefined = val => typeof val !== 'undefined';

exports.isDefined = isDefined;

const assertDefined = (val, msg = 'Expect to be defined') => {
  assert(isDefined(val), msg);
};

exports.assertDefined = assertDefined;

const isString = val => typeof val === 'string' || val instanceof String;

exports.isString = isString;

const assertString = (val, msg = 'Expected to be a string') => {
  assert(isDefined(val) && isString(val), msg);
};

exports.assertString = assertString;

const assertNonEmptyString = (val, msg = 'Expected to be non empty string') => {
  assertString(val, msg);
  assert(val.length > 0, msg);
};

exports.assertNonEmptyString = assertNonEmptyString;

const isArray = val => Array.isArray(val);

exports.isArray = isArray;

const isNonEmptyArray = val => isArray(val) && val.length > 0;

exports.isNonEmptyArray = isNonEmptyArray;

const assertArray = (val, msg = 'Expected to be an array') => {
  assert(isArray(val), msg);
};

exports.assertArray = assertArray;

const asserNotEmptytArray = (val, msg = 'Expected to be an array') => {
  assert(isNonEmptyArray(val), msg);
};

exports.asserNotEmptytArray = asserNotEmptytArray;

const isObject = val => Object.prototype.toString.call(val) === '[object Object]';

exports.isObject = isObject;

const assertObject = (val, msg = 'Expected to be an object') => {
  assert(isObject(val), msg);
};

exports.assertObject = assertObject;

const assertNonEmptyObject = (val, msg = 'Expected to be non empty object') => {
  assertObject(val, msg);
  assert(Object.keys(val).length > 0, msg);
};

exports.assertNonEmptyObject = assertNonEmptyObject;

const isOneOf = (collection, val) => {
  if (isArray(collection)) {
    return collection.includes(val);
  }

  if (isObject(collection)) {
    return Object.values(collection).includes(val);
  }

  return false;
};

exports.isOneOf = isOneOf;

const assertOneOf = (collection, val, msg = 'Expected to be one of the collection elements') => {
  assert(isOneOf(collection, val), msg);
};

exports.assertOneOf = assertOneOf;

const isFunction = val => typeof val === 'function' && !/^class\s/.test(Function.prototype.toString.call(val));

exports.isFunction = isFunction;

const isFunctionConstructor = val => typeof val === 'function' && /^class\s/.test(Function.prototype.toString.call(val));

exports.isFunctionConstructor = isFunctionConstructor;

const assertFunction = (val, msg = 'Expected to be a function') => {
  assert(isFunction(val), msg);
};

exports.assertFunction = assertFunction;

const assertClass = (val, msg = 'Expected to be a class') => {
  assert(isFunctionConstructor(val), msg);
};

exports.assertClass = assertClass;

const isNumber = val => typeof val === 'number' && !isNaN(val);

exports.isNumber = isNumber;

const assertNumber = (val, msg = 'Expected to be a number') => {
  assert(isNumber(val), msg);
};

exports.assertNumber = assertNumber;
},{}],"node_modules/@scalecube/utils/es/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInvalidAsyncModelError = exports.getAsynModelNotProvidedError = exports.getIncorrectMethodValueError = exports.getServiceNameInvalid = exports.INVALID_METHODS = exports.DEFINITION_MISSING_METHODS = exports.SERVICE_NAME_NOT_PROVIDED = exports.ASYNC_MODEL_TYPES = exports.NOT_VALID_PORT = exports.NOT_VALID_PATH = exports.NOT_VALID_HOST = exports.NOT_VALID_ADDRESS = exports.NOT_VALID_PROTOCOL = void 0;
const NOT_VALID_PROTOCOL = 'Not a valid protocol';
exports.NOT_VALID_PROTOCOL = NOT_VALID_PROTOCOL;
const NOT_VALID_ADDRESS = 'Address must be of type object';
exports.NOT_VALID_ADDRESS = NOT_VALID_ADDRESS;
const NOT_VALID_HOST = 'Not a valid host';
exports.NOT_VALID_HOST = NOT_VALID_HOST;
const NOT_VALID_PATH = 'Not a valid path';
exports.NOT_VALID_PATH = NOT_VALID_PATH;
const NOT_VALID_PORT = 'Not a valid port';
exports.NOT_VALID_PORT = NOT_VALID_PORT;
const ASYNC_MODEL_TYPES = {
  REQUEST_RESPONSE: 'requestResponse',
  REQUEST_STREAM: 'requestStream'
};
exports.ASYNC_MODEL_TYPES = ASYNC_MODEL_TYPES;
const SERVICE_NAME_NOT_PROVIDED = 'MS0020 - Invalid format, definition must contain valid serviceName';
exports.SERVICE_NAME_NOT_PROVIDED = SERVICE_NAME_NOT_PROVIDED;
const DEFINITION_MISSING_METHODS = 'MS0021 - Invalid format, definition must contain valid methods';
exports.DEFINITION_MISSING_METHODS = DEFINITION_MISSING_METHODS;
const INVALID_METHODS = 'MS0022 - Invalid format, definition must contain valid methods';
exports.INVALID_METHODS = INVALID_METHODS;

const getServiceNameInvalid = serviceName => `MS0023 - Invalid format, serviceName must be not empty string but received type ${typeof serviceName}`;

exports.getServiceNameInvalid = getServiceNameInvalid;

const getIncorrectMethodValueError = qualifier => `Method value for ${qualifier} definition should be non empty object`;

exports.getIncorrectMethodValueError = getIncorrectMethodValueError;

const getAsynModelNotProvidedError = qualifier => `Async model is not provided in service definition for ${qualifier}`;

exports.getAsynModelNotProvidedError = getAsynModelNotProvidedError;

const getInvalidAsyncModelError = qualifier => `Invalid async model in service definition for ${qualifier}`;

exports.getInvalidAsyncModelError = getInvalidAsyncModelError;
},{}],"node_modules/@scalecube/utils/es/address.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddress = exports.getFullAddress = exports.validateAddress = void 0;

var check = _interopRequireWildcard(require("./check"));

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const validateAddress = (address, isOptional = true) => {
  if (isOptional && typeof address === 'undefined') {
    return true;
  }

  check.assertNonEmptyObject(address, _constants.NOT_VALID_ADDRESS);
  const {
    host,
    path,
    protocol
  } = address;
  let {
    port
  } = address;
  port = check.isString(port) ? Number(port) : port;
  check.assertString(host, _constants.NOT_VALID_HOST);
  check.assertString(path, _constants.NOT_VALID_PATH);
  check.assertNumber(port, _constants.NOT_VALID_PORT);
  check.assertString(protocol, _constants.NOT_VALID_PROTOCOL);
  check.assert(check.isOneOf(['pm', 'ws', 'wss', 'tcp'], protocol), _constants.NOT_VALID_PROTOCOL);
  return true;
};
/**
 * address is <protocol>://<host>:<port>/<path>
 */


exports.validateAddress = validateAddress;

const getFullAddress = address => {
  validateAddress(address, false);
  const {
    host,
    path,
    port,
    protocol
  } = address;
  return `${protocol}://${host}:${port}/${path}`;
};

exports.getFullAddress = getFullAddress;

const getAddress = address => {
  const newAddress = {};
  address = buildAddress({
    key: 'protocol',
    optionalValue: 'pm',
    delimiter: '://',
    str: address,
    newAddress
  });
  address = buildAddress({
    key: 'host',
    optionalValue: 'defaultHost',
    delimiter: ':',
    str: address,
    newAddress
  });
  address = buildAddress({
    key: 'port',
    optionalValue: 8080,
    delimiter: '/',
    str: address,
    newAddress
  });
  newAddress.path = address;
  return newAddress;
};

exports.getAddress = getAddress;

const buildAddress = ({
  key,
  optionalValue,
  delimiter,
  newAddress,
  str
}) => {
  let [v1, rest] = str.split(delimiter);

  if (!rest) {
    rest = v1;
    v1 = optionalValue;
  }

  newAddress[key] = v1;
  return rest;
};
},{"./check":"node_modules/@scalecube/utils/es/check.js","./constants":"node_modules/@scalecube/utils/es/constants.js"}],"node_modules/@scalecube/utils/es/checkEnvironemnt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNodejs = void 0;

const isNodejs = () => {
  try {
    // common api for main threat or worker in the browser
    return !navigator;
  } catch (e) {
    return false;
  }
};

exports.isNodejs = isNodejs;
},{}],"node_modules/@scalecube/utils/es/connectWorkers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addIframe = exports.removeWorker = exports.addWorker = exports.initialize = void 0;

var _checkEnvironemnt = require("./checkEnvironemnt");

const workersMap = {};
const registeredIframes = {};
const iframes = [];
/**
 * check from which iframe the event arrived,
 * @param ev
 */

const registerIframe = ev => {
  iframes.some(iframe => {
    if (ev.source === iframe.contentWindow) {
      registeredIframes[ev.data.detail.whoAmI || ev.data.detail.origin] = iframe;
    }

    return ev.source === iframe.contentWindow;
  });
};

const initialize = () => {
  if (!(0, _checkEnvironemnt.isNodejs)()) {
    // @ts-ignore
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
      console.warn(`Don't use this on webworkers, only on the main thread`);
    } else {
      addEventListener('message', ev => {
        if (ev && ev.data && !ev.data.workerId) {
          ev.data.type === 'ConnectIframe' && registerIframe(ev);
          const detail = ev.data.detail;

          if (detail) {
            ev.data.workerId = 1;
            const propogateTo = workersMap[detail.to] || workersMap[detail.address]; // discoveryEvents || rsocketEvents

            if (propogateTo) {
              // @ts-ignore
              propogateTo.postMessage(ev.data, ev.ports);
            }

            const iframe = registeredIframes[detail.to] || registeredIframes[detail.address];

            if (iframe) {
              iframe.contentWindow.postMessage(ev.data, '*', ev.ports);
            }
          }
        }
      });
    }
  }
};

exports.initialize = initialize;

function workerEventHandler(ev) {
  if (ev.data && ev.data.detail && ev.data.type) {
    const detail = ev.data.detail;

    if (!ev.data.workerId) {
      ev.data.workerId = 1;

      if (ev.data.type === 'ConnectWorkerEvent') {
        if (detail.whoAmI) {
          // @ts-ignore
          workersMap[detail.whoAmI] = this;
        }
      } else {
        const propogateTo = workersMap[detail.to] || workersMap[detail.address]; // discoveryEvents || rsocketEvents

        if (propogateTo) {
          // @ts-ignore
          propogateTo.postMessage(ev.data, ev.ports);
        } else {
          // @ts-ignore
          postMessage(ev.data, '*', ev.ports);
        }
      }
    }
  }
}

const addWorker = worker => {
  worker.addEventListener('message', workerEventHandler.bind(worker));
};

exports.addWorker = addWorker;

const removeWorker = worker => {
  worker.removeEventListener('message', workerEventHandler.bind(worker));
};

exports.removeWorker = removeWorker;

const addIframe = iframe => {
  iframes.push(iframe);
};

exports.addIframe = addIframe;
},{"./checkEnvironemnt":"node_modules/@scalecube/utils/es/checkEnvironemnt.js"}],"node_modules/@scalecube/utils/es/logs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveToLogs = void 0;
const colorsMap = {};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const saveToLogs = (identifier, msg, extra, debug, type = 'log') => {
  if (!colorsMap[identifier]) {
    colorsMap[identifier] = getRandomColor();
  } // tslint:disable


  if (debug) {
    const logColor = `color:${colorsMap[identifier]}`;
    extra && console[type](`%c******** address: ${identifier}********`, logColor);
    console[type](msg);
    extra && Object.keys(extra).forEach(key => {
      if (Array.isArray(extra[key])) {
        Object.values(extra[key]).forEach(props => {
          console[type](`${key}: ${JSON.stringify(props.qualifier || props, null, 2)}`);
        });
      } else {
        console[type](`${key}: ${JSON.stringify(extra[key], null, 2)}`);
      }
    });
  } // tslint:enable

};

exports.saveToLogs = saveToLogs;
},{}],"node_modules/@scalecube/utils/es/qualifier.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQualifier = void 0;

const getQualifier = ({
  serviceName,
  methodName
}) => `${serviceName}/${methodName}`;

exports.getQualifier = getQualifier;
},{}],"node_modules/@scalecube/utils/es/serviceDefinition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAsyncModel = exports.validateServiceDefinition = void 0;

var check = _interopRequireWildcard(require("./check"));

var _qualifier = require("./qualifier");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const validateServiceDefinition = definition => {
  check.assertNonEmptyObject(definition);
  const {
    serviceName,
    methods
  } = definition;
  check.assertDefined(serviceName, _constants.SERVICE_NAME_NOT_PROVIDED);
  check.assertNonEmptyString(serviceName, (0, _constants.getServiceNameInvalid)(serviceName));
  check.assertDefined(methods, _constants.DEFINITION_MISSING_METHODS);
  check.assertNonEmptyObject(methods, _constants.INVALID_METHODS);
  Object.keys(methods).forEach(methodName => {
    check.assertNonEmptyString(methodName);
    const qualifier = (0, _qualifier.getQualifier)({
      serviceName,
      methodName
    });
    validateAsyncModel(qualifier, methods[methodName]);
  });
};

exports.validateServiceDefinition = validateServiceDefinition;

const validateAsyncModel = (qualifier, val) => {
  check.assertNonEmptyObject(val, (0, _constants.getIncorrectMethodValueError)(qualifier));
  const {
    asyncModel
  } = val;
  check.assertDefined(asyncModel, (0, _constants.getAsynModelNotProvidedError)(qualifier));
  check.assertOneOf(_constants.ASYNC_MODEL_TYPES, asyncModel, (0, _constants.getInvalidAsyncModelError)(qualifier));
};

exports.validateAsyncModel = validateAsyncModel;
},{"./check":"node_modules/@scalecube/utils/es/check.js","./qualifier":"node_modules/@scalecube/utils/es/qualifier.js","./constants":"node_modules/@scalecube/utils/es/constants.js"}],"node_modules/@scalecube/utils/es/mocks/PostMessageWithTransferPolyfill.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPostMessagePolyfill = void 0;

const applyPostMessagePolyfill = () => {
  const addEventListenerQueue = {}; // @ts-ignore

  global.postMessage = (message, targetOrigin, transfer) => {
    const onMessageQueue = addEventListenerQueue.message || [];
    onMessageQueue.forEach(fn => {
      fn({
        ports: transfer,
        data: message,
        type: 'message'
      });
    });
  };

  const globaladdEventListener = addEventListener; // @ts-ignore

  addEventListener = (type, cb) => {
    if (type === 'message') {
      const eventQueueByType = [...(addEventListenerQueue[type] || []), cb];
      addEventListenerQueue[type] = eventQueueByType;
    } else {
      globaladdEventListener(type, cb);
    }
  };
};

exports.applyPostMessagePolyfill = applyPostMessagePolyfill;
},{}],"node_modules/@scalecube/utils/es/mocks/MessageChannelPolyfill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyMessageChannelPolyfill = applyMessageChannelPolyfill;
exports.MessageChannelPolyfill = exports.MessagePortPolyfill = void 0;

// polyfill MessagePort and MessageChannel
class MessagePortPolyfill {
  constructor(whoami) {
    this.onmessage = null;
    this.onmessageerror = null;
    this.otherPort = null;
    this.onmessageListeners = [];
    this.queue = [];
    this.otherSideStart = false;
    this.whoami = whoami;
  }

  dispatchEvent(event) {
    if (this.onmessage) {
      this.onmessage(event);
    }

    this.onmessageListeners.forEach(listener => listener(event));
    return true;
  }

  postMessage(message, ports) {
    const event = {
      ports,
      data: message
    };

    if (!this.otherPort) {
      return;
    }

    if (this.otherSideStart) {
      this.otherPort.dispatchEvent(event);
    } else {
      this.queue.push(event);
    }
  }

  addEventListener(type, listener) {
    if (type !== 'message') {
      return;
    }

    if (typeof listener !== 'function' || this.onmessageListeners.indexOf(listener) !== -1) {
      return;
    }

    this.onmessageListeners.push(listener);
  }

  removeEventListener(type, listener) {
    if (type !== 'message') {
      return;
    }

    const index = this.onmessageListeners.indexOf(listener);

    if (index === -1) {
      return;
    }

    this.onmessageListeners.splice(index, 1);
  }

  start() {
    setTimeout(() => this.otherPort && this.otherPort.startSending.apply(this.otherPort, []), 0);
  }

  close() {
    setTimeout(() => this.otherPort && this.otherPort.stopSending.apply(this.otherPort, []), 0);
  }

  startSending() {
    this.otherSideStart = true;
    this.queue.forEach(event => this.otherPort && this.otherPort.dispatchEvent(event));
  }

  stopSending() {
    this.otherSideStart = false;
    this.queue.length = 0;
  }

} // tslint:disable-next-line


exports.MessagePortPolyfill = MessagePortPolyfill;

class MessageChannelPolyfill {
  constructor() {
    this.port1 = new MessagePortPolyfill('client');
    this.port2 = new MessagePortPolyfill('server');
    this.port1.otherPort = this.port2;
    this.port2.otherPort = this.port1;
  }

}

exports.MessageChannelPolyfill = MessageChannelPolyfill;
const globalObj = typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();

function applyMessageChannelPolyfill() {
  globalObj.MessagePort = MessagePortPolyfill;
  globalObj.MessageChannel = MessageChannelPolyfill;
}

if (!globalObj.MessagePort || !globalObj.MessageChannel) {
  applyMessageChannelPolyfill();
}
},{}],"node_modules/@scalecube/utils/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getFullAddress", {
  enumerable: true,
  get: function () {
    return _address.getFullAddress;
  }
});
Object.defineProperty(exports, "validateAddress", {
  enumerable: true,
  get: function () {
    return _address.validateAddress;
  }
});
Object.defineProperty(exports, "getAddress", {
  enumerable: true,
  get: function () {
    return _address.getAddress;
  }
});
Object.defineProperty(exports, "saveToLogs", {
  enumerable: true,
  get: function () {
    return _logs.saveToLogs;
  }
});
Object.defineProperty(exports, "isNodejs", {
  enumerable: true,
  get: function () {
    return _checkEnvironemnt.isNodejs;
  }
});
Object.defineProperty(exports, "validateServiceDefinition", {
  enumerable: true,
  get: function () {
    return _serviceDefinition.validateServiceDefinition;
  }
});
Object.defineProperty(exports, "getQualifier", {
  enumerable: true,
  get: function () {
    return _qualifier.getQualifier;
  }
});
exports.constants = exports.check = exports.mockMessageChannel = exports.workers = void 0;

var check = _interopRequireWildcard(require("./check"));

exports.check = check;

var _address = require("./address");

var constants = _interopRequireWildcard(require("./constants"));

exports.constants = constants;

var _connectWorkers = require("./connectWorkers");

var _logs = require("./logs");

var _checkEnvironemnt = require("./checkEnvironemnt");

var _serviceDefinition = require("./serviceDefinition");

var _qualifier = require("./qualifier");

var _PostMessageWithTransferPolyfill = require("./mocks/PostMessageWithTransferPolyfill");

var _MessageChannelPolyfill = require("./mocks/MessageChannelPolyfill");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const workers = !(0, _checkEnvironemnt.isNodejs)() ? {
  addWorker: _connectWorkers.addWorker,
  removeWorker: _connectWorkers.removeWorker,
  initialize: _connectWorkers.initialize,
  addIframe: _connectWorkers.addIframe
} : {};
exports.workers = workers;

const mockMessageChannel = () => {
  (0, _PostMessageWithTransferPolyfill.applyPostMessagePolyfill)();
  (0, _MessageChannelPolyfill.applyMessageChannelPolyfill)();
};

exports.mockMessageChannel = mockMessageChannel;
},{"./check":"node_modules/@scalecube/utils/es/check.js","./address":"node_modules/@scalecube/utils/es/address.js","./constants":"node_modules/@scalecube/utils/es/constants.js","./connectWorkers":"node_modules/@scalecube/utils/es/connectWorkers.js","./logs":"node_modules/@scalecube/utils/es/logs.js","./checkEnvironemnt":"node_modules/@scalecube/utils/es/checkEnvironemnt.js","./serviceDefinition":"node_modules/@scalecube/utils/es/serviceDefinition.js","./qualifier":"node_modules/@scalecube/utils/es/qualifier.js","./mocks/PostMessageWithTransferPolyfill":"node_modules/@scalecube/utils/es/mocks/PostMessageWithTransferPolyfill.js","./mocks/MessageChannelPolyfill":"node_modules/@scalecube/utils/es/mocks/MessageChannelPolyfill.js"}],"node_modules/@scalecube/rsocket-ws-gateway/dist/createGatewayProxy.js":[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGatewayProxy = void 0;
var rxjs_1 = require("rxjs");
var rsocket_websocket_client_1 = __importDefault(require("rsocket-websocket-client"));
var rsocket_core_1 = require("rsocket-core");
var utils_1 = require("@scalecube/utils");
function createGatewayProxy(url, definitions, customRequestResponse, customRequestStream, options) {
    var _this = this;
    var isDefinitionsArray = Array.isArray(definitions);
    var defs;
    if (!isDefinitionsArray) {
        defs = [definitions];
    }
    else {
        defs = definitions;
    }
    var proxies = [];
    var socket;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connect(url, options).catch(function (e) {
                        reject(e);
                    })];
                case 1:
                    socket = _a.sent();
                    defs.forEach(function (definition) {
                        var serviceName = definition.serviceName, methods = definition.methods;
                        utils_1.validateServiceDefinition(definition);
                        var proxy = {};
                        Object.keys(methods).forEach(function (method) {
                            var asyncModel = methods[method].asyncModel;
                            var qualifier = utils_1.getQualifier({ serviceName: serviceName, methodName: method });
                            proxy[method] = (function () {
                                switch (asyncModel) {
                                    case 'requestResponse':
                                        return customRequestResponse
                                            ? customRequestResponse(socket, qualifier)
                                            : requestResponse(socket, qualifier);
                                    case 'requestStream':
                                        return customRequestStream ? customRequestStream(socket, qualifier) : requestStream(socket, qualifier);
                                    default:
                                        reject(new Error('Unknown asyncModel'));
                                }
                            })();
                        });
                        proxies.push(proxy);
                    });
                    resolve(isDefinitionsArray ? proxies : proxies[0]);
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.createGatewayProxy = createGatewayProxy;
var connect = function (url, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        var client = new rsocket_core_1.RSocketClient({
            serializers: rsocket_core_1.JsonSerializers,
            setup: {
                dataMimeType: 'application/json',
                keepAlive: options.keepAlive || 100000,
                lifetime: options.lifetime || 100000,
                metadataMimeType: 'application/json',
            },
            transport: new rsocket_websocket_client_1.default({ url: url }),
        });
        client.connect().subscribe({
            onComplete: function (socket) {
                // console.log('Connected to ' + url);
                resolve(socket);
            },
            onError: function (error) {
                // console.log('Err', error);
                reject({ message: 'Connection error ' + error.toString() });
            },
        });
    });
};
var requestResponse = function (socket, qualifier) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            socket
                .requestResponse({
                data: {
                    qualifier: qualifier,
                    data: args,
                },
            })
                .subscribe({
                onComplete: function (_a) {
                    var data = _a.data;
                    resolve(data);
                },
                onError: function (e) {
                    reject(e);
                },
            });
        });
    };
};
var requestStream = function (socket, qualifier) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new rxjs_1.Observable(function (observer) {
            var canceled = false;
            var cancel = function () {
                canceled = true;
            };
            socket
                .requestStream({
                data: {
                    qualifier: qualifier,
                    data: args,
                },
            })
                .subscribe({
                onSubscribe: function (subscription) {
                    if (canceled) {
                        subscription.cancel();
                        return;
                    }
                    cancel = subscription.cancel;
                    subscription.request(2147483647);
                },
                onNext: function (_a) {
                    var data = _a.data;
                    observer.next(data);
                },
                onComplete: function () {
                    observer.complete();
                },
                onError: function (e) {
                    observer.error(e);
                },
            });
            return function () { return cancel(); };
        });
    };
};

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rsocket-websocket-client":"node_modules/rsocket-websocket-client/build/index.js","rsocket-core":"node_modules/rsocket-core/build/index.js","@scalecube/utils":"node_modules/@scalecube/utils/es/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _createGatewayProxy = require("@scalecube/rsocket-ws-gateway/dist/createGatewayProxy");

const main = async () => {
  const definition = {
    serviceName: 'TestService',
    methods: {
      list: {
        asyncModel: 'requestResponse'
      }
    }
  };
  const proxy = await (0, _createGatewayProxy.createGatewayProxy)('ws://localhost:3000', definition);
  const resp = await proxy.list();
  console.log('response', resp);
};

main();
},{"@scalecube/rsocket-ws-gateway/dist/createGatewayProxy":"node_modules/@scalecube/rsocket-ws-gateway/dist/createGatewayProxy.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65243" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/scalecube-memory-leak.e31bb0bc.js.map