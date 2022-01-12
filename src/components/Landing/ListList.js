import List from './List';

function ListList(props){
	return (
		<div id={props.id} className={props.theme}>
			<h4 className={"header_text " + props.header_theme}>
				{props.header}
			</h4>
		
			{props.data.map(list =>
				(<List
					flowText={true}
					category={list["category"]}
					contents={list["contents"]}
					text_theme={props.text_theme}
				/>))
			}
		</div>
	);
}

export default ListList;
