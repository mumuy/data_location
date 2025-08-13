# 中国行政区划信息

数据演示地址：[https://passer-by.com/data_location/](https://passer-by.com/data_location/)

三级联动插件：[https://jquerywidget.com/jquery-citys/](https://jquerywidget.com/jquery-citys/)     (基于jQuery)

区划选择组件：[https://jquerywidget.com/widget-region/](https://jquerywidget.com/widget-region/)    (基于Web Components)

身份证号识别：[https://passer-by.com/idcard/](https://passer-by.com/idcard/)

### 版权
数据库由 [passer-by.com](https://passer-by.com/) 整理,获取最新最全的数据还请关注此项目。

### 数据说明
- 省、市、区数据来自于民政局、国务院公告、国家统计局，确保及时更新和权威；
- 街道(镇、乡)数据由于数据庞大，各地各级之前公函较多，无法保证及时有效（最新数据2023年10月31日）；
- 街道(镇、乡)数据文件较多，为兼容旧行政区划代码，采取文件覆盖式更新；
- 数据是以行政区为单位的行政区划数据。行政管理区与行政区存在重合，不予收录;

 (行政管理区通常包含:***经济特区/经济开发区/高新区/新区/工业区；亦有部分行政管理区升为行政区，需加以区分)

### 关于行政区划代码
使用《中华人民共和国行政区划代码》国家标准(GB/T2260).
这部分可分为三个层次,从左到右的含义分别是：
- 第一、二位表示省(自治区、直辖市、特别行政区)
- 第三、四位表示市(地区、自治州、盟及国家直辖市所属市辖区和县的汇总码)
- 第五、六位表示县(市辖区、县级市、旗).

#### 代码区段

##### 地级
- XX0100-XX2000 / XX5100-XX7000：地级市；
- XX2100-XX5000：地区/自治州；

##### 区县级
- XXXX01-XXXX50 / XXXX01-XXXX50：市辖区、不由地级市代管的县级市；
- XXXX51-XXXX80：县、自治县；
- XX90XX：省直管县级单位；
- XXXX81-XXXX99：地级市代管县级市；


#### 代码标准
* [中华人民共和国民政部-中华人民共和国行政区划代码](https://www.mca.gov.cn/mzsj/xzqh/2025/202401xzqh.html)
* [中华人民共和国民政部-行政区划代码管理办法](https://www.mca.gov.cn/gdnps/pc/gzk/content.jsp?id=1662004999980005812)
* [中华人民共和国国家统计局-统计用区划和城乡划分代码](http://www.stats.gov.cn/sj/tjbz/tjyqhdmhcxhfdm/2023/index.html)
* [中华人民共和国国家统计局-统计用区划代码和城乡划分代码编制规则](http://www.stats.gov.cn/sj/tjbz/gjtjbz/202302/t20230213_1902741.html)

港澳台地区编码并非标准编码，而是整理和参考标准编码规则自定义的，方便用户统一使用。

### 反馈
如果有哪些地方数据错误或者更新不及时，还请告知(在"Issues"中留言)，以便尽快更新～
