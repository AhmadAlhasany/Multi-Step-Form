import React from 'react'
import './Styles/Addons.css'
function Addons(props) {
  return (
    <>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className={`check ${props.formData.service ? "sel" : ""}`}>
        <div className='rflex'>
          <input className='show' type="checkbox" checked = {props.formData.service}  onChange={() => {props.setFormData({...props.formData, service: !props.formData.service})}}/>
          <div className='cflex'>
            Online service
            <p>Access to multiplayer games</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className={`check ${props.formData.storage ? "sel" : ""}`}>
        <div className='rflex'>
          <input className='show'type='checkbox' checked = {props.formData.storage}  onChange={() => {props.setFormData({...props.formData, storage: !props.formData.storage})}}/>
          <div className='cflex'>
            Larger storage
            <p>Extra 1TB of cloud save</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className={`check ${props.formData.profile ? "sel" : ""}`}>
        <div className='rflex'>
          <input className='show' type='checkbox' checked = {props.formData.profile}  onChange={() => {props.setFormData({...props.formData, profile: !props.formData.profile})}}/>
          <div className='cflex'>
            Customizable profile
            <p>Custom theme on your profile</p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Addons