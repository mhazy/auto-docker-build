const Lab = require("lab");
const server = require("../server");
const lab = exports.lab = Lab.script();
const code = require('code');

lab.experiment("GitHub Webhooks", function() {
    lab.test("endpoint should fail without signature", (done) => {
        const options = {
            method: 'POST',
            url: '/webhooks/github'
        };
        server.inject(options, response => {
            code.expect(response.statusCode).to.equal(401);
            done();
        });
    });
    lab.test("endpoint should return 200 with signature", (done) => {
        // signature created with 'SuperSecretKey' default
        const options = {
            method: 'POST',
            url: '/webhooks/github',
            payload: '{"message":"This message is valid!"} ',
            headers: {
                'x-hub-signature': 'sha1=725d3b6750a528d85390a1a81f908f838fce3c9e'
            }
        };

        server.inject(options, response => {
            code.expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
