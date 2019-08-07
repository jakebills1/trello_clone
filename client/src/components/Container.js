import React from 'react';
import styled from 'styled-components';
const Container = (props) => {
  return <ContainerDiv>{props.children}</ContainerDiv>
    
}
export default Container;
const ContainerDiv = styled.div`
  margin: 0 0 20% 20%;
`