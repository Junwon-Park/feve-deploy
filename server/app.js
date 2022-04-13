const express = require('express');
require('express-async-errors');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const { Server } = require('socket.io');
const moment = require('moment');
const https = require('https');

const { config } = require('./config.js');

// Router
const authRouter = require('./router/auth/authRouter.js');

const addproductRoute = require('./router/admin/addproduct.js');
const loadproductRoute = require('./router/admin/loadproduct.js');
const adminCscenterRoute = require('./router/admin/cscenter.js');
const adminUpdateCscenterRoute = require('./router/admin/updateCscenter.js');
const adminInspectionRoute = require('./router/admin/loadinspection.js');
const adminUpdateInspectionRoute = require('./router/admin/updateInspection.js');
const adminUpdateProductRoute = require('./router/admin/updateProduct.js');
const adminDeleteProductRoute = require('./router/admin/deleteProduct.js');
const adminMainChartRoute = require('./router/admin/main.js');
const styleAddPostRoute = require('./router/style/addPost.js');
const styleLoadPostRoute = require('./router/style/loadPost.js');
const styleDeletePostRoute = require('./router/style/deletePost.js');
const styleAddCommentRoute = require('./router/style/addComment.js');
const styleLoadCommentRoute = require('./router/style/loadComment.js');
const styleFollowRoute = require('./router/style/follow.js');
const categorytRoute = require('./router/common/category.js');
const shoplistRoute = require('./router/shop/shoplist.js');
const shopviewRoute = require('./router/shop/shopview.js');
const buyconfirmRouter = require('./router/sold/buyconfirm.js');
const buyRouter = require('./router/sold/buyproduct.js');
const sellconfirmRouter = require('./router/sold/sellconfirm.js');
const sellRouter = require('./router/sold/sellproduct.js');
const filterCateRouter = require('./router/shop/filterCate.js');
const filterPriceRouter = require('./router/shop/filterPrice.js');
const mypageMainRouter = require('./router/mypage/mypageMain.js');
const mypageBuyListRouter = require('./router/mypage/mypageBuyList.js');
const mypageSellListRouter = require('./router/mypage/mypageSellList.js');
const mypageFavoriteListRouter = require('./router/mypage/mypageFavoriteList.js');
const mypageProfileRouter = require('./router/mypage/mypageProfile.js');
const imageRouter = require("./image/image.js");
const imageStyleRouter = require("./image/styleImage.js");
const uploadImageRouter = require("./image/uploadImage.js");
const uploadStyleImageRouter = require("./image/uploadStyleImage.js");

const cscenterInsertRoute = require('./router/cscenter/cscenterInsert.js');
const mainLoadproductRoute = require('./router/main/loadproduct.js');

const app = express();
const PORT = config.PORT || 4000;

//2022.03.26 사진 용량 초과로 에러나서 추가
app.use(express.json());
app.use(
  express.urlencoded({
    limit: '10mb',
    extended: false
  })
);

app.use(morgan('tiny'));
app.use(helmet());
const whiteListByCors = ['https://localhost:3000'];
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
  origin: 'https://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(devCors));

// To router
app.use('/auth', authRouter);

app.use('/addproduct', addproductRoute);
app.use('/category', categorytRoute);

app.use('/cscenter/cscenterInsert', cscenterInsertRoute);
app.use('/getImage', imageRouter);

app.use('/admin/addproduct', addproductRoute);
app.use('/admin/loadproduct', loadproductRoute);
app.use('/admin/cscenter', adminCscenterRoute);
app.use('/admin/loadInspection', adminInspectionRoute);
app.use('/admin/updateInspection', adminUpdateInspectionRoute);
app.use('/admin/updateCscenter', adminUpdateCscenterRoute);
app.use('/admin/updateProduct', adminUpdateProductRoute);
app.use('/admin/deleteProduct', adminDeleteProductRoute);
app.use('/admin/count', adminMainChartRoute);

app.use('/style/addPost', styleAddPostRoute);
app.use('/style/loadPost', styleLoadPostRoute);
app.use('/style/deletePost', styleDeletePostRoute);
app.use('/style/follow', styleFollowRoute);
app.use('/style/addComment', styleAddCommentRoute);
app.use('/style/loadComment', styleLoadCommentRoute);

app.use('/shoplist', shoplistRoute);
app.use('/shop/shoplist', shoplistRoute);
app.use('/shop/filterCate', filterCateRouter);
app.use('/shop/filterPrice', filterPriceRouter);
app.use('/shop/shopview', shopviewRoute);

app.use('/buy', buyconfirmRouter);
app.use('/buy/proc', buyRouter);
app.use('/sell', sellconfirmRouter);
app.use('/sell/proc', sellRouter);

app.use('/mypage', mypageMainRouter);
app.use('/mypage/buyList', mypageBuyListRouter);
app.use('/mypage/sellList', mypageSellListRouter);
app.use('/mypage/favoriteList', mypageFavoriteListRouter);
app.use('/mypage/profile', mypageProfileRouter);

app.use("/getImage", imageRouter);
app.use("/getStyleImage", imageStyleRouter);
app.use("/uploadImage", uploadImageRouter);
app.use("/uploadStyleImage", uploadStyleImageRouter);

app.use('/main/loadproduct', mainLoadproductRoute);

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

let server;
if (fs.existsSync('./certKey/key.pem') && fs.existsSync('./certKey/cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/certKey/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/certKey/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(PORT, () =>
    console.log(`HTTPS server running on port ${PORT} successfully!!!`)
  );
} else {
  server = app.listen(PORT, () => {
    console.log(`HTTP server running on port ${PORT} successfully!!!`);
  });
}

const io = new Server(server, {
  cors: {
    origin: 'https://localhost:3000',
    credentials: true
  },
  allowEIO3: true
});

io.on('connection', function (socket) {
  socket.on('chat', (msg) => {
    console.log(msg);
    msg.sender = 1;
    msg.messageTime = moment().format('HH:mm');
    socket.broadcast.emit('chat', msg);
  });
});

module.exports = { server, io };
