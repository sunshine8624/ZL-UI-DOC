#### 项目的创建
- Vue 2.0
- VUe 3.0

#### Vue 2.0

1. Cmd执行 node  -v 看是否有版本出现 没有或者报错   就去下载安装 Node.js  https://nodejs.org/zh-cn/download/

2. 打开CMD 执行 设置npm 的镜像地址

   > - npm config get registry 查看你 npm 的配置地址 看是否为 http://registry.npm.taobao.org/
   > - 执行 npm config set registry http://registry.npm.taobao.org/ 设置nom 镜像

3. 全局 安装 脚手架  执行命令 npm install -g vue-cli            // -g 代表全局  

4. vue -V  查看 版本。 有版本 说明安装脚手架成功

5. vue create  项目名字

6. 选择  Manually select features     // 意思为手动选择要配置的项目内容

7.  选择、

   >-  Choose Vue version
   >- Babel（将js的ES5之后的语法转换成ES5,便于浏览器识别语法）
   >- Router（页面的路由路径管理）
   >- Vuex （vue的全局状台管理）
   >- Linter / Formatter （代码格式化的一些配置）
   >- CSS Pre-processors  （CSS 与预处理器）

8. 2. x

9. **Use history mode for router?**     Y   (路由模式的选择，一般选择历史模式)

10. Sass/SCSS (with node-sass)     (CSS 与预处理器)

11. ESLint + Prettier   （使用ESLint官网推荐规则+ Prettile 第三方的配置）

12. Lint on save （保存的时候校验代码格式）

13. In package.json  （将配置文件放在这里面）

14. N  (不保存之前的配置记录)



#### Git 命令（暂时记住基本的提交命令）

- git add .   （添加到暂存区）
- git commit   -m '文件注释'    （提交）
- git status  (查看提交记录)
- git pull 地址 更新线上的代码
- git push 地址    推送代码
- git config --global user.name "Your Name"  // 配置用户名
- git config --global user.email "email@example.com" // 配置邮箱
- git init  // 初始化 .git 文件 初次上传的时候需要这个
- git log	//查看提交历史记录，从最近到最远，可以看到3次
- git reflog	//查看每一次修改历史
- git checkout 分支名   // 切换分支
- git branch 分支名。 // 创建分支
- git remote add origin git@github.com.abc/AKgit.git	//关联远程仓库
- git push -u origin master	//将本地内容推送到远程仓库（第一次）  第一次 先关联在推送 
- git remote -v        //查看远程仓库信息
###### 多人协作情况下
- git checkout -b dev	//创建并切换到分支dev
  //创建并切换到分支dev，同上
- git branch dev	//创建
- git checkout dev	//切换
  //新版本
- git switch -c dev	//创建并切换到分支dev
- git switch master	//直接切换分支
- git branch		//查看当前分支
- git merge dev	（--no-ff）(-m)//合并，把dev分支的工作成果合并到master分支上
- git branch -d dev	//删除dev分支 
- git stash	//将现场储藏起来
- git stash list	//查看储存的工作现场
  //恢复和删除
- git stash apply
- git stash drop
  //恢复并删除
- git stash pop
- git cherry-pick 4c805e2	//复制修改
- git push origin master（dev）	//推送分支
- git checkout -b dev origin/dev	//创建远程origin的dev分支到本地
- git pull	//抓取分支（解决冲突）
- git branch --set-upstream-to=origin/dev dev//指定本地与远程dev的链接
- git rebase	//把本地未push的分叉提交历史整理成直线