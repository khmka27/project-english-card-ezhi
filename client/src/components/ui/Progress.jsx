import React from 'react';
import { ProgressBar } from 'react-bootstrap';
export default function Progress({ theme }) {
  
  return (
    <>
      <div>{theme.nameTheme}
      <ProgressBar striped animated now={40} label="40%" className="mb-2" />
      </div>
    </>
  );
}
