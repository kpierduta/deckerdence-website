import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .container {
    overflow: scroll;
  }
  th {
    width: 25%;
  }
  thead {
    background-color: ${props => props.theme.dangerLite} !important;
    th p {
      font-size: ${props => props.theme.fontSizeXl};
      padding: 1rem 0.5rem;
      color: ${props => props.theme.lightAccent} !important;
    }
  }
  .table {
    margin-bottom: 0 !important;
  }
  .footer-text {
    padding: 1.5rem 0;
    background-color: ${props => props.theme.backgroundDarkSecondary};
    width: 100%;
  }
  tr td,
  th {
    font-size: ${props => props.theme.fontSize};
  }
`;

const TableRow = styled.tr`
  img {
    width: 37px;
    height: auto;
  }
`;

const InfoItem = ({ title, text1, text2, text3 }) => (
  <TableRow>
    <th className="has-text-weight-normal">
      <p className="has-text-weight-normal is-size-3">{title}</p>
    </th>
    <td className="has-text-centered">
      <p className="has-text-weight-normal is-size-3 has-text-centered">
        {text1}
      </p>
    </td>
    <td className="has-text-centered">
      <p className="has-text-weight-normal is-size-3 has-text-centered">
        {text2}
      </p>
    </td>
    <td className="has-text-centered">
      <p className="has-text-weight-normal is-size-3 has-text-centered">
        {text3}
      </p>
    </td>
  </TableRow>
);

const StatsTable = ({ description, tableInfo = [] }) => {
  return (
    <Section className="section">
      <div className="container">
        <table className="table is-fullwidth is-bordered">
          <thead>
            <tr>
              <th className="is-uppercase">
                <p className="has-text-weight-normal has-text-weight-bold">
                  DECKERDENCE UNIQUE MOBILE VENUE
                </p>
              </th>
              <th className="is-uppercase has-text-centered">
                <p className="has-text-weight-normal has-text-weight-bold">
                  2022
                </p>
              </th>
              <th className="is-uppercase has-text-centered">
                <p className="has-text-weight-normal has-text-weight-bold">
                  2023
                </p>
              </th>
              <th className="is-uppercase has-text-centered">
                <p className="has-text-weight-normal has-text-weight-bold">
                  2024
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableInfo.map(item => (
              <InfoItem
                key={item.id}
                title={item.title}
                text1={`£${item.year2022}`}
                text2={`£${item.year2023}`}
                text3={`£${item.year2024}`}
              />
            ))}
          </tbody>
        </table>
        {description && (
          <div>
            <p className="px-4 has-text-weight-normal footer-text is-size-3 has-text-centered">
              {description}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default StatsTable;
