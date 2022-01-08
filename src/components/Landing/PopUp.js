import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Describe from './Describe';
import Card from './Card';

function PopUp(props) {
	const external_links = props.external_links ? props.external_links : [];
	return (	
		<Modal
			open={props.modalOpen}
			onClose={() => props.setModalOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			>
			<div id={props.elid}>
					<Box style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						bgcolor: 'white'
						}}
						className="modal-box"
						>
							<div className="modal-content secondary-theme">
								<Grid container spacing={0}>
									{props.left_card}
									{props.center_card}
									{props.right_card}
								</Grid>
								<Describe 
									description={props.description}
									skills={props.skills}
									/>
			
								{external_links.map(link =>
									<Card
										small={true}
										right={false}
										theme_text="black-theme-text"
										elid={link["id"]}
										position={link["title"]}
										company={link["subtitle"]}
										duration={link["status"]}
										location={link["description"]}
										card_img={link["icon"]}
										card_link={link["link"]}
									/>
								)}	
								
			                	<Typography>
									<p 
										className="flow-text body_text tertiary-theme-text"
										align="right"
										onClick={() => props.setModalOpen(false)}
										>Close
									</p>
								</Typography>
							</div>
					</Box>
			</div>	
		</Modal>
	);
}

export default PopUp;
