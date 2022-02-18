import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  h3 {
    color: ${props => props.theme.primaryColor};

    padding-left: 3rem;
  }
  .table-width {
    width: 11rem;
  }
  .container {
    overflow: scroll;
  }
`;

const TableRow = styled.tr`
  position: relative;
  th p {
    padding-left: 3rem;
  }
  img {
    width: 37px;
    height: auto;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  z-index: 9999;
  left: 0px;
  top: 10px;
  span {
    color: ${props => props.theme.dangerColor};
  }
  .tooltiptext {
    visibility: hidden;
    width: 180px;
    background-color: ${props => props.theme.dangerColor};
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

const Button = styled.button`
  background-color: ${props => props.theme.primaryColor};
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => props.theme.lightAccent};
`;

const InfoItem = ({ title, text1, text2, text3 }) => (
  <TableRow>
    <th>
      <p className="has-text-weight-normal is-size-3">{title}</p>
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
    <IconContainer>
      <span className="is-size-3">
        <i className="fas fa-info-circle" />
      </span>
      <span className="tooltiptext is-size-7">Text Here</span>
    </IconContainer>
  </TableRow>
);

const ButtonItem = () => (
  <Button className="button is-danger">
    <span className="is-uppercase has-text-weight-semibold">Find out more</span>
  </Button>
);

const infoItems = [
  { id: 1, title: 'Guests', text1: ' ', text2: ' ', text3: ' ' },
  { id: 2, title: 'A truly unique venue', text1: ' ' },
  { id: 3, title: 'Exclusive venue use', text1: ' ' },
  {
    id: 4,
    title: 'Personal coordinator in planning and on the day',
    text1: ' ',
  },
  { id: 5, title: 'Family and dog friendly', text1: ' ' },
  { id: 6, title: 'A truly unique venue', text1: ' ' },
  { id: 7, title: 'Onsite parking', text1: ' ' },
  { id: 8, title: 'Glamping options on site', text1: ' ' },
  { id: 9, title: 'Great hotel accommodation nearby', text1: ' ' },
  {
    id: 10,
    title: 'Suppliers - use your own or use our recommended favourites',
    text1: ' ',
  },
];

const HireInfoTable = () => (
  <Section className="section">
    <div className="container">
      <table className="table is-fullwidth is-bordered">
        <thead>
          <tr>
            <th>
              <h3 className="is-size-3 is-uppercase has-text-weight-semibold">
                KEY INFORMATION
              </h3>
            </th>
            <th className="is-uppercase">Ultimate Deckerdence</th>
            <th className="is-uppercase">Classic Deckerdence</th>
            <th className="is-uppercase">Essential Deckerdence</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              <p className="has-text-weight-normal is-size-3">
                Bespoke elements can be added to each Deckerdence option to make
                Deckerdence your perfect fit
              </p>
            </th>
            <th>
              <ButtonItem />
            </th>
            <th>
              <ButtonItem />
            </th>
            <th>
              <ButtonItem />
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
