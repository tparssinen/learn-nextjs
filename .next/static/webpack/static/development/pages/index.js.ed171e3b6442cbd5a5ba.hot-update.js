webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3950785544"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/p/".concat(post.id),
    href: "/post?title=".concat(post.title)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3950785544"
  }, post.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3950785544"
  }, "li.jsx-3950785544{list-style:none;margin:5px 0;}a.jsx-3950785544{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:\"Arial\";}a.jsx-3950785544:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWVtdXBhcnNzaW5lbi9vcGgvdHV0dS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdCLEFBR3lCLEFBS0ssQUFNVCxZQUNkLElBWGUsYUFDZixxQkFJYSxXQUNTLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvdGVlbXVwYXJzc2luZW4vb3BoL3R1dHUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmZ1bmN0aW9uIGdldFBvc3RzICgpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJ30sXG4gICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJ30sXG4gICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCd9LFxuICBdXG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBhcz17YC9wLyR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbilcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICA8dWw+XG4gICAgICB7Z2V0UG9zdHMoKS5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSwgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKSJdfQ== */\n/*@ sourceURL=/Users/teemuparssinen/oph/tutu/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2987328901"
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2987328901"
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
      key: post.id,
      post: post
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2987328901"
  }, "h1.jsx-2987328901,a.jsx-2987328901{font-family:\"Arial\";}ul.jsx-2987328901{padding:0;}li.jsx-2987328901{list-style:none;margin:5px 0;}a.jsx-2987328901{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2987328901:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWVtdXBhcnNzaW5lbi9vcGgvdHV0dS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2dCLEFBRzZCLEFBSVYsQUFJTSxBQUtLLEFBS1QsVUFiZCxFQWNBLElBVmUsSUFSZixTQVNBLHFCQUlhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3RlZW11cGFyc3NpbmVuL29waC90dXR1L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5mdW5jdGlvbiBnZXRQb3N0cyAoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcyd9LFxuICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZSd9LFxuICAgIHsgaWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnfSxcbiAgXVxufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgPHVsPlxuICAgICAge2dldFBvc3RzKCkubWFwKChwb3N0KSA9PiAoXG4gICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEsIGEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbikiXX0= */\n/*@ sourceURL=/Users/teemuparssinen/oph/tutu/pages/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.ed171e3b6442cbd5a5ba.hot-update.js.map