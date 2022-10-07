import React, { Component } from 'react'

export default class SearchBar extends Component {
  //   onInputChange(e) {
  //     console.log(e.target.value)
  //   }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label htmlFor='image-search'>Image Search</label>
            <input type='text' onChange={(e) => console.log(e.target.value)} />
          </div>
        </form>
      </div>
    )
  }
}

/*
original version of callback
 onInputChange(e) {
    console.log(e.target.value)
  }
  and ...
  <input type='text' onChange={this.onInputChange} />
*/
