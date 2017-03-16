There are two parts to this application: the
client (React Native Application) and the
server (GraphQL server)

# Apollo Server

#### Using Apollo + GraphQL + MongoDB + Express

To get setup:

clone repository

`git clone https://github.com/roycclu/2do.git`

cd into repository

`cd 2do/apolloserver`

install dependencies

`yarn`

Start MongoDB Server

`mongod`

Start project server

`node app.js`

Open GraphQL Explorer on http://localhost:8080/graphiql

Try submitting a query:
```
query {
  todo(index: 2) {
    index
    owner
    text
    due
    done
  }
}

```


# Apollo Client

To get setup

clone repository (if not already done in step 1):

`git clone https://github.com/roycclu/2do.git`

cd into repository

`cd 2do/apolloclient`

install dependencies

`yarn`

enable ART in react-native

"To add ART.xcodeproj find the file at node_modules/react-native/Libraries/ART/ART.xcodeproj and just drag it over to the Libraries section in XCode.
Next we'll link the binary.
With the root project selected on the left, select Build Phases from the center view. There will be a section called 'Link Binary With Libraries', expand it, press the + and select libART.a"

link dependencies

`react-native link`

run project

`react-native run-ios` or `react-native run-android`
