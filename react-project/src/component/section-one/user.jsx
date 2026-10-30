function userData(props){
  return (
    <>
      <div className="main-userWrapper">
          <div className="user-topHead">
              <div className="left-content">
                  <h6>{props.userName}</h6>
              </div>
              <div className="right-content">
                <img src={props.userIcon} style={{width: '30px'}} />
              </div>
          </div>
          <div className="user-middleBody">
            <h3>{props.totaluser}</h3>
          </div>
          <div className="user-bottomFooter">
            <div className="left-content">
                <h5>{props.remaining_days}</h5>
            </div>
            <div className="left-percentage">
                <h6>{props.percentage}</h6>
            </div>
          </div>
      </div>
    </>
  )
}
export default userData