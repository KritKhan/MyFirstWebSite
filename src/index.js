import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Sidebar extends React.Component {
    render() {
        return(
            <div class="sidenav">
                <a href="#header">Autistic</a>
                <a href="#section1">About</a>
                <a href="#section2">Application</a>
                <a href="#contact">Contact</a>
            </div>
        );
    }
}

class Section extends React.Component {
    render(){
        return(
            <div id = {this.props.id} class = {this.props.class}>
                {this.props.description}
            </div>
        );
    }
}

function Address() {
    return(
        <address>
            Created by Kritsana Khankaew (BKK)<br/>
            Faculty of Engineering, Chulalongkorn University<br/>
            E-mail: kridsana.khunkaew@gmail.com
        </address>
    );
}

class Homepage extends React.Component {
    render() {
        return(
            <div id = "text">
                <Section id = "header" class = "content" description = "AUTISTIC"/>
                <Section id = "section1" class = "content" description = "ABOUT"/>
                <Section id = "section2" class = "content" description = "APPLICATION"/>
                <Section id = "contact" class = "footer" description = {Address()}/>
            </div>
        );
    }
}

class Display extends React.Component {
    render(){
        return(
            <div>
                <Sidebar/>
                <Homepage/>
            </div>
        );
    }
}

ReactDOM.render(<Display />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
