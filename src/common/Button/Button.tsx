import React from 'react';

type ButtonType = {
    title: string
    callback: () => void
}

export const Button: React.FC<ButtonType> = ({callback, title}) => {

    const onclikHandler = () => {
      callback()
    }

    return <button onClick={onclikHandler}>{title}</button>
};
