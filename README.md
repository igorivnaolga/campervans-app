# Campervans App

Small React app for campervan rentals in Ukraine.

## Description

This app lets users:
- browse campervans in a catalog,
- filter by location, equipment, and vehicle type,
- save favorite campers,
- open a detailed modal with reviews and a booking enquiry form.

## How to use

1. Install dependencies:
   `npm install`
2. Add `.env` in the project root:
   `REACT_APP_MOCK_API_URL=https://YOUR_PROJECT_ID.mockapi.io`
3. Run locally:
   `npm start`
4. Build production version:
   `npm run build`
5. Deploy to GitHub Pages:
   `npm run deploy`

## MockAPI setup

1. Create `.env` in the project root based on `.env.example`.
2. Add your base URL:

`REACT_APP_MOCK_API_URL=https://YOUR_PROJECT_ID.mockapi.io`

3. Restart the dev server (`npm start`) if it is already running.

Current requests:
- `GET /campervans` - camper catalog
- `POST /contacts` - enquiry submission from the modal booking form  
  (if `contacts` does not exist in MockAPI, the app saves the enquiry locally in `localStorage`)
