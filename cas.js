import axios from "axios";
import fs from "fs";

const data = JSON.stringify({
  userId: "3",
  body: "MICKO",
  title: "Naslov",
});

var config = {
  method: "post",
  url: "https://jsonplaceholder.typicode.com/posts",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Encoding": "gzip,deflate,compress",
  },
  data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    fs.writeFileSync("posts.json", JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
