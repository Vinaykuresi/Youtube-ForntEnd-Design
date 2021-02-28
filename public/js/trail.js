document
  .querySelector(".comment .comment-submit-button")
  .addEventListener("click", e => {
    var d = document.querySelector(".comment .user-comment").value;
    console.log(d);
    console.log(e);
    fetch(
      `https://my-json-server.typicode.com/Vinaykuresi/type_code_json/data`,
      {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "berar",
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  });
