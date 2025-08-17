import { useState } from "react";
import Card from "../UI/Card";
import './LogForm.css';
import LogFilter from "./LogFilter";

const LogForm = ({onSaveNewLog, month, onMonthSelectionChanged}) => {
    
    const [formData, setFormData] = useState({
        date: '',
        description: '',
        minutes: ''
    });

    // 在React中，通常表单不需要自行提交
    // 而是通过React提交
    const addBtnOnClick = (e) => {
        // 取消表单的默认提交行为
        e.preventDefault();
        
        onSaveNewLog(formData);

        setFormData({
            date: '',
            description: '',
            minutes: ''
        });
    }

    const dateOnChange = (e) => {
        setFormData({
            ...formData, 
            date: e.target.value
        });
    }

    const descriptionOnChange = (e) => {
        setFormData({
            ...formData, 
            description: e.target.value
        });
    }

    const minutesOnChange = (e) => {
        setFormData({
            ...formData, 
            // change to type Number
            minutes: +e.target.value
        });
    }

    const revertBtnOnClick = (e) => {
        e.preventDefault();
        // setFormData(({
        //     date: "",
        //     description: "",
        //     minutes: ""
        // }));

        onMonthSelectionChanged("0");
    }

    return <Card className = 'logForm'>

        <form>
            <div className="formItem">
                <label htmlFor="inputDate">Date</label>
                <input id="inputDate" value={formData.date} onChange={dateOnChange} type="date"/>
            </div>

            <div className="formItem">
                <label htmlFor="inputContent">Content</label>
                <input id="inputDescription" value={formData.description} onChange={descriptionOnChange} type="text"/>
            </div>

            <div className="formItem">
                <label htmlFor="inputMinutes">Minutes</label>
                <input id="inputMinutes" value={formData.minutes} onChange={minutesOnChange} type="number"/>
            </div>

            <div className="formBtnContainer">

                <div className="formBtn">
                    <LogFilter month={month} onMonthSelectionChanged={onMonthSelectionChanged}/>
                </div>

                <div className="formBtn">
                    <button onClick={revertBtnOnClick}>Revert</button>
                </div>
                
                <div className="formBtn">
                    <button onClick={addBtnOnClick}>Add+</button>
                </div>
            </div>

           
        </form>
    </Card>
}

export default LogForm;