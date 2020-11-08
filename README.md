# vue-boostrap-template-2020
Ready to use template for FE application, using:
- [Vue.js v2](https://vuejs.org/)
- [BootstrapVue](https://bootstrap-vue.org/)
- [vue-axios](https://github.com/imcvampire/vue-axios#readme) for HTTP requests
- [vue-auth](websanova.com/docs/vue-auth) to handle authentication and authorization, ready to use with [express-openapi-mongoose-template](https://github.com/niabb/express-openapi-mongoose-template)
- [vue-gtag](https://matteo-gabriele.gitbook.io/vue-gtag/) for Google Analytics tracking

## Create a fork of this repository
```
git clone git@github.com:niabb/vue-bootstrap-template-2020.git newRepo
cd newRepo
git remote set-url origin git@github.com:niabb/newRepo.git
git remote add upstream git@github.com:niabb/vue-bootstrap-template-2020.git
git push origin master
```

## Project setup
```
cp src/config.default.js src/config.js
npm ci
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Upgrade all dependencies
```
npm run upgrade-dependencies
```
