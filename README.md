# NCKU-E_scooter-app
# NCKU-E_scooter-app

<style>
.blue {
  color: blue!important;
font-weight: bold;
}
.yellow {
    color: yellow!important;
font-weight: bold;
    } 
</style>

**Collaborate with start-up & designer trying to create an unearth Sharing Scooter app exclusively for Students from NCKU.**

+ **Check this out :** [About Us](https://luffy.ee.ncku.edu.tw/~santaboi/NCKU_E_Scooter/about_us.html) 
<h2 class =blue >
    How to Run 
</h2>
### Environment(2 ways to do)
**way1: use "package.json" to install local packages**
```shell=
$npm i
```
**way2: try this if you have yarn**
```shell=
$yarn
```
### Preprocess

**a. utilize Parcel to watch `about_us.pug` `about_us.sass` simultaneously , with `hot-reloading`**
```shell=
$npm run watch
```
**b. compile `about_us.pug` and store result `about_us.html` in `/about_us/dist`**
```shell=
$npm run compile_pug
```
**c. compile `about_us.pug` and store result `about_us.html` in `/about_us/dist`**
```shell=
$npm run compile_sass
```

**b. (optional) run this if you wanna use parcel server with default port `1768`**
```shell=
$npm run server
```

```shell=
/*simply compile*/
$./node_modules/.bin/pug ./about_us/about_us.pug -o ./about_us/dist/ -P
$./node_modules/.bin/node-sass ./about_us/about_us.sass -o ./about_us/dist/ -p

/*parcel*/
$./node_modules/.bin/parcel watch ./about_us/about_us.pug --dist-dir ./about_us/dist1
```



## More Details about Preprocessor
+ **Parcel**     https://parceljs.org/features/targets/#targets
+ **Pug** https://pugjs.org/api/getting-started.html
+ **Sass** https://sass-lang.com/guide
