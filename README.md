# javascript-snippet

> 收集前端相关的一些常用工具 example 、代码片段（snippet 目录）等。
> 使用场景： 前端页面开发常用功能、 篡改猴 (Tampermonkey) 脚本提效

## Usage

1.  VS Code NPM Scripts 启动 start 命令（package.json）

2.  浏览器访问 http://localhost:3000/

## 工程搭建

> 使用 nodeJs 作为后端服务，方便模拟请求交互。

### ①简单模式

```shell
cd javascript-snippet
# Use the npm init command to create a package.json file for your application.
npm init
# Install Express in the myapp directory and save it in the dependencies list.
npm install express

# Then, load http://localhost:3000/ in a browser to see the output.
node app.js
```

### ②使用 generator

```shell
# Use the application generator tool, express-generator, to quickly create an application skeleton.
npm install -g express-generator
# creates an Express app named javascript-snippet
# The app will be created in a folder in the current working directory and the view engine will be set to Pug
express --view=pug javascript-snippet
# Then install dependencies
npm install
# run
DEBUG=javascript-snippet:* npm start
```

## 三方框架/库

### ①Express

> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

    [使用文档](http://expressjs.com/en/starter/static-files.html)

### ②Pug

    [api 使用文档](https://pugjs.org/api/getting-started.html)

### ③
