# Robin Frontend Interview Challenge!

Welcome!

Here you will find the front end challenge to solve when interviewing with Robin. It represents real-world scenarios you can expect to encounter while working at Robin.

We do not expect you to spend more than an hour or two on this challenge.

## Getting started

### Pre-requisites

-   NodeJS version 8+  [Download here](https://nodejs.org/en/)

Once node is installed clone this repository. Please ensure all work is done on a new feature branch:

```
git checkout -b robin-challenge-solutions
```

```
npm install
```
Runs the app in the development mode:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

## FYI
- A desk is unavailable when it is red
- A desk is available when it is green
- A modal pops us when a desk is clicked
- The values for `unavailable` and `available` are set to `0` to start. This is just to show how to display and set state (if you are not already familiar). The values are meant to be changed.


## Acceptance Criteria
In order to complete the challenge, all acceptance criteria must be met:

- A pod of desks cannot have more than 6 desks and less than 1 desk
- When adding desks, if the quantity will cause the pod to have more than 6 desks, do not update the 'unavailable' and 'available' count and `console.log` a message saying: "Cannot have more than 6 desks"
- When deleting a desk, if it will cause the pod to have less than 1 desk, do not update the 'unavailable' and 'available' count and `console.log` a message saying: "Cannot have less than 1 desk"
- When adding desks, the 'unavailable' and 'available' count should only update if the number of desks will not exceed 6 and after clicking the 'Submit' button
- When deleting a desk, the 'unavailable' and 'available' count should only update if the number of desks is will not be less than 1 and after clicking the 'Delete' button
- When the 'Change State' button is clicked, the desk should visibly change state (e.g. red to green) and the 'unavailable' and 'available' count should be updated

## Submitting the challenge

TBD

We look forward to seeing your solutions!