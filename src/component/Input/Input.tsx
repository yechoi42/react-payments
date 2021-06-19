import React from 'react';

interface infoProps {
  name: string;
  type: string;
  value: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const defaultInputInfo: infoProps = {
  name: '',
  type: '',
  value: '',
};

const Input = (inputInfo: infoProps = defaultInputInfo) => {
  if (inputInfo.onChange !== undefined) {
    return (
      <>
        <input
          name={inputInfo.name}
          type={inputInfo.type}
          value={inputInfo.value}
          onChange={inputInfo.onChange}
        ></input>
      </>
    );
  } else {
    return (
      <>
        <input name={inputInfo.name} type={inputInfo.type} value={inputInfo.value}></input>
      </>
    );
  }
};

export default Input;
