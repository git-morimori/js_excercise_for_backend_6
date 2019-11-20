const express = require('express');
//router/index.jsを実装したらここで読み込む
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');
//静的ファイルを実装したら保存場所をセットする
//router/index.jsを実装したらルーティングをセットする

app.listen(PORT, () => {
  console.log(`Quiz app listening on port ${PORT}`);
});
