# myblogs-front-end
我的开源博客项目，前端项目根目录

## Quick Start
### 1.在本机找个文件夹，然后
```
git clone https://github.com/cghsir/myblogs.git
```
### 2.进入目录myblogs/myblogs-front-end目录

### 3.保证node,npm,webpack正确安装，安装[详见f-001与f-002](https://github.com/cghsir/myblogs/tree/master/dev-notes)

### 4.在当前目录执行 npm install 直到提示安装完毕。如安装失败请查看第三步。
  安装信息：
  
```
  cghsir@cghsir MINGW64 /c/cghsir/testtest/myblogs/myblogs-front-end (master)
  $ npm install
  npm notice created a lockfile as package-lock.json. You should commit this file.
  npm WARN myblogs-front-end@1.0.0 No repository field.
  npm WARN myblogs-front-end@1.0.0 license should be a valid SPDX license expression
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules\fsevents):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"}    (current: {"os":"win32","arch":"x64"})
  added 557 packages in 122.102s
```
### 5.启动项目,在项目根目录执行
```
npm run dev_win
```
出现如下字样则安装成功，如失败请检查第三步
```
webpack: Compiled successfully.
```
### 6.访问 http://localhost:8088/dist/view/index.html
