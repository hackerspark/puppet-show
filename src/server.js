import { express, bodyParser, cors, cookieParser } from './base';
import exampleRouter from './sites/example/example';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: true
  })
);
app.options('*', cors());
app.use(cookieParser());

app.use('/sites/example', exampleRouter);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });
}

export default app;
