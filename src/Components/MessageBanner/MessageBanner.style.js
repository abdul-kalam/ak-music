import styled from 'styled-components';

const COLORS = {
    error: 'red',
    success: 'green',
    info: 'orange'
}

export const MessageBox = styled.div`
    padding: 20px;
    border: 2px solid ${props => COLORS[props.type] };
    background-color:var( --background-color-light);
`;

export const Message = styled.p`
    color: #fff;
`;