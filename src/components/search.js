import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ isDisable, handleSearch }) => (
    <div className='search'>
        <input 
            type='search' 
            placeholder='Digite o nome do usuário'
            disabled={isDisable}
            onKeyUp={handleSearch}
            />
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default Search
