import React, { useState } from "react";
import { DatePicker } from "antd";
import "./DateSelector.css";

export default function DateSelector() {
  const [date, setDate] = useState(new Date());
  function onChange(date, dateString) {
    setDate(date);
  }
  return <DatePicker className="DateSelector" onChange={onChange} />;
}
