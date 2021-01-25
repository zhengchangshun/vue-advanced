import WrapperComponent from "./hoc"

let defaultComponent = null
export const setDefaultComponent = component => {
    defaultComponent = component
}
export default function (syncComponent, defComponent, role) {
    defComponent = defComponent || defaultComponent
    if (!role) {
        return syncComponent
    } // 不受控
    return WrapperComponent(syncComponent, defComponent, role) // 权限控制
}
