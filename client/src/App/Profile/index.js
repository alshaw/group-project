import React from "react";  
import {connect} from "react-redux";

function Profile(props) {  
    return (
        <div>
            <h2>Cheers! <i>@{props.username}</i></h2>
            {/* import in the favorites tied to this profile. User authetication and limits are needed.  */}
        </div>
    )
}

export default connect(state => state.auth, {})(Profile);  