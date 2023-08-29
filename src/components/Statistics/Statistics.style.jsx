import styled from 'styled-components';

export const WrapStat = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
  text-align: center;
  background-color: ${p => p.theme.colors.aqua};
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  box-shadow: 3px 3px ${p => p.theme.colors.aquaDarck};
`;
export const StatTitel = styled.h2`
  font-family: Epilogue;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
`;
export const StatEl = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const El = styled.li`
  width: 100%;
  border-radius: 10px;
  background-color: ${p => p.theme.colors.wite};
  font-family: Epilogue;

  font-style: normal;
  font-weight: 500;
`;
export const StatCoefficient = styled.ul`
  display: flex;

  gap: 30px;
  justify-content: center;
`;
