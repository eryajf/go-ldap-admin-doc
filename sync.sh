
# 确保脚本抛出遇到的错误
set -e
# 编译
# yarn
yarn build
# 同步
rsync -az -e 'ssh -p 2023' --progress  --delete docs/.vuepress/dist/  \
    root@prod2.eryajf.net:/data/www/ldapdoc.eryajf.net/

# 更新检索的索引数据
ssh -p 2023 root@prod2.eryajf.net 'bash /data/docker/meilisearch/scraper/ldapdoc.sh'