import React from 'react'
import './Styles/Summary.css'
function Summary(props) {
  const pl = props.formData.plan;
  const sum = props.formData.arr[1] + (props.formData.service && pl ? 10 : props.formData.service ? 1 : 0) +  (props.formData.storage && pl ? 20 : props.formData.storage ? 2 : 0) +  (props.formData.profile && pl ? 20 : props.formData.profile ? 2 : 0);
  return (
  <>
    <h1>Finishing up</h1>
    <p>  Double-check everything looks OK before confirming.</p>
    <div className='hadto'>
    <div className='summary'>
      <div className='finalPlan'>
          <div className='line'>
          <div className='cflex fo'>
            {`${props.formData.arr[0]} (${props.formData.plan ? "Yearly" : "Monthly"})`}
            <p onClick={() => {props.setPage(2)}}>Change</p>
          </div>
          <span>${`${props.formData.arr[1]} ${props.formData.plan ? "/yr" : '/mo'}`}</span>
        </div>
      </div>
      {(props.formData.service || props.formData.profile || props.formData.storage) && <div className='costs'>
        
        {props.formData.service && <div className='same'><p>Online service</p> +${props.formData.plan ? "10/yr" : '1/mo'}</div>}
        {props.formData.storage && <div className='same'><p>Larger storage</p> +${props.formData.plan ? "20/yr" : '2/mo'}</div>}
        {props.formData.profile && <div className='same'><p>Customizable profile</p> +${props.formData.plan ? "20/yr" : '2/mo'}</div>}

      </div>}
    </div>
    <div className='rflex total'><p>Total (per {props.formData.plan ? "year)": "month)"}</p> <strong>+${sum}/{props.formData.plan ? "yr": "mo"}</strong></div>
    </div>
  </>
  )
}

export default Summary