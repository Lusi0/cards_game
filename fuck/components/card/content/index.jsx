
//import rea
import React from 'react';
// new card component


class Content extends React.Component {
    render() {
        return (
            <div className="card-content">
                {this.props.content}
            </div>
        );
    }
}

// export card component
export default Content;