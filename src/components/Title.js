import React from 'react';
import styled from 'styled-components'

const Title = ({ title }) => <TitleContainer>{title}</TitleContainer>

const TitleContainer = styled.span`
  font-family: Courier;
  display: auto;
  margin-left: 0;
  margin-right: 0;
  text-align: center;
  font-weight: bold;
  color: white;
  margin-bottom: 12px;
`

export default Title
