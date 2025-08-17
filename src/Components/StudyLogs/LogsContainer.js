import Log from "./Log";
import './LogsContainer.css';
import Card from "../UI/Card";

const LogsContainer = ({logData, onDeleteLog, month}) => {
    // foreach是对原数组进行修改
    // map是直接胜场新的数组
    // Warning: Each child in a list should have a unique “key” prop.
    // 将所有对数据进行处理的逻辑放在外面

    logData = logData.filter(d => month === 0 || d.date.getMonth() + 1 === month);

    logData = logData.map(data => 
                // <Log key = {data.index} logData = {data} index = {idx}/> 
                <Log key = {data.id} logData = {data} onDeleteLog = {() => onDeleteLog(data.id)}/> 
            )

    return <Card className="logs-container">
        {
            logData.length > 0 ? logData : <p className="noLog">No Log</p>
        }
    </Card>
}

export default LogsContainer;