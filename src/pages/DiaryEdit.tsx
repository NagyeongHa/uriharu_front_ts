import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import theme from "../styles/theme";
import { Button } from "../styles/GlobalStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { dnoState, yyyymmddState } from "../recoil/diary";
import TextEditer from "../components/TextEditor";
import { call, dateDiary } from "../service/apiService";
import { DiaryInfo } from "../types/Diary";

function DiaryEdit() {
  const location = useLocation();
  const navigate = useNavigate();
  const yyyymmdd = useRecoilValue(yyyymmddState);
  const [isEdit, setIsEdit] = useState(false); //true 작성 false 수정
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const dno = useRecoilValue(dnoState);

  //yyyymmdd(날짜)별 다이어리 가져오기
  useEffect(() => {
    dateDiary(yyyymmdd).then(response => {
      //다이어리 있으면 다이어리 내용 저장
      if (response.length > 0) {
        setTitle(response[0].title);
        setContent(response[0].contents);
        return;
      }

      //다이어리 있으면 수정 없으면 작성
      if (response.length === 0) {
        setIsEdit(true);
        return;
      }
    });
  }, [yyyymmdd, location]);

  //제목 onChange로 받아서 diary에 저장
  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  //유효성 테스트
  const diaryValidation = () => {
    let validation = true;
    if (!title) {
      alert("제목을 입력해 주세요.");
      validation = false;
      return;
    }
    if (!content) {
      alert("내용을 입력해 주세요.");
      validation = false;
    }
    return validation;
  };

  //작성버튼 누르면 write 매개변수(diaryDTO)에 diary내용담아서 처리
  const writeHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //유효성 테스트
    if (diaryValidation()) {
      write({
        title: title,
        yyyymmdd: yyyymmdd,
        contents: content,
      });
      //더블클릭 방지
      e.currentTarget.disabled = true;
    }
  };

  //다이어리 작성 API
  const write = async (
    diaryDTO: Pick<DiaryInfo, "title" | "yyyymmdd" | "contents">
  ) => {
    try {
      await call("/diary/create", "POST", diaryDTO);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //수정버튼 누르면 modify 매개변수(diaryDTO)에 diary내용담아서 처리
  const modifyHandler = () => {
    //유효성 테스트
    if (diaryValidation()) {
      modify({
        title: title,
        dno: dno,
        contents: content,
      });
    }
  };

  //다이어리 수정 API
  const modify = async (
    diaryDTO: Pick<DiaryInfo, "title" | "dno" | "contents">
  ) => {
    try {
      await call("/diary/modify", "PUT", diaryDTO);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  //취소버튼 클릭 시
  const cancelHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <Container>
        <div>
          <Input
            placeholder=' 제목을 입력해주세요'
            type='text'
            name='title'
            value={title}
            onChange={onChangeTitle}
          />
        </div>
        <TextEditer content={content} setContent={setContent} />
        <>
          {isEdit ? (
            <Button onClick={writeHandler}>작성</Button>
          ) : (
            <Button onClick={modifyHandler}>수정</Button>
          )}
          <Button onClick={cancelHandler}>취소</Button>
        </>
      </Container>
    </>
  );
}

const Container = styled.div`
  text-align: center;
  @media ${theme.device.mobile} {
    width: 95vw;
    margin: 3rem auto;
    margin-top: 1.4rem;
  }

  @media (min-width: ${theme.size.min_tablet}) {
    margin: 4rem auto;
    height: auto;
  }
`;

const Input = styled.input`
  letter-spacing: 0.06rem;
  font-family: inherit;
  letter-spacing: inherit;
  border-width: 0px 0px 1px 0px;
  outline: none;
  width: 90vw;
  height: 1.6rem;
  padding: 0.4rem;
  font-weight: 600;
  margin: 1.2rem auto;
  font-size: 1.2rem;

  @media (min-width: ${theme.size.min_tablet}) {
    width: 70vw;
    height: 1.9rem;
    font-size: 1.3rem;
  }
`;

export default DiaryEdit;
