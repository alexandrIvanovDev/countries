import cl from './Button.module.scss';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { ButtonHTMLAttributes, FC } from 'react';

type Button = {
  withIcon: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Button> = (props) => {
  const { children, withIcon, ...rest } = props;

  return (
    <button className={cl.button} {...rest}>
      {withIcon && <FaArrowLeftLong />}
      {children}
    </button>
  );
};
