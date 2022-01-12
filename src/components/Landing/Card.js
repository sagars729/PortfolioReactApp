import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import PopUp from './PopUp';

function updateClassName(setClassName, small, shadow) {
	setClassName("card_content" + (small ? " card_small" : "") + (shadow ? " z-depth-5": ""));
}

function add_shadow(setClassName, small, setPromptVisibility) {
	updateClassName(setClassName, small, true);
	setPromptVisibility("visible")
}

function rem_shadow(setClassName, small, setPromptVisibility) {
	updateClassName(setClassName, small, false);
	setPromptVisibility("hidden")
}

function Card(props) {
	const [className, setClassName] = useState("card_content" + (props.small ? " card_small" : ""));
	const [promptVisibility, setPromptVisibility] = useState("hidden");
	const [modalOpen, setModalOpen] = useState(false);

	const right_card = props.right ? (<></>) : (<Grid item xs={2}><img src={props.card_img}/></Grid>);
	const left_card = props.right ? (<Grid item xs={2}><img src={props.card_img}/></Grid>) : (<></>);
	const center_card = (
            <Grid item xs={10}>
                <h5 className="header_text">{props.position}</h5>
                <h6 className="body_text">{props.company}</h6>
                <h6 className="body_text">{props.duration}</h6>
                <h6 className="body_text">{props.location}</h6>
            </Grid>
        );
	const card_content = (props.small ?
		(
			<Grid item xs={10}>
				<h6 className="header_text">{props.position}</h6>
				<p className="body_text">{props.company}</p>
				<p className="body_text">{props.duration}</p>
				<p className="body_text">{props.location}</p>
  			</Grid>
		) : center_card);

	return (
		<>
		<a 
			href={props.card_link ? props.card_link : "#" + props.elid + "_card"} 
			onClick={() => setModalOpen(true)}
			className={props.theme_text}
			>
		
			<div 
				onTouchStart={() => add_shadow(setClassName, props.small, setPromptVisibility)} 
				onTouchEnd=  {() => rem_shadow(setClassName, props.small, setPromptVisibility)} 
				onMouseEnter={() => add_shadow(setClassName, props.small, setPromptVisibility)} 
				onMouseLeave={() => rem_shadow(setClassName, props.small, setPromptVisibility)} 
				className={className} 
				id={props.elid + "_card"}
				href={props.card_link ? props.card_link : "#" + props.elid + "_card"}>

				<Grid container spacing={0}>
					{left_card}
					{card_content}
					{right_card}
				</Grid>

				<p className="centerel expandPrompt" style={{visibility: promptVisibility}}>Click To Expand</p>
			</div>
		</a>
		{props.card_link ? (<></>) : (
			<PopUp
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				elid={props.elid}
				left_card={left_card}
				center_card={center_card}
				right_card={right_card}
				description={props.description}
				skills={props.skills} 
				external_links={props.external_links} 
				lists={props.lists}/>
		)}
		</>
	);
}

export default Card;
