import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100px;
  max-height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleAmount = styled.div`
  color: #fff;
`;

export const Title = styled.h4`
  font-weight: 500;
  font-size: 18px;
`;

export const Amount = styled.p`
  font-size: 30px;
`;

export const UpdatedInfo = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #fff;
  max-width: 70%;
`;

export const Icon = styled.img`
  position: absolute;
  right: 0;
  top: -10px;
  max-height: 120px;
`;