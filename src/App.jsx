import React, { useState } from 'react'

import ShowListButton from './components/ShowListButton/ShowListButton'
import ListComponent from './components/ListComponent/ListComponent'
import { buttonWrapper } from './App.module.scss'

// треба було імпортити дату в апп ?
import peoples from './static/peoples.json'

const App = () => {
  const [isOpenList, setOpenlist] = useState(false)
  const [isOpenPopup, setOpenPopup] = useState(false)

  // cosnt itemsData = JSON.parse(JSON.stringify(peoples))
  const itemsData = peoples.data

  const handleShowList = () => setOpenlist(!isOpenList)
  const handleShowPopup = () => setOpenPopup(!isOpenPopup)

  return (
    <section className={buttonWrapper}>
      <ShowListButton handleShowList={handleShowList} setOpenlist={setOpenlist} />

      <ListComponent isOpenList={isOpenList} itemsData={itemsData} handleShowPopup={handleShowPopup} isOpenPopup={isOpenPopup} setOpenPopup={setOpenPopup} />
    </section>
  )
}

export default App
