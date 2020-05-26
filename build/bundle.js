/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchMore = exports.fetchUsers = exports.FETCH_MORE = exports.FETCH_USERS = undefined;

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = "fetch_users";
var FETCH_MORE = exports.FETCH_MORE = "fetch_more";

function pageCounter() {
	if (typeof Storage !== "undefined") {
		if (localStorage.pageCount) {
			localStorage.pageCount = Number(localStorage.pageCount) + 1;
		} else {
			localStorage.pageCount = 2;
		}
		return localStorage.pageCount;
	}
}

var fetchUsers = exports.fetchUsers = function fetchUsers() {
	return function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
			var res;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return _axios2.default.get('http://hn.algolia.com/api/v1/search?tags=front_page');

						case 2:
							res = _context.sent;

							dispatch({
								type: FETCH_USERS,
								payload: res
							});

						case 4:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x) {
			return _ref.apply(this, arguments);
		};
	}();
};

var fetchMore = exports.fetchMore = function fetchMore() {
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
			var page, res;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							page = pageCounter();
							_context2.next = 3;
							return _axios2.default.get("http://hn.algolia.com/api/v1/search?page=" + page);

						case 3:
							res = _context2.sent;

							dispatch({
								type: FETCH_MORE,
								payload: res
							});

						case 5:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));

		return function (_x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _renderer = __webpack_require__(9);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(15);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//look into static directory 'public' and find bundle.js
app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
	var store = (0, _createStore2.default)();
	//logic to initialize and load data into store
	res.send((0, _renderer2.default)(req, store));
});

app.listen(3000, function () {
	console.log('listening on port 3000');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _Routes = __webpack_require__(11);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
	var content = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: req.path, context: {} },
			_react2.default.createElement(_Routes2.default, null)
		)
	));

	var helmet = _reactHelmet.Helmet.renderStatic();

	return '\n\t<!DOCTYLE html>\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t' + helmet.title.toString() + '\n\t\t\t\t<title>Hacker News App</title>\n\t\t\t    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<div id="root">' + content + '</div>\n\t\t\t\t<script>\n\t\t\t\t\twindow.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\n\t\t\t\t</script>\n\t\t\t\t<script src="bundle.js"></script>\n\t\t\t</body>\n\t\t</html>\n\t';
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _HomePage = __webpack_require__(12);

var _HomePage2 = _interopRequireDefault(_HomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomePage2.default });
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(1);

var _helperFunction = __webpack_require__(14);

var _reactHelmet = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
	_inherits(HomePage, _Component);

	function HomePage(props) {
		_classCallCheck(this, HomePage);

		return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
	}

	_createClass(HomePage, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchUsers();
		}
	}, {
		key: 'renderUsers',
		value: function renderUsers() {
			if (this.props.nextUsers.length != 0) {
				return this.props.nextUsers.map(function (user, index) {
					return _react2.default.createElement(
						'tr',
						{ key: index, className: 'thin' },
						_react2.default.createElement(
							'td',
							null,
							user.num_comments
						),
						_react2.default.createElement(
							'td',
							null,
							user.points
						),
						_react2.default.createElement(
							'td',
							null,
							user.title
						),
						_react2.default.createElement(
							'td',
							null,
							(0, _helperFunction.getHostName)(user.url)
						),
						_react2.default.createElement(
							'td',
							null,
							'by ',
							user.author
						),
						_react2.default.createElement(
							'td',
							null,
							_react2.default.createElement(
								'a',
								{ className: 'shown', onClick: function onClick(e) {
										return (0, _helperFunction.hidePosts)(e);
									} },
								'[Hide]'
							)
						)
					);
				});
			} else {
				return this.props.users.map(function (user, index) {
					return _react2.default.createElement(
						'tr',
						{ key: index, className: 'thin' },
						_react2.default.createElement(
							'td',
							null,
							user.num_comments
						),
						_react2.default.createElement(
							'td',
							null,
							user.points
						),
						_react2.default.createElement(
							'td',
							null,
							user.title
						),
						_react2.default.createElement(
							'td',
							null,
							(0, _helperFunction.getHostName)(user.url)
						),
						_react2.default.createElement(
							'td',
							null,
							'by ',
							user.author
						),
						_react2.default.createElement(
							'td',
							null,
							_react2.default.createElement(
								'a',
								{ className: 'shown', onClick: function onClick(e) {
										return (0, _helperFunction.hidePosts)(e);
									} },
								'[Hide]'
							)
						)
					);
				});
			}
			document.querySelectorAll('tr.thin').addEventListener('click', _helperFunction.hidePosts, false);
		}
	}, {
		key: 'head',
		value: function head() {
			return _react2.default.createElement(
				_reactHelmet.Helmet,
				null,
				_react2.default.createElement(
					'title',
					null,
					'Hacker News App'
				),
				_react2.default.createElement('meta', { property: 'og:title', content: 'Hacker News App' })
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				this.head(),
				_react2.default.createElement(
					'div',
					{ style: { background: "orange" } },
					'top | new '
				),
				_react2.default.createElement(
					'table',
					{ className: 'striped ' },
					_react2.default.createElement('thead', null),
					_react2.default.createElement(
						'tbody',
						null,
						this.renderUsers()
					)
				),
				_react2.default.createElement(
					'a',
					{ onClick: this.props.fetchMore, className: 'orange-text pl-20' },
					'More'
				)
			);
		}
	}]);

	return HomePage;
}(_react.Component);

function mapStateToProps(state) {
	return {
		users: state.users,
		nextUsers: state.nextUsers

	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers, fetchMore: _actions.fetchMore })(HomePage);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getHostName = getHostName;
exports.hidePosts = hidePosts;
exports.updateHiddenRows = updateHiddenRows;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getHostName(url) {
	if (url != null) {
		var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
		if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
			return '(' + match[2] + ')';
		} else {
			return null;
		}
	}
}

function hidePosts(e) {
	//e.target.parentNode.parentNode.style.display = 'none';
	e.target.parentNode.parentNode.classList.add('hide');
}

function updateHiddenRows() {
	var allRows = document.querySelectorAll('tr');
	var hidenRows = document.querySelectorAll('tr.hide');
	var hiddenRowsIndex = [].concat(_toConsumableArray(hidenRows)).map(function (hiddenRow) {
		return [].concat(_toConsumableArray(allRows)).indexOf(hiddenRow);
	});
	localStorage.setItem('hiddenRows', JSON.stringify(hiddenRowsIndex));
	var localStorage_hiddenRows = JSON.parse(localStorage.getItem('hiddenRows'));
	if (localStorage_hiddenRows !== null && localStorage_hiddenRows.length > 0) {
		allRows.forEach(function (current_row, index) {
			if (localStorage_hiddenRows.indexOf(index) > -1) {
				current_row.classList.add('hide');
			}
		});
	}
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(16);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(17);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
	return store;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(5);

var _usersReducer = __webpack_require__(18);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _fetchMoreReducer = __webpack_require__(19);

var _fetchMoreReducer2 = _interopRequireDefault(_fetchMoreReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	users: _usersReducer2.default,
	nextUsers: _fetchMoreReducer2.default

});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case _actions.FETCH_USERS:
			return action.payload.data.hits;
		default:
			return state;
	}
}; //FETCH_USERS is a named export.We need to use the {}.

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case _actions.FETCH_MORE:
			return action.payload.data.hits;
		default:
			return state;
	}
};

/***/ })
/******/ ]);