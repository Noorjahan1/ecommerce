import React from 'react'
import style from './logo.module.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
function Logo() {
  return (
    <div className={`${style.logoContent} flex justify-between items-center`}>
      <a href='/'><h1 className='text-[30px] font-bold'><span className={style.Logo}>L</span>OGO</h1></a>
      <a href='/Register' className='text-white text-[20px]'>  Create Account <FontAwesomeIcon icon={faUserPlus} className=' ml-2 ' /></a> 
    </div>
  )
}

export default Logo
