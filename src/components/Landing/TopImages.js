import Box from '@mui/material/Box';
import { Parallax } from 'react-parallax';
import me from './assets/me.png';
import purple_space from './assets/purple_space.jpg';

function TopImages() {
	return (
		<div id="top">
			<Parallax bgImage={purple_space} strength={500}>
				<div class="parallax-container"></div>
			</Parallax>
			<Box sx={{ boxShadow: 25}}>
				<img id="pfp" src={me}/>
			</Box>
		</div>
	);
}

export default TopImages;
