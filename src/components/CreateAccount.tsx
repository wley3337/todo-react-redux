import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { AppState } from '../redux/reducer'


interface CreateAccountProps{
    
}

const CreateAccount: React.FC<CreateAccountProps> = () =>{
    return (
        <div>
            Create Account
        </div>
    )
}

const mSTP = ( state: AppState ) =>{
    return {

    }
}

export default connect(mSTP, actions)(CreateAccount)