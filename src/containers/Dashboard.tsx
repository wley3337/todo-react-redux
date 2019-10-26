import React from 'react'
import { AppState } from '../redux/reducer'
import { connect } from 'react-redux'
import { UserType } from '../redux/User.redux/User.types'
import HandleAutoLogin from '../components/HandleAutoLogin'
import { withRouter, Route } from 'react-router'


interface DashboardProps{
    //state 
    user: UserType
}



const Dashboard: React.FC<DashboardProps> = ({user}) => {
    console.log("user ", user)
    return(
        <div>
            {user.firstName === "" ? <Route path ="/" component={HandleAutoLogin} /> : <div>{user.firstName}</div>  }
        </div>
    )
}

const mSTP = ( state: AppState ) =>{
    return{user: state.user}
}

export default withRouter(connect(mSTP)(Dashboard));