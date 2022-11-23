import './App.css';

var React = require('react')

class InputTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
		// See if integration with backend works.		
		var request = {"input": this.state.value};
    fetch("/SubmitInputText",
			{ method: "POST",
				headers: {"Content-Type": "application/json"},
				mode: "cors", // cross-origin server
				body: JSON.stringify(request),
			}
		)
    .then((res) => res.json())
	  .then((data) => { console.log(data)});
  
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
        </label>
        <textarea type="text" rows="10" cols="50"
				value={this.state.value} onChange={this.handleChange} />
				<input type="submit" value="Submit" name="input"/>
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="InputTextBox">
        <InputTextBox />
      </div>
    </div>	  
  );
}

export default App;
