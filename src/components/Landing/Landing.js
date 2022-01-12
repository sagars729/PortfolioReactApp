import TopImages from './TopImages';
import Summary from './Summary';
import CardList from './CardList';
import ListList from './ListList';
import Projects from './Projects';
import data from './data';
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
				{/** Education **/}
				<CardList
					id="education"
					theme="primary-theme"
					header_theme="tertiary-theme-text"
					header="Education"
					data={data["education"]}
					text_theme="secondary-theme-text"/>
				{/** Skills **/}
				<ListList
					id="skills"
					header="Skills"
					theme="secondary-theme"
					header_theme="primary-theme-text"
					data={data["skills"]}
					text_theme="black-theme-text"
				/>
				{/** Extracurriculars **/}
				<CardList
					id="extracurriculars"
					theme="primary-theme"
					header_theme="tertiary-theme-text"
					header="Extracurriculars"
					data={data["extracurriculars"]}
					text_theme="secondary-theme-text"/>
				{/** Accomplishments**/}
				<CardList
					id="accomplishments"
					theme="secondary-theme"
					header_theme="primary-theme-text"
					header="Accomplishments"
					data={data["accomplishments"]}
					text_theme="black-theme-text"/>
				{/** Scores **/}
				<ListList
					id="scores"
					header="Scores"
					theme="primary-theme"
					header_theme="tertiary-theme-text"
					data={data["scores"]}
					text_theme="secondary-theme-text"
				/>
				{/** Projects **/}
				<Projects />				
			</div>
		</div>
	);
}

export default Landing;
