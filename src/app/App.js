import React from 'react';
export default class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Navigation
                </div>
                <br/>
                <div className="container">
                    {this.props.children}
                </div>
                <div>
                    Footer
                </div>
            </div>
        );
    }
}



