import express from 'express';
import Project from '../../model/Project.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try{    
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch(error) {
        res.status(404).json({message: error.message})
    }
});

export default router;