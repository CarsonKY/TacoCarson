<div align="center">

<img src=https://tacocarson.vercel.app/img/tacocarsonwelcomesyou.PNG>

</div/>

<h1 align="center">Taco Carson</h1>

 

 

<div align="center">

  <strong>A server side rendered ordering system for a restaurant utilizing sandbox payment systems</strong>

</div>

 

 

 

<div align="center">

  <h3>

    <a href=https://choo.io>

      Visit Taco Carson!

    </a>

    <span> | </span>

    <a href=https://github.com/choojs/choo-handbook>

      CL Notes

    </a>

    <span> | </span>

    <a href=https://github.com/YerkoPalma/awesome-choo>

      Local Install

    </a>

    <span> | </span>

    <!-- <a href=https://github.com/trainyard/choo-cli> -->

    <!--   CLI -->

    <!-- </a> -->

    <!-- <span> | </span> -->

     <a href=https://github.com/choojs/choo/blob/master/.github/CONTRIBUTING.md>

      Launching Site

    </a>

    <span> | </span>

    <a href=https://www.reddit.com/r/choojs/>

      Tech Stack

    </a>

    <span> | </span>

    <a href=https://webchat.freenode.net/?channels=choo>

      Winston

    </a>

  </h3>

</div>

 

<div align="center">

  <sub>Taco Carson was my final project for <a href=https://codelouisville.org>Code Louisville</a>, a great organization with great people who love to help!

</div>

 

 

 

## CL Notes and comments

  You will need the paypal credentials to login and pay for the order. The user id is `target=_blank` and the password is `target=_blank`

 

  The project is 98% done.  The to do list includes getting the grand total state from all items calculated and sent to the store for global use. Right now the value is coming back as NaN with [cart.total] showing no data due to my state import command not working.  For the time being the grand total value is set for $10 regardless of the order and Paypal is set to pay that amount.

 

  The three project requirements I ended up using are:

 

 - Using React as the platform for the app.

- Using Mongo for a custom JSON export in the menu.

- Using a custom local array in the image carousel.

 

 

## Local Installation Instructions

  It is recommended to use  <a href=https://code.visualstudio.com>Visual Studio Code</a> and <a href=https://www.google.com/chrome>Google Chrome</a> for this app.  After they are downloaded and installed, launch VS Code and pull down the code into a directory with this command in the terminal.

 

  ```js

git pull tacocarson

 

```

  Next you will need to install all the dependencies found in the package.json file.  To do this, type this command.

```js

npm -install

 

```

  #launch

## Launching TacoCarson locally

 

  After following the local install directions , you are ready to launch TacoCarson locally on your computer.  To do that, type

```js

yarn dev

 

```

  This will launch a browser pointing to localhost on port 3000 and you are ready to order! 

  <br />

  To launch off the website, the URL is <a href=https://tacocarson.vercel.com>Taco Carson</a>

 

  

## Tech Stack:

- __React:__ Built on React

- __React Redux+Toolkit:__ Cart manipulation

- __Next.JS:__ Used for creating links and image rendering much easier

- __MongoDB:__ Used custom built API for server side rendering of images and menu items

- __AXIOS API:__ Used to bridge the gap between React and Mongo

- __Paypal API:__ Sandbox account used to pay for the orders

 

   `*______additional helpful utilities used*______`

- __Postman:__ Used to create and test JSON files for Mongo

- __Gimp:__ Image manipulation and transparency