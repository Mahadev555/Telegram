import React from 'react'
import Page4one from './Page4one'
import Page4two from './Page4two'
import { useLocation } from 'react-router-dom';

function Page4() {

    const  location = useLocation(); 
    const idd =location.state.id;
    const mob = location.state.mobile
    const isAdmin = location.state.isAdmin
    console.log(location)
  return (
    <div>
     <Page4one  idd={idd} mob={mob} isAdmin={isAdmin}/>
     <Page4two/>
    </div>
  )
}

export default Page4
