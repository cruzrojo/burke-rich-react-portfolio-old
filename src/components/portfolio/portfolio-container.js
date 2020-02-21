import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered");
    }
   
    portfolioItems() {
        const data = ["Quoth", "Eventsucks", "Ministry Unsafe", "Sucky Shooter"];

        return data.map(item => {
            return <PortfolioItem title={item} />
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here...updated for your convenience!</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}