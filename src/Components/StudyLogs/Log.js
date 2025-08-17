import DateComponent from "./DateComponent";
import './Log.css';
import Card from "../UI/Card";
import LogContent from "./LogContent";
import ConfirmModal from "../UI/ConfirmModal";
import { useState } from "react";



const Log = ({logData, onDeleteLog}) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const confirmText = "You are going to delete this log. Are you sure to continue?";
    
    const deleteBtnOnClick = () => {
        setShowConfirmModal(true);
    }

    const onCancelDelete = () => {
        setShowConfirmModal(false);
    }

    const onConfirmDelete = () => {
        onDeleteLog();
    }

    return <Card className="log">
        <DateComponent date = {logData.date} />

        {/*
            如果将组件中的数据全部写死，将会导致组件无法动态设置，不具有实用价值
            我们希望组件可以由外部传入的数据设置
            在React组件间，父组件可以通过props（属性）向子组件传递数据
        */}
        
        <LogContent description = {logData.description} minutes = {logData.minutes}/>

        {showConfirmModal && 
            <ConfirmModal confirmText = {confirmText} 
                onConfirmDelete={onConfirmDelete} 
                onCancelDelete = {onCancelDelete}/>}

        <div className='delete' id={logData.id} onClick={deleteBtnOnClick}>x</div>
    </Card>
}

export default Log;