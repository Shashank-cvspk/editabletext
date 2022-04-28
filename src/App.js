import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    text: '',
    hell: true,
  }

  update = event => {
    this.setState({text: event.target.value})
  }

  changePage = () => {
    this.setState(prev => ({
      hell: !prev.hell,
    }))
  }

  render() {
    const {text, hell} = this.state
    return (
      <div className="main">
        <div className="container">
          <h1>Editable Text Input</h1>
          <div className="edit">
            {hell ? (
              <div>
                <input value={text} onChange={this.update} />
                <button className="btn" type="button" onClick={this.changePage}>
                  Save
                </button>
              </div>
            ) : (
              <div>
                <p>{text}</p>
                <button className="btn" type="button" onClick={this.changePage}>
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
