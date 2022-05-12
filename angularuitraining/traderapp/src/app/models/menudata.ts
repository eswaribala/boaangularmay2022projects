import {Item, SubItem} from "./menuitem";

export const menuData:Item[]=[
  new Item('Static Data','pi pi-fw pi-plus', '',
    [new SubItem('Customer','pi pi-fw pi-arrow-right',''),
      new SubItem('Currency','pi pi-fw pi-arrow-right',''),
      new SubItem('Calendar','pi pi-fw pi-arrow-right',''),
      new SubItem('Bank','pi pi-fw pi-arrow-right','')
    ]),
  new Item('Market Data','pi pi-fw pi-plus', '',
    [new SubItem('LIBOR','pi pi-fw pi-arrow-right',''),
      new SubItem('FOREX','pi pi-fw pi-arrow-right','')
    ]),
  new Item('Trade Booking','pi pi-fw pi-plus', '',
    [new SubItem('Economic Trading','pi pi-fw pi-arrow-right',''),
      new SubItem('Non Economic Trading','pi pi-fw pi-arrow-right','')
    ]),
  new Item('Exit/Logout','pi pi-fw pi-plus', '',
    []),
];
