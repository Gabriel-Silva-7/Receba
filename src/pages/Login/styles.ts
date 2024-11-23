import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  background: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 580px;
  margin-top: 7%;
  height: 80vh;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.span`
  color: #333;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 32px;
`;

export const FormGroup = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  color: #666;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  height: 56px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid rgba(102, 102, 102, 0.35);
  width: 100%;
  padding: 8px;
`;

export const Button = styled.button`
  display: flex;
  width: 580px;
  height: 64px;
  padding: 14px 0px 14px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  opacity: 0.25;
  background: #111;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  height: 55px;
  width: 100%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  justify-self: flex-start;
  position: relative;
`;

export const BackArrow = styled.span`
  cursor: pointer;
  position: absolute;
  left: 20px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  color: rgba(102, 102, 102, 0.8);
  text-align: right;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: rgba(102, 102, 102, 0.25);
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
  accent-color: black;
`;

export const TermsAndConditions = styled.span`
  color: #333;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
  text-align: center;

  a {
    color: #111;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }
`;

export const LinkSignUp = styled.span`
  color: #666;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-top: 26px;

  a {
    color: #111;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }
`;
