import React from 'react'
import "./Styles/Personal.css"

function PersonalInfo(props) {
  return (
    <>
        <h1>Personal info</h1>
        <p>  Please provide your name, email address, and phone number. </p>
        <div className='wrapper'>
            <div className = "seperator"><label htmlFor='name'>Name</label> <span>{props.error &&  !props.formData.name && "This field is required !"}</span></div>
            <input name = "name" onChange={(e) => {props.setFormData({...props.formData, [e.target.name]: e.target.value})}} value = {props.formData.name} required = {props.error} id = 'name' type = 'text' placeholder='e.g. Stephen King'/>
            <div className = "seperator"><label htmlFor='email'>Email Address</label> <span>{props.error && !props.formData.email && "This field is required !"}</span></div>
            <input name = 'email' onChange={(e) => {props.setFormData({...props.formData, [e.target.name]: e.target.value})}} value = {props.formData.email} required = {props.error} id = 'email' type = 'email' placeholder='e.g. stephenking@lorem.com'/>
            <div className = "seperator"><label htmlFor='phone'>Phone Number</label> <span>{props.error && !props.formData.phone && "This field is required !"}</span></div>
            <input name = 'phone' onChange={(e) => {props.setFormData({...props.formData, [e.target.name]: e.target.value})}} value = {props.formData.phone} required = {props.error} id = 'phone' type = 'text'placeholder='e.g. +1 234 567 890'/>        </div>

    </>
  )
}

export default PersonalInfo