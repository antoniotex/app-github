import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component{
    constructor(){
        super()
        this.state = {
            userinfo: {
                username: 'Pinguelo',
                repo: 100,
                seguidores: 10,
                seguindo: 12
            },
            repos: [{
                name: 'Repop',
                link: '#'
            }],
            starred: [{
                name: 'Repo',
                link: '#'
            }]
        }
    }
    render(){
        return (
            <AppContent userinfo={this.state.userinfo} repos={this.state.repos} starred={this.state.starred} />
        )
    }
}
    

export default App