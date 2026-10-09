# 中国行政区划信息

数据演示地址：[https://passer-by.com/data_location/](https://passer-by.com/data_location/)

三级联动插件：[https://jquerywidget.com/jquery-citys/](https://jquerywidget.com/jquery-citys/)     (基于jQuery)

区划选择组件：[https://passer-by.com/widget-region/](https://passer-by.com/widget-region/)    (基于Web Components)

身份证号识别：[https://passer-by.com/idcard/](https://passer-by.com/idcard/)

### 版权
数据库由 [passer-by.com](https://passer-by.com/) 整理,获取最新最全的数据还请关注此项目。

### 数据说明
- 省、市、区数据来自于民政局、国务院公告、国家统计局，确保及时更新和权威；自2025年9月，根据[《行政区划代码管理办法》](https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzbmgz/202512/t20251204_528920.html)，行政区划数据由民政部门通过国家地名信息库发布；
- 街道(镇、乡)数据由于数据庞大，各地各级之前公函较多，无法保证及时有效（最新数据2026年9月）；
- 街道(镇、乡)数据文件较多，为兼容旧行政区划代码，采取文件覆盖式更新；
- 数据是以行政区为单位的行政区划数据。行政管理区与行政区存在重合，不予收录;

行政管理区通常包含:**经济特区/**经济开发区/**高新区/**新区/**工业区；

亦有部分行政管理区升为行政区，如：浦东新区、滨海新区、两江新区，需加以区分；

### 关于行政区划代码
使用《中华人民共和国行政区划代码》国家标准(GB/T2260).

6位行政区划码可分为三个层次,从左到右的含义分别是：
- 第一、二位表示省级(省、自治区、直辖市、特别行政区)
- 第三、四位表示市级(地级市、地区、自治州、盟)
- 第五、六位表示县级(市辖区、县级市、县、自治县、旗、自治旗、特区、林区).

9/12位代码为城乡划分代码，本项目最小行政区划为乡级（街道、镇、乡、区公所）

#### 代码区段

##### 地级
- XX0100-XX2000 / XX5100-XX7000：地级市；
- XX2100-XX5000：地区/自治州；

##### 县级
- XXXX01-XXXX50 / XXXX01-XXXX50：市辖区、不由地级市代管的县级市；
- XXXX51-XXXX80：县、自治县；
- XX90XX：省直管县级单位；
- XXXX81-XXXX99：地级市代管县级市；


#### 代码标准
* [国家地名信息库](https://dmfw.mca.gov.cn/XzqhVersionPublish.html)
* 中华人民共和国民政部-中华人民共和国行政区划代码
* [行政区划代码管理办法](https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzbmgz/202512/t20251204_528920.html)
* [中华人民共和国国家统计局-统计用区划代码和城乡划分代码编制规则](http://www.stats.gov.cn/sj/tjbz/gjtjbz/202302/t20230213_1902741.html)

港澳台地区编码并非标准编码，而是整理和参考标准编码规则自定义的，方便用户统一使用。

### 反馈
如果有哪些地方数据错误或者更新不及时，还请告知(在"Issues"中留言)，以便尽快更新～
