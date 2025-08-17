import './DateComponent.css';

const DateComponent = ({date}) => {
    const month = date.toLocaleString('zh-CN', {month : 'long'});
    const day = date.getDate();
    return <div className='date'>
                <div className='month'>
                    {month}

                    {/* 
                        toLocaleString(locales, options)
                        {date.toLocaleString('en-AU', {month : 'short'})} 
                    */}
                </div>
                
                <div className='day'>
                    {day}
                </div>
            </div>
}

export default DateComponent;