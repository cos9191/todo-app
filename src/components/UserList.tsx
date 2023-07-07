import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";
// import type {} from 'redux-thunk/extend-redux';
import {RootState} from "../store/reducers";
import {useActions} from "../hooks/useActions";

const UserList: FC = () => {
    // const {users, loading, error} = useTypedSelector(state => state.user)
    const {users, loading, error} = useSelector((state: RootState) => state.user)

    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    )
};

export default UserList;
