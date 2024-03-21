import React, { useContext, useEffect, useState } from "react";
import ContextStore from "../../Store/Context";
import { useParams } from "react-router-dom";
import AuthContext from "../../Store/Auth-Context";

const ProductDetails = () => {
  const context = useContext(ContextStore);
  const Auth_Context = useContext(AuthContext);
  const Params = useParams();
  // const [Product, SeProduct] = useState({});

  const Product = context.Products.find((item) => item.id == Params.productId);
  console.log(Product);

  const SubmitHandler = () => {
    let add = 0;
    context.CartItems.map((item) =>
      item.id === Product.id
        ? ((add = 1), alert("This Item Already have in Cart!"))
        : null
    );

    if (add === 0) {
      const item = { ...Product, Qty: "1" };
      fetch(
        "https://crudcrud.com/api/88ee8aeaa55d45dfaeb35766ed617c6d/" +
          Auth_Context.Email,
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          res.json().then((data) => context.AddItems(data));
          alert("Item Added To Cart");
        } else {
          alert("Error");
        }
      });
    }
  };

  if (!Product) {
    return (
      <div class="h-full d-flex justify-content-center m-auto ">
        <div class="spinner-border p-4 " role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <body>
          {/* <!-- Product section--> */}
          <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
              <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6">
                  <img
                    class="card-img-top mb-5 mb-md-0"
                    src={Product.images[0]}
                    alt="..."
                  />
                </div>
                <div class="col-md-6">
                  <div class="small mb-1">{Product.category}</div>
                  <h1 class="display-5 fw-bolder">{Product.title}</h1>
                  <p class="">{Product.description}</p>
                  <div class=" mb-5">
                    <p class=" fs-5"> Rating- {Product.rating} </p>
                    <span class="text-success fs-5"> ${Product.price} </span>
                    <span class="text-danger">
                      {" "}
                      {Product.discountPercentage}%
                    </span>
                  </div>
                  <button class="btn btn-success px-5" onClick={SubmitHandler}>
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Related items section--> */}
          <section class="py-5 bg-light">
            <div class="container px-4 px-lg-5 mt-5">
              <h2 class="fw-bolder mb-4">Related products</h2>
              <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div class="col mb-5">
                  <div class="card h-100">
                    {/* <!-- Product image--> */}
                    <img
                      class="card-img-top"
                      src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
                      alt="..."
                    />
                    {/* <!-- Product details--> */}
                    <div class="card-body p-4">
                      <div class="text-center">
                        {/* <!-- Product name--> */}
                        <h5 class="fw-bolder">Fancy Product</h5>
                        {/* <!-- Product price--> */}
                        $40.00 - $80.00
                      </div>
                    </div>
                    {/* <!-- Product actions--> */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="#">
                          View options
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col mb-5">
                  <div class="card h-100">
                    {/* <!-- Sale badge--> */}
                    <div
                      class="badge bg-dark text-white position-absolute"
                      // style="top: 0.5rem; right: 0.5rem"
                    >
                      Sale
                    </div>
                    {/* <!-- Product image--> */}
                    <img
                      class="card-img-top"
                      src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
                      alt="..."
                    />
                    {/* <!-- Product details--> */}
                    <div class="card-body p-4">
                      <div class="text-center">
                        {/* <!-- Product name--> */}
                        <h5 class="fw-bolder">Special Item</h5>
                        {/* <!-- Product reviews--> */}
                        <div class="d-flex justify-content-center small text-warning mb-2">
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                        </div>
                        {/* <!-- Product price--> */}
                        <span class="text-muted text-decoration-line-through">
                          $20.00
                        </span>
                        $18.00
                      </div>
                    </div>
                    {/* <!-- Product actions--> */}
                    {/* <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                      <a class="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div> */}
                  </div>
                </div>
                <div class="col mb-5">
                  <div class="card h-100">
                    {/* <!-- Sale badge--> */}
                    <div
                      class="badge bg-dark text-white position-absolute"
                      // style="top: 0.5rem; right: 0.5rem"
                    >
                      Sale
                    </div>
                    {/* <!-- Product image--> */}
                    <img
                      class="card-img-top"
                      src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
                      alt="..."
                    />
                    {/* <!-- Product details--> */}
                    <div class="card-body p-4">
                      <div class="text-center">
                        {/* <!-- Product name--> */}
                        <h5 class="fw-bolder">Sale Item</h5>
                        {/* <!-- Product price--> */}
                        <span class="text-muted text-decoration-line-through">
                          $50.00
                        </span>
                        $25.00
                      </div>
                    </div>
                    {/* <!-- Product actions--> */}
                  </div>
                </div>
                <div class="col mb-5">
                  <div class="card h-100">
                    {/* <!-- Product image--> */}
                    <img
                      class="card-img-top"
                      src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                      alt="..."
                    />
                    {/* <!-- Product details--> */}
                    <div class="card-body p-4">
                      <div class="text-center">
                        {/* <!-- Product name--> */}
                        <h5 class="fw-bolder">Popular Item</h5>
                        {/* <!-- Product reviews--> */}
                        <div class="d-flex justify-content-center small text-warning mb-2">
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                        </div>
                        {/* <!-- Product price--> */}
                        $40.00
                      </div>
                    </div>
                    {/* <!-- Product actions--> */}
                    {/* <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                      <a class="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                      </a>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Footer--> */}
          <footer class="py-5 bg-dark">
            <div class="container">
              <p class="m-0 text-center text-white">
                Best Ecommerce Website Selling Best Products
              </p>
            </div>
          </footer>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
          <script src="js/scripts.js"></script>
        </body>
      </>
    );
  }
};
export default ProductDetails;
