/* -------------------------- */
/* Project  : Zookeepr        */
/* File     : index.js        */
/* Author   : Vicente Garcia  */
/* Date     : 04/14/2022      */
/* Modified : 04/14/2022      */
/* -------------------------- */
const path = require("path");
const router = require("express").Router();
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});
router.get("/animals", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/animals.html"));
});
router.get("/zookeepers", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/zookeepers.html"));
});
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});
module.exports = router;