import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from '../../../Modules/test-utils';
import {Player} from './../Player';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
    .mockImplementationOnce( ()=>({
        activeSong: 'www.test.com/abc.mp4'
        }))

  }));

test('fetches & receives top albums', async () => {
    let ref = React.createRef();


  render(<Player ref={ref}/>)
  expect(screen.getByTestId('audio-player')).toBeInTheDocument();



})


