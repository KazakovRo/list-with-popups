import React from 'react'

import { showBtn } from './ShowListButton.module.scss'

const ShowListButton = ({handleShowList}) => {

  return (
    <button className={showBtn} onClick={handleShowList}>Show list</button>
  )
}

export default ShowListButton
