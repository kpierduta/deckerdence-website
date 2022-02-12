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

const infoItems = [
  { id: 1, title: 'A truly unique venue' },
  { id: 2, title: 'Exclusive venue use' },
  { id: 3, title: 'Personal coordinator in planning and on the day' },
  { id: 4, title: 'Family and dog friendly' },
  { id: 5, title: 'Guests', text1: 'Up to 160', text2: 'Unlimited' },
  { id: 6, title: 'A truly unique venue' },
  { id: 7, title: 'Onsite parking' },
  { id: 8, title: 'Glamping options on site' },
  { id: 9, title: 'Great hotel accommodation nearby' },
  {
    id: 10,
    title: 'Suppliers - use your own or use our recommended favourites',
  },
];

const KeyInformation = () => (
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
          {infoItems.map(item => (
            <InfoItem
              key={item.id}
              title={item.title}
              text1={item.text1}
              text2={item.text2}
            />
          ))}
        </tbody>
      </table>
    </div>
  </Section>
);

export default KeyInformation;
