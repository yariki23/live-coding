const formElem = document.querySelector(".login-form");
console.log("form element create");
console.dir(new Date());

const serverUrl = "https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users";

function createUserHandler() {
  event.preventDefault();
  console.log("test");

  //validate
  //read form

  const user = {
    email: "test@gmail.com",
    name: "Yaroslav",
    password: "123",
  };

  console.log(JSON.stringify(user));

  //in: url(str), obj
  //out: promise
  const promise = fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  //then
  //input: callback, callback (optional)
  //out: promise

  //callback
  //input: result of prev promise
  //out: Any - will be wrapped in the promise
  promise
    .then((response) => {
      console.log("response is here");

      //input: none
      //out: promise
      return response.json();
    })
    .then((body) => {
      console.log("body is read");

      console.log(body);
    });
}

formElem.addEventListener("submit", createUserHandler);
console.log("listener added");
