import styled, { css } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px; /* Adjust the max-width as needed */
  margin: 0 auto; /* Center the form horizontally */

  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 3rem 5rem; /* Increase padding */

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.2rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
