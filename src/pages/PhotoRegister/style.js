import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    width: 100%;
    height: 90%;
    color: white;
`;

export const title = css`
    cursor: default;
`;

export const previewImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;

    & > img {
        height: 100%;
    }
`