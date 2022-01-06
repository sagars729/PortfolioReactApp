import Typography from '@mui/material/Typography';

function Summary(){
	return (
		<div id="summary" className="primary-theme z-depth-2" >
			<h4 className="header_text tertiary-theme-text">
				Sagar Saxena
			</h4>
			<p className="flow-text body_text secondary-theme-text">
				I am a third-year Senior student at the University of Maryland at College Park. I am a Computer Science Major specializing in Machine Learning and minoring in Mathematics. My interests lie in Machine Learning and Computer Vision. You can find out more by clicking on the sections below. </p>
			<p className="flow-text body_text secondary-theme-text">
				Welcome to my landing page! This website is created with ReactJS, Material UI, MatrealizeCSS and running serverlessly on AWS using CloudFormation, S3, Route 53, ACM, and CloudFront. If you are interested can find the repository for this website <a href="https://github.com/sagars729/PortfolioReactApp" className="tertiary-theme-text">here</a> and the CDK <a href="https://github.com/sagars729/PortfolioCDK" className="tertiary-theme-text">here</a>.</p>
			<Typography>
				<a href="https://www.linkedin.com/in/sagar-saxena-714804159/" align="right">
					<p className="flow-text body_text tertiary-theme-text">
						Check Out My LinkedIn Profile
					</p>
				</a>
			</Typography>
		</div>
	);
}

export default Summary;
