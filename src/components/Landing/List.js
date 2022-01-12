
function List(props){
	return (
		<div>
			{props.flowText ? (
				<h5 className={"header_text " + props.text_theme}>
					{props.category}
				</h5>) : (
				<h6 className={"header_text " + props.text_theme}>
					{props.category}
				</h6>)}
			<hr/>
			<p className={(props.flowText ? "flow-text " : "") + "body_text list_contents " + props.text_theme}>
				{props.contents.join('\t\u2022\t')}
			</p>
		</div>
	);
}

export default List;
