import React from 'react';
import GlobalStyle from '..';
import renderer from 'react-test-renderer';

describe('render globalstyle component', () => {
  test('check globalstyle snapshot', () => {
    const tree = renderer.create(<GlobalStyle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
