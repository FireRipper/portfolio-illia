import axios from 'axios'

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`)
    const post = axiosRes.data
    res.status(200).json(post)
  } catch (err) {
    console.error(err.reason)
    res.status(err.status || 400).json({ error: `Post isn't defined` })
  }
}
