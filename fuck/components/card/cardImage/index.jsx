//import rea
import React from 'react';
// new card component


class cardImage extends React.Component {
    render() {
        return (
            <div className="card-image">
                <img src={this.props.image} alt=""/>
            </div>
        );
    }
}

// export card component
export default cardImage;