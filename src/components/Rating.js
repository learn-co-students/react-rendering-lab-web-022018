import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps = (nextProps)=>{
    let setter = nextProps.rating > this.props.rating ? {increasing: true} : {decreasing: false}

    this.setState({
      increasing: nextProps.rating > this.props.rating ? true : false,
      decreasing: nextProps.rating < this.props.rating ? true : false
    })
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
