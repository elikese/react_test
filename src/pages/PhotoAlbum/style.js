import { css } from "@emotion/react";

export const layout = css`
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    & > h1 {
      color: white;
    }
`;


export const previewImg = css`
    margin: 20px;
    border-radius: 15%;
    width: 150px;
    height: 150px;
    overflow: hidden;

    & > img {
        height: 100%;
    }
`