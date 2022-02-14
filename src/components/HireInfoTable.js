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

const Button = styled.button`
  background-color: ${props => props.theme.primaryColor};
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => props.theme.lightAccent};
`;

const InfoItem = ({ title, text1, text2, text3 }) => (
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
    <td className="table-width has-text-centered">
      {text3 ? (
        <p>{text3}</p>
      ) : (
        <img src="images/icon/check.png" alt="status" />
      )}
    </td>
  </TableRow>
);

const infoItems = [
  { id: 1, title: 'Guests', text1: ' ', text2: ' ', text3: ' ' },
  { id: 2, title: 'A truly unique venue' },
  { id: 3, title: 'Exclusive venue use' },
  { id: 4, title: 'Personal coordinator in planning and on the day' },
  { id: 5, title: 'Family and dog friendly' },
  { id: 6, title: 'A truly unique venue' },
  { id: 7, title: 'Onsite parking' },
  { id: 8, title: 'Glamping options on site' },
  { id: 9, title: 'Great hotel accommodation nearby' },
  {
    id: 10,
    title: 'Suppliers - use your own or use our recommended favourites',
  },
];

const HireInfoTable = () => (
  <Section className="section">
    <div className="container">
      <table className="table is-fullwidth is-bordered">
        <thead>
          <tr>
            <th>
              <h3 className="is-size-3 is-uppercase">KEY INFORMATION</h3>
            </th>
            <th className="is-uppercase">Ultimate Deckerdence</th>
            <th className="is-uppercase">Classic Deckerdence</th>
            <th className="is-uppercase">Essential Deckerdence</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              <abbr>
                Bespoke elements can be added to each Deckerdence option to make
                Deckerdence your perfect fit
              </abbr>
            </th>
            <th>
              <Button>
                <span className="is-uppercase has-text-weight-semibold">
                  Find out more
                </span>
              </Button>
            </th>
            <th>
              <Button>
                <span className="is-uppercase has-text-weight-semibold">
                  Find out more
                </span>
              </Button>
            </th>
            <th>
              <Button>
                <span className="is-uppercase has-text-weight-semibold">
                  Find out more
                </span>
              </Button>
            </th>
          </tr>
        </tfoot>
        <tbody>
          {infoItems.map(item => (
            <InfoItem
              key={item.id}
              title={item.title}
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
            />
          ))}
        </tbody>
      </table>
    </div>
  </Section>
);

export default HireInfoTable;
