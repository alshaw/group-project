import React from 'react'

function SignupForm(props) {
    return (
        <div className="form-wrapper">
            <form onSubmit={props.handleSubmit}>
                <h2>Sign Up</h2>
                <input onChange={props.handleChange} 
                       value={props.name}
                       name="name"
                       type="text"
                       placeholder="Name"/>
                <input onChange={props.handleChange}
                       value={props.username}
                       name="username"
                       type="text"
                       placeholder="Username"/>
                <input onChange={props.handleChange}
                       value={props.password}
                       name="password"
                       type="password"
                       placeholder="Password"/>
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
}

export default Signup