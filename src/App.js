import React from 'react'
import Accordian from './components/Accordian/Accordian'
import RandomColor from './components/RandomColor/RandomColor'
import Calculator from './components/Calculator/Calculator'
import LoadMoreButton from './components/Load-More-Button/LoadMoreButton'
import QrcodeGenerator from './components/QrcodeGenerator/QrcodeGenerator'
import LightDark from './components/Light-Dark-ModeButton/LightDark'
import Scrollindicator from './components/Scroll-Indicator/Scrollindicator'
import CustomTab from './components/Custom-Tabs/CustomTab'
import Tabs from './components/Custom-Tabs/Tabs'
import CutomModal from './components/Custom-Modal-Popup/CutomModal'
import Password from './components/PassordGenerator/Password'
function App() {
  return (
    <div>
      
   <Calculator/>
    <Accordian/>
    <RandomColor/>
  <LoadMoreButton/>
  <QrcodeGenerator/>
  <LightDark/>
  <Scrollindicator/>
  <Tabs/>
  <CutomModal/>
  <Password/>
  </div>
  )
}

export default App