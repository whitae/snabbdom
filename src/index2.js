import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h';

let myVnode = h(
    // TODO生成的标签
    'a',
    // TODO标签属性
    {
        props: {
            href: 'https://www.baidu.com'
        }
    },
    // TODO标签子节点
    'baidu');
console.log(myVnode);