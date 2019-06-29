import React from 'react';
import PeopleItem from './PeopleItem';
import { Row } from 'antd';


class PeopleList extends React.Component{
    
    
    render(){
        
    const renderedList = this.props.people.map( person =>{
        
        return(
            <PeopleItem
                key={person.id} 
                person = {person}
                removeItem={this.props.removeItem}
                handleDataEdit = {this.props.handleDataEdit}
            />
            
        );
    });
    
    return(
        <Row>
            {renderedList}
        </Row>
    );

    }
}

export default PeopleList;