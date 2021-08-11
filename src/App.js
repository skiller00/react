import React from 'react'
import Button from './components/Button'
import Header from './components/Header'


const Nav = ["home",'about us','contact us',"service"]

const NavNew = Nav.map((list , index)=> <li key={`list_${index+1}`}>{list}</li>)

function App(props) {
  return <>
    <Header>
        {NavNew}
    </Header>
   <Button text="Submit"/>
  </>
}

export default App;
