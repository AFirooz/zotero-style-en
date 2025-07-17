# Ethereal Style
> Enjoy the pleasure of reading literature!

<img src="addon/chrome/content/icons/favicon.png" width="36px" height="36px">

[![Using Zotero Plugin Template](https://img.shields.io/badge/Using-Zotero%20Plugin%20Template-blue?style=flat-round&logo=github)](https://github.com/windingwind/zotero-plugin-template)
[![Latest release](https://img.shields.io/github/v/release/MuiseDestiny/zotero-style)](https://github.com/MuiseDestiny/zotero-style/releases)
![Release Date](https://img.shields.io/github/release-date/MuiseDestiny/zotero-style?color=9cf)
[![License](https://img.shields.io/github/license/MuiseDestiny/zotero-style)](https://github.com/MuiseDestiny/zotero-style/blob/master/LICENSE)
![Downloads latest release](https://img.shields.io/github/downloads/MuiseDestiny/zotero-style/latest/total?color=yellow)


You can upload your screenshots [here](https://github.com/MuiseDestiny/zotero-style/issues/48).

[Zotero 6 version](https://github.com/MuiseDestiny/zotero-style/releases/tag/2.6.7) | [Zotero 7 version](https://github.com/MuiseDestiny/zotero-style/releases)



[English Documentation](https://www.notion.so/Zotero-Style-bc2aebbbb6df4b7baa858e376e4fc5be) |
[Video Tutorial](https://www.bilibili.com/video/BV1ZP411p7ko/?spm_id_from=333.999.0.0)
---
## About Update

> Please use the method shown in the image below, the official Zotero update method. Minor versions will not be released on Github, but you can always get all version updates (major/minor) through the method shown below.


![image](https://github.com/user-attachments/assets/87a6737c-4789-4195-a46e-d4b8bbb20b79)



## TODO

- [ ] View groups, color settings, etc. participate in synchronization
- [ ] Theme switching

## Columns

> This plugin modifies some of Zotero's existing columns and adds some interesting ones, and I'll introduce them one by one.



<img src="https://user-images.githubusercontent.com/51939531/220922783-b7d78b5f-6cc3-4aff-8581-2e6ca341aec5.gif" width="100%" height="100%">

![graph-view](https://user-images.githubusercontent.com/51939531/226494857-d14f275a-3ad1-495e-a0c6-d2f971bc42aa.gif)

### Title

> As the background of title, reading progress visually reflect the distribution of your reading time of each page for the PDF under a item, the darker the color the longer the reading time.

### Progress

> It can visually represent the annotation word count of each page of the PDF corresponding to a item.

### Read/Unread Status
> Unread paper is shown in bold, and read paper is not bolded.This is the same as the read button in RSS.

<details>
<summary>How to mark?</summary>

|Scenario|Screenshot|
|--|--|
|Zotero Item Pane (plugin's function)|![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/41bb9c79-317f-4fd9-98f1-8a4abf5b5439)|
|Zotero RSS (Zotero's function)|![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/73143f9c-2f8a-4c0d-b741-6bcdbdebe9fa)|

</details>

### Tags

> The tags that were originally displayed before the title are separated into this separate `Tags` column.

### #Tags

> It differs from tags column in that it renders the text directly. You can create a tag that starts with `#` to try it out.

<details>

<summary>Column Settings</summary>


 **Prefix**

|Prefix|Meaning|
|--|--|
| # | Show all tags that start with `#`, but will remove the `#` prefix. |
|~~/ | All tags except those beginning with `/` are displayed |
|                      /^#(.+)/                        | Use the entered regular expression to match the tag, and `(.+)` is the actual displayed tag content. Multiple `(.+)` will be automatically joined. |

</details>


### Publication Tags

> It is similar to #Tags, but its tags can generate automatically, which represent the rank of a publication.

<details>
<summary>Column Settings</summary>

<img src="https://user-images.githubusercontent.com/51939531/223394517-19cf5bf8-b5e3-402a-8da7-5952b1fd062e.png" width="50%" height="50%">


 **Fileds**

  You can choose fields to display by editing `Fields` field in Column Settings. Check the table below for field definitions.

| Field | Name | Source |
| --- | --- | --- |
|ccf| |China Computer Federation Recommended International Academic Conferences and Journals, Chinese Science and Technology Journal Directory-2019, High-Quality Science and Technology Journal Classification Directory in Computing Field. Dataset ranked from high to low: A(T1), B(T2), C(T3).|
|swufe| |Southwest University of Finance and Economics Academic Journal Directory 2018. Dataset ranked from high to low: A+, A, B, C.|
|cufe| |Central University of Finance and Economics Journal Directory (2019 Edition). Dataset ranked from high to low: AAA, AA, A.|
|ssci| |JCR-Quartile-Impact Factor-2022(2022.6.28).pdf. Dataset ranked from high to low: Q1, Q2, Q3, Q4.|
|sci| |JCR-Quartile-Impact Factor-2022(2022.6.28).pdf. Dataset ranked from high to low: Q1, Q2, Q3, Q4.|
|sciif| |JCR-Quartile-Impact Factor-2022(2022.6.28).pdf. easyScholar divides impact factors into 5 levels from 10, 4, 2, 1, 0.|
|jci| |JCR-Quartile-Impact Factor-2022(2022.6.28).pdf. easyScholar divides JCI index into 4 levels from 3, 1, 0.5, 0.|
|sciif5| |Since the latest 5-year impact factor data has not been collected yet, 2021 data is still used. easyScholar divides 5-year impact factors into 5 levels from 10, 4, 2, 1, 0.|
|ahci| |JCR-Quartile-Impact Factor-2022(2022.6.28).pdf. This dataset has only one level.|
|fdu| |Fudan University Degree and Graduate Education Domestic Journal Guide Directory (Revised January 2018). Dataset ranked from high to low: A, B.|
|sjtu| |Shanghai Jiao Tong University SCI/SCIE Paper A-level B-level Journal Classification Directory and Other Publication Level Reference (2018.5). Dataset ranked from high to low: A, B.|
|xmu| |Xiamen University Core Academic Journal Directory for Humanities and Social Sciences (2017). This dataset has only one level: Class I.|
|cssci| |CSSCI Source Journal and Extended Edition Directory 2021-2022. Dataset ranked from high to low: CSSCI, CSSCI Extended Edition.|
|ruc| |Renmin University of China Core Journal Directory 2017. Dataset ranked from high to low: A+, A, A-, B.|
|cscd| |Chinese Science Citation Database Source Journal List (2021-2022). Dataset ranked from high to low: Core Database, Extended Database.|
|swjtu| |Southwest Jiaotong University Academic Journal Classification Directory (2017 Revised Edition). Dataset ranked from high to low: A++, A+, A, B+, B.|
|uibe| |University of International Business and Economics Research Reward Foreign Core Journal Special Classification Directory. Dataset ranked from high to low: A, A-, B.|
|pku| |PKU Chinese Core Journal Catalog (2020 Edition). This dataset has only one level.|
|xdu| |Notice on Publishing "Xidian University High-Level Journal Directory (2021)". Dataset ranked from high to low: Class I Contribution, Class II Contribution.|
|sdufe| |Shandong University of Finance and Economics Academic Journal Classification Directory. Dataset ranked from high to low: Special Category Journals, A1, A2, B, C.|
|eii| EI Index |CPXSourceList062022.xlsx. This dataset has only one level.|
|nju| |Nanjing University Super First-Class, Discipline Group First-Class, SCI Zone A and Zone B Journal Directory.xlsx. Dataset ranked from high to low: Super First-Class Journals (Discipline Group First-Class Journals), A, B.|
|zhongguokejihexin| China Science and Technology Core Journal Directory |2021 Edition China Science and Technology Core Journal Directory.pdf. This dataset has only one level.|
|cqu| |Chongqing University Humanities and Social Sciences, Natural Sciences Journal Classification Directory. Dataset ranked from high to low: A (Authoritative Journals), B (Important Journals), C.|
|hhu| |Hohai University High-Quality Paper Journal and Academic Conference Directory (Natural Sciences, excluding Computer Science and Technology, Software Engineering disciplines). Dataset ranked from high to low: Class A, Class B, Class C.|
|ajg| |ABS-2021.pdf English approximately 1700 types. Dataset ranked from high to low: 4*, 4, 3, 2, 1|
|xju| |Xinjiang University 2020 Edition Natural Science, Humanities and Social Science Academic Journal Directory, 2021 Humanities and Social Science Academic Journal Adjustment Directory. Dataset ranked from high to low: Zone 1, Zone 2, Zone 3, Zone 4, Zone 5.|
|cug| |China University of Geosciences Science and Technology, Humanities and Social Sciences Journal Zoning Summary. Dataset ranked from high to low: T1, T2, T3, T4, T5.|
|fms| |FMS Management Science High-Quality Journal Recommendation List (2022). Dataset ranked from high to low: A(T1), B(T2), C, D.|
|scu| |Sichuan University - High-Quality Science and Technology Journal and Academic Conference Classification Reference Plan (Interim) - April 2021.xlsx. Dataset ranked from high to low: A, A-, B, C, D, E.|
|utd24| |Public Internet Collection. This dataset has only one level.|
|ft50| |Public Internet Collection. This dataset has only one level.|
|sciUp| SCI Upgraded Edition |WeChat Mini Program: "CAS Literature and Information Division Center Table December 2022 Latest" Dataset ranked from high to low Zone 1, Zone 2, Zone 3, Zone 4.|
|sciBase| SCI Basic Edition |WeChat Mini Program: "CAS Literature and Information Division Center Table December 2021 Latest" Dataset ranked from high to low Zone 1, Zone 2, Zone 3, Zone 4.|
|sciwarn| SCI Warning |International Journal Warning List (Trial) - 2021.12.31. This dataset has only one level.|
|cju| |Yangtze University Natural Science High-Quality Journal (Chinese Journal) Classification Directory (2021 Edition).pdf Dataset ranked from high to low T1, T2, T3.|
|zju| |Zhejiang University Domestic Academic Journal Classification Directory Guide·2020 Edition.pdf Dataset ranked from high to low Domestic First-Class Academic Journals, Domestic First-Class Core Journals.|

If you are using a custom dataset, you must locate the custom field definition of the dataset and fill it in the `Fields` section.



**Map**

You can customise tags by editing `Map` field in Column Settings, using string or regex to replace tags to your desired format.
You can refer to [this link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions) or any other tutorials for regex syntax.

Most of tags comprises of two parts: field name and value, separated by a space. Some tags are field only.
**NB**: you will need to alter field name and value respectively:

Here are some examples:

SCI:

```ini
SCI=, 
/SCIIF/=IF, 
```

EI:

```ini
EI检索=EI, 
```

Decrease decimal:

```ini
/^(\d+)\.(\d{1})\d*$/=$1.$2, 
```

Chinese PKU Chinese Core:

```ini
北大中文核心=PKU Core, 
```

Chinese Academy of Sciences (CAS) warnings:

```ini
SCIWARN=🚫, 
```

CAS quartiles SCI Upgraded Edition:

```ini
# Chinese academic field abbreviations (preserve exact Chinese terms for database matching):
/医学(\d+)区/=医$1,           # Medicine
/生物学(\d+)区/=生$1,         # Biology
/农林科学(\d+)区/=农$1,       # Agricultural and Forestry Sciences
/环境科学与生态学(\d+)区/=环$1, # Environmental Science and Ecology
/化学(\d+)区/=化$1,           # Chemistry
/工程技术(\d+)区/=工$1,       # Engineering Technology
/数学(\d+)区/=数$1,           # Mathematics
/物理与天体物理(\d+)区/=物$1, # Physics and Astrophysics
/地球科学(\d+)区/=地$1,       # Earth Sciences
/材料科学(\d+)区/=材$1,       # Materials Science
/计算机科学(\d+)区/=计$1,     # Computer Science
/经济学(\d+)区/=经$1,         # Economics
/法学(\d+)区/=法$1,           # Law
/管理学(\d+)区/=管$1,         # Management
/心理学(\d+)区/=心$1,         # Psychology
/人文科学(\d+)区/=人$1,       # Humanities
/教育学(\d+)区/=教$1,         # Education
/综合性期刊(\d+)区/=综$1,     # Comprehensive Journals
```

</details>

### Rating

> When you select a item, item's rating convert to a wating state, such as five points. Then you can click one point to finish your rating quickly.

## View Group

> This addon and other addons may expand Zotero's columns, but the screen size is limit. We often need to show/hide columns frequently, and View Group makes it easier and quicker.

<details>

<summary>Usage</summary>

![View Group](https://user-images.githubusercontent.com/51939531/221079177-0d73beed-d63f-4935-a380-f09667d0800c.png)

| Operation | Target | Do |
| --- | --- | --- |
| left click | a view | switch to this view |
| Long press | a view | update its data |
| right click | a view | delete it | 
| left clcik | `Add View` button | save current view |

</details> 

## Nested Tags

> Nested tags can recategorize your Zotero items. It could replace Zotero's collection to some extent.

<details> 

You can switch between the nested tags view provided by the plugin and the tags view provided by Zotero itself with ease. 

<summary>Demonstration</summary>

For a tag to show up with the plugin it must start with a # and the subcategory must start with a forward slash (/) in the format of:

For example:

"#Catergory/subcategory"
"#Method/Longitudinal"
"#Method/cross-sectional"

The plugin also allows tags to show up in Zotero item pane.

Note: You can configure the plugin so the tag doesn't have to start with #. To do this you need to edit the "#Tag" column in the item pane and remove or change the #. 

| Nested Tags | Zotero Tags |
|--|--|
|![image](https://user-images.githubusercontent.com/51939531/221401675-fa062110-ab03-4ce8-b528-81f054edf2d1.png)| ![image](https://user-images.githubusercontent.com/51939531/221401658-058cd270-9d7c-4046-adbf-c936f6e7458a.png)|

| Operation | Target | Do |
| -- | -- | -- |
| left click | control icon | ![image](https://user-images.githubusercontent.com/51939531/221461592-72200db4-099c-474f-9364-f73c7499a294.png) |
| left click | tag item | ![image](https://user-images.githubusercontent.com/51939531/221461934-2e309e92-9ad8-4a57-9df9-cdfcf898c3cb.png) |
| right click | tag item | ![image](https://user-images.githubusercontent.com/51939531/221461489-7bfdfd39-1663-4898-8619-c0f1a304dcf7.png) |


**Delete Tag**

> The deletion has prompt, is irreversible, and should be cautious.

![image](https://user-images.githubusercontent.com/51939531/221781981-8faa86f9-2985-459c-a944-c03a1561113c.png)


</details> 

## Quick Filtering

> By clicking on the icon representing the item type, you can complete the quick filtering of item types. And repeat the process above to exit filtering. Note this filtering is valid for all collections. But it will exit automatically when you switch to the category filtered item is empty.

## Graph View

> An Obsidian's `inreractive graph` rendered by Obsidian's source code. It can show item's related items visually. And you can locate the Zotero item from the graph node (`click`), and locate the graph node from Zotero item (`ctrl+click`).

 <details>

<summary>Demonstration</summary>

![Graph View](https://user-images.githubusercontent.com/51939531/221080186-05187a08-c237-43ec-8728-9bc603f0eb4f.gif)

</details>

## PDF Styles
> Long Press to edit a PDF style.
> Click `🎨` to add a PDF Style.

<details>

<summary>Demonstration</summary>

![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/0a924c15-d867-49e0-9110-3eb54c61d453)
  
![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/26563a6a-5c94-4dea-9c1f-ca9c5a81b298)

![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/064c1250-197c-46d5-92bf-761e879c7766)

![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/2aa86c6f-9773-472a-b69f-c05df12d3bfa)


</details>



## Frequently Asked Questions

<details>

<summary>Where is my tags?</summary>

Two ways display your tags after assigning color and position: (1) you can open the column settings of title and click `Tags` and (2) you can show Tags column that is created by this addon.

</details>

## Recommended Links

### Bilibili
- [Zotero Style User Manual](https://www.bilibili.com/video/BV1ss4y1E7sX)
- [Zotero Style Plugin You Deserve! Relationship Graph Included!](https://www.bilibili.com/video/BV1as4y1a7Gf)
- [zotero-style - Usage Examples and Color Scheme Collection](https://www.bilibili.com/video/BV1BA411R7hb)
- [zotero-style Plugin - Tag Title Alignment, Adding High-Energy Progress Bar for Literature!](https://www.bilibili.com/video/BV1PK411o7JN)
- [Zotero Style - Updates with Fancy Features and a Useful Reference Import](https://www.bilibili.com/video/BV1Z44y1D7nP)

### XiaoHongShu

- [Zotero-Style Plugin Download and Basic Usage Tutorial](http://xhslink.com/tlz9So)
- [Zotero New Plugin Introduction - Zotero Style](http://xhslink.com/PnHlCn)
- [zotero style | A Plugin That Motivates You to Read Literature](http://xhslink.com/iUJlCn)
- [A Treasure Zotero Plugin That Shows High-Energy Reading Progress Bar](http://xhslink.com/TPJlCn)
- [Super Useful Zotero Plugin | Reading Progress Visualization](http://xhslink.com/QSKlCn)
- [Winter Holiday Paper Reading | Zotero Paper Progress Visualization](http://xhslink.com/yoMlCn)
- [Zotero style Simple Setup Tutorial~](http://xhslink.com/yNQBUn)
- [I Learned How to Change Zotero Annotation Color Names!!](http://xhslink.com/jfMeQo)
- [zotero style tutorial | Make Your Zotero More Interesting!](http://xhslink.com/VBSeQo)
- [Journal Tag Configuration Key](http://xhslink.com/d5E72o)

## Acknowledgements

- This addon thanks to the users who made valuable [comments](https://github.com/MuiseDestiny/zotero-style/issues?q=label:enhancement)
- [zotero-plugin-template](https://github.com/windingwind/zotero-plugin-template)
- [zotero-plugin-toolkit](https://github.com/windingwind/zotero-plugin-toolkit)
- [chartero](https://github.com/volatile-static/Chartero)
- [zotero-tag](https://github.com/windingwind/zotero-tag)
- [zotero-pdf-translate](https://github.com/windingwind/zotero-pdf-translate)
- [ablesci](https://www.ablesci.com/)
- [easyscholar](https://easyscholar.cc/console/query)
- [endnote](https://buy.endnote.com/)
- [obsidian](https://help.obsidian.md/Obsidian/Index)
- [tag-wrangler](https://github.com/pjeby/tag-wrangler)
- [chatGPT](https://chat.openai.com/)

## Sponsor

[Here](https://github.com/MuiseDestiny/zotero-reference#%E8%B5%9E%E5%8A%A9)
