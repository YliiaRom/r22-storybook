import React from 'react'
import DemoFormComponent from './DemoFormComconent'

describe('<DemoFormComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DemoFormComponent />)
  })
})