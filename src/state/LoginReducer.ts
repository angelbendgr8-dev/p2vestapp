
export const  loginReducer =(state: any, action: any) => {
  if (action.type === 'login') {
    return {
      login: true
    };
  }else if(action.type === 'logout'){
    return {
        login: false
    }
  }
  throw Error('Unknown action.');
}