/** @jsxImportSource @emotion/react */
import * as S from "./style";
import WideButton from "../../components/WideButton/WideButton";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

/**
 *  1. 사진 불러오기 버튼을 클릭 후 5개 이상의 이미지를 불러올 수 있어야함.
 *  2. PromiseAll을 사용하여 이미지를 순서대로 불러와야함.
 *  3. 불러오기가 완료되면 "이미지를 저장하시겠습니까?" 라는 확인 취소 메세지 창이 떠야함.
 *  4. 확인 클릭시 localStorage에 key: photo, value: JSON 데이터
 *      [
 *          {
 *              id: 1,
 *              imageUrl: ""
 *          },
 *          {
 *              id: 2,
 *              imageUrl: ""
 *          }
 *      ]
 *      형식으로 저장되어야함.
 *  5. 취소시 저정되면 안됨.
 */

function PhotoRegister() {

    const fileRef = useRef();
    const fileId = useRef(0);
    const navagate = useNavigate();

    const handleInputChange = (e) => {
        if (e.target.files.length === 0) {
            return;
        }
        const fileList = [];
        for (let i = 0; i < e.target.files.length; i++) {
            if (localStorage.getItem("photo") !== null) {
                fileId.current = JSON.parse(localStorage.getItem("photo")).length;
            }
            console.log(fileId.current)
            fileList.push(
                {
                    id: fileId.current + i + 1,
                    file: e.target.files[i]
                }
            );
        }

        const promises = fileList.map(file => {
            return (
                new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        file = {
                            ...file,
                            imageUrl: e.target.result
                        }
                        resolve(file);
                    }
                    reader.readAsDataURL(file.file);
                })
            );
        });

        Promise.all(promises).then(result => {
            let newFileList = [];
            result.forEach(file => {
                const newImgFile = {
                    id: file.id,
                    imageUrl: file.imageUrl
                }
                newFileList.push(newImgFile);
            });
            if (window.confirm("이미지를 저장하시겠습니까?")) {

                const SavedList = JSON.parse(localStorage.getItem("photo"));
                if (!SavedList) {
                    localStorage.setItem("photo", JSON.stringify(newFileList));
                } else {
                    localStorage.setItem("photo", JSON.stringify(newFileList.concat(SavedList)));
                }
                alert("저장되었습니다");
                navagate("/photo/album")
            } else {
                alert("취소되었습니다");
            }
        });

    }

    return (
        <div css={S.layout}>

            <h1 css={S.title}>사진 등록하기</h1>
            <input type="file" style={{ display: "none" }} multiple={true} ref={fileRef} onChange={handleInputChange} />
            <WideButton text={"사진 불러오기"} onClick={() => { fileRef.current.click() }} />
        </div>
    );
}

export default PhotoRegister;