const express = require('express');
const router = express.Router();
// index
router.get('/', (req, res) => {
  res.send('authors index');
})
// new
router.get('/new', function(req, res) {
  console.log("new");
  //res.send("NEW");
  res.render('authors/new');
});
// show
router.get('/:id', function(req, res) {
  console.log("show");
  res.send("SHOW");
});
// create
router.post('/', function(req, res) {
  console.log("create");
  console.log(req.body);
  res.send("CREATE");
});
// edit
router.get('/:id/edit', function(req, res) {
  console.log("edit");
  res.send("EDIT");
});
// update
router.put('/:id', function(req, res) {
  console.log("update");
  res.send("UPDATE");
});
// delete
router.delete('/:id', function(req, res) {
  console.log("delete");
  res.send("DELETE");
});
module.exports = router;
