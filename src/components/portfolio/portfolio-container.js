import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio...sucka!",
            data: [
                {title: "Quoth", url: 'quoth.com' },
                {title: "Eventsucks", url: 'eventsucks.com' },
                {title: "Ministry Unsafe", url: 'ministryunsafe.com' },
                {title: "Sucky Shooter", url: 'suckyshooter.com' },
            ]
        }

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)

    }
   
    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={item.url} />
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: 'AHHHHHHHGGG MY EEEYYYEEEESSSSS'
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}

                <hr/>

                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        )
    }
}