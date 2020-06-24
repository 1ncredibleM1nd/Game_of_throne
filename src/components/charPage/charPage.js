import React,{Component} from 'react';
import {Col,Row,Container} from 'reactstrap'
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import Error from "../errorMessage";


export default class CharacterPage extends Component{
	
	state={
		selectedChar:130,
		error:false
	};
	onCharSelected =(id)=>{
		this.setState({selectedChar:id})
		
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
		return(
			<Row>
				<Col md='5'>
					<ItemList onCharSelected={this.onCharSelected}/>
				</Col>
				<Col md='5'>
					<CharDetails charId={this.state.selectedChar}/>
				</Col>
		
			</Row>
		)
	}
}