import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { AppState } from '../redux/reducer'
import { Link } from 'react-router-dom'

interface LoginProps{


}

const Login: React.FC<LoginProps> = () =>{
    return(
        <div>
            login form
            <Link to="/create-account">Create Account</Link>
        </div>
    )
}

const mSTP= ( state: AppState ) =>{
    return{

    }
}

export default connect(mSTP, actions)(Login)