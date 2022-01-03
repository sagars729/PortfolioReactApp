import Sidebar from './Sidebar'
import Topbar from './Topbar'
import React, { useState } from 'react';
import Footer from './Footer'

function Base(props){
   document.title = props.title
   const [sidebarVisible, setSidebarVisible] = useState(false);

   return (
	<>
		<head>
			<meta charset="UTF-8"/>
			{/* External Stylesheets */}
			{/* Materialize CSS */}
    		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
			{props.links}
		</head>
        <Topbar setSidebarVisible={setSidebarVisible}></Topbar>
        <Sidebar open={sidebarVisible} setVisible={setSidebarVisible}></Sidebar>
		{props.content}

        <Footer />        
        {/* External Scripts */}        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
		{/* Materialize JavaScript */}
		<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
	</>
   )
}
export default Base;
