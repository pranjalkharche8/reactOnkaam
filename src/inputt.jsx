import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <StyledWrapper>
      <div className="group">
        <svg
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
        <input className="input" type="password" placeholder="password" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .group {
  display: flex;
  line-height: 30px;
  align-items: center;
  position: relative;
  max-width: 200px;
}

.input {
  width: 100%;
  height: 45px;
  line-height: 30px;
  padding: 0 5rem;
  padding-left: 3rem;
  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
  background-color: #f8fafc;
  color: #0d0c22;
  transition: .5s ease;
}

.input::placeholder {
  color: #94a3b8;
}

.input:focus, input:hover {
  outline: none;
  border-color: rgba(129, 140, 248);
  background-color: #fff;
  box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: none;
  width: 1rem;
  height: 1rem;
}
`;

export default Input;
