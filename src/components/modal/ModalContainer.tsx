import React, { FC } from 'react';

export type ModalContainerProps = {
  isOpen: boolean;
  children: any;
};

const ModalContainer: FC<ModalContainerProps> = (
  props: ModalContainerProps,
) => {
  const { isOpen, children } = props;
  return (
    <>
      { children[0] }
      { isOpen && children[1] }
    </>
  );
};

export default ModalContainer;
