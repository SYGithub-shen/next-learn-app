'use client';
import React from 'react';

interface Props {
  error: Error
  reset: () => void;
}
const UserError = ({error, reset}:Props) => {
  console.log(error, 'Error')
  return (
    <>
      <div>
        An error occurred
      </div>
      <button className={'btn'} onClick={() => reset()}>RETRY</button>
    </>

  );
};

export default UserError;