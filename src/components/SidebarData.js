import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Booking',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Services',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Telemedicine',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'TelePathology',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Teleradiology',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Log Out',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
