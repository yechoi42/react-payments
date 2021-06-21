import React from 'react';

interface infoProps {
  className?: string;
  name: string;
  type: string;
  value?: string;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readOption?: boolean;
}

const Input = ({ className, name = '', type = '', value, maxLength, onChange, readOption = false }: infoProps) => {
  return (
    <>
      <div className={className}>
        <input
          className="text-center"
          name={name}
          type={type}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
          readOnly={readOption}
        ></input>
      </div>
    </>
  );
};

export default Input;
