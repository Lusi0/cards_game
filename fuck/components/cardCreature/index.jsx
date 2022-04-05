//import rea
import React from 'react';
// new card component
import Header from './header'
import CardImage from './cardImage'
import Content from './content'

class CardCreature extends React.Component {
    render() {
        return (
            <div className="card">
                <Header title={this.props.title} cost={this.props.cost}></Header>
                <CardImage image={this.props.image}></CardImage>
                <Content content={this.props.content} attack={this.props.attack} defense={this.props.defense}></Content>
            </div>
        );
    }
}

// export card component
export default CardCreature;