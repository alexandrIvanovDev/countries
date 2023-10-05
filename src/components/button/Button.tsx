import cl from './Button.module.scss';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { ButtonHTMLAttributes, FC } from 'react';

type Button = {
  withIcon: boolean;
  addClass?: string;
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
