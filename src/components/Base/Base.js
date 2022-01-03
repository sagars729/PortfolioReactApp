import Sidebar from './Sidebar'
import Topbar from './Topbar'
import React, { useState } from 'react';
import Footer from './Footer'

function Base(props){
   document.title = props.title
   const [sidebarVisible, setSidebarVisible] = useState(false);

   return (
	<>
        <Topbar setSidebarVisible={setSidebarVisible}></Topbar>
        <Sidebar open={sidebarVisible} setVisible={setSidebarVisible}></Sidebar>
		{props.content}

        <Footer />        
        {/* External Scripts */}        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	</>
   )
}
export default Base;
