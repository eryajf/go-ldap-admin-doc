
# 确保脚本抛出遇到的错误
set -e
# 编译
# yarn
yarn build
# 同步
rsync -az -e 'ssh -p 2023' --progress  --delete docs/.vuepress/dist/  \
    root@8.136.215.57:/data/www/ldapdoc.eryajf.net/

# 更新检索的索引数据
ssh -p 2023 root@8.136.215.57 'bash /data/docker/meilisearch/scraper/ldapdoc.sh'