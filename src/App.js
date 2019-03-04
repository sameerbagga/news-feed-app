import React from 'react';
import { Container } from 'reactstrap';
import MainHeader from './components/MainHeader';
import Clock from './components/Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
    };
  }

  refresh = () => {

    fetch('https://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=76bde700f8064a02974acd0eb2b52f85')
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
        console.log(data);
      }
        );

  };

  render() {
    const { data } = this.state;

    return(
    <div>
        <MainHeader
          refresh={this.refresh}
        />

        <Container tag="main">
          <Clock />
          {(data.articles || []).map((d) => (
            <div>
              <h1><a href = {d.url} target= "_blank" >
              {d.title}
              </a></h1>
              <p> {d.description} <br /> <br /> </p>
            </div>
            ))}
        </Container>
    </div>
    );
  }
}

export default App;
