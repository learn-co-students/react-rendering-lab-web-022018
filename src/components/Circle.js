import React from 'react';

class Circle extends React.Component {

  shouldComponentUpdate(nextProps, nextState){
    // console.log(this.props.color, nextProps.color)
    return (this.props.color !== nextProps.color)
    // return (this.props.myImportantValue !== nextProps.myImportantValue)
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
