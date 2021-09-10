/*
 * @Author: Copyright 2021 Suwings
 * @Date: 2021-09-10 15:00:32
 * @LastEditTime: 2021-09-10 15:08:44
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';

ReactDOM.render(
  <React.StrictMode>
    <div>Hello</div>
    <Button variant="contained" color="primary">
      你好，世界
    </Button>
  </React.StrictMode>,
  document.getElementById('root')
);
