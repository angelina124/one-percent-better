import React from 'react';
import styled from 'styled-components'
import styles from '../styles/style-constants'

const PageTitle = ({ title, color }) => <PageTitleContainer color={color}>{title}</PageTitleContainer>

const PageTitleContainer = styled.span`
  color: ${props => props.color ? styles.colors[props.color] : 'red'};
  font-weight: bold;
  font-family: Courier;
  text-align: center;
  padding-left: 16px;
`

export default PageTitle
