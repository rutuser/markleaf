import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import '../css/info.css';

class Info extends Component {
    render() {
        return (
            <Jumbotron>
                <div className='mainDiv'>
                <h1>INFO</h1>
                    <p>
                        Welcome to Markleaf.
                </p>
                    <p>
                        This web app will help You to find your car when You dont remember where did You park it.
                            First of all You see the Header of the page, which has some funcions on it.
                </p>
                    <p> Home: this seccion will allow You to visualize the map component.</p>
                    <p>
                        Help: this is composed by two elements. The first You will find is Status, where You can see our web app status
                            in Twitter (this action will redirect You to another page).
                            Another action You will find is the Find section your are in right now :)
                </p>
                    <p>
                        HEADER SECTION
                </p>
                    <p>
                        Park: this action will set your car position in our map/database. You have to press this one
                            when You park your car.
                </p>
                <p>
                        Where did I park?: this one will let You know where did You park the car.
                </p>
                    <p>
                        BOTTOM NAVI SECTION
                    </p>
                    <p>
                        In the app You can acces to the Navi bar placed in the bottom of the page, swiping up your finger from the footer.
                        In this section You will see: 
                    </p>
                    <p>
                        My location: this action will allow You to see whatever your location is at the moment.
        
                </p>
                    <p>
                        G0 / ST0P: these two are the Direction actions. The G0 method will allow You to set a direction from your
                            location to your car. The ST0P method will stop the Direction action.
                            Consider having the My location and Park methods activated first, otherwise the Direction render wont work.
        
                </p>
                    <p>
                        TrafficLawyer: finally You have this action that let You see the traffic status in real time. Helpfull enough.
        
                </p>
                </div>
            </Jumbotron>
        );
    }
}

export default Info;
