import {Action} from '../actions'
import {ActionType} from '../action-types'
import axios from 'axios'
import { Dispatch } from 'redux'

export const searchRepositories = (term: string) => {
    return async(dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try{
            const {data } = await axios.get('http://registry.npmjs.com/-/v1/search',
                {
                    params: {
                        text: term
                    }
                }
            )
            const names = data.objects.map((result: any) => {
                return result.package.name
            })
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })
        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            })
        }
    }
}