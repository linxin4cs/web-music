# web-music
English | [中文](./README.zh-CN.md) 

**Note: Due to the enhanced data acquisition verification by NetEase official, the backend API part of this project has been invalidated, please be aware!**

**Developed using `React` for `web-music`**

Independently developed for the purpose of understanding and becoming familiar with the front-end project development process.

Technology stack: react, styled-components, redux, redux-thunk, etc.

Project difficulties:
  - Routing between v5 and v6 nested routes
  - Data entity processing of network requests to filter usable data
  - Data processing for lyrics, time, and other information
  - Component development designing and developing a series of components

Demonstration:

![web-music demonstration](/desc_static/asset/img/web-music-%E8%BF%90%E8%A1%8C%E6%BC%94%E7%A4%BA.PNG)

## Starting the Project Locally

- `yarn install` to install dependencies
- `yarn start` to start the service
- Open the corresponding service address in a browser

## Project Structure

- public: During build, the resources in this folder are copied directly into the built folder
- src: The main resource folder of the project
  - assets: Stores static resources, such as css, fonts, images, etc.
  - common: Stores common data, such as constants and local storage
  - components: Stores reusable components
  - entity: Network request parsing entities
  - pages: Stores resources for each page
  - router: Stores routing configurations
  - service: Stores network-related configurations
  - store: Stores state-related resources
  - utils: Stores utility resources
- notes: Notes
- desc_static: Stores static files used for project documentation

## Project Standards

- Naming of folders and files
  - Static resource file names separated by `-`
  - Ordinary JavaScript and other program files use camelCase
  - Component file names separated by `-`
  - Non-component folder names separated by `_`
  - Component folder names separated by `-`
- JavaScript variable names use camelCase, constants use UPPERCASE, components use PascalCase
- CSS uses a combination of regular CSS and styled-component (global with regular CSS, local with styled-component)
- Entire project has moved away from class components to uniformly use functional components and fully embrace Hooks
- All functional components are wrapped with `memo` to avoid unnecessary rendering
- Component internal state managed using useState, useReducer. All business data managed in redux
- Functional component internal code generally follows this order:
  - Component internal state management
  - Redux hooks
  - Other component hooks
  - Other logic
  - Return JSX code
- Redux code standards
  - Each module has its own reducer, combined through combineReducer
  - Asynchronous request code uses redux-thunk and is written in actionCreators
  - Direct use of redux hooks, no longer using connect
- Network requests using axios
  - Secondary encapsulation of axios
  - All module requests are managed in a separate request file
- Project uses AntDesign
  - Partially uses AntDesign components
  - Partially custom written

## Libraries Used

- `antd` React component library
- `@ant-design/icons` antd icon library
- `@craco/craco` create-react-app configuration override
- `normalize.css` Reset css to make browser behavior consistent
- `react-router-dom` React routing
- `axios` Promise-based HTTP client
- `styled-components` CSS in JS, style component library
- `redux` State management library
- `react-redux` React state management library
- `redux-thunk` Redux middleware
- `immutable` Immutable data flow
- `redux-immutable` Immutable in redux
- Search for other libraries on your own

## Page Introduction

This project focuses on understanding the preliminary front-end development process. It supports front-end routing, but due to the large workload in developing components, only one page has been completed, as follows.

- web-music
  - Discover Music
    - Recommendations

This page is the homepage of NetEase Cloud Music.

## Notes

- [react-router v6 中的嵌套路由](./notes/react-router-v6中的嵌套路由.md)

## Thanks!

- [网易云 API](http://123.207.32.32:9001/)
- [网易云 API 文档](https://binaryify.github.io/NeteaseCloudMusicApi/#/)
