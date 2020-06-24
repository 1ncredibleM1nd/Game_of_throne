import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default  class App extends Component{
    
    state={
        isActive:true,
        selectedChar:null
};
    onToggle=()=>{
        this.setState((state)=>{
            return {
                isActive: !state.isActive
            }
           
        })
    }
    ;
    
    
    
    render() {
        
        const char = this.state.isActive ?<RandomChar/> :null;
        
        
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
                            <ItemList/>
                        </Col>
                        <Col md='5'>
                            <CharDetails/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
    
}