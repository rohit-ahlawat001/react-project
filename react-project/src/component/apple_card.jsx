import { Bookmark } from 'lucide-react'

function AppleCard(props){
    return(
        <>
        <div className="apple_card_wrapper">
            <div className="top-header">
                <div className="header_left_image">
                <img src={props.logo} />
                </div>
                <div className="header_right_content">
                    <button>Save <Bookmark /></button>
                </div>
            </div>
            <div className="middle-body">
               <div className='middle-body__topHeading'> <h4>{props.companyName}</h4> <p>{props.datePosted}</p></div>
               <div className='designmation-heading'><h3>{props.post}</h3></div>
               <div className="body-tiles"><h6>{props.tagOne}</h6> <h6>{props.tagTwo}</h6></div>
            </div>
            <div className="bottom-buttons">
                <div className="bottom-leftContent">
                    <h4>{props.payment}</h4>
                    <h6>{props.location}</h6>
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