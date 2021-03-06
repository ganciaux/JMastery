import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postsRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postsRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//const CONNECTION_URL = 'mongodb+srv://ganciaux:ganciaux@cluster0.acqzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const CONNECTION_URL = 'mongodb://localhost:27017/jsmastery';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

