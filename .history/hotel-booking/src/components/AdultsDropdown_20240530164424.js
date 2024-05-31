import React from 'react';

import { RoomContext } from '../context/RoomContext';
import { Menu } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'

const lis = [
  { name: '1 Adult' },
  { name: '2 Adults' },
  { name: '3 Adults' },
  {name: '4 Adults'},
]

const AdultsDropdown = () => {
  return <Menu as='div'>
    <Menu.Button>
      adults
      <BsChevronDown/>
    </Menu.Button>

    <Menu.Items as='ul'>
      {lis.map((li, index) => {
        return (
          <Menu.Item as='li' key={index}>
            {li.name}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default AdultsDropdown;
