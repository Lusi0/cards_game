//import rea
import React from 'react';
// new card component

class Header extends React.Component {
    render() {
        return (
            <div className="card-header">
                <h3 className="card-title"><span className="card-name">{this.props.title}</span><span className="card-cost-text">{this.props.cost}</span></h3>
                
            </div>
        );
    }
}

// export card component
export default Header;