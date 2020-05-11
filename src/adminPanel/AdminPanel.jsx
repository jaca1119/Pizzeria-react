import React from "react";
import AuthenticationService from "../service/AuthenticationService";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import BarChartAdapter from "./BarChartAdapter";
import Loader from "../addons/Loader";

class AdminPanel extends React.Component {

    state = {
        dailyOrders: [],
        isDataLoaded: false
    }

    componentDidMount() {

        fetch(AuthenticationService.API_URL + "/all-orders", {
            headers: {
                'Authorization': 'Basic ' + sessionStorage.getItem("credentials")
            }
        })
            .then(response => response.json())
            .then(json => {
                this.setState({ isDataLoaded: true });
                this.setState({ dailyOrders: BarChartAdapter.getDailyOrders(json) });
            });
    }

    render() {
        return (
            <div className="container">
                {!this.state.isDataLoaded && <Loader />}
                {this.state.dailyOrders.length !== 0 &&
                    <ResponsiveContainer>
                        <BarChart width={600} height={300} data={this.state.dailyOrders}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="numberOfOrders" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                }
            </div>
        )
    }
}

export default AdminPanel;