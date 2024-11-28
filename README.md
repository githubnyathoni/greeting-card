# Greeting Card Generator

A responsive web application built with React to create personalized greeting cards. Users can upload an image, input a message, and generate a customized greeting card. The generated card is previewed and can be downloaded as an image.

## Features

- Upload a background image for the card.
- Customize card fields:
  - Dear: Add the recipient's name.
  - Message: Add a personalized message.
  - From: Add the sender's name.
- Real-time preview of the card while editing.
- Responsive design for both desktop and mobile screens.
- Download the completed card as an image.

## Technologies Used

- **React**: For building the frontend.
- **Tailwind CSS**: For styling and responsive design.
- **TypeScript**: For type safety and improved developer experience.
- **HTML2Canvas**: For capturing the card as an image.
- **Jest**: For unit testing components and functionality.

## Project Spesification (Install Requirements)

- [Node.js](https://nodejs.org/) (v16 or higher)
- [PNPM](https://pnpm.io/)
- [Vite](https://vite.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)

## How to Install & Run

1. First you need to clone this repo into your local machine using clone button from bitbucket
2. Use pnpm as package manager [pnpm](https://pnpm.io/) to install project packages.

```bash
pnpm install
```

4. Run project in development using this command

```bash
pnpm run dev
```

## Server / Production Build

Git Pull every changes from bitbucket before running all this commands.

1. Stop and delete existed project container

```bash
docker container stop greeting-card-container
```

```bash
docker container rm greeting-card-container
```

2. Check status container is deleted or not

```bash
docker container ls -al
```

3. Delete docker image

```bash
docker rmi greeting-card
```

```bash
docker images -> check image already deleted or not
```

4. Build new docker image named greeting-card and make sure you already in project directory

```bash
docker build -t greeting-card .
```

5. Run docker image and build new container named "greeting-card-container"

```bash
docker run -d -p [port]:[port] --name greeting-card-container ims
```

## Testing

```bash
# unit test
pnpm run test
```
