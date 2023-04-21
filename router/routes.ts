import Login from '../src/pages/login/Login.ts'
import Registration from '../src/pages/registration/Registration.ts'
import ChatList from '../src/pages/chatList/ChatList.ts'
import ChatPage from '../src/pages/chatPage/ChatPage.ts'
import Profile from '../src/pages/profile/Profile.ts'
import ProfileEdit from '../src/pages/profileEdit/ProfileEdit.ts'
import ProfilePassword from '../src/pages/profilePassword/ProfilePassword.ts'
import ClientError from '../src/pages/clientError/ClientError.ts'
import ServerError from '../src/pages/serverError/ServerError.ts'

export const routes = [
  { path: '/', component: Login},
  { path: '/login', component: Login},
  { path: '/registration', component: Registration},
  { path: '/chat-list', component: ChatList},
  { path: '/chat-page', component: ChatPage},
  { path: '/profile', component: Profile},
  { path: '/profile-edit', component: ProfileEdit},
  { path: '/profile-password', component: ProfilePassword},
  { path: '/client-error', component: ClientError},
  { path: '/server-error', component: ServerError},
];
