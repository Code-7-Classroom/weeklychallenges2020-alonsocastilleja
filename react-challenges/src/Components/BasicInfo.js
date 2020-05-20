import React from 'react';



class Person extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.person.map(info => (
                        <li>Name: {info.name} , Phone: {info.phone} , DOB: {info.dob} </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Person;