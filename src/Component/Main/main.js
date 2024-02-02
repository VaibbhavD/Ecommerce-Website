import React from "react";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <Container>
      <div class="container text-center mt-5">
        <div class="row g-2">
          <div class="col-6">
            <div class="card-body m-5">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                alt="..."
              />

              <h5 class="card-title">Album 1</h5>
              <p class="card-text">$.12.99</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="card-body m-5">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
                alt="..."
              />

              <h5 class="card-title">Album 2</h5>
              <p class="card-text">$.12.99</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="card-body m-5">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
                alt="..."
              />

              <h5 class="card-title">Album 3</h5>
              <p class="card-text">$.12.99</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="card-body m-5">
              <img
                src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
                alt="..."
              />

              <h5 class="card-title">Album 4</h5>
              <p class="card-text">S$.12.99</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Main;
