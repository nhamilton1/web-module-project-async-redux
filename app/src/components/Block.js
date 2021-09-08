import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBlock } from '../actions'

const Block = (props) => {
    const { block, isFetching, error } = props

    useEffect(() => {
        props.getBlock()
    }, [])

    if (error) {
        return <h2> We have an error: {error}</h2>
    }

    if (isFetching) {
        return <h2>Fetching Block data</h2>
    }

    return (
        <div>
            {
               block.map(blocks => {
                   return (
                       <div key={blocks.id}> 
                            <p>Block Height: {blocks.height}</p>
                            <p>Block Size: {blocks.size}</p>
                            <p>Block Time: {blocks.timestamp}</p>
                       </div>
                   )
               })
            }
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.block)
    return {
        block: state.block,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapStateToProps, {getBlock} )(Block)
