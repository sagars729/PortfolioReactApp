import Grid from '@mui/material/Grid';

function Describe(props) {
	return (
		<Grid container spacing={0}>
			<Grid item xs={9}>
				<h6 className="header_text">Description</h6>
				<div className="description">
					{props.description.split('\n').map((line) =>
						<p className="body_text">{line}</p>
					)}
				</div>
			</Grid>
			<Grid item xs={3}>
				<h6 className="header_text">Skillset</h6>
				<ul className="body_text skillset">
					{props.skills.map((skill) =>
						skill === 'line' ? <hr/> : (<li>{skill}</li>)
					)}
				</ul>
  			</Grid>
		</Grid>
	);
}
export default Describe;
