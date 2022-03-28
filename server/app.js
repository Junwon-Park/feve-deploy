const express = require('express');
require('express-async-errors');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const { config } = require('./config.js');

// Router
const startRoute = require('./router/start.js');
const authRouter = require('./router/auth/authRouter.js');
const addproductRoute = require('./router/admin/addproduct.js');
const loadproductRoute = require('./router/admin/loadproduct.js');
const adminCscenterRoute = require('./router/admin/cscenter.js');
const categorytRoute = require('./router/common/category.js');
const shoplistRoute = require('./router/shop/shoplist.js');
const buyRouter = require('./router/sold/buyconfirm.js');


const app = express();
const PORT = config.PORT || 4000;

//2022.03.26 사진 용량 초과로 에러나서 추가
app.use(
  express.json({
    limit: '10mb'
  })
);
app.use(
  express.urlencoded({
    limit: '10mb',
    extended: false
  })
);

app.use(morgan('tiny'));
app.use(helmet());
const whiteListByCors = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteListByCors.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};
const devCors = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(devCors));

// To router
app.use('/', startRoute);
app.use('/addproduct', addproductRoute);
app.use('/auth', authRouter);
app.use('/admin/addproduct', addproductRoute);
app.use('/admin/loadproduct', loadproductRoute);
app.use('/admin/cscenter', loadproductRoute);
app.use('/category', categorytRoute);
app.use('/shoplist', shoplistRoute);
app.use("/buy",buyRouter);
app.use('/shop/shoplist', shoplistRoute);

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} successfully!!!`);
});
