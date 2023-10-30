import React from 'react';
import {useRef} from 'react';
import { Button, Space } from 'antd';

export default function ConfrimButton() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
      };

  
  return (
    <Space wrap>
    <Button type="default" onClick={handleClick}>Enter</Button>
    </Space>
  )
}