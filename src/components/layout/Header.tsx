import { Link } from "react-router-dom";
import { signout } from "../../service/apiService";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/auth";
import styled from "styled-components";
import theme from "../../styles/theme";

function Header() {
  const { email } = useRecoilValue(userState);
  const token = sessionStorage.getItem("ACCESS_TOKEN");

  return (
    <header>
      {token ? (
        <Nav>
          <StyledLink to='/'>
            <Span>URIHARU</Span>
          </StyledLink>
          <Wrapper>
            <Link to='/mypage'>
              <Button>{email}님</Button>
            </Link>
            <Button onClick={signout}>로그아웃</Button>
          </Wrapper>
        </Nav>
      ) : null}
    </header>
  );
}
const Nav = styled.div`
  height: 3rem;
  border-bottom: 1px solid gray;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  & > span {
    padding: 1rem;
  }

  @media ${theme.device.desktop} {
    width: auto;
    padding: 0 0.6rem 0 0.6rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 0.6rem;
`;

const Span = styled.span`
  color: black;
  font-weight: bold;
  letter-spacing: 0.2rem;

  @media ${theme.device.desktop} {
    font-size: 1.3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 0.3rem;
  padding: 0.2rem;
`;

const Button = styled.button`
  padding: 0.2rem;
  background-color: transparent;
  border: none;
  margin-right: 0.3rem;
  color: black;
  font-size: 1rem;
  font: inherit;

  cursor: pointer;
  &:first-child {
    font-weight: bold;
  }

  @media ${theme.device.desktop} {
    font-size: 1rem;
  }
`;
export default Header;
