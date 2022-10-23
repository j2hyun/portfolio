exports.ids = [1];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project.vue?vue&type=template&id=53ae1f5a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "ly-card"
  }, [_vm._ssrNode(_vm._ssrList(_vm.projectList, function (project, index) {
    return "<div class=\"card\"><div class=\"card-header\"><h3 class=\"title-h3 card-title\">" + _vm._ssrEscape(_vm._s(project.title)) + "</h3> <div class=\"ly-card-desc\"><div class=\"period\"><span>" + _vm._ssrEscape(_vm._s(project.startDate)) + "</span> ~\n          <span" + _vm._ssrClass(null, `${project.endDate === '진행중' ? 'ft-color-primary ft-weight__medium' : ''}`) + ">" + _vm._ssrEscape(_vm._s(project.endDate)) + "</span></div> <div class=\"ly-chip-group ly-pt-8\"><div" + _vm._ssrClass(null, _vm.classObject(project.role)) + "><span>" + _vm._ssrEscape(_vm._s(project.role)) + "</span></div></div></div></div> <div class=\"card-container\"><div class=\"card-desc\"><h4 class=\"title-h4\">Tech Spec</h4> <div class=\"card-desc-content\"><ul class=\"ly-chip-group\">" + _vm._ssrList(project.spec, function (spec, index) {
      return "<li class=\"chip chip-info\"><i" + _vm._ssrClass(null, `icon-logo-${spec.icon}`) + "></i> <span>" + _vm._ssrEscape(_vm._s(spec.tech)) + "</span></li>";
    }) + "</ul></div></div> <div class=\"card-desc\"><h4 class=\"title-h4\">What I did</h4> <div class=\"card-desc-detail\"><ul class=\"card-desc-detail-list\">" + _vm._ssrList(project.detail, function (item, index) {
      return "<li class=\"card-desc-detail-item\"><span>" + _vm._ssrEscape("\n                " + _vm._s(item) + "\n              ") + "</span></li>";
    }) + "</ul></div></div></div></div>";
  }))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Project.vue?vue&type=template&id=53ae1f5a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project.vue?vue&type=script&lang=js&
/* harmony default export */ var Projectvue_type_script_lang_js_ = ({
  props: {
    projectList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    classObject(role) {
      let classNm = ["chip", "chip-role"];

      switch (role) {
        case "단독 진행":
          classNm.push("chip-done");
          break;

        case "팀원":
          classNm.push("chip-default");
          break;

        case "서브 리더":
          classNm.push("chip-secondary");
          break;

        case "리더":
          classNm.push("chip-primary");
          break;

        default:
          classNm.push("chip-default");
          break;
      }

      return classNm.join(" ");
    }

  }
});
// CONCATENATED MODULE: ./components/Project.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Projectvue_type_script_lang_js_ = (Projectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Project.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Projectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ad5bddfa"
  
)

/* harmony default export */ var Project = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=project.js.map