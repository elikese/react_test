/** @jsxImportSource @emotion/react */


/**
 *  1. 사진 등록하기를 통해 등록된 이미지들을 각자 자유롭게 디자인하여 불러와야함.
 *  2. localStorage에 저장된 사진이 없으면 
 *      <h1>불러올 사진이 없습니다.<h1>
 *      문구가 중앙에 나오도록해야함.
 */
import { useEffect, useState } from "react";
import * as S from "./style";


function PhotoAlbum({ profileUrl }) {

    const [imageFiles, setImageFiles] = useState([]);
    console.log(profileUrl);

    useEffect(() => {
        setImageFiles(JSON.parse(localStorage.getItem("photo")));
    }, [])

    return (
        <div css={S.layout}>
            {imageFiles === null
                ? <h1>불러올 사진이 없습니다.</h1>
                : imageFiles.map(file => {
                    return (
                        <div key={file.id} css={S.previewImg}>
                            <img src={file.imageUrl} />
                        </div>
                    )
                })

            }
        </div>
    );
}

export default PhotoAlbum;