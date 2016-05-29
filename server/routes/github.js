var controller = require('../controllers/github');

module.exports = [
    {
        method: 'POST',
        path: '/webhooks/github',
        handler: controller.handlers.webhook,
        config: {
            description: 'Handles webhook requests for GitHub repositories',
            tags: ['webhook', 'github'],
        }
    }
];

