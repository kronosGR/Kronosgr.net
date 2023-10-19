import React from 'react';
import Button from '../button';

export const VisitButtons = ({ urls }) => {
  return (
    <>
      {urls.url && (
        <Button text='Visit' img='icons/visit.svg' url={urls.url} />
      )}
      {urls.android && (
        <Button
          text='Googe Play'
          img='icons/visit.svg'
          url={urls.android}
        />
      )}
    </>
  );
};
