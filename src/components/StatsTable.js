import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  .container {
    overflow: scroll;
  }
  thead {
    background-color: ${props => props.theme.dangerColor} !important;
    th {
      font-size: ${props => props.theme.fontSizeExtraLarge};
      padding: 1rem 0.5rem;
      color: ${props => props.theme.lightAccent} !important;
    }
  }
  .table {
    margin-bottom: 0 !important;
  }
  .footer-text {
    font-size: ${props => props.theme.fontSize};
    padding: 1.5rem 0;
    background-color: ${props => props.theme.backgroundDarkSecondary};
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
    <th className="has-text-weight-normal">{title}</th>
    <td className="has-text-centered">{text1}</td>
    <td className="has-text-centered">{text2}</td>
    <td className="has-text-centered">{text3}</td>
  </TableRow>
);

const infoItems = [
  {
    id: 1,
    title: 'Essential Deckerdence',
    text1: '6,595',
    text2: '7,295',
    text3: '7,775',
  },
  {
    id: 2,
    title: 'Classic Deckerdence',
    text1: '7,795',
    text2: '8,475',
    text3: '8,995',
  },
  {
    id: 3,
    title: 'Ultimate Deckerdence',
    text1: '8,995',
    text2: '18,995',
    text3: '19,300',
  },
];

const StatsTable = () => (
  <Section className="section">
    <div className="container">
      <table className="table is-fullwidth is-bordered">
        <thead>
          <tr>
            <th className="is-uppercase">DECKERDENCE UNIQUE MOBILE VENUE</th>
            <th className="is-uppercase has-text-centered">2022</th>
            <th className="is-uppercase has-text-centered">2023</th>
            <th className="is-uppercase has-text-centered">2024</th>
          </tr>
        </thead>
        <tbody>
          {infoItems.map(item => (
            <InfoItem
              key={item.id}
              title={item.title}
              text1={`£${item.text1}`}
              text2={`£${item.text2}`}
              text3={`£${item.text3}`}
            />
          ))}
        </tbody>
      </table>
      <div>
        <p className="has-text-centered footer-text has-text-weight-bold">
          Costs above based on your event hosted at our location, Blyth Hall
          Farm in North Warwickshire. To have Deckerdence at your chosen
          location additional cost from £3,000
        </p>
      </div>
    </div>
  </Section>
);

export default StatsTable;
