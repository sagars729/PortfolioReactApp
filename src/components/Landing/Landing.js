import TopImages from './TopImages';
import Summary from './Summary';
import Experience from './Experience';
import './landing.css';

function Landing() {
	return (
		<div id="content">
			<TopImages></TopImages>
			<div class="content_text">
				<Summary/>
				<Experience/>
			</div>
		</div>
	);
}

export default Landing;
