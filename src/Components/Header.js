import React from 'react'
import './Header.css'
function Header(props) {

  return (
    <div className='fixed'>
        <div className='steps'>
            <div className={`circle ${props.page === 1 ? "chosen" : ""}`}>1</div>
            <div className='step-des'>
                STEP 1
                <span> YOUR INFO </span>
            </div>
        </div>
        <div className='steps'>
            <div className={`circle ${props.page === 2 ? "chosen" : ""}`}>2</div>
            <div className='step-des'>
                STEP 2
                <span> SELECT PLAN </span>
            </div>
        </div>
        <div className='steps'>
            <div className={`circle ${props.page === 3 ? "chosen" : ""}`}>3</div>
            <div className='step-des'>
                STEP 3
                <span> ADD-ONS </span>
            </div>
        </div>
        <div className='steps'>
            <div className={`circle ${props.page === 4 || props.page === 5 ? "chosen" : ""}`}>4</div>
            <div className='step-des'>
                STEP 4
                <span> SUMMARY </span>
            </div>
        </div>
    </div>
  )
}

export default Header