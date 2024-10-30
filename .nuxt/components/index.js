export const Project = () => import('../../components/Project.vue' /* webpackChunkName: "components/project" */).then(c => wrapFunctional(c.default || c))
export const Skill = () => import('../../components/Skill.vue' /* webpackChunkName: "components/skill" */).then(c => wrapFunctional(c.default || c))
export const SkillChip = () => import('../../components/SkillChip.vue' /* webpackChunkName: "components/skill-chip" */).then(c => wrapFunctional(c.default || c))
export const Tooltip = () => import('../../components/Tooltip.vue' /* webpackChunkName: "components/tooltip" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
