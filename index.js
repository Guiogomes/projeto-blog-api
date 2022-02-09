const express = require('express');
const usersRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');
const categoriesRoute = require('./routes/categoriesRoute');
const postRoute = require('./routes/postRoute');
const { error } = require('./middlewares');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRoute);
app.use('/login', loginRoute);
app.use('/categories', categoriesRoute);
app.use('/post', postRoute);
app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));