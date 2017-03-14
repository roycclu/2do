class ToDoSearch extends Component {

  render() {
    const query = gql`query ToDoQuery($index: ID!) {
      todo(index: $index) {
        index
        owner
        text
        due
        done
      }
    }`

    const ToDo = ({ data: { todo } }) => {
      console.log(this.constructor.name+" todo: "+todo)
      return (
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <Text>Index: {todo && todo.index}</Text>
        <Text>Owner: {todo && todo.owner}</Text>
        <Text>ToDo: {todo && todo.text}</Text>
        <Text>Due: {todo && todo.due}</Text>
        <Text>Done: {todo && todo.done}</Text>
      </View>
    )}

    const ViewWithData = graphql(query, {
      options: { variables: { index: this.props.index }}
    })(ToDo)
    return (
      <ViewWithData />
    )
  }
}

export default ToDoSearch
