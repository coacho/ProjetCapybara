// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// React Router
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './helping-index.css';


// Redux Store
import store from './store';
import {Provider} from "react-redux";

// Routes
import Root, {
  // loader as rootLoader,
  // action as rootAction,
} from './routes/root';

import Login, {
  // action as loginAction
} from './routes/login/Login';
import Logout , {
  // loader as logoutLoader,
}from './routes/logout/Logout';

// Aidé
import HelpedRoot, {
  // loader as helpedRootLoader,
} from './routes/HelpedPerson/HelpedRoot';
import HelpedHome from './routes/HelpedPerson/home/HelpedHome';

import HelpedContacts from './routes/HelpedPerson/contacts/HelpedContacts';
import HelpedContact from './routes/HelpedPerson/contacts/HelpedContact';

import HelpedCalendar from './routes/HelpedPerson/calendar/HelpedCalendar';
import HelpedCalendarAgenda from './routes/HelpedPerson/calendar/HelpedCalendarAgenda';
import HelpedCalendarWeek from './routes/HelpedPerson/calendar/HelpedCalendarWeek';

import HelpedNotes from './routes/HelpedPerson/notes/HelpedNotes';
import HelpedNote from './routes/HelpedPerson/notes/HelpedNote';

import HelpedSettings from './routes/HelpedPerson/settings/HelpedSettings';


// Aidant
import HelpingRoot from './routes/HelpingPerson/HelpingRoot';
import HelpingHome from './routes/HelpingPerson/home/HelpingHome';

import HelpingContacts from './routes/HelpingPerson/contacts/HelpingContacts';
import HelpingContactsListContacts from './routes/HelpingPerson/contacts/HelpingContactsListContacts';
import HelpingContactsInvite from './routes/HelpingPerson/contacts/HelpingContactsInvite';
import HelpingContactsAddContact from './routes/HelpingPerson/contacts/HelpingContactsAddContact';

import HelpingCalendar from './routes/HelpingPerson/calendar/HelpingCalendar';
import HelpingCalendarListEvents from './routes/HelpingPerson/calendar/HelpingCalendarListEvents';
import HelpingCalendarAddEvent from './routes/HelpingPerson/calendar/HelpingCalendarAddEvent';

import HelpingReminders from './routes/HelpingPerson/reminders/HelpingReminders';
import HelpingRemindersParam from './routes/HelpingPerson/reminders/HelpingRemindersParam';

// Error page
import ErrorPage from './error-page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        path:"/login",
        element: <Login />,
      },
      {
        path:"/logout",
        element: <Logout />
      },
    ]
  },
  {
    path: "/helped/",
    element: <HelpedRoot />,
    // loader: helpedRootLoader,
    children: [
      {
        path:"/helped/home",
        element: <HelpedHome />
      },
      {
        path:"/helped/calendar",
        element: <HelpedCalendar />,
        children: [
          {
            path: "/helped/calendar/week",
            element: <HelpedCalendarWeek/>
          },
          {
            path:"/helped/calendar/agenda",
            element: <HelpedCalendarAgenda/>
          }
        ]
      },
      {
        path:"/helped/contacts",
        element: <HelpedContacts />,
      },
      {
        path:"/helped/contacts/details/:contactId",
        element: <HelpedContact />,
      },
      {
        path:"/helped/notes",
        element: <HelpedNotes />,
      },
      {
        path:"/helped/notes/details/:noteId",
        element: <HelpedNote />,
      },
      {
        path:"/helped/settings",
        element: <HelpedSettings />,
      },

    ]
  },
  {
    path: "/helping/",
    element: <HelpingRoot />,
    children : [
      {
        path:"/helping/home",
        element: <HelpingHome/>
      },
      {
        path:"/helping/calendar",
        element: <HelpingCalendar />
      },
      {
        path:"/helping/calendar/list",
        element: <HelpingCalendarListEvents />
      },
      {
        path:"/helping/calendar/add",
        element: <HelpingCalendarAddEvent />
      },
      {
        path:"/helping/contacts",
        element: <HelpingContacts />
      },
      {
        path:"/helping/contacts/list",
        element: <HelpingContactsListContacts />
      },
      {
        path:"/helping/contacts/add",
        element: <HelpingContactsAddContact />
      },
      {
        path:"/helping/contacts/invite",
        element: <HelpingContactsInvite />
      },
      {
        path:"/helping/reminders",
        element: <HelpingReminders />
      },
      {
        path:"/helping/reminders/param",
        element: <HelpingRemindersParam />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
