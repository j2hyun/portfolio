exports.ids = [3];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SkillChip.vue?vue&type=template&id=260e8fe0&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('ul', {
    staticClass: "ly-chip-group"
  }, [_vm._ssrNode(_vm._ssrList(_vm.skills, function (skill, index) {
    return "<li class=\"chip chip-info -large\" data-v-260e8fe0><i" + _vm._ssrClass(null, `icon-logo-${skill.icon}`) + " data-v-260e8fe0></i> <span data-v-260e8fe0>" + _vm._ssrEscape(_vm._s(skill.tech)) + "</span></li>";
  }))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SkillChip.vue?vue&type=template&id=260e8fe0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SkillChip.vue?vue&type=script&lang=js&
/* harmony default export */ var SkillChipvue_type_script_lang_js_ = ({
  props: {
    skills: {
      type: Array
    }
  }
});
// CONCATENATED MODULE: ./components/SkillChip.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SkillChipvue_type_script_lang_js_ = (SkillChipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SkillChip.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SkillChipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "260e8fe0",
  "318ab36b"
  
)

/* harmony default export */ var SkillChip = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=skill-chip.js.map