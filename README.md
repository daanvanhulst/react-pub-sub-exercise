# React pub-sub exercise

## Exercise

There are three tasks in this exercise of which the **second** is the main exercise. Each TASK is clearly marked within the code base next to a TODO.

Please resolve each TASK within a separate commit.

Since this project contains a lot of code you won't need to touch, as a guideline, you should edit the following files:

- src/app/People/Person/Person.tsx
- src/app/People/People.tsx
- src/app/People/ModalLinkPerson/ModalLinkPerson.tsx
- (and files that you introduce yourself)

### TASK-0001 get people from shared state

Currently a fake backend call is being done in each component where people are required. Please refactor the application so that the backend call is done within a central location.

### TASK-0002 link people together

The link person button in `Person.tsx` does nothing at this time. Use

### TASK-0003 get rid off duplicate code in classNames

In the Person.tsx there are a lot of classNames which are exactly the same. Please refactor this so that the duplicate code is gone.

## Running the application:

`yarn install` || `npm install`

Run the application

`yarn dev` || `npm run dev`

## Contributing:

- Respect the project the eslint rules
- Use `yarn commit` || `npm run commit`
  - a commit message contains the TASK: `feature: TASK-0001 my message`
