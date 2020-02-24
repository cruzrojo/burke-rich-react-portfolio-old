import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio...sucka!",
            isLoading: false,
            data: [
                {title: "Quoth", url: 'quoth.com', category: 'eCommerce' },
                {title: "Eventsucks", url: 'eventsucks.com', category: 'Scheduling' },
                {title: "Ministry Unsafe", url: 'ministryunsafe.com', category: 'Enterprise' },
                {title: "Sucky Shooter", url: 'suckyshooter.com', category: 'eCommerce' },
            ]
        }

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={item.url} />
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}

            </div>
        )
    }
}