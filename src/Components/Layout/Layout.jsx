    import React from 'react'
    import style from "./Layout.module.css" 
import { Outlet } from 'react-router-dom'
import Footer from './../Footer/Footer'
import NaveBar from './../NaveBar/NaveBar'

    export default function Layout() {
      return <>
         
<NaveBar />

 <div className="container my-5 py-5">
  <Outlet /> 
 </div>

<Footer />
         
      </>
    }
    