var fs = require("fs");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, phone } = req.body;

    fs.readFile("contactData/user.json", "utf8", (err, data) => {
      if (true || data) {
        let parsedData = JSON.parse(data);
        fs.writeFileSync(
          "contactData/user.json",
          JSON.stringify({ ...parsedData, [email]: req.body })
        );
      } else {
        console.log("err", err);
      }
    });

    res.status(200).json({ ...req.body });
  } else {
    res.status(200).json({ name: "GET" });
  }
}
