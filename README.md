# Introduction

This project is a framework for test automation based on bdd with selenium. Hence BDDxSeleniumRC

# Gradle project

This project is being developed with gradle project structure in mind, trying our best to be cross platform.

If you're not having `gradle` in your system, use the wrapper `./gradlew` provided with the project. `gradlew.bat` if you're on windows.

## Gradle tasks

If you are not sure what to do, check out `gradle tasks`. Want more? try `gradle tasks --all`.

# CucumberJS

There is a subdirectory called bdd. You can find all BDDxSeleniumRC related material in that directory.
```
.
├── build.gradle
├── features
│   ├── browse.feature
│   └── support
│       └── steps.js
├── package.json
└── package-lock.json

2 directories, 5 files
```
Initially those are the files. Let's go one by one:
+ build.gradle is where I write some custom tasks to manage the build.
+ features and its children are cucumberJS files. Check them out.
+ package.json is npm configuration file. Managing node dependencies and project model.
+ package-lock.json is the file that manifests the version of the dependencies declared.

## Running CucumberJS tests

On the terminal, cd to bdd directory and run:
```
gradle test
```
You may expect output like below:
```
~/checkouts/bddxseleniumrc/bdd  gradle test                                                                                                                                                            ✔

> Task :bdd:npmInstall
npm WARN npm npm does not support Node.js v12.0.0
npm WARN npm You should probably upgrade to a newer version of node as we
npm WARN npm can't make any promises that npm will work with this version.
npm WARN npm Supported releases of Node.js are the latest release of 6, 8, 9, 10, 11.
npm WARN npm You can find the latest version at https://nodejs.org/

> es5-ext@0.10.61 postinstall /home/fazreil/checkouts/bddxseleniumrc/bdd/node_modules/es5-ext
>  node -e "try{require('./_postinstall')}catch(e){}" || exit 0

npm WARN bdd@1.0.0 No description
npm WARN bdd@1.0.0 No repository field.

added 130 packages from 281 contributors and audited 130 packages in 1.653s
found 0 vulnerabilities


> Task :bdd:test
npm WARN npm npm does not support Node.js v12.0.0
npm WARN npm You should probably upgrade to a newer version of node as we
npm WARN npm can't make any promises that npm will work with this version.
npm WARN npm Supported releases of Node.js are the latest release of 6, 8, 9, 10, 11.
npm WARN npm You can find the latest version at https://nodejs.org/

> bdd@1.0.0 test /home/fazreil/checkouts/bddxseleniumrc/bdd
> cucumber-js

..========----> 75% EXECUTING [6s]

1 scenario (1 passed)
2 steps (2 passed)
0m04.265s (executing steps: 0m04.256s)
┌──────────────────────────────────────────────────────────────────────────┐
│ View your Cucumber Report at:                                            │
│ https://reports.cucumber.io/reports/4270ba23-d0eb-4a0c-9f11-ab4b184bcca5 │
│                                                                          │
│ This report will self-destruct in 24h.                                   │
│ Keep reports forever: https://reports.cucumber.io/profile                │
└──────────────────────────────────────────────────────────────────────────┘


BUILD SUCCESSFUL in 13s
4 actionable tasks: 2 executed, 2 up-to-date
```

If you're on the root of the checkedout directory you may also run `gradle bdd:test`. Expect similar result.
