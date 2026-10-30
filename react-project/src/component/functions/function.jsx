// Added the even listner on the click on the button 
function hereFunctions(){
    function btnClicked(){
        console.log("btn Clicked");
    }
    function inputChanging(inputValue){
        console.log(inputValue);
        
    }
    const pageScrolling = (elem)=>{
        // debugger
        console.log("scrolling page", elem);
    }
    return(
        <>
        <div className="functions-wrapper">
            <h1>Hi Im Rohit</h1>
            <button onClick={btnClicked}>Click This</button>
            
            <button style={{margin:"20px" }} onClick={function(){
                console.log("Inline Function Clicked")
            }}>Click Inline Function</button>

            {/* Geeting the Input value from Input Filed */}

            <input onChange={function(elem){
                inputChanging(elem.target.value)
            }} type="text" placeholder="Enter the Name" />

            <div onWheel={(elem)=>{
                pageScrolling(elem.deltaY)
            }}> Page Scrolling</div>
        </div>
        </>
    )
}
export default hereFunctions