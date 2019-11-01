import { style } from 'typestyle';


export const gridWrapper = style({
    display: 'grid',
    gridTemplateRows: '4rem 22rem',
    gridTemplateAreas: " 'title' 'description' ", 
    border: "solid .1rem black"
})

export const title = style({
    gridArea: 'title',
    textAlign: 'center',
    margin: '0rem',
    display: 'inline-block',

})

export const description = style({
    gridArea: 'description'
})