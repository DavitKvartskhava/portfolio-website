const express = require('express');
const ProjectBlog = require('../../model/ProjectBlog.js')
const router = express.Router();


router.get('/', async (req, res) => {
    try{
        const projectBlogs = await ProjectBlog.find();
        res.status(200).json(projectBlogs);
    } catch(error) {
        res.status(404).json({message: error.message})
    }
});

router.get('/:name', async (req, res) => {
    try{
        const projectBlogs = await ProjectBlog.find({'name':req.params.name});
        res.status(200).json(projectBlogs);
    } catch(error) {
        res.status(404).json({message: error.message})
    }
});

module.exports = router;