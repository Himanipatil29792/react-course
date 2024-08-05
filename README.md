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