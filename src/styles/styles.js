import styled from 'styled-components'

export const AppStyle = styled.div`
  max-width: 555px;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Inter', sans-serif;
`

export const ContainerStyle = styled.div`
  padding: 48px 20px 72px;
  @media (min-width: 480px) {
    padding: 48px 58px 72px;
  }
`

export const Joke = styled.h2`
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: italic;
  line-height: normal;
  letter-spacing: normal;
  color: #34394f;
  margin: 24px 0 32px;
`

export const Image = styled.img`
  width: 100%;
  height: 130px;
  object-fit: contain;
`

export const FormFeild = styled.form`
  display: flex;
  flex-direction: column;
`

export const Options = styled.option``

export const Button = styled.button`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  color: white;
  height: 58px;
  border-radius: 6px;
  background-color: #34394f;
  border: 0;
  width: 100%;
`

export const SaveJoke = styled.div`
  display: flex;
  flex-direction: column;
  margin: 52px 0 0;
  justify-content: space-between;
  .savedjoked {
    background-color: #34394f;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: -0.52px;
    text-align: center;
    color: #ffffff;
  }
  @media (min-width: 480px) {
    flex-direction: row;
  }
`

export const SavejokeBtn = styled.button`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  text-align: center;
  color: #34394f;
  width: 100%;
  height: 58px;
  border-radius: 6px;
  background-color: #f5f6f8;
  border: none;
  @media (min-width: 480px) {
    width: 285px;
  }
`

export const LabelInput = styled.div`
  width: 100%;
  margin-bottom: 24px;
  height: 58px;
  border-radius: 6px;
  background-color: #f5f6f8;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .addJoke {
    width: 24px;
    height: 24px;
    border: none;
    color: #34394f;
    background-color: #bdbdbd;
    border-radius: 50%;
    padding: 5px 5px 10.1px 5px;
  }
  @media (min-width: 480px) {
    width: 146px;
    margin-bottom: unset;
  }
`

export const InputNumber = styled.input`
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  :focus {
    outline: none;
  }
  font-family: 'Inter';
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.52px;
  color: #34394f;
  border: none;
  background-color: transparent;
  width: 10px;
`

export const AddRemoveBtn = styled.button`
  background-color: transparent;
  border: none;
`

export const LabelPlaceholder = styled.label`
  position: relative;
  margin: 16px 0 32px;
  height: 58px;
  border: solid 2px #c4c4c4;
  border-radius: 6px;
  background-color: white;
  & input {
    font-family: 'Inter';
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: -0.52px;
    color: #34394f;
    padding: 0;
    padding-left: 16px;
    padding-top: 30px;
    padding-bottom: 0;
    border: none;
    background-color: transparent;
    width: 100%;
  }
  & input:focus {
    outline: none;
    background-color: transparent;
  }
  & input,
  & span {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  & input:focus + span {
    top: 8px;
    -webkit-transform: translateY(-10%) translateX(-8.5px);
    transform: translateY(-10%) translateX(-8.5px);
    font-family: 'Inter';
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.17;
    letter-spacing: -0.52px;
    text-align: left;
    color: #c4c4c4;
    padding-left: 25px;
    background-color: transparent;
  }
  & span {
    font-family: 'Inter';
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: -0.52px;
    color: #c4c4c4;
    pointer-events: none;
    opacity: 0.5;
    position: absolute;
    padding-left: 20px;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translate(-50% 50%);
  }
`

export const DropDownContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  & .focused {
    border-top: solid 2px #c4c4c4;
    border-left: solid 2px #c4c4c4;
    border-right: solid 2px #c4c4c4;
    border-radius: 6px 6px 0 0;
    & svg {
      transform: rotate(-180deg);
    }
  }
  & .notfocused {
    border: solid 2px #c4c4c4;
  }
`

export const DropDownHeader = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  color: #c4c4c4;
  padding-left: 16px;
  padding-right: 22px;
  height: 58px;
  border-radius: 6px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 21px;
    top: 25%;
    right: 14px;
    color: #34394f;
    z-index: 2;
    fill: currentColor;
    transition: transform 0.1s;
  }
  .options {
    font-family: Inter;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: -0.52px;
    text-align: left;
    color: #34394f;
    text-transform: capitalize;
  }
`

export const DropDownListContainer = styled.div``

export const DropDownList = styled.ul`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 0;
  margin: 0;
  background: #ffffff;
  border-left: solid 2px #c4c4c4;
  border-bottom: solid 2px #c4c4c4;
  border-right: solid 2px #c4c4c4;
  border-radius: 0 0 6px 6px;
  box-sizing: border-box;
  padding-bottom: 13px;
`

export const ListItem = styled.li`
  list-style: none;
  height: 58px;
  border-radius: 6px;
  opacity: 0.8;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #34394f;
  text-transform: capitalize;
  margin-left: 8px;
  margin-right: 8px;
  padding-left: 8px;
  :hover {
    background: #e9e9e9;
    font-weight: 500;
    opacity: 1;
  }
`
