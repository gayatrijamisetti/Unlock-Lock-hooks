import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  height: 50px;
  width: 50px;
`
export const Button = styled.button`
  height: 30px;
  width: 60px;
  border-radius: 10px;
  color: white;
  background-color: #06b6d4;
  margin-top: 40px;
  border-width: 0px;
`
export const ResultText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 25px;
  font-family: 'Roboto';
`
