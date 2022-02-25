import React from 'react';
const URL = 'http://localhost:3000/cocktails';

class cocktailDirectory extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    cocktails: []
}}

componentDidMount(){
  this.fetchedData();
};

fetchedData(){
  fetch(URL)
  .then(res => res.json())
  .then((result) => {
      this.setState({
        cocktails: result
    });
})
  .catch(err => console.error(err));
};


render(){
  const{cocktails} = this.state;
    return(
      <ul className="el">
        {cocktails.map((cocktail, i) => (
          <div key={i}>
            <div className="box">
              <li style={{listStyle:'none'}}>
                <span>{cocktail.name}</span> | {" "}
                <span>{cocktail.ingredients}</span>
              </li>
            </div>
          </div>))}
        </ul>
  )};
};


export default cocktailDirectory;