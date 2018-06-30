# talk-react-native
My talk about react-native.

## View slides locally

First, ensure you have the following installed:

* Node.js >= 4.2
* Gulp (command line interface only)

```
 $ npm install -g gulp-cli
```

Next, install dependencies:

```
 $ npm install
```

Finally, build and serve the presentation!

```
 $ gulp serve
```

You can view the presentation in your browser at the URL displayed in the console.

By default, the preview server runs on port 8080.
To change this default, you can assign a different number to the PORT environment variable:

```
 $ PORT=8888 gulp serve
```

To build the presentation without starting the preview server, use:

```
 $ gulp
```

In both cases, the files are built into the _dist_ directory.
You can view the slides outside of the local preview server by navigating to _dist/index.html_ in your browser.

## Publish to GitHub Pages

The Gulp build includes a task to publish your presentation to GitHub Pages.

First, make sure you have initialized the project as a git repository and linked it to a GitHub project.
The task assumes that the git remote named `origin` points to the repository on GitHub.

Now you can build the presentation and publish it to GitHub Pages using:

 $ gulp publish

The files in the _dist_ directory end up in the `gh-pages` branch in the repository on GitHub.
From there, they can be viewed in a browser from anywhere on the web.

## Sources

* [facebook.com](https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/)
* [wikipedia.org](https://en.wikipedia.org/wiki/React_(JavaScript_library))
* [developpez.com](https://developpez.com/actu/210653/Facebook-annonce-la-reecriture-des-composants-internes-de-son-Framework-React-Native-pour-faciliter-son-utilisation-avec-les-applications-hybrides/)
* [quora.com](https://quora.com/How-does-React-Native-work)
* [toptal.com](https://toptal.com/mobile/comparing-react-native-to-cordova)
* [vue-native.io](https://vue-native.io)
* [expo.io](https://docs.expo.io/versions/latest/introduction/faq.html#what-is-the-difference-between-expo-and-react-native)