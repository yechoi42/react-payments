import React from 'react';
import classNames from 'classnames/bind';

const styles = require('./Input.scss');
const cx = classNames.bind(styles);

interface infoProps {
  className?: string;
  name: string;
  type: string;
  value: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readOption?: boolean;
}

const defaultInputInfo: infoProps = {
  name: '',
  type: '',
  value: '',
  readOption: false,
};

const Input = ({ className, name, type, value, onChange, readOption }: infoProps = defaultInputInfo) => {
  if (onChange !== undefined) {
    return (
      <>
        <div className={cx([Input, className])}>
          <input
            className="text-center"
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            {...(readOption ? `'readOnly'` : '')}
          ></input>
        </div>
      </>
    );
  } else {
    return (
      <>
        <input name={name} type={type} value={value}></input>
      </>
    );
  }
};

export default Input;
