import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core';

function RenderColumns(items) {
    return(
        <Fragment>
            {items.map((item) => {
                return(
                    <Grid item xs={4}>
                        {item}
                    </Grid>
                )
            })}
        </Fragment>
    )
}

export default function NewRowedGrid(props) {
    const items = props.items
    const howmany = items.length
    const forRow = parseInt(props.forRow)

    let rows = []
    for (let index = 0; index < howmany; index += forRow){
        rows.push(items.slice(index, index+forRow))
    }

    return (
        <Grid>
            {rows.map(items => 
                <Grid container item xs={12} spacing={0}>
                    {RenderColumns(items)}
                </Grid>
            )}
        </Grid>
    )
}