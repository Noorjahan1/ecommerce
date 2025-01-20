import React from 'react'
import style from './category.module.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons';    
function Category() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-12 col-sm-12 col-md-12 col-xs-12'>
                
                <ul className={`${style.category} `}>
                    <li>Smart Phone</li>
                    <li>Desktop</li>
                    <li>Laptop</li>
                    <li>Accessories</li>
                    <li>Networking</li>
                    <li>Software</li>
                    <li><input type='text'></input><FontAwesomeIcon icon={faSearch}/></li>
                </ul>
                
                
              
            </div>
        </div>
      
    </div>
  )
}

export default Category
