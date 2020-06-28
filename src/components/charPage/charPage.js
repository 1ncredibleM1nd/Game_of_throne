import React,{Component} from 'react';
import {Col,Row,Container} from 'reactstrap'
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import Error from "../errorMessage";
import gotService from "../../services/gotService";
import RowBlock from "../rowBlock";


export default class CharacterPage extends Component{
	gotService= new gotService();
	state = {
		selectedChar: null,
		error: false
	};
	onItemSelected = (id) => {
		this.setState({
			selectedChar: id
		})
	};
	componentDidCatch(error, errorInfo) {
		this.setState({
			error:true
		})
	}
	
	render() {
		if(this.state.error){
			return <Error/>
		}
		
		const itemList = (<ItemList
			onItemSelected={this.onItemSelected}
			getData={this.gotService.getAllCharacters}
			renderItem={({name,gender})=>`${name}(${gender})`}
		/>);
		
		const charDetails = (<CharDetails charId={this.state.selectedChar}/>);
		return(
			<RowBlock left={itemList} right={charDetails}/>
		)
	}
}
