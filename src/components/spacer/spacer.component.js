import React from "react";
import styled from "styled-components/native";

const TopSmall = styled.View`
  margin-top: ${(props) => props.theme.space[1]};
`;

const TopMedum = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
`;

const TopLarge = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;

const LeftSmall = styled.View`
  margin-left: ${(props) => props.theme.space[1]};
`;

const LeftMedum = styled.View`
  margin-left: ${(props) => props.theme.space[2]};
`;

const LeftLarge = styled.View`
  margin-left: ${(props) => props.theme.space[3]};
`;

export const Spacer = ({ variant }) => {
  if (variant === "top.small") {
    return <TopSmall />;
  } else if (variant === "top.medium") {
    return <TopMedum />;
  } else if (variant === "top.large") {
    return <TopLarge />;
  } else if (variant === "left.small") {
    return <LeftSmall />;
  } else if (variant === "left.medium") {
    return <LeftMedum />;
  } else if (variant === "left.large") {
    return <LeftLarge />;
  }
};
