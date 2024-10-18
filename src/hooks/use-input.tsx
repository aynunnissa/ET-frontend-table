import { useState } from 'react';

const useInput = (validateValue: Function) => {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnteredValue(event.target.value);
  };

  const defaultValueHandler = (value?: string) => {
    setEnteredValue(value);
  };

  const inputBlurHandler = (event: React.SyntheticEvent): void => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    defaultValueHandler,
    reset,
  };
};

export default useInput;