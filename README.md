# Zeeverse-AMA

A bilingual archive of Zeeverse community calls, with the original English transcripts. [Read the archive](https://genouswhy.github.io/zeeverse-ama/) · [Browse the source reports](reports/README.md)

## 更新一期

用同一个 AMA 日期命名文件。文本使用 UTF-8。

| 内容 | 路径 |
| --- | --- |
| 中文总结 | reports/Zeeverse-AMA-YYYY-MM-DD.md |
| English recap | reports/en/Zeeverse-AMA-YYYY-MM-DD.md |
| 原始转录 | reports/transcription/YYYY-MM-DD.txt（也支持 .md） |
| 完整录音的 MP3 播放版 | reports/audio/YYYY-MM-DD.mp3 |

报告里的时间链接用 `[03:45](#t=225)`。把时间放在主题标题下和引文署名旁，`#t=` 后是从本期录音开头算起的秒数。中英文报告使用同一组位置。转录稿单独成行的 `[03:45]` 也会成为回听入口。

可以用 ffmpeg 从本期原件生成播放版，发布前核对播放版与原件的时长和跳转位置。归档页打开报告时按需加载音频。

~~~sh
ffmpeg -i original.mp3 -map 0:a:0 -map_metadata -1 -ac 1 -ar 24000 -c:a libmp3lame -b:a 32k reports/audio/YYYY-MM-DD.mp3
~~~

提交并推送到 main 后，GitHub Actions 会自动生成目录、两种语言的报告和转录页，并发布到 GitHub Pages。新一期的目录条目会根据报告标题自动生成。 [查看构建状态](https://github.com/genouswhy/zeeverse-ama/actions/workflows/pages.yml)

首页可搜日期、标题、总结全文和原始转录。点转录命中的片段可跳到原文对应段落，有时码的段落会同时定位录音。转录索引由构建器随报告生成，中英文首页共用。

## Surf 入口

把 surf/index.html 原样作为现有 Surf 项目的静态首页发布一次。页面导航由归档站提供，Surf 入口加载 GitHub Pages 发布的内容。中英文报告和转录都可以分享直达链接。以后提交内容时，Surf 入口会继续读取 GitHub Pages 的发布结果。

## 本地预览

~~~sh
python -m pip install -r requirements.txt
python build_zeeverse_site.py
~~~

打开 dist/zeeverse-ama-site/index.html。离线包生成在 dist/zeeverse-ama-site.zip。
