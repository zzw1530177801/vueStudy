const app = new Vue({
  el: '#app',
  data: {
    list: [
      {
        id: 1,
        name: 'java',
        date: '2000-12',
        price: 99,
        count: 1
      },
      {
        id: 2,
        name: 'c语言',
        date: '2012-2',
        price: 79,
        count: 1
      },
      {
        id: 3,
        name: 'javaScript',
        date: '2008-12',
        price: 89,
        count: 1
      },
      {
        id: 4,
        name: 'ECMAScript',
        date: '2000-12',
        price: 69,
        count: 1
      }
    ]
  },

  methods: {
    /*getFinalPrice(price){
      return '￥' + price.toFixed(2)    实现的功能等同于下方的过滤器*/
    increment(index) {
      this.list[index].count++;
    },
    decrement(index) {
      this.list[index].count--;
    },
    removeHandle(index) {
      this.list.splice(index, 1);
    }
  },

  filters: {     /*过滤器*/
    showPrice(price){
      return '￥' + price.toFixed(2);
    }
  },

  computed: {      /*计算书籍总价*/
    totalPrice(){
      let totalPrice = 0;
      for(let i = 0;i<this.list.length;i++){
        totalPrice += this.list[i].price * this.list[i].count;
      }
      return totalPrice;
    }
  }

})
