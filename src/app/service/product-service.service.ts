import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CartItemArgs } from '../model/cartItemargs';
import { IProduct } from '../model/IProduct';

@Injectable({
  providedIn:"root"
})
export class ProductService {
productList:IProduct[];
constructor() {
  this.productList = [
    { id: 1, name: ' Dell Vostro 3510 Laptop 15.6 FHD – 11th Gen Intel Core i7-1165G7', price: 14000, qty: 1, img: 'https://m.media-amazon.com/images/I/71FST4IHj+L._AC_SX569_.jpg', categoryId: 1 },
    { id: 2, name: 'Dell G15 5510 Gaming Laptop - Intel Core i5-10500H 6-Cores', price: 17000, qty: 0, img: 'https://m.media-amazon.com/images/I/31C7yYCEEeL._AC_.jpg', categoryId: 1 },
    { id: 3, name: 'HP Pavilion 31.5 All-in-One Desktop PC 32-b0590in', price: 30000, qty: 10, img: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/7/67T53PA-1_T1656647046.png', categoryId: 2 },
    { id: 4, name: 'Dell All-in-One Desktop PC 32-b0590in', price: 40500, qty: 2, img: 'https://static.turbosquid.com/Preview/2019/12/12__07_47_48/001.jpgFA7C74F9-9769-4697-977E-9798EC170A58DefaultHQ.jpg', categoryId: 2 },
    { id: 5, name: 'Samsung Galaxy A23 (4G/LTE Dual Sim, 128GB/4GB, 6.6 inchs) - Black', price: 3500, qty: 0, img: 'https://www.allphones.com.au/media/catalog/product/cache/347202e280a7532e6c8c1ee22c877bef/s/a/samsung-galaxy-a23-combo.jpg', categoryId: 3 },
    { id: 6, name: 'Samsung Galaxy A13 (128GB/4GB, 6.6 inches) - Black', price: 5000, qty: 1, img: 'https://www.allphones.com.au/media/catalog/product/cache/347202e280a7532e6c8c1ee22c877bef/s/a/samsung-galaxy-a13-5.jpg', categoryId: 3 },
    { id: 7, name: 'SAMSUNG Tab S6 Lite 64gb Angora Wifi (Blue) ', price: 10000, qty: 4, img: 'https://m.media-amazon.com/images/I/41jxGVLuiTL._AC_.jpg', categoryId: 4 },
    { id: 8, name: 'SAMSUNG Galaxy Tab S7 4G 128GB (Mystic Silver)', price: 12000, qty: 14, img: 'https://dream2000.com/media/catalog/product/cache/df0fd26a5939738811f1a7c10cac02a5/l/e/lenovo-tab-11-yoga-_8_256_-_yt-j706x_storm-grey-1_1.jpg', categoryId: 4 },
    { id: 9, name: 'SAMSUNG Fe 64GB 4G LTE Galaxy Tab S7 - 12.4 In, Mystic Black', price: 15000, qty: 0, img: 'https://dream2000.com/media/catalog/product/cache/df0fd26a5939738811f1a7c10cac02a5/l/e/lenovo-tab-11-yoga-_8_256_-_yt-j706x_storm-grey-1_1.jpg', categoryId: 4 },
  ]


 }
getAll() : IProduct[]{
  return this.productList
}
getOneByID(id:number) : IProduct|null{
  let found =  this.productList.find(item=>item.id == id)
  if(found)
    return found
  else
    return null;
}
filtterByCategoryId(id :number){
  if(id==0)
  return this.productList;
  return this.productList.filter(item=> item.categoryId ==id);

}
AdditemtoCart(cartItemargs:CartItemArgs){
  this.productList.forEach(element => {
    if(element.id == cartItemargs.id)
    element.qty -= cartItemargs.qty   
  });
  
}

}

