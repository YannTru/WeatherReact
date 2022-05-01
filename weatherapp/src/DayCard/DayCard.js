import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import { WiDaySunny } from "react-icons/wi";

class DayCard extends Component{

    render(){
        return (
        <Card style={{width: "200px", textAlign: "center"}}>
            <Card.Title>
                <div style={{fontSize: "30px"}}>Monday</div>
                <div style={{color: "lightgray", fontWeight: "normal", fontSize: "15px"}}>May 2nd</div>
            </Card.Title>
            <Card.Body>
                <h1><WiDaySunny style={{fontSize: "75px"}}/><br/>
                    35 °C
                </h1>
                clear sky          
            </Card.Body>
        </Card>
        );
    }
}
export default DayCard;