import React from "react";

const Contact = () => {
  function SubmitHandler(e) {
    e.preventDefault();

    const user = {
      name: document.getElementById("inputname").value,
      email: document.getElementById("inputEmail3").value,
      No: document.getElementById("inputNo").value,
    };

    fetch("https://ecommerce-1f09d-default-rtdb.firebaseio.com/User.json", {
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => alert("Our Team Contact You Within 24 Hours"))
      .then(
        (document.getElementById("inputname").value = ""),
        (document.getElementById("inputEmail3").value = ""),
        (document.getElementById("inputNo").value = "")
      );
  }

  return (
    <div class="mt-5 mb-5 ">
      <form class="w-50 m-auto" onSubmit={SubmitHandler}>
        <div class="form-group row m-5">
          <label for="inputname" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputname"
              name="name"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div class="form-group row m-5">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              name="Email"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <div class="form-group row m-5">
          <label for="inputNo" class="col-sm-2 col-form-label">
            Mobil No
          </label>
          <div class="col">
            <input
              type="text"
              class="form-control w-25"
              id="inputNo"
              name="No"
              placeholder="Mobil No"
              required
            />
          </div>
        </div>
        <div class="form-group row text-center ">
          <div class="col-sm-10 ml-5">
            <button type="submit" class="btn btn-primary ">
              Contact
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
