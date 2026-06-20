# NestJS Server-Sent Events (SSE) Demo

A simple NestJS application demonstrating **Server-Sent Events (SSE)** by streaming live cryptocurrency prices from the CoinGecko API to the browser every 10 seconds.

## Features

* Server-Sent Events (SSE) with NestJS
* Live Bitcoin and Ethereum prices
* Automatic updates every 10 seconds
* Simple HTML frontend
* No frontend framework required

## Tech Stack

* NestJS
* RxJS
* Express
* HTML, CSS, JavaScript
* CoinGecko API

## Installation

```bash
pnpm install
```

## Run the Project

```bash
pnpm start:dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## How It Works

1. The browser connects to the `/sse` endpoint using `EventSource`.
2. Every 10 seconds, the server fetches the latest cryptocurrency prices from the CoinGecko API.
3. The server sends the updated data to all connected clients through Server-Sent Events.
4. The frontend updates the displayed prices automatically without refreshing the page.

## Project Structure

```text
src/
├── app.controller.ts
├── app.service.ts
├── app.module.ts
├── main.ts
└── index.html
```

## API Endpoints

| Method | Endpoint | Description                                |
| ------ | -------- | ------------------------------------------ |
| GET    | `/`      | Serves the HTML page                       |
| GET    | `/sse`   | Streams live cryptocurrency data using SSE |

## License

This project is for learning and demonstration purposes.
