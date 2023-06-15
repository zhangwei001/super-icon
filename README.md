


## 项目运行

```
tnpm install 

tnpm run start


```

## 新增icon图标
运行addIcon脚本，传入iconName，多个Icon时，以空格分开,iconName禁止与存量icon重名或覆盖

```
tnpm run addIcon iconName1 iconName2
```
将svg源码替换成ued提供的代码，去除`fill，width，height，stroke`等固定值，运行`tnpm run start`确保本地效果符合预期



## Release tnpm package
```
tnpm run build
tnpm publish ./lib

```
#### Merge to Master, Create new version in Def Platform or just Run below commands(https://yuque.antfin-inc.com/def/def/publish-tnpm-run)

```
tnpm i -g @ali/def-pub-client

// 发布预发
dps -d

// 发布线上
dps -o
```
