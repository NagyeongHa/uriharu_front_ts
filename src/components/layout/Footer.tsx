import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import theme from "../../styles/theme";

function Footer() {
  return (
    <footer>
      <Container>
        <div>
          <span>URIHARU</span>
          <a href='https://github.com/NagyeongHa/uriharu'>
            <AiFillGithub className='icons' />
          </a>
        </div>
        <span>ⓒ 2022. HHproject. All rights reserved.</span>
      </Container>
    </footer>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 130px;
  background-color: white;
  border-top: 1px solid #ececec;
  font-family: inherit;
  /* position: relative; */
  /* transform: translateY(-100%); */

  & > hr {
    width: 13rem;
    border-color: #ececec;
  }
  /* URIHARU */
  & > div > span {
    letter-spacing: 0.4em;
    font-weight: 500;
    font-size: 1.5rem;
    margin-left: 1.7rem;
  }

  /* 저작권 표시 */
  & > span {
    margin-left: 1.7rem;
  }

  & > a,
  a:hover,
  a:active,
  a:visited,
  a:link {
    text-decoration: none;
    color: black;
  }

  /* 깃허브 아이콘 */
  .icons {
    height: 2em;
    width: 2em;
  }

  @media ${theme.device.mobile} {
    & > div > span {
      font-size: 1.2rem;
    }

    .icons {
      height: 1.5em;
      width: 1.5em;
    }

    & > span {
      font-size: 0.85rem;
    }
  }
`;
