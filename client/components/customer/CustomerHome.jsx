// grid of images, 3 columns
// uncomment navCustomer once ready
// replace placeholder with company logos
import React from 'react'
// import NavCustomer from './NavCustomer'
import { Grid, Image } from 'semantic-ui-react'
import NavCustomer from './NavCustomer'

function CustomerHome () {
  return (
    <div>
      <NavCustomer />
      <Grid relaxed columns={3}>
        <Grid.Column>
          <Image href='#' src='/images/air-nz.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/bp.png' alt='Image2' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/cinnamon-cafe.jpg' alt='Image3' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/eb-games.jpg' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/french-tart.jpg' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/gong-cha.jpg' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/jetstar.jpg' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/milk-honey.jpg' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/mitre10.jpg' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/nike.jpg' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/riverside-cafe.jpg' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/robert-harris.jpg' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/starbucks.jpg' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/subway.jpg' alt='Image1' />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default CustomerHome
