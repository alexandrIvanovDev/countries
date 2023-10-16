import { ButtonHTMLAttributes, FC } from 'react';

import { FaArrowLeftLong } from 'react-icons/fa6';

import cl from './Button.module.scss';

type Button = {
  addClass?: string;
  withIcon: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Button> = (props) => {
  const { children, withIcon, addClass, ...rest } = props;

  return (
    <button className={`${cl.button} ${addClass}`} {...rest}>
      {withIcon && <FaArrowLeftLong />}
      {children}
    </button>
  );
};
