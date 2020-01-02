import React from 'react';
import styled from 'styled-components'
import styles from '../styles/style-constants'

const PostTitle = ({ title }) => <PostTitleContainer>{title}</PostTitleContainer>

const PostTitleContainer = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  color: ${styles.colors.postTitle};
  display: flex;
  align-items: center;

  @media (min-width: 801px) {
    font-size: 1.5em;
  }
`

export default PostTitle
