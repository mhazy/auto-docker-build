var handlers;

handlers = {
    /**
     * Parse a github webhook and it pass it to the appropriate handler
     *
     * @param request
     * @param reply
     */
    webhook: (request, reply) => {
        request.log(['github'], request.payload);
        reply();
    }
};

module.exports.handlers = handlers;