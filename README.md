# Zeeverse-AMA

A bilingual archive of Zeeverse community calls, with the original English transcripts. [Read the archive](https://genouswhy.github.io/zeeverse-ama/) · [Browse the source reports](reports/README.md)

## 更新一期

把三份文件按同一日期保存为 UTF-8。

| 内容 | 路径 |
| --- | --- |
| 中文总结 | reports/Zeeverse-AMA-YYYY-MM-DD.md |
| English recap | reports/en/Zeeverse-AMA-YYYY-MM-DD.md |
| 原始转录 | reports/transcription/YYYY-MM-DD.txt（也支持 .md） |

提交并推送到 main 后，GitHub Actions 会自动生成目录、两种语言的报告和转录页，并发布到 GitHub Pages。新一期的目录条目会根据报告标题自动生成。 [查看构建状态](https://github.com/genouswhy/zeeverse-ama/actions/workflows/pages.yml)

## Surf 入口

把 surf/index.html 作为现有 Surf 项目的静态入口发布一次。它在原 Surf 网址内显示 GitHub Pages 发布的内容，中英文报告和转录都可以分享直达链接。以后提交内容时，Surf 入口会继续读取 GitHub Pages 的发布结果。

## 本地预览

~~~sh
python -m pip install -r requirements.txt
python build_zeeverse_site.py
~~~

打开 dist/zeeverse-ama-site/index.html。离线包生成在 dist/zeeverse-ama-site.zip。
