<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce">
							<el-col v-if="$check_field('get','physician_user') || $check_field('add','physician_user') || $check_field('set','physician_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="医师用户" prop="physician_user">
													<el-select v-if="(form['admission_information_id'] && $check_field('set','physician_user')) || (!form['admission_information_id'] && $check_field('add','physician_user'))" id="physician_user" v-model="form['physician_user']" :disabled="disabledObj['physician_user_isDisabled']">
							<el-option v-for="o in list_user_physician_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','physician_user')" id="physician_user" v-model="form['physician_user']" :disabled="true">
							<el-option v-for="o in list_user_physician_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','doctors_name') || $check_field('add','doctors_name') || $check_field('set','doctors_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="医师姓名" prop="doctors_name">
												<el-input id="doctors_name" v-model="form['doctors_name']" placeholder="请输入医师姓名"
							  v-if="(form['admission_information_id'] && $check_field('set','doctors_name')) || (!form['admission_information_id'] && $check_field('add','doctors_name'))" :disabled="disabledObj['doctors_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','doctors_name')">{{form['doctors_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','visit_time') || $check_field('add','visit_time') || $check_field('set','visit_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="就诊时间" prop="visit_time">
												<el-input id="visit_time" v-model="form['visit_time']" placeholder="请输入就诊时间"
							  v-if="(form['admission_information_id'] && $check_field('set','visit_time')) || (!form['admission_information_id'] && $check_field('add','visit_time'))" :disabled="disabledObj['visit_time_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','visit_time')">{{form['visit_time']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','duration_of_medical_practice') || $check_field('add','duration_of_medical_practice') || $check_field('set','duration_of_medical_practice')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="从医时长" prop="duration_of_medical_practice">
												<el-input id="duration_of_medical_practice" v-model="form['duration_of_medical_practice']" placeholder="请输入从医时长"
							  v-if="(form['admission_information_id'] && $check_field('set','duration_of_medical_practice')) || (!form['admission_information_id'] && $check_field('add','duration_of_medical_practice'))" :disabled="disabledObj['duration_of_medical_practice_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','duration_of_medical_practice')">{{form['duration_of_medical_practice']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','ordinary_user') || $check_field('add','ordinary_user') || $check_field('set','ordinary_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="普通用户" prop="ordinary_user">
													<el-select v-if="(form['admission_information_id'] && $check_field('set','ordinary_user')) || (!form['admission_information_id'] && $check_field('add','ordinary_user'))" id="ordinary_user" v-model="form['ordinary_user']" :disabled="disabledObj['ordinary_user_isDisabled']">
							<el-option v-for="o in list_user_ordinary_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','ordinary_user')" id="ordinary_user" v-model="form['ordinary_user']" :disabled="true">
							<el-option v-for="o in list_user_ordinary_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','user_name') || $check_field('add','user_name') || $check_field('set','user_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用户姓名" prop="user_name">
												<el-input id="user_name" v-model="form['user_name']" placeholder="请输入用户姓名"
							  v-if="(form['admission_information_id'] && $check_field('set','user_name')) || (!form['admission_information_id'] && $check_field('add','user_name'))" :disabled="disabledObj['user_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_name')">{{form['user_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','admission_time') || $check_field('add','admission_time') || $check_field('set','admission_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="入院时间" prop="admission_time">
								<el-date-picker :disabled="disabledObj['admission_time_isDisabled']" v-if="(form['admission_information_id'] && $check_field('set','admission_time')) || (!form['admission_information_id'] && $check_field('add','admission_time'))" id="admission_time"
						v-model="form['admission_time']" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
					</el-date-picker>
					<div v-else-if="$check_field('get','admission_time')">{{form['admission_time']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','reason_for_admission') || $check_field('add','reason_for_admission') || $check_field('set','reason_for_admission')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="入院原因" prop="reason_for_admission">
												<el-input id="reason_for_admission" v-model="form['reason_for_admission']" placeholder="请输入入院原因"
							  v-if="(form['admission_information_id'] && $check_field('set','reason_for_admission')) || (!form['admission_information_id'] && $check_field('add','reason_for_admission'))" :disabled="disabledObj['reason_for_admission_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','reason_for_admission')">{{form['reason_for_admission']}}</div>
											</el-form-item>
			</el-col>
						
	
	
		
		
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/admission_information/view','set') || $check_action('/admission_information/view','add') || $check_option('/admission_information/table','examine')">
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
				<el-form-item v-else>
					<el-button @click="cancel()">返回</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "admission_information_id",
				url_add: "~/api/admission_information/add?",
				url_set: "~/api/admission_information/set?",
				url_get_obj: "~/api/admission_information/get_obj?",
				url_upload: "~/api/admission_information/upload?",

				query: {
					"admission_information_id": 0,
				},

				form: {
								"physician_user": 0, // 医师用户
										"doctors_name":  '', // 医师姓名
										"visit_time":  '', // 就诊时间
										"duration_of_medical_practice":  '', // 从医时长
										"ordinary_user": 0, // 普通用户
										"user_name":  '', // 用户姓名
										"admission_time":  '', // 入院时间
										"reason_for_admission":  '', // 入院原因
											"admission_information_id": 0, // ID
													},
				disabledObj:{
								"physician_user_isDisabled": false,
										"doctors_name_isDisabled": false,
										"visit_time_isDisabled": false,
										"duration_of_medical_practice_isDisabled": false,
										"ordinary_user_isDisabled": false,
										"user_name_isDisabled": false,
										"admission_time_isDisabled": false,
										"reason_for_admission_isDisabled": false,
										},

	
					// 用户列表
				list_user_physician_user: [],
						
				
				
				
					// 用户列表
				list_user_ordinary_user: [],
						
				
				
			
			}
		},
		methods: {

	
	
				/**
			 * 获取医师用户用户列表
			 */
			async get_list_user_physician_user() {
                var json = await this.$get("~/api/user/get_list?user_group=医师用户");
                if(json.result && json.result.list){
                    this.list_user_physician_user = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_physician_user(id){
				var obj = this.list_user_physician_user.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
	
			
	
			
	
				/**
			 * 获取普通用户用户列表
			 */
			async get_list_user_ordinary_user() {
                var json = await this.$get("~/api/user/get_list?user_group=普通用户");
                if(json.result && json.result.list){
                    this.list_user_ordinary_user = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_ordinary_user(id){
				var obj = this.list_user_ordinary_user.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
																// 获取缓存数据附加
				form = $.db.get("form");
									$.push(this.form ,form);
															if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
								this.form[key] = form[dbKey]
							}
							if(dbKey === "source_table"){
								this.form['source_table'] = form[dbKey];
							}
							if(dbKey === "source_id"){
								this.form['source_id'] = form[dbKey];
							}
							if(dbKey === "source_user_id"){
								this.form['source_user_id'] = form[dbKey];
							}
						})
					})
				}
														        if (this.form["admission_time"] && JSON.stringify(this.form["admission_time"]).indexOf("-")===-1){
          this.form["admission_time"] = this.$toTime(parseInt(this.form["admission_time"]),"yyyy-MM-dd")
        }
							$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){

																																				if(json.result.obj["admission_time"]=="0000-00-00"){
				  json.result.obj["admission_time"] = null;
				}
				if(parseInt(json.result.obj["admission_time"]) > 9999){
					json.result.obj["admission_time"] = this.$toTime(parseInt(json.result.obj["admission_time"]),"yyyy-MM-dd")
				}
									

			},

																																																														async submit(param, func){
				if (!param) {
					param = this.form;
				}
								var pm = this.events("submit_before", Object.assign({}, param)) || param;
				var msg = await this.events("submit_check", pm);
				var ret;
				if (msg) {
					this.$toast(msg, 'danger');
				} else {
																																																																ret = this.events("submit_main", pm, func);
				}
				return ret;
			},
			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
						submit_check(param) {
																																																																													if (!param.admission_time){
					return "入院时间不能为空";
				}
																											return null;
			},

			is_view(){
				// var bl = this.user_group == "管理员";
				var bl = false;

				if(!bl){
					bl = this.$check_action('/admission_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/admission_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/admission_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/admission_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/admission_information/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
					this.get_list_user_physician_user();
														this.get_list_user_ordinary_user();
											},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	
	.img_multiple{
		overflow: hidden;
	}
	.img_multiple .img_block{
		float: left;
		margin-right: 5px;
		margin-bottom: 5px;
		position: relative;
	}
	.img_multiple .img_block img{
		height: 100px;
		width: auto;
	}
	.img_multiple .img_del{
		position: absolute;
		top: 5px;
		right: 5px;
		width: 20px;
		height: 20px;
		background: #0000008a;
		color: #fff;
		line-height: 20px;
		text-align: center;
		border-radius: 100%;
		cursor: pointer;
	}




</style>
