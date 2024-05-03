import express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req:any, res:any) => {
  res.send('Hello from the new web platform!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// https://apply.personal.easternbank.com/onboarding-us/product-selection-list

export {}
