<template>
	<div class="diy_details page_drug_information" id="drug_information_details">

		<div class='warp_dt_box'>
		<div class='warp'>
			<div class='container'>
				<div class='row'>
					<div class='col'>
						<div class='card_drug_information'>
							<div_drug_information :obj="obj"></div_drug_information>



						</div>
					</div>
				</div>
			</div>
		</div>

</div>
	</div>
</template>

<script>
	import div_drug_information from "@/components/diy/div_drug_information.vue";
	import mixin from "@/mixins/page.js";
	export default {
		mixins:[mixin],
		components:{
			div_drug_information
		},
		data(){
			return{
				url_get_obj: "~/api/drug_information/get_obj?",

				field: "drug_information_id",

				obj: {
				},

				query: {
						"physician_user": 0,
							"drug_name": "",
							"type_of_drug": "",
							"drug_efficacy": "",
							"usage_and_dosage": "",
							"applicable_diseases": "",
							"precautions": "",
							"pictures_of_medicines": "",
							"drug_introduction": "",
						"drug_information_id":0,
				},
				// 点赞
				praise: 0,
				// 点赞状态
				state_praise: false,
				// 收藏状态
				state_collect: false,
			}
		},
		methods:{
			async get_obj_after(json) {
				// 判断是否获取到数据
				if (json && json.result && json.result.obj) {
					console.log(json.result.obj)
																							var obj = json.result.obj;
					this.obj = obj
					// 初始化收藏状态
					this.get_collect(obj);
													}
			},
												/**
			 * 初始化收藏状态
			 * @param {Object} obj
			 */
			get_collect(obj) {
				var user_id = this.user.user_id;

				var query = {
					source_table: "drug_information",
					source_field: "drug_information_id",
					source_id: obj["drug_information_id"],
					user_id
				};

				this.$get('~/api/collect/count?', query, (res) => {
					console.log(res);
					if (res.result || res.result === 0) {
						var bl = res.result ? true : false;
						this.state_collect = bl;
						console.log("收藏状态：" + bl);
					}
					else if(res.error) {
						console.error(res.error);
					}
				});
			},
		 /****
			 * 分享点击
			 *
			 *  */
			toShare(e){
				window.open(e);
			},
			/**
			 * 改变收藏状态
			 */
			change_collect() {
				var user_id = this.user.user_id;

				var query = {
					source_table: "drug_information",
					source_field: "drug_information_id",
					source_id: this.obj["drug_information_id"],
					user_id
				};

				// 收藏状态
				if (this.state_collect) {
					this.state_collect = false;
					this.$get('~/api/collect/del?', query, (res) => {
						if(res.result){
							var collect = _this.obj.collect-1
							this.$post('~/api/drug_information/set?drug_information_id=' + _this.obj["drug_information_id"], {
								collect
							}, (res) => {
								if(res.result){
									console.log("添加收藏数状态：" ,res.result);
								}
								else if(res.error){
									console.error(res.error);
								}
							});
							this.$toast("取消收藏");
						}
						else if (res.error){
							this.$toast(res.error.message);
							console.error(res.error);
						}
					});
				} else {
					this.state_collect = true;
													query.title = this.obj.drug_name
												query.title = this.obj.type_of_drug
																																		query.img = this.obj.pictures_of_medicines
													this.$post('~/api/collect/add?', query, (res) => {
						if (res.result) {
							var collect = _this.obj.collect+1
							this.$post('~/api/drug_information/set?drug_information_id=' + _this.obj["drug_information_id"], {
								collect
							}, (res) => {
								if(res.result){
									console.log("添加收藏数状态：" ,res.result);
								}
								else if(res.error){
									console.error(res.error);
								}
							});
							this.$toast("收藏成功");
						}
						else if (res.error) {
							this.$toast(res.error.message);
							console.error(res.error);
						}
					});
				};
			},

		},

		mounted() {
		},

	}
</script>

<style>
.qecode {
  display: flex;
  align-content: center;
  width: 270px;
  background: white;
  position: absolute;
  left: 20%;
  top: 20px;
  z-index: 999;
}
.qecodeImg {
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  padding-top: 10px;
  margin: 0 auto;
}
.btn_share{
	display: inline-block;
	position: relative;
	top: 15px;
	background: rgb(240, 238, 238);
	border: 1px solid #ccc;
	height: 38px;
	margin-left: 10px;
	padding: 3px 10px;
	cursor: pointer;
	overflow: hidden;
	border-radius: 5px;
}
.btn_share_icon{
	width: 30px;
	height: 28px;
	float: left;
	margin-right: 10px;
}
.share_box{
	display: none;
	float: left;
}
.share_box img{
	width: 30px;
	height: 28px;
	margin-right: 10px;
}
.btn_share:hover .share_box{
	display: block;
}
</style>
