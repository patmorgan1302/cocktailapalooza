import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
  constructor(){
    super();
    this.state = {
      search : null,
      catalog : []
    }
  };

  componentDidMount() {
    axios.get('http://localhost:3000/cocktails')
      .then(res => {
        const catalog = res.data;
        console.log(res.data)
        this.setState({ catalog });
      }
    )
  };

  searchSpace = e => {
    this.setState({ search: e.target.value })
  };

  render(){
    let newCatalog = this.state.catalog;
    const items = newCatalog.filter((data) => {
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    })
    .map((data, i) => {
      return(
        <div key={i}>
          <ul>
            <li key={data.id} style={{listStyle:'none'}}>
              <span>{data.name}</span> {" | "}
              <span>{data.ingredients}</span>
            </li>
          </ul>
        </div>
        )
      })

    return (
      <div>
        <input style={{ marginBottom: '35px', marginTop: '25px' }}className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>this.searchSpace(e)} />
        <button className ="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        {items}
      </div>
    )
  }
}