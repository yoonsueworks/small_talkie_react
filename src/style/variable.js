import { css } from "styled-components";

const variables = {
  flex: (direction = "row", justify = "center", align = "center") => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  font: (weight, size, lineheight) => `
    font-weight: ${weight};
    font-size: ${size};
    line-height: ${lineheight};
  `,

  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default variables;
