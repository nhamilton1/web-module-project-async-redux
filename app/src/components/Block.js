import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBlock } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      margin: 5
    },
    media: {
      height: 300,
    },
});

const Block = (props) => {
    const { block, isFetching, error } = props
    const classes = useStyles();

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
        <div className='wrapper'>
            {

            block.map(blocks => {
                return (
                    <Card className={classes.root} key={blocks.id}> 
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Block Height: {blocks.height}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Block Time: {blocks.timestamp} <br />
                        Block Size: {blocks.size}
                        </Typography>
                        </CardContent>
                    </Card>
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






