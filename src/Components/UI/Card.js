import './Card.css';

// props.children就是标签内容
// 在这个例子中 <Card>就是通用UI组件
// 无需在Logs.css和LogsContainer.css再设置border-radius和box-shadow
const Card = (props) => {
    return <div className={`card ${props.className}`}>{props.children}</div>
}

export default Card;