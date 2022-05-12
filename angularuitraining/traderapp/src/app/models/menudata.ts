import {Item, SubItem} from "./menuitem";

export const menuData:Item[]=[
  new Item('Static Data','pi pi-fw pi-plus', 'StaticData',
    [new SubItem('Customer','pi pi-fw pi-arrow-right','StaticData/Customer'),
      new SubItem('Currency','pi pi-fw pi-arrow-right','StaticData/Currency'),
      new SubItem('Calendar','pi pi-fw pi-arrow-right','StaticData/Calendar'),
      new SubItem('Bank','pi pi-fw pi-arrow-right','StaticData/Bank')
    ]),
  new Item('Market Data','pi pi-fw pi-plus', 'MarketData',
    [new SubItem('LIBOR','pi pi-fw pi-arrow-right','MarketData/LIBOR'),
      new SubItem('FOREX','pi pi-fw pi-arrow-right','MarketData/FOREX')
    ]),
  new Item('Trade Booking','pi pi-fw pi-plus', 'TradeBooking',
    [new SubItem('Economic Trading','pi pi-fw pi-arrow-right','TradeBooking/Economic'),
      new SubItem('Non Economic Trading','pi pi-fw pi-arrow-right','TradeBooking/NonEconomic')
    ]),
  new Item('Exit/Logout','pi pi-fw pi-plus', 'Logout',
    []),
];
