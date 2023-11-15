export default function handler(req, res) {
  if (req.method === "POST") {
    !req.body.name && res.status(400).json({ error: "Missing name" });
    res.status(200).json({ msg: `Hello, ${req.body.name}` });
  } else {
    res.status(200).json({ msg: "Hello" });
  }
}
