import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  h3 {
    color: ${props => props.theme.primaryColor};
  }
  .table-width {
    width: 11rem;
  }
  .container {
    overflow: scroll;
  }
`;

const TableRow = styled.tr`
  img {
    width: 37px;
    height: auto;
  }
`;

const InfoItem = ({ title, text1, text2 }) => (
  <TableRow>
    <th>
      <p className="has-text-weight-bold">{title}</p>
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
                <h3 className="is-size-3">KEY INFORMATION</h3>
              </th>
              <th>DECKERDENCE ESSENTIALS & CLASSIC</th>
              <th>deckerdence ultimate</th>
            </tr>
          </thead>
          <tbody>
            {tableInfo.map(item => (
              <InfoItem
                key={item._key}
                title={item.keyInfo}
                text1={item.classicInfo}
                text2={item.essentialInfo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default KeyInformation;
