import React from 'react'
import './Styles/SelectPlan.css'

function SelectPlan(props) {
  const [factor, setFactor]  = React.useState(1);
  React.useEffect(()=>{
    if(props.formData.plan)
    {
      setFactor(10)
      if(props.formData.arr[1] < 90)
      props.setFormData({...props.formData, arr: [props.formData.arr[0], props.formData.arr[1]*10]})
    }
    else if(props.formData.arr[1] > 20){
      setFactor(1)
      props.setFormData({...props.formData, arr: [props.formData.arr[0], props.formData.arr[1]/10]})
    }
  }, [props.formData.plan])

  function Change (e){
    if(Number(e.currentTarget.id) === 9){
      props.setFormData({...props.formData, arr: ["Arcade", 9 * factor]})
    }
    else if(Number(e.currentTarget.id) === 12){
      props.setFormData({...props.formData, arr: ["Advanced", 12 * factor]})
    }
    else if(Number(e.currentTarget.id) === 15){
      props.setFormData({...props.formData, arr: ["Pro", 15 * factor]})
    }
  }

  let mstyle, ystyle;
  mstyle = ystyle = {
    color: "#0C2D54"
  }
  if(!props.formData.plan){
    ystyle = {
      color: "#9696A0"
    }
  }
  else
    mstyle = {
      color: "#9696A0"
    }
    
  return (
    <div className='fixIt'>
      <h1>Select your plan</h1>
      <p className='mr'>You have the option of monthly or yearly billing.</p>
      <div className='grid'>
          <div id = "9" className={`grid-ch ${props.formData.arr[0] === "Arcade" ? "sel" : ""}`}onClick={Change}>
          <img src = {process.env.PUBLIC_URL + '/assets/images/icon-arcade.svg'} alt='icon'/>
          <div className="describtion">
            <div className ='pr-wrapper'>Arcade
            <p>{props.formData.plan ? "$90/yr" :"$9/mo"}</p> </div>
           { props.formData.plan && <span>2 months free</span>}
          </div>
        </div>
        <div id ='12' className={`grid-ch ${props.formData.arr[0] === "Advanced" ? "sel" : ""}`} onClick={Change}>
          <img src = {process.env.PUBLIC_URL + '/assets/images/icon-advanced.svg'} alt='icon'/>
          <div className="describtion">
            <div className ='pr-wrapper'>Advanced
            <p>{props.formData.plan ? "$120/yr" :"$12/mo"}</p> </div>
            { props.formData.plan &&<span>2 months free</span>}          </div>  
        </div>
        <div id = '15' className={`grid-ch ${props.formData.arr[0] === "Pro" ? "sel" : ""}`} onClick={Change}>
          <img src = {process.env.PUBLIC_URL + '/assets/images/icon-pro.svg'} alt='icon'/>
          <div className="describtion">
            <div className ='pr-wrapper'>Pro
            <p>{props.formData.plan ? "$150/yr" :"$15/mo"}</p> </div>
            { props.formData.plan &&<span>2 months free</span>}          </div>
        </div>
      </div>
      <div className='oshell'>
        <span style = {mstyle}>Monthly</span>
        <input id= 'plan' name='plan' type = 'checkbox' checked = {props.formData.plan} onChange = {(event) =>{props.setFormData({...props.formData, plan: !props.formData.plan})}}/>
        <label htmlFor = 'plan' className='ishell'></label>
        <span style = {ystyle}>Yearly</span>
       </div>
    </div>
  )
}

export default SelectPlan