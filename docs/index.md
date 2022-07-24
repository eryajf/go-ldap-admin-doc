---
home: true
heroImage: /img/logo.png
heroText: Go-Ldap-Admin
tagline: 🚀基于Go+Vue实现的openLDAP后台管理项目
actionText: 快速开始 →
actionLink: /pages/706e78/
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 简化管理
    details: 现代化openLDAP管理后台，设计简洁，交互简单，助力运维人员快速简单地应用并管理openLDAP
  - title: 平台打通
    details: 支持钉钉，企业微信，飞书的组织架构，以及员工信息自动同步到平台，一座打通IM与常见支持ldap认证的应用的桥梁
  - title: 二次开发
    details: 前后端分离架构，采用当下主流技术，源码开放，可以根据自己实际需求场景进行二次定制开发

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---
<p align="center">
  <a class="become-sponsor" href="/pages/2b6725/">支持这个项目</a>
</p>

<style>
.become-sponsor{
  padding: 8px 20px;
  display: inline-block;
  color: #11a8cd;
  border-radius: 30px;
  box-sizing: border-box;
  border: 1px solid #11a8cd;
}
</style>

## 🧐 项目架构

![](/img/architecture.png)

## 🏊 在线体验

提供在线体验地址如下：

|     分类      |                             地址                             |          用户名           | 密码   |
| :-----------: | :----------------------------------------------------------: | :-----------------------: | ------ |
| go-ldap-admin | [http://demo-go-ldap-admin.eryajf.net](http://demo-go-ldap-admin.eryajf.net) |           admin           | 123456 |
| phpLdapAdmin  | [http://demo-go-ldap-admin.eryajf.net:8091/](http://demo-go-ldap-admin.eryajf.net:8091/) | cn=admin,dc=eryajf,dc=net | 123456 |

在线环境可能不稳，如果遇到访问异常，或者数据错乱，请联系我进行修复。

## 👨‍💻 代码托管


| 分类 |                        GitHub                        |                        Gitee                        |
| :--: | :--------------------------------------------------: | :-------------------------------------------------: |
| 后端 |  [https://github.com/eryajf/go-ldap-admin.git](https://github.com/eryajf/go-ldap-admin.git)   |  [https://gitee.com/eryajf-world/go-ldap-admin.git](https://gitee.com/eryajf-world/go-ldap-admin.git)   |
| 前端 | [https://github.com/eryajf/go-ldap-admin-ui.git](https://github.com/eryajf/go-ldap-admin-ui.git) | [https://gitee.com/eryajf-world/go-ldap-admin-ui.git](https://gitee.com/eryajf-world/go-ldap-admin-ui.git) |

## 🎉 上新推荐

* [`🧑 v0.5.2`](https://github.com/eryajf/go-ldap-admin/releases/tag/v0.5.2)

  - feat: LDAP 添加连接池支持 ([#95](https://github.com/eryajf/go-ldap-admin/pull/95)) [@RoninZc](https://github.com/RoninZc)

  - fix: 用户操作过程中角色权限的一些校验问题 ([#90](https://github.com/eryajf/go-ldap-admin/pull/90)) [@eryajf](https://github.com/eryajf)
  - fix: 修复飞书根部门用户获取问题 ([#88](https://github.com/eryajf/go-ldap-admin/pull/88)) [@eryajf](https://github.com/eryajf)
  - fix: 从ldap同步过来之后groupType字段的问题 ([#86](https://github.com/eryajf/go-ldap-admin/pull/86)) [@eryajf](https://github.com/eryajf)
  - fix: 飞书手机号超过11位的问题 ([#85](https://github.com/eryajf/go-ldap-admin/pull/85)) [@eryajf](https://github.com/eryajf)
  - fix: 调整三方同步时分组与成员判断是否存在的依据,改为与ldap一致的DN ([#84](https://github.com/eryajf/go-ldap-admin/pull/84)) [@eryajf](https://github.com/eryajf)

  - 🎊 readme中示例截图表格化呈现 ([#93](https://github.com/eryajf/go-ldap-admin/pull/93)) [@eryajf](https://github.com/eryajf)

* [`🧑 v0.5.0`](https://github.com/eryajf/go-ldap-admin/releases/tag/v0.5.0)
  
  * 三个三方IM定时任务的处理 ([#62](https://github.com/eryajf/go-ldap-admin/pull/62)) [@eryajf](https://github.com/eryajf)
  * 支持一键导入已经在运行openldap数据的能力 ([#60](https://github.com/eryajf/go-ldap-admin/pull/60)) [@eryajf](https://github.com/eryajf)
  * 添加生成加密密码接口，因为CPU架构问题，更换json库 ([#57](https://github.com/eryajf/go-ldap-admin/pull/57)) [@eryajf](https://github.com/eryajf)
  * 添加自定义字段，docker-compose添加配置文件挂载 ([#51](https://github.com/eryajf/go-ldap-admin/pull/51)) [@0x0034](https://github.com/0x0034)
  * 完成三方IM部门与员工字段动态关联本地字段 ([#44](https://github.com/eryajf/go-ldap-admin/pull/44)) [@eryajf](https://github.com/eryajf)
  
* [`👦 v0.3.0`](https://github.com/eryajf/go-ldap-admin/releases/tag/v0.3.0)
  
  - 支持飞书的同步能力。
  
* [`👦 v0.2.0`](https://github.com/eryajf/go-ldap-admin/releases/tag/v0.2.0)
  
  - 支持企业微信的同步能力。
  - 优化配置文件，统一格式规范。
  - 修复前端获取分组内成员的bug。
  
* [`👨‍🍼 v0.1.1`](https://github.com/eryajf/go-ldap-admin/releases/tag/v0.1.1)
  
  - user和group分别添加dn字段,便于辅助前端界面理解。
  - 改造dingtalk同步的架构以及同步逻辑，解决同步员工不全的bug。
  - 添加golangci-lint静态扫描，解决原来一些扫描到的问题。
  - 添加issue模板，自动生成releases说明，golangci-lint的Actions扫描。
  
* [`👶 v0.1.0`](https://github.com/eryajf/go-ldap-admin/releases/tag/v0.1.0)
  
  - 支持针对于openLDAP的用户和分组的基础管理能力。
  - 初步支持钉钉的组织架构及员工的同步能力。

更多上新请查阅：[**更新日志**](https://github.com/eryajf/go-ldap-admin/releases)

## ⚡ 反馈与交流

在使用过程中有任何问题和想法，请给我提 [Issue](https://github.com/eryajf/go-ldap-admin/issues)。
你也可以在Issue查看别人提的问题和给出解决方案。

或者加入我们的交流群：搜索`eryajf`(备注ldap)添加我的微信进群。

