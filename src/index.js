import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'


const container = document.getElementById('container');
let vnode = h('ul',{},[
    h('li',{},'text1'),
    h('li',{},'text2'),
    h('li',{},'text3'),
]);
console.log(vnode);
patch(container, vnode);