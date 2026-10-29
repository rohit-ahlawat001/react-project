import { Bookmark } from 'lucide-react'

function AppleCard(){
    return(
        <>
        <div className="apple_card_wrapper">
            <div className="top-header">
                <div className="header_left_image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" />
                </div>
                <div className="header_right_content">
                    <button>Save <Bookmark /></button>
                </div>
            </div>
            <div className="middle-body">
               <div className='middle-body__topHeading'> <h4>Amazon</h4> <p>5 days ago</p></div>
               <div className='designmation-heading'><h3>Senior UI/UX Designer</h3></div>
               <div className="body-tiles"><h6>Part Time</h6> <h6>Senior Level</h6></div>
            </div>
            <div className="bottom-buttons">
                <div className="bottom-leftContent">
                    <h4>$120/hr</h4>
                    <h6>Mumbai, india</h6>
                </div>
                <div className="bottom-rightContent">
                    <button> Apply Now</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AppleCard