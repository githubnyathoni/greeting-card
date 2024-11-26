## Project Spesification (Install Requirements)

- Nodejs Version: [Flexible based on requirement project]
- PNPM Version: [Flexible based on requirement project]
- Vite: [Flexible based on requirement project]
- Typescript: [Flexible based on requirement project]
- Code Formatting: Eslint

## How to Install & Run

1. First you need to clone this repo into your local machine using clone button from bitbucket
2. Copy .env.example into .env.local new file and insert configuration key and value env
3. Use pnpm as package manager [pnpm](https://pnpm.io/) to install project packages.

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
docker container stop [project-name]-container
```

```bash
docker container rm [project-name]-container
```

2. Check status container is deleted or not

```bash
docker container ls -al
```

3. Delete docker image

```bash
docker rmi [project-name]
```

```bash
docker images -> check image already deleted or not
```

4. Build new docker image named [project-name] and make sure you already in project directory

```bash
docker build -t [project-name] .
```

5. Run docker image and build new container named "[project-name]-container"

```bash
docker run -d -p [port]:[port] --name [project-name]-container ims
```
