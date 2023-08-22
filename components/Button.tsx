'use client';
export enum ButtonType {
  button = 'button',
  submit = 'submit',
}

interface Props {
  text: string;
  onButtonClick?: (e: React.MouseEvent) => void;
  type?: ButtonType;
  disabled?: boolean;
  small?: boolean;
}

const Button = ({
  text,
  onButtonClick,
  type = ButtonType.button,
  disabled = false,
  small = false,
}: Props) => {
  const onClick = (e: React.MouseEvent) => {
    if (onButtonClick) {
      onButtonClick(e);
    }
  };

  return (
    <div className='relative w-max'>
      <button
        type={type}
        disabled={disabled}
        className={`button w-max ${
          small ? 'px-4 h-button-sm' : 'px-8 h-button'
        } bg-lightNavy capitalize text-green font-mono border border-green rounded-md`}
        onClick={onClick}
      >
        {text}
      </button>
      <div
        className={`-z-10 absolute top-0 left-0 w-full ${
          small ? 'h-button-sm' : 'h-button'
        } bg-green rounded-md`}
      ></div>
    </div>
  );
};

export default Button;
