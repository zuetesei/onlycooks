import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useQuery} from '@apollo/client'
import {QUERY_ME} from '../../utils/Queries'


function UserRecipes(props) {
    const { data } = useQuery(QUERY_ME)
   if(data){
    // const items = props.tiems
    const items = data.me.recipes
    console.log(items)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header> My Recipes </Card.Header>
            <ListGroup variant="flush">
                {items.map(item=>(
                    <ListGroup.Item ><h3>{item.recipeName}</h3> <p>{item.recipeText}</p><h4>Ingredients</h4><p>{item.ingredients}</p></ListGroup.Item>
                       
                ))}
            </ListGroup>
        </Card>
    )
   }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header> My Recipes </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> Recipe 1 </ListGroup.Item>
                <ListGroup.Item> Recipe 2 </ListGroup.Item>
                <ListGroup.Item> Recipe 3 </ListGroup.Item>
                
            </ListGroup>
        </Card>
           
    )
}

export default UserRecipes;