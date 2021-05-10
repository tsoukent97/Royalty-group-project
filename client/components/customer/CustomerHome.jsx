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
          <Image href='#' src='/images/air-nz.jpg' alt='Air NZ' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/bp.jpg' alt='BP' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/cinnamon-cafe.jpg' alt='Cinnamon Cafe' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/countdown.jpg' alt='Countdown' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/eb-games.jpg' alt='EB Games' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/french-tart.jpg' alt='French Tart Cafe' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/gong-cha.jpg' alt='Gong Cha' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/jetstar.jpg' alt='Jetstar' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/milk-honey.jpg' alt='Milk and Honey Cafe' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/mitre10.jpg' alt='Mitre 10' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/nike.jpg' alt='Nike' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/riverside-cafe.jpg' alt='Riverside Cafe' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/robert-harris.jpg' alt='Robert Harris Cafe' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/starbucks.jpg' alt='Starbucks' />
        </Grid.Column>
        <Grid.Column>
          <Image href='#' src='/images/subway.jpg' alt='Subway' />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default CustomerHome
