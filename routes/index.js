let store = {
    posts: [
        // {
        //     name: 'Top 10 ES6 Features every Web Developer must know',
        //     url: 'https://webapplog.com/es6',
        //     text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
        //     comments: [
        //         {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
        //         {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
        //         {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}
        //     ]
        // }
    ]
};

let genericError = (res, message) => res.status(400).send({message: message});

let validations = {
    postNotFound: (res, id) => genericError(res, `Post with id: ${id} is not found`),
    noCommentsForPost: (res, id) => genericError(res, `Post with id: ${id} does not contain any comments`),
    commentNotFound: (res, postId, commentId) => genericError(res, `Comment with id: ${commentId} is not found ` +
        `for postId: ${postId}`)
};

let posts = require('./posts')(store, validations);
let comments = require('./comments')(store, validations);

let initPosts = app => {
    app.get('/posts', posts.getPosts);
    app.post('/posts', posts.addPost);
    app.put('/posts/:postId', posts.updatePost);
    app.delete('/posts/:postId', posts.removePost);
};

let initComments = app => {
    app.get('/posts/:postId/comments', comments.getComments);
    app.post('/posts/:postId/comments', comments.addComment);
    app.put('/posts/:postId/comments/:commentId', comments.updateComment);
    app.delete('/posts/:postId/comments/:commentId', comments.removeComment);
};

module.exports = {
    initPosts: initPosts,
    initComments: initComments
};


