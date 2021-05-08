// grid of images, 3 columns
// uncomment navCustomer once ready

import React from 'react'
// import NavCustomer from './NavCustomer'
import { Grid, Image } from 'semantic-ui-react'

function CustomerHome () {
  return (
    <div>
      <Grid relaxed columns={3}>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image2' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default CustomerHome
