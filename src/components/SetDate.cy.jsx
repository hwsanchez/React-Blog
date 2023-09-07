import React from 'react'
import SetDate from './SetDate'

describe('<SetDate />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SetDate />)
  })

  it('passing the prop: "20230730', () => {
    cy.mount(<SetDate date={ '20230730'} />)
  })
})