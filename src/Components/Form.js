import React from 'react'
import Buttons from './Buttons'
import Header from './Header'
import PersonalInfo from '../Pages/PersonalInfo'
import SelectPlan from '../Pages/SelectPlan'
import Addons from '../Pages/Addons'
import Summary from '../Pages/Summary'
import Thank from '../Pages/Thank'
import './Button.css'

function Form() {
    const [page, setPage]  = React.useState(1);
    const [error, setError] = React.useState(false)
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        plan: false,
        arr: ["Arcade", 9],
        service: false,
        storage: false,
        profile: false
    })
    function displayPage(){
        switch(page){
            case 1: return <PersonalInfo formData = {formData} setFormData = {setFormData} error = {error}/>
            case 2: return <SelectPlan formData = {formData} setFormData = {setFormData} />
            case 3: return <Addons formData = {formData} setFormData = {setFormData}/>
            case 4: return <Summary formData = {formData} setPage = {setPage}/>
            case 5: return <Thank/>
        }
    }
  return (
    <div className='form'>
            <Header page = {page}/>
        <div className='form-window'>
            <div className='form-page'>
                {displayPage()}
            </div>
            <div className='form-buttons'>
                <Buttons onChange = {setPage} page = {page} formData = {formData} setError = {setError}/>
            </div>
        </div>
    </div>
  )
}

export default Form