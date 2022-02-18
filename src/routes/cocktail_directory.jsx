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
  .then(
    (result) => {
      this.setState({
        cocktails: result
    });
})
  .catch(err => console.error(err));
};



render(){
  const{cocktails} = this.state;
    return(
      <ul class="el">
        {cocktails.map(cocktail => (
          <div key={cocktail}>
            <div class="box">{cocktail.name} | {cocktail.ingredients}</div>
          </div>))}
        </ul>
  )};
};


export default cocktailDirectory;