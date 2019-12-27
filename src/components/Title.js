import React, {Component} from 'react';
import styled from 'styled-components'
import styles from '../styles/constants'

const Title = ({ title }) => <TitleContainer>{title}</TitleContainer>

const TitleContainer = styled.span`
  height: 64px;
  font-size: 2em;
  font-weight: bold;
  color: ${styles.colors.turquoise};
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  @media (min-width: 801px) {
    font-size: 3em;
  }
`

export default Title
