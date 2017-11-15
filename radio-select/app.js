
var menData=[
{
	"name":"jack",
	 "age":19,
	 "birth":"2013-01-23",
	 "desc":"aaaaaaaaaaaaaaaaa"
},
{
	"name":"jack1",
	 "age":19,
	 "birth":"2013-01-23",
	 "desc":"aaaaaaaaaaaaaaaaa"
},
{
	"name":"jack2",
	 "age":19,
	 "birth":"2013-01-23",
	 "desc":"aaaaaaaaaaaaaaaaa"
}
]

var womenData=[
{
	"name":"mary",
	 "age":18,
	 "birth":"2014-01-23",
	 "desc":"bbbbbbbbbbbbbbbbb"
},
{
	"name":"mary1",
	 "age":18,
	 "birth":"2014-01-23",
	 "desc":"bbbbbbbbbbbbbbbbb"
},
{
	"name":"mary2",
	 "age":18,
	 "birth":"2014-01-23",
	 "desc":"bbbbbbbbbbbbbbbbb"
}
]


var app1=new Vue({
	el:"#app",
	data:{
		sexItems:['男','女'],
		currentSex:'男',
		sexData:null
	},
	created(){
        this.sexData=menData;
	},
	methods:{
		fecthdata:function(){
			if (this.currentSex=='男') {
				this.sexData=menData;
			}
			else{
				this.sexData=womenData;
			}
		}
	},
	watch:{
		currentSex:'fecthdata'
	}
});