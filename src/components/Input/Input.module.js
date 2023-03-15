import styled from "styled-components";

export const InputStyle = styled.div`
  //default style

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 4px;
  }
  p {
    margin: 0;
    font-size: 10px;
  }

  input {
    height: 56px;
    width: 200px;

    border: 1px solid #828282;
    border-radius: 8px;

    padding: 0 12px;

    &:hover {
      border: 1px solid #333333;
    }
    &:focus {
      border: 1px solid #2962ff;
      outline: none;
    }
    &:disabled {
      background-color: #f2f2f2;
      border: 1px solid #e0e0e0;
    }
  }

  &:focus-within {
    color: #2962ff;
  }

  //error style

  .input-error {
    border: 1px solid #d32f2f;

    &:hover {
      border: 1px solid #333333;
    }

    &:focus {
      border: 1px solid #d32f2f;
    }
  }

  .label-error {
    color: #d32f2f;

    &:focus-within {
      color: #d32f2f;
    }
  }
`;
