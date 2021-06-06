import React from 'react'

import { itemPopup, closePopup, popupHeader, infoPopup, timePopup, shortDescriptionPopup, professorPopup, descriptionPopup, personPhoto, icon, infoIcon, showPopup } from './PopupComponent.module.scss'
import personPhotoItem from './../../images/professor-1.png'
import clock from './../../images/clock.png'


const PopupComponent = ({professorData, shortDescription, description, time, isOpenPopup }) => {

  return (
          // className={`${list} ${isOpenList ? `${showList}` : ''}`}
    <div className={`${itemPopup} ${isOpenPopup ? `${showPopup}` : '' }`}>
      <button className={closePopup} ></button>

      <div className={popupHeader}>
        <div className={personPhoto}>
          <img src={personPhotoItem} alt="personPhotoImage" />
        </div>
        
        <div className={infoPopup}>
          <div className={infoIcon}>
            <img className={icon} src={clock} alt="clock" />
          </div>

          <p className={timePopup}>{time}</p>
          <p className={shortDescriptionPopup}>{shortDescription}</p>
          <p className={professorPopup}>{professorData}</p>
        </div>
      </div>

      <p className={descriptionPopup}>{description}</p>
    </div>
  )
}

export default PopupComponent

