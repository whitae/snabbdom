import vnode from './vnode';

// h('div',{},'文字')
// h('div',{},[])
// h('div',{},h())
export default function (sel, data, children) {
    // TODO判断输入类型， 进行函数重载
    if (typeof children == 'string' || typeof children == 'number') {
        // h('div',{},'文字')
        return vnode(sel, data, undefined, children, undefined);
    } else if (Array.isArray(children)) {
        // h('div',{},[])
        //遍历数组中的h函数生成的对象
        let _children = [];
        for (let i=0; i<children.length; i++){
            _children.push(children[i]);
        }
        return vnode(sel, data, _children, undefined, undefined);
    } else if (typeof children == 'object' && children.hasOwnProperty('sel')) {
        // h('div',{},h())
        let _children = [children];
        return vnode(sel, data, _children, undefined, undefined);
    } else {
        throw new Error('传入参数有误');
    }
}