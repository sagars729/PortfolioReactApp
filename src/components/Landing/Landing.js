import TopImages from './TopImages';
import Summary from './Summary';
import CardList from './CardList';
import data from './data'
import './landing.css';

function Landing() {
	return (
		<div id="content">
			<TopImages></TopImages>
			<div class="content_text">
				{/** Summary **/}
				<Summary/>
				{/** Experiences **/}
				<CardList
					id="experiences"
					theme="secondary-theme"
					header_theme="primary-theme-text"
					header="Experiences"
					data={data["experience"]}
					text_theme="black-theme-text"/>
				{/** Experiences **/}
				<CardList
					id="education"
					theme="primary-theme"
					header_theme="tertiary-theme-text"
					header="Education"
					data={data["education"]}
					text_theme="secondary-theme-text"/>

			</div>
		</div>
	);
}

export default Landing;
