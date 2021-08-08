import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from '../../../Modules/test-utils';
import {MusicLibrary} from './../MusicLibrary';
import {mockTopAlbum} from './../../../mocks';
import { act } from 'react-dom/test-utils';


// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  rest.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json', (req, res, ctx) => {
      console.log('hihi')
    return res(ctx.json(mockTopAlbum))
  })
]

jest.mock('./../../../api/client',  () => ({
    jsonp: jest.fn()
    .mockImplementationOnce(async ()=>{
        return mockTopAlbum;
    })
    .mockImplementationOnce(async ()=>{
        throw new Error('500');
    })
}));


jest.mock('./../../../Components/AlbumListing/AlbumListing', () => ({
    AlbumListing: () => {
      return <div>Album List rendered</div>;
    }
  }));



const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('fetches & receives top albums', async () => {
    server.use(
        rest.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json', (req, res, ctx) =>{
            console.log('hi');
            return res(ctx.json(mockTopAlbum), ctx.delay(150) )
      }),
    )

  render(<MusicLibrary />)

  expect(screen.queryByText(/Loading albums\.\.\./i)).toBeInTheDocument();
  // eslint-disable-next-line no-undef
  //await act(()=>sleep(1000));
  expect(await screen.findByText(/Album List rendered/i)).toBeInTheDocument();



})


test('handles server error', async () => {
    server.use(
        rest.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json', (req, res, ctx) =>{
            console.log('hi');
        return res(ctx.status(500))
      }),
    )
  
    await render(<MusicLibrary />)
  
 
    expect(await screen.findByText(/Something went wrong!/i)).toBeInTheDocument();

  })