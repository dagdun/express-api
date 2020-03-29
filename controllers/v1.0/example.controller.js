const get = (req, res) => {
  res.sendFormat('example/get')
}

const post = (req, res) => {
  res.sendFormat('example/post')
}

const getId = (req, res) => {
  res.sendFormat('example/getId/' + req.params.id)
}

const postId = (req, res) => {
  res.sendFormat('example/postId/' + req.params.to)
}

const deleteId = (req, res) => {
  res.sendFormat('example/deleteId/' + req.params.xyz)
}

module.exports = { get, post, getId, postId, deleteId }
