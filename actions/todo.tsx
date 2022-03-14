import { USER_TODO, } from '../store/types/index';

const setUserTodo = (payload: number) => ({
    type: USER_TODO,
    payload,
});

export default {
    setUserTodo,
};