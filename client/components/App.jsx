import React from 'react'
import {getAllCats} from '../apiClient'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    getAllCats()
    .then(cats => {
      this.setState({cats})
    })
  }

  render() {
    return(
      <div>
        <h1>Cats</h1>
        <ul>
          {this.state.cats.map(cat => {
            return <li key={cat.id}>{cat.name}</li>
          })}
        </ul>
      </div>
    )
  }

}
export default App