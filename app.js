var spider = require('./lib/spider')

spider({
  url: 'https://m.duitang.com/article/?id=513274',
  // decoding: 'gb2312'
}, {
  items: {
    selector: '#content .wrap-container .article-detail',
    handler: {
      title: {
        selector: 'h2'
      },
      content: {
        selector: '.blog-content'
      }
      // authorPic: {
      //   selector: ' a img!attr:src'
      // },
      // author: {
      //   selector: ' a span!text'
      // }
      // time: {
      //   selector: ' h3'
      // },        

    }
  }
}).then((data) => {
  // 获取成功
  if (data && data.items) {
    var title = data.items.title;
    // var authorPic = data.items.authorPic;
    var content = data.items.content;
    console.log(title);
    console.log(content)
  }
})
