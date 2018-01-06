module.exports = (store, validations) => {
    return {
        getComments(req, res) {
            let postId = req.params.postId;
            if (!store.posts[postId]) {
                return validations.postNotFound(res, postId);
            }

            res.status(200).send(store.posts[postId].comments || []);
        },
        addComment(req, res) {
            let postId = req.params.postId;
            if (!store.posts[postId]) {
                return validations.postNotFound(res, postId);
            }

            let post = store.posts[postId];
            if (!post.comments) {
                post.comments = [];
            }

            let id = post.comments.length;
            post.comments.push(req.body);

            res.status(201).send({id: id});
        },
        updateComment(req, res) {
            let postId = req.params.postId;
            let commentId = req.params.commentId;

            if (!store.posts[postId]) {
                return validations.postNotFound(res, postId);
            }

            let post = store.posts[postId];
            if (!post.comments) {
                return validations.noCommentsForPost(res, postId);
            }

            if (!post.comments[commentId]) {
                return validations.commentNotFound(res, postId, commentId);
            }

            post.comments[commentId] = req.body;

            res.status(200).send(post.comments[commentId]);
        },
        removeComment(req, res) {
            let postId = req.params.postId;
            let commentId = req.params.commentId;

            if (!store.posts[postId]) {
                return validations.postNotFound(res, postId);
            }

            let post = store.posts[postId];
            if (!post.comments) {
                return validations.noCommentsForPost(res, postId);
            }

            if (!post.comments[commentId]) {
                return validations.commentNotFound(res, postId, commentId);
            }

            post.comments.splice(commentId, 1);

            res.status(204).send();
        }
    }
};
