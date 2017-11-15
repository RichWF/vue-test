

Vue.component('my-grid',{
	template:"#my-grid",
    props:{
    	colunms:Array,
    	data:Array,
    	filterKey:String
    },
    data: function () {
    var sortOrders = {}
    this.colunms.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
    computed:{
    	filteredData:function(){
    		var sortKey = this.sortKey;
    		var data=this.data;
    		var filterKey=this.filterKey&&this.filterKey.toLowerCase();
    		 var order = this.sortOrders[sortKey] || 1;
    		if (filterKey) {
		        data = data.filter(function (row) {
		          return Object.keys(row).some(function (key) {
		            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
		          })
		        })
		     }

		     if (sortKey) {
		        data = data.slice().sort(function (a, b) {
		          a = a[sortKey]
		          b = b[sortKey]
		          return (a === b ? 0 : a > b ? 1 : -1) * order
		        })
		      }

		     return data;
    	}
    },
    filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods:{
  	sortBy:function(key){
        this.sortKey=key;
        this.sortOrders[key]=this.sortOrders[key]*-1;
  	}
  }

})


var app=new Vue({
	el:"#app",
	data:{
		searchKey:'',
		colunms:["name","price"],
		data:[
           {
           	 name:"c#",
           	 price:10
           },
           {
           	name:"javascript",
           	price:20
           },
           {
           	name:"html/css",
           	price:30
           }
		]
	}
});