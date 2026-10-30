import {useState} from 'react'

function gettingFun(){

    const [Num, SetNum] = useState(0)


    function increaseNum(){
        SetNum(Num + 1)
    }
    function decreaseNum(){
        SetNum(Num - 1)
    }
    function decreaseByFive(){
        SetNum(Num - 5)
    }
    function incraseByFive(){
        SetNum(Num + 5)
    }
    function resetNum(){
        SetNum(0)
    }


    return(
    <>
    <h1 className='userStateHeading'>{Num}</h1>
    <button onClick={increaseNum} className='button-wrap'>Increase</button>
    <button onClick={decreaseNum} className='button-wrap'>Decrease</button>
    <button onClick={decreaseByFive} className='button-wrap'>Decrease by 5</button>
    <button onClick={incraseByFive} className='button-wrap'>Increase by 5</button>
    <button onClick={resetNum} className='button-wrap'>Reset</button>
    
    </>
    )
}

export default gettingFun