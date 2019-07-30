# Readme
###大数相加思路description
- 问题出现情景: 由于js对于最大数的运算 Number.MAX_SAFE_INTEGER = 9007199254740991, 会出现e底数问题
- 解决方向: 将大数进行转换为数组, 再对单个数字进行运算;
- 注意问题: 对拆分成数组的大数, 应从个位开始运算即数组的最后一位, 同时, 十进制进一位时, 应作临时记录, 以及单个数字运算完后, 注意拼接的前后顺序
### 步骤

* 全局安装 mocha

```
npm install mocha -g
// 如果出现找不到should模块, 则需要全局安装should
npm install should -g
```

* Fork 代码仓库并拉到本地
* 安装依赖

```
npm install
```

* 启动测试

```
mocha
```

* 打开 `./test/test.js` 修改 `./lib/add.js` 跑通测试用例 

* 提交github，尝试接入Travis CI

### 参考

* [should.js](https://github.com/shouldjs/should.js)
* [Travis CI](https://www.travis-ci.org/)
* [Travis CI Node](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)