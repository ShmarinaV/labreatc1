const initialState =[
  {id:1, firstName: 'Viktoria', lastName: 'Shmarina', email: '17696@mail.ru'}
]


const tableReducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state,{
        id: action.id,
        firstName: action.firstName, 
        lastName: action.lastName, 
        email: action.email
      }]
      case 'DELETE_ITEM':
        return state.filter((user) => user.id !== action.id)
    default:
      return state;
  }
}

export {tableReducer};