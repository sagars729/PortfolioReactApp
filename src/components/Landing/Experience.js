import Card from './Card';
import data from './data';

function Experience() {
	const experience = data["experience"];

	return (
		<div id="exp" className="secondary-theme">
			<h4 class="header_text primary-theme-text">Experiences</h4>
			
			{experience.map(exp =>
				<Card
					small={false}
					right={false}
					theme_text="black-theme-text"
					elid={exp["id"]}
					position={exp["position"]}
					company={exp["company"]}
					duration={exp["duration"]}
					location={exp["location"]}
					card_img={exp["icon"]}
					description={exp["description"]}
					skills={exp["skills"]}	
					card_link={exp["link"]}
					external_links={exp["external_links"]}
				/>
			)}	
		</div>
	)
}

export default Experience;
