# Image Gallery - API

This is the back-end API application part of the Image Gallery project. The project is made with best technologies and practices in mind and is the perfect base application for anyone wanting to play around with it or build a new application on.  

**The front-end part of this project is found [here](https://github.com/RainerAas/image-gallery-web)**.

The project is built using **Node.js**.  
For the database **MongoDB** is used and for cloud storage **Google Cloud Storage**.

## Features

In conjunction with the front-end, the application supports:

* image upload (both singular and multiple image files) by either drag and drop or browsing and selecting from your local file system,
* image deleting,
* browsing with a lightbox that is capable of zooming and shows a thumbnail track,
* image lazy loading with the placeholder being a BlurHash image,
* image gallery viewing.

**Note: the application by default supports .PNG, .JPEG/.JPG and .WEBP files up to 10MB. Those limits can be changed in `...src\config\image.js`.**

## Installation

Start by cloning the project to your own machine and then install the packages by using npm.

```bash
  npm install
```
## Usage

You must create a file inside the project directory named **.env** and put some variables in there. A full list of those variables and an example can be found in the **.env.example** file.  

You must create your own MongoDB database and put your connection string under the `DATABASE` variable.  

For the Google Cloud Credientals you must create an Google Cloud Storage bucket. An explanation and how-to is found [here](https://cloud.google.com/storage/docs/discover-object-storage-console). **Please note, that the bucket's access control must be Fine-grained in order to grant public access to individual uploads**. 
## Available Scripts

In the project directory, you can run:

### `npm run devStart`

Runs the app in the development mode.

The page will reload when you make changes.  
You may also see any errors in the console.

### `npm run start`

Builds and runs the project.

### `npm run build`

Builds the app to the `dist` folder.  

### `npm run lint`

Checks the entire project's syntax using ESLint.
## Author

- [Rainer Aas](https://github.com/RainerAas)


## License

[MIT](https://choosealicense.com/licenses/mit/)

