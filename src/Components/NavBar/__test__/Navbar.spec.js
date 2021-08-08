import React from 'react'
import { render, fireEvent, screen } from '../../../Modules/test-utils';
import {Navbar} from './../Navbar';


test('fetches & receives top albums', async () => {
  render(<Navbar />)

  expect(screen.getByTitle('Favorite')).toBeInTheDocument()

})

