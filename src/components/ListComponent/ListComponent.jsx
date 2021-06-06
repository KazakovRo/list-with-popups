import React from 'react'

// import PopupComponent from '../PopupComponent/PopupComponent'
import ListItemComponent from './../ListItemComponent/ListItemComponent'
import { list, showList } from './ListComponent.module.scss'

const ListComponent = ({ isOpenList, itemsData, handleShowPopup, isOpenPopup, setOpenPopup }) => {

  return (
    <ul className={`${list} ${isOpenList ? `${showList}` : ''}`}>
      {itemsData.map(({id, professor, shortDescription, subList }) => (
        <ListItemComponent
          key={id}
          professorData={professor}
          shortDescription={shortDescription}
          description={subList.description}
          time={subList.time}
          handleShowPopup={handleShowPopup}
          isOpenPopup={isOpenPopup}
          setOpenPopup={setOpenPopup}
        />
      ))}
    </ul>
  )
}

export default ListComponent

