import React from 'react'

import PopupComponent from './../PopupComponent/PopupComponent'
import { listItem, chevron, professor, itemDescription } from './ListItemComponent.module.scss'

const ListItemComponent = ({ professorData, shortDescription, description, time, handleShowPopup, isOpenPopup, setOpenPopup }) => {

  return (
    <li className={listItem} onClick={handleShowPopup} >
      <p className={professor}>{professorData}</p>
      <p className={itemDescription}>{shortDescription}</p>

      <span className={chevron}></span>

      <PopupComponent
        professorData={professorData}
        shortDescription={shortDescription}
        description={description}
        time={time}
        isOpenPopup={isOpenPopup}
        setOpenPopup={setOpenPopup}
      />
    </li>
  )
}


export default ListItemComponent