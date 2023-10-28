import React, { useState } from "react";
import { DatePicker } from "antd";

export default function DateSelector() {
  const [date, setDate] = useState(new Date());
  function onChange(date, dateString) {
    setDate(date);
  }
  return <DatePicker onChange={onChange} />;
}