# このリポジトリは移行されました。[移行先](https://github.com/zikanwari/zikanwari)

---

# zikanwari

クラスメイト用に雑に作ったWebアプリ（とそのなにか）

---
zikanwari

[![Web site CI](https://github.com/launchpencil/zikanwari/actions/workflows/web-build.yml/badge.svg)](https://github.com/launchpencil/zikanwari/actions/workflows/web-build.yml)
[![Bot CI](https://github.com/launchpencil/zikanwari/actions/workflows/bot-build.yml/badge.svg)](https://github.com/launchpencil/zikanwari/actions/workflows/bot-build.yml)
[![LINE CI](https://github.com/launchpencil/zikanwari/actions/workflows/line-build.yml/badge.svg)](https://github.com/launchpencil/zikanwari/actions/workflows/line-build.yml)
[![App CI](https://github.com/launchpencil/zikanwari/actions/workflows/app-build.yml/badge.svg)](https://github.com/launchpencil/zikanwari/actions/workflows/app-build.yml)

pon

[![pon-web CI](https://github.com/launchpencil/zikanwari/actions/workflows/web-pon.yml/badge.svg)](https://github.com/launchpencil/zikanwari/actions/workflows/web-pon.yml)
[![pon-convert CI](https://github.com/launchpencil/zikanwari/actions/workflows/convert-pon.yml/badge.svg)](https://github.com/launchpencil/zikanwari/actions/workflows/convert-pon.yml)

multisong

[![multisong CI](https://github.com/launchpencil/zikanwari/actions/workflows/multisong.yml/badge.svg)](https://github.com/launchpencil/zikanwari/actions/workflows/multisong.yml)

---

## 導入にあたって（時間割内）
- mysql(MariaDB)があること
- データベース ` zikan` があり、読み書きの権限があること
- 環境変数に `DB` , `USER` , `PASSWORD` がそれぞれ指定されていること

## 導入にあたって（ポン出し内）
- Web部分の[upload](https://github.com/launchpencil/zikanwari/tree/main/pon/web/html/upload)フォルダ及びconvert部分の/upload部分を共通のディレクトリとしてマウントする
