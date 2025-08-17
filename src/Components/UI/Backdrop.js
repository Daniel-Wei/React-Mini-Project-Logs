import './Backdrop.css';
import ReactDOM from 'react-dom';

{/*
    portal
        - 组件默认情况下会作为父组件的子组件渲染在页面上。在有些情况中，会产生问题。
        - 通过protal可以将组件渲染到页面的指定位置
        - 使用方法
            - 1. 在index.html中添加一个新的元素: <div id="backdrop"></div>
            - 2. 修改组件的渲染方式
                - 通过ReactDOM.createPortal()作为返回值创建元素
                - 参数1：jsx元素
                - 参数2: 目标的位置-DOM container
*/}

const backdropContainer = document.getElementById('backdropContainer');

// props.children就是标签内容
const Backdrop = (props) => {
    return ReactDOM.createPortal((<div className="backdrop">
        {props.children}
    </div>), backdropContainer);
}

export default Backdrop;