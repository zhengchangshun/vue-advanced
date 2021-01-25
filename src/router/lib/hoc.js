import store from "@/store"

export default function withComponent(WrapperComponent, defComponent, role) {
    const { roles } = store.state
    if (roles.indexOf(role) === -1) {
        return false
    }
    return {
        computed: {
            roles() {
                return roles
            },
        },
        props: WrapperComponent.props,
        render(h) {
            const keys = Object.keys(this.$slots)
            const slotList = keys
                .reduce((arr, key) => arr.concat(this.$slots[key]), [])
                .map(vnode => {
                    vnode.context = this._self
                    return vnode
                })
            if (role && this.roles.indexOf(role) === -1) {
                return defComponent ? h(defComponent) : ``
            }

            return h(
                WrapperComponent,
                {
                    on: this.$listeners,
                    attrs: this.$attrs,
                    props: this.$props,
                    scopedSlots: this.$scopedSlots,
                },
                slotList,
            )
        },
    }
}
