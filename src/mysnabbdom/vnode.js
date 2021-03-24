// TODO vnode函数非常简单，只是把属性拼成一个对象
export default function (sel, data, children, text, elm) {
    return {
        sel, data, children, text, elm
    }
}