## Introduction:

Believe it or not, Walmart Mexico is a growing startup-like division within Walmart that is looking for fullstack front-end developers like yourself to help it scale to a be a billion dollar revenue division.

This code challenge is meant to mimic the type work we do each day as front-end/fullstack developers in the Walmart Mexico division. Everyday, we ask developers such as yourself to take ownership of the implementation and management of front-end features. This requires understanding of front-end architecture, data models, how-the-feature-works-end-2-end, in addition to implementing features/fixes end-2-end.

Through this challenge, we are looking for signals that indicate that you would be able to handle the unique and interesting engineering challenges we have that take more than just writing of front-end code to fit a UI mock.

Our techstack is React server-side rendered using Next.js, Apollo Graphql interface on Node (bff layer), and a Node for microservices. We don’t expect mastery - we prefer fullstack understanding, the ability to quickly learn what you don’t know, use technologies properly, and write easy-to-read, reusable code.

---

## Instructions:

-   Fork the code challenge repo to your personal Github account
-   Once you are complete with the tasks of this challenge, push the code to your repo and send the link to the recruiter to forward to the hiring team for review.
-   See the diagram in the powerpoint PDF in this repo for the system architecture so you know how the various servers in this repo are connected.
-   The tasks to complete are in the ___tasks_and_solutions.md___ file.

---

## Final Comments

We know that you may have questions and typically, at work, those questions are resolved when receiving mocks or during sprint-planning. But since this is an interview, make your best guess to unblock yourself and keep on moving. Use comments in code if needed to convey your thoughts. In our division, this type of problem comes up every day and you must be able to make good judgements and be able to proceed even with the lack of clarity.

Also… fix any bugs you find along the way. Not sure if we left some in there just like in real life :P

Good luck! We look forward to reading your implementation.

---

## Attached

-   PDF of the UI design mocks and system diagram

---

## How to start this repo

- This repo is called a monorepo - essentially a repo consisting of many different applications (packages) that typically would be in individual repos. To manage this monorepo, we use Lerna (https://lerna.js.org/).

- So to install dependencies you can either ___cd___ into each individual package (next_server, gql_server, microservice) and run

     - npm install

    or in the root directory, run

     - npm run bootstrap

- To start up each server, you currently have to ___cd___ into each package and run ___npm run start___, and in the case of the next_server, you need to run ___npm run build___ then ___npm run start___... don't worry, there is a Task in your TODOs to make your life easier :)