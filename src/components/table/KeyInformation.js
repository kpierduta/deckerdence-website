import React from 'react';
import styled from 'styled-components';
import ButtonGlobal from '../elements/ButtonGlobal';

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
  position: absolute;
  z-index: 9999;
  left: -15px;
  top: 10px;
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 300px;
    background-color: ${props => props.theme.dangerLite};
    color: ${props => props.theme.textBright};
    text-align: center;
    padding: 10px 10px;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 100%;
    margin-left: -60px;
  }

  .tooltip .tooltiptext::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 15%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent ${props => props.theme.dangerLite}
      transparent;
  }

  span {
    color: ${props => props.theme.dangerLite};
  }
  .tooltiptext {
    visibility: hidden;
    width: 300px;
    background-color: ${props => props.theme.dangerLite};
    color: ${props => props.theme.textBright};
    text-align: center;
    border-radius: 0px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
  }
  :hover .tooltiptext {
    visibility: visible;
  }
`;

const InfoItem = ({ title, text1, text2, text3, hasIcon, iconInfo }) => (
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
    <td className="table-width has-text-centered">
      {text3 ? (
        <p>{text3}</p>
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
          <span className="tooltiptext is-size-6">{iconInfo}</span>
        </div>
      </IconContainer>
    )}
  </TableRow>
);

const TableButton = ({ to }) => (
  <th className="has-text-centered">
    <ButtonGlobal title="Learn More" to={to} />
  </th>
);

const KeyInformation = ({
  tableInfo = [],
  description,
  ultimateButtonLink,
  classicButtonLink,
  essentialButtonLink,
}) => {
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
              <th className="is-uppercase">Ultimate Deckerdence</th>
              <th className="is-uppercase">Classic Deckerdence </th>
              <th className="is-uppercase">Essential Deckerdence</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>{description}</th>
              <TableButton to={ultimateButtonLink} />
              <TableButton to={classicButtonLink} />
              <TableButton to={essentialButtonLink} />
            </tr>
          </tfoot>
          <tbody>
            {tableInfo.map(item => (
              <InfoItem
                key={item._key}
                title={item.keyInfo}
                text1={item.ultimateInfo}
                text2={item.classicInfo}
                text3={item.essentialInfo}
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
