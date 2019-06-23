import React from 'react';

import MessageList from '../../containers/MessageList';
import { CurrentUserState } from '../../store/reducers/currentUser';
import UserAside from '../UserAside';
import { ExistingUser } from '../../models/user';

export default ({
    currentUser
}: {
    currentUser: CurrentUserState;
}) => {
    return (
        <div className="row">
            <UserAside
                currentUser={currentUser.user as ExistingUser}
            />
            <MessageList />
        </div>
    )
}
