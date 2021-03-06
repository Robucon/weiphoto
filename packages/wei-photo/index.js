import component from './src/index.vue';
component.install = function(Vue) {
    Vue.component(component.name, component);
    Vue.directive("wei-photo", {
        inserted: function(el, binding, vnode) {
            if (!vnode.child.viewer) {
                vnode.context[binding.arg] = vnode.child.inits(binding.value);
            }
        }
    })
};
export default component;