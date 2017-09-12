import * as ReadableAPIUtil from '../utils/readable_api_util';
import { VOTE } from './index'

export const vote = (voteable) => {
    return ({
        type: VOTE,
        voteable
    });
}

export const sendVote = (voteable, voteString, voteableType) =>
    dispatch => (
        ReadableAPIUtil
            .vote(voteable, voteString, voteableType)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(vote(responseJson))
            })
            .catch((error) => {
                console.error(error);
            })
    )
