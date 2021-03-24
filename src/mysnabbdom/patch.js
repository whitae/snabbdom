import vnode from './vnode'
import createElement from './createElement'
import patchVnode from './patchVndoe'

export default function (oldvnode, newvnode) {
    if (oldvnode.sel == '' || oldvnode.sel == undefined) {
        //TODO判断到此时传入的第一个参数是DOM节点,此时要包装为虚拟节点
        oldvnode = vnode(
            oldvnode.tagName.toLowerCase(), {}, [], undefined, oldvnode);
        console.log(oldvnode);
    }

    // TODO判断是否为同一个节点
    if (oldvnode.key == newvnode.key && oldvnode.sel == newvnode.sel) {
        // TODO是同一个节点 
        // 需要精细化比较
        patchVnode(oldvnode, newvnode);
    } else {
        // TODO不是同一个节点
        // 将新的插入，然后删除旧的
        // createElement这个函数负责将vnode创建为真实DOM
        // 还包括其中子节点的递归创建
        let newVnodeElm = createElement(newvnode) //返回一个孤儿节点，但是他的子节点已经以他为根添加进去了
        if (oldvnode.elm.parentNode != undefined && newVnodeElm){
            oldvnode.elm.parentNode.insertBefore(newVnodeElm, oldvnode.elm)//将这个孤儿节点添加到整个DOM树中
        }
    }
}