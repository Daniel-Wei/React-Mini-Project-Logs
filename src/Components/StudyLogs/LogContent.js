import './LogContent.css';

const LogContent = ({ description, minutes }) => {
    
    // TypeError: Cannot assign to read only property 'description'
    // props is read-only
    // props.description = "test";

    // 解决方法
    // 不用props 而是直接列出属性
    // { description, minutes }
    // description = "test";

    // 在函数组件中，属性props就相当于是函数的参数 
    // 可以通过参数来访问属性props
    return  <div className='content'>
                <h2 className='description'>
                    {description}
                </h2>
                
                <div className='time'>
                    {(minutes / 60).toFixed(2)} Hours
                </div>

            </div>
}

export default LogContent;