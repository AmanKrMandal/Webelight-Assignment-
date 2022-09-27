import { SET_DATA_REPOS } from "./constant"


export const reposData = (data = {}, action) => {
  switch (action.type) {
    case SET_DATA_REPOS: return {...action.data}
    default: 
      return data
  }
}