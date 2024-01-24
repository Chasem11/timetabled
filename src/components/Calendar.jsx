import React from "react";
import Event from './Event'


const Calendar = () => {
    return (
        <div className='Calendar'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Starbucks' location='646 Midnight Ave' color='Green'/><td></td><td></td><td>
                        </td><td></td><Event event="Yolk" location='355 E Ohio St' color="Green"/>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td><td></td><Event event='Subway' location='Grand Station' color='Pink'/><td>
                        </td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td><Event event='River Cruise' location='Chicago River' color='Blue'/><td></td><td>
                        </td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td><td></td><Event event='Deep Dish' location="Giodano's" color='Green'/><td>
                        </td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td><td></td><td></td><td>
                        </td><td></td><td></td><Event event='Subway' location='Washingtson Station' color='Pink'/>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td><td></td><td></td><td>
                        </td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td><Event event='Art Institute' location='111 S Michigan Ave' color='Blue'/><td></td>
                        <Event event='Girl & the Goat' location='809 W Randolph St' color='Green'/><td>
                        </td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event event='Cube Game' location='Wrigley Field' color='Blue'/><td></td><td></td>
                        <Event event='Subway' location='Roosevelt Station' color='Pink'/><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td><Event event='Fancy Dinner' location='Maple & Ash' color='Green'/><td>
                        </td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td><td></td><td></td><td>
                        </td><td></td><Event event='Shopping' location='Magnificent Mile' color='Blue'/><td></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Calendar;