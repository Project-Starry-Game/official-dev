# rm -rf dist;yarn build;cd dist;git init;git add .;git commit -m "deploy";git remote add origin git@github.com:Project-Starry-Game/official-dev.git;git push origin main:gh-pages -f;cd -
rm -rf dist;yarn build;cd dist;git init;git add .;git commit -m "deploy";git remote add origin git@github.com:Project-Starry-Game/official.git;git push origin main:gh-pages -f;cd -