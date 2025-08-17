import './App.css';
import LogsContainer from './Components/StudyLogs/LogsContainer';
import LogForm from './Components/StudyLogs/LogForm';
import { useState } from 'react';

function App () {
  const d1 = new Date();
  d1.setDate(d1.getDate() + 93);
  
  const d2 = new Date();
  d2.setDate(d2.getDate() + 9575523)
  
  const d3 = new Date();
  d3.setDate(d3.getDate() + 43723)

  const initialLogData = [
    {
      id: 675,
      description: "Study React",
      minutes: 435,
      date: d1,
    },
    {
      id: 46234,
      description: "Leetcode",
      minutes: 176,
      date: d2,
    },
    {
      id: 4235788,
      description: "Workouts",
      minutes: 73,
      date: d3,
    }
  ];

  const [logData, setLogData] = useState(initialLogData);

  // keep state logic in parent component
  const onSaveNewLog = (formData) => {
    // https://react.dev/learn/updating-arrays-in-state
    // logData 内存地址不变，不会触发state改变
    // logData.push(formData);
    // setLogData(logData);
    
    setLogData([
      ...logData, 
      {
        date: new Date(formData.date),
        description: formData.description,
        minutes: formData.minutes,
        id: Date.now() + '' // take timestamp as id
      }
    ]);
  }

  const onDeleteLog = (logID) => {
    const newLogData = logData.filter(log => log.id !== logID);
    setLogData(newLogData);
  }

  const [month, setMonth] = useState('0');
      console.log(month)


  const onMonthSelectionChanged = (monthValue) => {
      setMonth(monthValue);
  }
  
  return <div className='App'>
    {/* only pass function call to children component */}
    <LogForm onSaveNewLog = {onSaveNewLog} month={month} onMonthSelectionChanged = {onMonthSelectionChanged} />
    <LogsContainer logData = {logData} onDeleteLog = {onDeleteLog} month = {+month}/>
  </div>
}

export default App;