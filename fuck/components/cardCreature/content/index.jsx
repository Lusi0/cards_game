//import rea
import React from 'react';
// new card component


class Content extends React.Component {
    render() {
        return (
            <div className="card-content">
                <span className='card-text'>{this.props.content}</span>
                <span className="card-info"><h3>{this.props.attack}/{this.props.defense}</h3></span>
                
            </div>
            
        );
    }
}

// export card component
export default Content;
