# App

## MVP Fonctionality

An prototype that should be able to:

### Basic Functionality

- Navigate to 4 different tabs: Today, History, Stats and Settings
- Change app language betweem English and French at any given moment, changing all non-user-input text in the app to the required languages. More languages may be added in the future.

### Pages

- Today
  - Start and end a wear session via a FAB button
    - When returning to this page it will show tame remaining until we can take it off
    - When we have worn it more than "session length" hours since the beginning of the session, the text should be red, and an indicator should appear
- Stats Page
  - A stat in the "Stats" page showing the time worn in the last 24 hours
- History Page
  - Visualize all past sessions in a list
- Settings Page
  - Define a setting called "session length" to store the number of hours the ring needs to be worn per day.
- Other Requirements

## Basic APIs needed

- Navigation from page to page [ionic-navigation](https://ionicframework.com/docs/angular/navigation)
- Internationalization (i18n) [ngx-translate](https://ionicframework.com/docs/v3/developer-resources/ng2-translate/)
- FAB buttton addition in one page thats starts and ends a session [ion-fab-button](https://ionicframework.com/docs/api/fab-button)
- Writing to database (adding new wear session)
  - [SQLite](https://ionicframework.com/docs/native/sqlite)
  - [Ionic SQLite Github Repo](https://github.com/storesafe/cordova-sqlite-storage)
- Writing to user settings "session length" setting [App Preferences](https://ionicframework.com/docs/native/app-preferences)

## How To Run

1. Open a console at the root of the `Loop` repo
1. Run `cd src`
1. Run `ionic serve`
1. App will run locally on browser

## How To Compile

## How To Debug

## How To Publish
