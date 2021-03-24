export default function createElement(vnode) {
    // 把一个vnode插入到pivot之前 
    // 将vnode创建为真是DOM节点,此时还是孤儿节点
    let domNode = document.createElement(vnode.sel);
    // 判断这个vnode中是直接装的文本还是子节点
    if (vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
        // 这里判断为只有text内容
        domNode.innerText = vnode.text;
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        // 判断这个vnode中有虚拟子节点
        for (let i = 0; i < vnode.children.length; i++) {
            let ch = vnode.children[i];
            console.log(ch);
            //递归调用 
            let chDOM = createElement(ch);// 取得返回的子节点的ELM
            domNode.appendChild(chDOM);// 以上一层vnode.elm为根，将他的子节点elm添加进树
        }
    }
    // 为vnode补充elm属性
    vnode.elm = domNode;
    // 这个elm是单纯的dom对象
    return vnode.elm;
}