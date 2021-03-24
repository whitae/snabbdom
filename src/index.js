import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

// 外部根节点
const container = document.getElementById('container');
// 使用h函数生成vnode
let vnode1 = h('ul', {}, [
    h('li', {}, 'text1'),
    h('li', {}, 'text2'),
    h('li', {}, 'text3'),
]);
// 调用patch将vnode上树
patch(container, vnode1);


// 在生成第二个vnode
let vnode2 = h('ul', {}, "hello2");
// 进行vnode更新
patch(vnode1, vnode2);