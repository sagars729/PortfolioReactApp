import TopImages from './TopImages';
import Summary from './Summary';
import './landing.css';

function Landing() {
	return (
		<div id="content">
			<TopImages></TopImages>
			<div class="content_text">
				<Summary/>
			</div>
		</div>
	);
}

export default Landing;
