const mongoose = require('mongoose');

const ProjectBlogSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "blog": {
        "text": {
        type: String,
        required: true
        }
    }
}, {collection: 'projectBlogs'});

const ProjectBlog = mongoose.model('ProjectBlog', ProjectBlogSchema);
module.exports = ProjectBlog;