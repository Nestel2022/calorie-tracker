import { IActivity } from "../interfaces";


interface IActivityAction {
    type: 'save-activity';
    payload: {
        newActivity: IActivity;
    };
}

interface ISetActivityAction {
    type: 'set-activeId';
    payload: {
        id: IActivity['id'];
    };
}
interface IDeleteActivityAction {
    type: 'delete-activity';
    payload: {
        id: IActivity['id'];
    };
}

interface IRestartActivityAction {
    type: 'restart-app';
}


export type IActivityActions =
    IActivityAction |
    ISetActivityAction |
    IDeleteActivityAction |
    IRestartActivityAction;

export interface IActivityState {
    activities: IActivity[],
    activeId: IActivity['id']
}

const localStorageActivities = (): IActivity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialState: IActivityState = {
    activities: localStorageActivities(),
    activeId: ''
}

export const activityReducer = (
    state: IActivityState = initialState,
    action: IActivityActions
) => {
    if (action.type === 'save-activity') {
        //Este codigo maneja la logia para actualizar el state

        let updatedActivities: IActivity[] = []
        if (state.activeId) {
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }

    }

    if (action.type === 'set-activeId') {
        //Este codigo maneja la logia para actualizar el state

        return {
            ...state,
            activeId: action.payload.id
        }

    }

    if (action.type === 'delete-activity') {
        //Este codigo maneja la logia para actualizar el state

        return {
            ...state,
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        }

    }

    if (action.type === 'restart-app') {
        //Este codigo maneja la logia para actualizar el state

        return {           
            activities: [],
            activeId:''
        }

    }
    return state
}