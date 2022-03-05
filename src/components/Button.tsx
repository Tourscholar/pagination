import { MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  className: string | undefined;
  children: string | number;
}

export const Button = (props: Props) => {
  return (
    <button type="button" className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
