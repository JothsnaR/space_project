import React from 'react';
import { Helmet } from 'react-helmet';

class Home extends React.Component{

    exampleMethod(){
        console.log('i am button')
    }

    head(){
        return(
            <Helmet>
                <title>Home</title>
            </Helmet>
        )
    }
    render() {
        return (
            <div>
                {this.head()}
                <p>I am in home hey hey</p>
                <button onClick={() => this.exampleMethod()}>Click me</button>
            </div>
        )
    }
}
export default Home;