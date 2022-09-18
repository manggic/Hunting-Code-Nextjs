import path from "path";
var fs = require("fs");
export default async function getAllBlog(req, res) {
  let { name } = req.query;
  let data = await fs.promises.readdir(`blogdata`);
  let allBlogData = [];
  for (let index = 0; index < data.length; index++) {
    const blog = data[index];
    let singleBlogData = await fs.promises.readFile(
      `blogdata/${blog}`,
      "utf-8"
    );
    allBlogData.push(JSON.parse(singleBlogData));
  }

  res.status(200).json(allBlogData);
}



