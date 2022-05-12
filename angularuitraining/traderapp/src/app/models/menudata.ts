import {Item, SubItem} from "./menuitem";

export const menuData:Item[]=[
  new Item('Static Data','', '',
    [new SubItem('Customer','',''),
      new SubItem('Currency','',''),
      new SubItem('Calendar','',''),
      new SubItem('Bank','','')
    ]),
  new Item('Market Data','', '',
    [new SubItem('LIBOR','',''),
      new SubItem('FOREX','','')
    ]),
  new Item('Trade Booking','', '',
    [new SubItem('Economic Trading','',''),
      new SubItem('Non Economic Trading','','')
    ]),
  new Item('Exit/Logout','', '',
    []),
];
