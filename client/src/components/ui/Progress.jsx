import React from 'react';
import { ProgressBar } from 'react-bootstrap';
export default function Progress() {
  return <ProgressBar striped animated now={40} label="40%" className="mb-2" />;
}
