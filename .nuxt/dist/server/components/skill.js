exports.ids = [2];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Skill.vue?vue&type=template&id=c99657a8&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "ly-card-group"
  }, [_vm._ssrNode(_vm._ssrList(_vm.skillList, function (skill, index) {
    return "<div class=\"card card__rounded\"><div class=\"card-header\"><h3 class=\"title-h4\">" + _vm._ssrEscape(_vm._s(skill.title)) + "</h3></div> <div class=\"card-container\"><ul class=\"card-list\">" + _vm._ssrList(skill.list, function (item, index) {
      return "<li class=\"card-list-item\">" + _vm._ssrEscape("\n          " + _vm._s(item) + "\n        ") + "</li>";
    }) + "</ul></div></div>";
  }))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Skill.vue?vue&type=template&id=c99657a8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Skill.vue?vue&type=script&lang=js&
/* harmony default export */ var Skillvue_type_script_lang_js_ = ({
  props: {
    skillList: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/Skill.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Skillvue_type_script_lang_js_ = (Skillvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Skill.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Skillvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "228bfe8a"
  
)

/* harmony default export */ var Skill = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=skill.js.map