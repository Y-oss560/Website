/*
 * @Author: Copyright 2021 Suwings
 * @Date: 2021-09-10 15:00:32
 * @LastEditTime: 2021-09-10 15:13:50
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'

ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="lg">
      <div>Hello</div>
      <Button variant="contained" color="primary">
        你好，世界
      </Button>
    </Container>

  </React.StrictMode>,
  document.getElementById('root')
);
