/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as S from "./style";
import { useEffect, useState } from "react";

function RootHeader() {

    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
        setImageUrl(userData.imgUrl);
    }, [])


    return (
        <>
            <div css={S.layout}>
                <Link css={S.titleLink} to={"/"}>
                    <h1>사진첩 어플</h1>
                </Link>
                <Link css={S.mypageLink} to={"/mypage"}>
                    <img src={imageUrl} alt="" />
                </Link>
            </div >
        </>
    );
}

export default RootHeader;