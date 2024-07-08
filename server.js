const express = require('express');
const app = express();
const loggerMiddleware = require('./loggerMiddleware');

app.use(myMiddleware);
app.get('/', (req,res) => {
    res.send('Hello there!')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});