# Task Management Application Front-end

This application acts as the front-end for the Task Management application developed throughout the *NestJS - Zero to Hero* course, produced by Ariel Weinberger.

## Start the application

To start the applicatino run que following command:

```bash
$ npm start
```

## Deployment

This front-end application is a simple single page applicatino so it is pure html, javascript and css. It does not works with server side rendering therefore it should be very easy to deploy because the application is independent from the server.

Amazon S3 (Simple Storage Service) can be used for the deployment. This service enables object storing in buckets. Policies, permissions and so can be defined for each bucket. This front-end application will be hosted inside an S3 bucket. This will act as a static website hosting.

To deploy this application via Amazon S3 service, please see the [video](https://www.udemy.com/nestjs-zero-to-hero/learn/lecture/15044214#overview) explaining how to host a website using Amazon S3 service.