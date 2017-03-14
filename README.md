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

run project

`react-native run-ios` or `react-native run-android`
