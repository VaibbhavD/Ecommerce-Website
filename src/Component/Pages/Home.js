import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="m-auto container-sm">
      <div className="text-center m-5 ">
        <h1>TOURS</h1>
      </div>
      <table className="table m-5 table-light">
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">JUL16</th>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <a href="https://www.goibibo.com/" target="_blank">
                <button className="btn btn-secondary">BUY TICKETS</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">JUL19</th>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <a href="https://www.goibibo.com/" target="_blank">
                <button className="btn btn-secondary">BUY TICKETS</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">JUL21</th>
            <td>BRISTPO </td>
            <td>MUSIC THEATRE</td>
            <td>
              <a href="https://www.goibibo.com/" target="_blank">
                <button className="btn btn-secondary">BUY TICKETS</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">JUL25</th>
            <td>SPAIN MI</td>
            <td>MOVIES AND CINEMA</td>
            <td>
              <a href="https://www.goibibo.com/" target="_blank">
                <button className="btn btn-secondary">BUY TICKETS</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">JUL30</th>
            <td>LONDON</td>
            <td>CONCORD PAVILLION</td>
            <td>
              <a href="https://www.goibibo.com/" target="_blank">
                <button className="btn btn-secondary">BUY TICKETS</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">JUL29</th>
            <td>T-MOBILE</td>
            <td>JUGGY</td>
            <td>
              <a href="https://www.goibibo.com/" target="_blank">
                <button className="btn btn-secondary">BUY TICKETS</button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
export default Home;
