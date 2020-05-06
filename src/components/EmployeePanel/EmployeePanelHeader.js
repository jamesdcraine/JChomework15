import React from "react"

class EmployeePanelHeader extends React.Component {

    render() {
        const {name , info} = this.props.employee
        const image = "images/" + name + ".jpg"
        return (
            <div>
                <img alt="header" src={image}/>
                <h2>{name}</h2>
                <h3>{info}</h3>
            </div>
        );
    }
}

export default EmployeePanelHeader