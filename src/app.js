import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component{
    constructor(){
        super()
        this.state = {
            userinfo: {
                username: 'Antonio Carlos',
                photo: 'https://avatars2.githubusercontent.com/u/26071112?v=4',
                login: 'antoniotex',
                repos: 100,
                seguidores: 10,
                seguindo: 12
            },
            repos: [{
                name: 'Reposits',
                link: '#'
            }],
            starred: [{
                name: 'Starred',
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