import React from 'react'
// import NavCustomer from './NavCustomer'
import { Grid, Image, Button } from 'semantic-ui-react'

function CustomerHome () {
  return (
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Grid relaxed columns={4}>
        <Grid.Column>
          <Image src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/image.png' alt='Image1' />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default CustomerHome
