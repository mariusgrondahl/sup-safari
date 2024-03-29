import React from "react";
import styled from "@emotion/styled";

const Style = styled.div`
  margin: 0 auto;
  max-width: 650px;
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export default function CenterWrapper(props) {
  return <Style>{props.children}</Style>;
}