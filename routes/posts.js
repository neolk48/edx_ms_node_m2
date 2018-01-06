module.exports = (store, validations) => {
    return {
        getPosts(req, res) {
            res.status(200).send(store.posts);
        },
        addPost(req, res) {
            let newPost = req.body;
            let id = store.posts.length;

            store.posts.push(newPost);

            res.status(201).send({id: id});
        },
        updatePost(req, res) {
            if (!store.posts[req.params.postId]) {
                return validations.postNotFound(res, req.params.postId);
            }

            store.posts[req.params.postId] = req.body;
            res.status(200).send(store.posts[req.params.postId]);
        },
        removePost(req, res) {
            if (!store.posts[req.params.postId]) {
                return validations.postNotFound(res, req.params.postId);
            }

            store.posts.splice(req.params.postId, 1);
            res.status(204).send();
        }
    }
};
