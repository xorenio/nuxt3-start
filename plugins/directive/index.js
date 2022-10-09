// https://stackoverflow.com/questions/36170425/detect-click-outside-element
// import Vue from 'vue';


// Vue.directive('click-inside', {
//   bind: function (el, binding, vnode) {
//     el.clickInsideEvent = function (event) {
//       // here I check that click was outside the el and his childrens
//       if (el == event.target || el.contains(event.target) ) {
//         // and if it did, call method provided in attribute value
//         // vnode.context[binding.expression](event);
//         // return callback.call(vm, event);
//                 vnode.context[binding.expression](event);
//         return binding.value.call(vnode.context, event);
//       }
//     };
//     document.body.addEventListener('click', el.clickInsideEvent)
//   },
//   unbind: function (el) {
//     document.body.removeEventListener('click', el.clickInsideEvent)
//   },
// })
export default defineNuxtPlugin((nuxtApp) => {  
nuxtApp.vueApp.directive('focus', {
    mounted (el, binding, vnode, prevVnode) {
            el.eventSetDrag = function () {
                el.setAttribute('data-dragging', 'yes');
            }
            el.eventClearDrag = function () {
                el.removeAttribute('data-dragging');
            }
            el.eventOnClick = function (event) {
                var dragging = el.getAttribute('data-dragging');
                // Check that the click was outside the el and its children, and wasn't a drag
                if (!(el == event.target || el.contains(event.target)) && !dragging) {
                    // call method provided in attribute value
                    vnode.context[binding.expression](event);
                }
            };
            document.addEventListener('touchstart', el.eventClearDrag);
            document.addEventListener('touchmove', el.eventSetDrag);
            document.addEventListener('click', el.eventOnClick);
            document.addEventListener('touchend', el.eventOnClick);
        },
        beforeUnmount (el) {
            document.removeEventListener('touchstart', el.eventClearDrag);
            document.removeEventListener('touchmove', el.eventSetDrag);
            document.removeEventListener('click', el.eventOnClick);
            document.removeEventListener('touchend', el.eventOnClick);
            el.removeAttribute('data-dragging');
        },
        getSSRProps (binding, vnode) {
          // you can provide SSR-specific props here
          return {}
        }
    })
})

// Vue.directive('click-outside', {
//     bind: function (el, binding, vnode) {
//         el.eventSetDrag = function () {
//             el.setAttribute('data-dragging', 'yes');
//         }
//         el.eventClearDrag = function () {
//             el.removeAttribute('data-dragging');
//         }
//         el.eventOnClick = function (event) {
//             var dragging = el.getAttribute('data-dragging');
//             // Check that the click was outside the el and its children, and wasn't a drag
//             if (!(el == event.target || el.contains(event.target)) && !dragging) {
//                 // call method provided in attribute value
//                 vnode.context[binding.expression](event);
//             }
//         };
//         document.addEventListener('touchstart', el.eventClearDrag);
//         document.addEventListener('touchmove', el.eventSetDrag);
//         document.addEventListener('click', el.eventOnClick);
//         document.addEventListener('touchend', el.eventOnClick);
//     }, unbind: function (el) {
//         document.removeEventListener('touchstart', el.eventClearDrag);
//         document.removeEventListener('touchmove', el.eventSetDrag);
//         document.removeEventListener('click', el.eventOnClick);
//         document.removeEventListener('touchend', el.eventOnClick);
//         el.removeAttribute('data-dragging');
//     },
// });
