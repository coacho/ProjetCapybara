// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// React Router
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';

// Redux Store
import store from './store';
import {Provider} from "react-redux";

// Routes
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root';

import Login, {
  // action as loginAction
} from './routes/login/login';
import Logout from './routes/logout/logout';

// Aidé
import HelpedRoot from './routes/HelpedPerson/HelpedRoot';
import HelpedHome from './routes/HelpedPerson/home/HelpedHome';

import HelpedContacts from './routes/HelpedPerson/contacts/HelpedContacts';
import HelpedContact from './routes/HelpedPerson/contacts/HelpedContact';

import HelpedCalendar from './routes/HelpedPerson/calendar/HelpedCalendar';
import HelpedCalendarAgenda from './routes/HelpedPerson/calendar/HelpedCalendarAgenda';
import HelpedCalendarWeek from './routes/HelpedPerson/calendar/HelpedCalendarWeek';

import HelpedNotes from './routes/HelpedPerson/notes/HelpedNotes';
import HelpedNote from './routes/HelpedPerson/notes/HelpedNote';

// Aidant
import HelpingContacts from './routes/HelpingPerson/contacts/HelpingContacts';
import HelpingCalendar from './routes/HelpingPerson/calendar/HelpingCalendar';

//// import Contact, {
////   loader as contactLoader,
//// } from './routes/contact';

//// import EditContact, {
////   action as editAction,
//// } from './routes/edit';


import ErrorPage from './error-page';

//// import { TestDatabase } from './components/TestDatabase';
//// import config from "../config";
//// console.log(config.SERVER_IP);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path:"/login",
        element: <Login />,
        // action: loginAction
      },
      {
        path:"/logout",
        element: <Logout />
      },
      {
        path:"/helping/calendar",
        element: <HelpingCalendar />
      },
      {
        path:"/helping/contacts",
        element: <HelpingContacts />
      },
    ]
  },
  {
    path: "/helped/",
    element: <HelpedRoot />,
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

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
