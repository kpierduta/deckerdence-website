import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  h3 {
    color: ${props => props.theme.primaryColor};
    font-size: ${props => props.theme.fontSize2xl};
    padding-left: 3rem;
  }
  th {
    font-size: ${props => props.theme.fontSizeLarge};
    font-weight: normal;
  }
  .table-width {
    width: 11rem;
  }
  .container {
    overflow: visible;
    @media only screen and (max-width: 768px) {
      overflow: scroll;
    }
  }
  p {
    font-size: ${props => props.theme.fontSizeExtraLarge};
  }
`;

const TableRow = styled.tr`
  position: relative;
  img {
    width: 37px;
    height: auto;
  }
`;

const IconContainer = styled.div`
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: ${props => props.theme.dangerLite};
    color: ${props => props.theme.textBright};
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 0%;
    margin-left: -5px;
  }

  .tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 30%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${props => props.theme.dangerLite} transparent transparent
      transparent;
  }

  position: absolute;
  z-index: 9999;
  left: -15px;
  top: 10px;

  span {
    color: ${props => props.theme.dangerLite};
  }
  .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: ${props => props.theme.dangerLite};
    color: ${props => props.theme.textBright};
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
  }
  :hover .tooltiptext {
    visibility: visible;
  }
`;

const InfoItem = ({ title, text1, text2, hasIcon, iconInfo }) => (
  <TableRow>
    <th>
      <p className="has-text-weight-normal ml-4">{title}</p>
    </th>
    <td className="table-width has-text-centered">
      {text1 ? (
        <p>{text1}</p>
      ) : (
        <img src="images/icon/check.png" alt="status" />
      )}
    </td>
    <td className="table-width has-text-centered">
      {text2 ? (
        <p>{text2}</p>
      ) : (
        <img src="images/icon/check.png" alt="status" />
      )}
    </td>
    {hasIcon && (
      <IconContainer>
        <div className="tooltip">
          <span className="is-size-3 ">
            <i className="fas fa-info-circle" />
          </span>
          <span className="tooltiptext is-size-7">{iconInfo}</span>
        </div>
      </IconContainer>
    )}
  </TableRow>
);

const KeyInformation = ({ tableInfo = [] }) => {
  return (
    <Section className="section">
      <div className="container">
        <table className="table is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>
                <h3 className="is-uppercase has-text-weight-semibold">
                  KEY INFORMATION
                </h3>
              </th>
              <th className="is-uppercase">DECKERDENCE ESSENTIALS & CLASSIC</th>
              <th className="is-uppercase">deckerdence ultimate</th>
            </tr>
          </thead>
          <tbody>
            {tableInfo.map(item => (
              <InfoItem
                key={item._key}
                title={item.keyInfo}
                text1={item.classicInfo}
                text2={item.essentialInfo}
                hasIcon={item.hasIcon}
                iconInfo={item.iconInfo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default KeyInformation;
