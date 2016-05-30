const handlers = {
    /**
     * Parse a github webhook and it pass it to the appropriate handler
     *
     * @param request
     * @param reply
     */
    webhook: (request, reply) => {
        reply();
    }
};

module.exports.handlers = handlers;