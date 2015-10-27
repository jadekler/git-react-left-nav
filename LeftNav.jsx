import React, { Component, PropTypes } from 'react'

const LeftNav = React.createClass({
    getInitialState() {
        return {
            active: false
        }
    },

    handleClick(event) {
        this.state.active = !this.state.active

        if (this.state.active) {
            document.getElementsByTagName("body")[0].style.position = "relative"
            document.getElementsByTagName("body")[0].style.left = "300px"
        } else {
            document.getElementsByTagName("body")[0].style.position = ""
            document.getElementsByTagName("body")[0].style.left = ""
        }
    },

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-target=".navmenu" data-canvas="body"
                                onClick={this.handleClick}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Brand</a>
                        <ul className="nav navbar-nav hidden-xs">
                            {this._listItems(this.props.links)}
                        </ul>
                    </div>

                    <div className="offcanvas navmenu navmenu-default navmenu-fixed-left">
                        <a className="navmenu-brand" href="#">Project name</a>
                        <ul className="nav navmenu-nav">
                            {this._listItems(this.props.links)}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    },

    _listItems(links = []) {
        if (links.length == 0) {
            console.debug("No links passed to LeftNav. Try <LeftNav links={someLinks} />")
        }

        return links.map(function(link, index) {
            if (link.active) {
                return (
                    <li key={index} className="active"><a href={link.url}>{link.text}<span
                        className="sr-only">(current)</span></a></li>
                )
            } else {
                return (
                    <li key={index}><a href={link.url}>{link.text}</a></li>
                )
            }
        })
    }
})

export default LeftNav