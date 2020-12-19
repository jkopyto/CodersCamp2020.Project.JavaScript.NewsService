commit=$(git rev-parse --short=8 HEAD)
export GIT_COMMIT="$commit"
export SENTRY_DSN="https://e6839d71823a4f06af00108cf7dcd6c9@o485829.ingest.sentry.io/5541712"

npm i -g parcel
npm install
npm run build