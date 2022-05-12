import {Item, SubItem} from "./menuitem";

export const menuData:Item[]=[
  new Item('Static Data','pi pi-fw pi-plus', 'Menu/StaticData',
    [new SubItem('Customer','pi pi-fw pi-arrow-right','Menu/StaticData/Customer'),
      new SubItem('Currency','pi pi-fw pi-arrow-right','Menu/StaticData/Currency'),
      new SubItem('Calendar','pi pi-fw pi-arrow-right','Menu/StaticData/Calendar'),
      new SubItem('Bank','pi pi-fw pi-arrow-right','Menu/StaticData/Bank')
    ]),
  new Item('Market Data','pi pi-fw pi-plus', 'Menu/MarketData',
    [new SubItem('LIBOR','pi pi-fw pi-arrow-right','Menu/MarketData/LIBOR'),
      new SubItem('FOREX','pi pi-fw pi-arrow-right','Menu/MarketData/FOREX')
    ]),
  new Item('Trade Booking','pi pi-fw pi-plus', 'Menu/Trading/TradeBooking',
    [new SubItem('Economic Trading','pi pi-fw pi-arrow-right','Menu/Trading/TradeBooking/Economic'),
      new SubItem('Non Economic Trading','pi pi-fw pi-arrow-right','Menu/Trading/TradeBooking/NonEconomic')
    ]),
  new Item('Exit/Logout','pi pi-fw pi-plus', 'Menu/Logout',
    []),
];
