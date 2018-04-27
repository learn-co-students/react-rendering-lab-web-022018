import React from 'react';

class Circle extends React.Component {



  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }

  shouldComponentUpdate(nextProps) {
    return this.props.color !== nextProps.color
  }

}

export default Circle;
