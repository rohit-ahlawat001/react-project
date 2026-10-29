function card(props){
    return(
        <>
        <div className="what-we-doSection">
            <div className="top-subHeading">
                <img src={props.img} />
                <h1>My Name is {props.name}</h1>
                <h3>My age is {props.age} year's</h3></div>
        </div>
        </>
    )
}
export default card