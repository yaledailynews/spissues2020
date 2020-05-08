# YDN Spissues 2020

## Setup

1. Make sure you have Yarn set up ([installation
instructions](https://yarnpkg.com/getting-started/install)).
2. Run `yarn install` to install dependencies.
3. Run `yarn start` to start the server.
4. Open the website by pointing your browser to `http://localhost:3000/`

## Project Organization

When you run `yarn start`, you are spinning up a web server which will serve
your web page. The source for this server is in `app.ts`: you shouldn't really
need to worry about this file.

The files that it hosts are in the `views/` folder. The files are HTML template
files using a language called
[Handlebars](https://handlebarsjs.com/guide/#what-is-handlebars). Everything is
regular HTML as you know and love, except for special Handlebars tags enclosed
in {{ }}, which tell the server where to put in the article information. Check
out [the documentation](https://handlebarsjs.com/guide/#what-is-handlebars) if
you have questions, but I've set you up with a basic Handlebars template that
renders an article list as an example to work off of.

You can specify styles in the `styles/style.scss` file. These are written in a
language called SCSS, which is an extension of CSS (you can write normal CSS in
there and it will work fine; for more info, check the
[documentation](https://sass-lang.com/documentation/syntax)). These files will
automatically be compiled to regular CSS files (in the `public/` folder) and
served with your webpage as long as `yarn start` is running. Make sure to only
edit the files in `styles/` and _not_ `public/`, as the files in `public/` are
automatically generated from the SCSS source.

Should you wish to add additional pages (perhaps one page per section),
you can create a new view file in `views/` and then update `app.ts` by following
the example. I've included a page at `http://localhost:3000/other` as an example
of how this might look.

## Instructions
I set you up with a template page that renders some stories on a page (based
off of the [COVID-19 profile series
webpage](https://yaledailynews.com/blog/category/stories-of-covid/)), but it
doesn't look great and isn't very functional. Your goal is to make a website
that can show off a small, fixed number of stories divided into different
sections. We don't know exactly which sections and stories are going to be in
the paper yet, so don't worry about getting all of the details exactly right! As
long as there is a clear structure for how the page is organized and can adapt
to different sections, we can customize it once we know the details.
