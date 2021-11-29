import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/Header/Header';

let App=()=>
{
  return(
    <>
        <Header/>
    </>
  )
}
ReactDom.render(<App/>,document.getElementById('root'));





if(module.hot){
  module.hot.accept();
}

