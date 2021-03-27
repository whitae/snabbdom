import createElement from "./createElement";

export default function(oldvnode, newvnode){
    //如果新旧节点相同则直接返回
    if(oldvnode === newvnode) return;
    if(newvnode.text != undefined && 
        (newvnode.children == undefined || newvnode.children.length ==0)){
        //新的vnode有text属性
        if (newvnode.text != oldvnode.text){
            // 如果新旧节点的文本内容不同，则直接把旧的节点文本内容改为新的
            oldvnode.elm.innerText = newvnode.text;
        }
    }else{
        // 新的vnode有子节点,没有text属性
        if (oldvnode.children != undefined && oldvnode.children.length > 0){
            //老的vndoe有子节点，要进行细微比较
            // TODO这个部分太复杂了，留着以后有机会再看吧
        }else{
            // 老的没有children，直接把新的节点创建成DOM添加进去即可
            // 先清空老节点内部的文字内容
            oldvnode.elm.innerText = '';
            for(let i = 0; i< vnode.child.length; i++){
                let child = createElement(vnode.children);
                oldvnode.elm.appendChild(child);
            }
        }
    }
}