// module imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const schemas = require('./schemas');

const PORT = 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create a new post
app.post('/posts', (req, res) => {
    const { body } = req;

    const { error, value } = schemas.postSchema.validate(body);

    if(error){
        return res.status(422).json({ errors: error });
    }
    return res.json({ message: 'Success', value });
});

// filters posts by queries
app.get('/posts', (req, res) => {
    const query = req.query;

    const { error, value } = schemas.postFilterSchema.validate(query);

    if(error){
        return res.status(422).json({ errors: error });
    }
    return res.json({ message: 'Success', value });

});

// gets a post by id
app.get('/posts/:id', (req, res) => {
    const id = req.params.id;

    const { error, value } = schemas.postIdSchema.validate({ id });
    
    if(error){
        return res.status(422).json({ errors: error });
    }
    return res.json({ message: 'Success', value });
});

// listens for connections
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
})