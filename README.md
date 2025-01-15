# Namaste React 

# Parcel
-Dev Build
-Local Server
-HMR Hot Module Replacement
-File Watching Algorithm- written in c++
-catching -Faster Builds
-Image Optimization
-Minification
-Bundling
-Compressing file
-Consistent Hashing
-Code Splitting
-Differential Bundling - support older browsers
-Diagnostic
-Error Handling
-Https
-Tree Shaking - remove unused code
-Different dev and prod bundles 


## Food App
* Header
    -Logo
    -Nav Items
* Body
    -Search
    -RestaurantContainer
        -RestaurantCard
            -Img
            -Name of Res, Star Rating, Cuisine,delivery time etc
* Footer
    - Copyright
    - Links
    - Address
    - Contact


 ## Two types of Export/Import
    - Named
    export const Component;
    import {Component} from "path"

    - Default export/import
    export default Component;
    import component from "path"

## React Hook
Normal JS utility function
-useState()- Superpowerful state variables in react
-useEffect()


### How the Life Cycle is worked
-Parent Constructor
-Parent Render
    
    -First Constructor
    -First Render

    -Second constructor
    -Second Render

    -third constructor
    -third Render

    <DOM UPDATED - IN SINGLE BATCH
    -First ComponentDidMount
    -Second ComponentDidMount
    -Third ComponentDidMount

-Parent ComponentDidMount



### ---Mounting----
-constructor (dummy)
-Render (dummy)
    <html Dummy>
    componentDidMount
    <API Call>
    <this.setState> -> State variable is updated
### ----Update-----
    -render(API data)
    -<html (new API data loaded)>
    -ComponentDidUpdate



### Show code in different chunk
-Chunking
-Code splitting / Data fetching
-Dynamic Bundling
-Lazy Loading
-On demand loading
-dynamic import

## Redux Toolkit
- Install @reduxjs/toolkit and react-redux 
- Build our store 
- Connect our store to our app
- Slice (cartSlice
- Dispatch (action)
- Selector

## Types of testing (developer)
- Unit testing
- Integration testing
- End to end testing - e2e testing

## Setting up testing in our app
- Install react testing libraray
- Installed jest
- Installed babel dependencies
- Configure babel
- Configure Parcel Config file to disable default babel transpilation
- Jest configuration
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom