import React from 'react';
import styled from 'styled-components'
import styles from '../styles/style-constants'

const ErrorMsg = ({ message }) => <ErrorMsgContainer>{message}</ErrorMsgContainer>

const ErrorMsgContainer = styled.p`
  color: red;
  font-weight: bold;
  font-family: Courier;
  font-size: 14px;
  text-align: left;
  padding-left: 16px;
`

export default ErrorMsg
