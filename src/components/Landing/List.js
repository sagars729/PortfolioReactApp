
function List(props){
	return (
		<div>
			{props.flowText ? (
				<h6 className="header_text">
					{props.category}
				</h6>) : (
				<h5 className="header_text">
					{props.category}
				</h5>)}
			<hr/>
			<p className={(props.flowText ? "flow-text " : "") + "body_text list_contents"}>
				{props.contents.join('\t\u2022\t')}
			</p>
		</div>
	);
}

export default List;
