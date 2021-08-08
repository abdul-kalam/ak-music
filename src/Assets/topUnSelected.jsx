import React from 'react';

export const TopUnSelected = (props) => {
  return (
    <div onClick={props.onIconClick}>
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 40 40"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Updated-COOP--18.12.19"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="1200_XLarge_Infinite-Scroll_1-(1)-Copy"
            transform="translate(-1137.000000, -910.000000)"
          >
            <g id="Group-13" transform="translate(1137.000000, 910.000000)">
              <g id="Group-7">
                <g id="Group-37-Copy" fill="#E7E7E7" opacity="0.268089658">
                  <rect
                    id="Rectangle"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                  ></rect>
                </g>
                <g
                  id="Group"
                  transform="translate(21.000000, 20.605263) scale(1, -1) translate(-21.000000, -20.605263) translate(11.000000, 7.105263)"
                >
                  <g id="icon-caret" transform="translate(0.000000, 0.105263)">
                    <polyline
                      id="Path"
                      stroke="#767676"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="translate(9.333333, 19.333333) rotate(-45.000000) translate(-9.333333, -19.333333) "
                      points="13.6666667 23.6666667 5 23.6666667 5 15 5 15"
                    ></polyline>
                    <text
                      id="Top"
                      transform="translate(10.000000, 6.000000) scale(1, -1) translate(-10.000000, -6.000000) "
                      fontFamily="Aspira-Regular, Aspira"
                      fontSize="12"
                      fontWeight="normal"
                      fill="#767676"
                    >
                      <tspan x="0.131413141" y="9">
                        Top
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default TopUnSelected;
