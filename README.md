# auto-docker-build

[![Build Status](https://travis-ci.org/mhazy/auto-docker-build.svg?branch=master)](https://travis-ci.org/mhazy/auto-docker-build)

Service for managing automated docker builds from GitHub PRs

## Goals

1. Receive webhook request from GitHub for PR
2. Dispatch SQS message for docker build service(s) to:
     - Retrieve code branch from GitHub
     - Build docker image
     - Push image to registry
3. Generate Elastic Beanstalk configuration to deploy docker image
4. Update PR status during process [pre-image build, post-image build, pre-deployment, post-deployment]
5. Deploy application in multi-container environment on AWS with auto-scaling for docker builds
