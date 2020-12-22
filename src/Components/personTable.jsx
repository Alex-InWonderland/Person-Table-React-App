import React, { Component } from "react";
import "../App.css";
import { person } from "../Data/person.json";

class PersonTable extends Component {


    render() {

        return (
            < div id="positioning-div" >
                <table>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Zodiac Sign</th>
                            <th>Favorite Color</th>
                            <th>
                                Top<br />
                                Favorite Food
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* First person below */}
                        <tr>
                            <td>{person[0].firstName}</td>
                            <td>{person[0].lastName}</td>
                            <td>{person[0].age}</td>
                            <td>{person[0].zodiacSign}</td>
                            <td>{person[0].favCol}</td>
                            <td>{person[0].favFood[0]}</td>
                        </tr>

                        {/* Second person below */}
                        <tr>
                            <td>{person[1].firstName}</td>
                            <td>{person[1].lastName}</td>
                            <td>{person[1].age}</td>
                            <td>{person[1].zodiacSign}</td>
                            <td>{person[1].favCol}</td>
                            <td>{person[1].favFood[0]}</td>
                        </tr>

                        {/* Third person below */}
                        <tr>
                            <td>{person[2].firstName}</td>
                            <td>{person[2].lastName}</td>
                            <td>{person[2].age}</td>
                            <td>{person[2].zodiacSign}</td>
                            <td>{person[2].favCol}</td>
                            <td>{person[2].favFood[0]}</td>
                        </tr>

                        {/* Fourth person below */}
                        <tr>
                            <td>{person[3].firstName}</td>
                            <td>{person[3].lastName}</td>
                            <td>{person[3].age}</td>
                            <td>{person[3].zodiacSign}</td>
                            <td>{person[3].favCol}</td>
                            <td>{person[3].favFood[0]}</td>
                        </tr>

                    </tbody>
                </table>
            </div >
        );
    }
}

export default PersonTable;