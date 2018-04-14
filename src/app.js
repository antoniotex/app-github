import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
    <div className='app'>
        <Search/>
        <UserInfo/>
        <Actions/>
        <Repos 
            className='repos' 
            title='Repositórios'
            repos = {[{
                name: 'Nome Repositório',
                link: '#'
            }]} />
            <Repos 
            className='starred' 
            title='Favoritos'
            repos = {[{
                name: 'Nome Repositório',
                link: '#'
            }]} />
    </div>
)

export default App