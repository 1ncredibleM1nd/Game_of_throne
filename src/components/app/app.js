import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import Error from "../errorMessage";


export default  class App extends Component{
    
    state={
        isActive:true,
        selectedChar:null,
        error:false
};
    onToggle=()=>{
        this.setState((state)=>{
            return {
                isActive: !state.isActive
            }
           
        })
    }
    ;
    onCharSelected =(id)=>{
        this.setState({selectedChar:id})
        
    };
    
    componentDidCatch(error, errorInfo) {
        console.log('error');
        this.setState({
            error:true
        });
    }
    
    render() {
        
        const char = this.state.isActive ?<RandomChar/> :null;
        if(this.state.error){
            return <Error/>
        }
        
        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row>
                        
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                        </Col>
                      
                       
                    </Row>
                    <Row>
                        <Col lg={ {size: 2 , offset : 0}}>
                            <button className="btn btn-bg btn-danger mb-5 " onClick={this.onToggle}>Toggle</button>
                        </Col>
                        <Col md='5'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='5'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
    
}