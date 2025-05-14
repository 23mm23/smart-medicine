<template>
	<div>
			<el-form-item v-if="$check_register_field('add','doctors_name','/physician_user/view')" label="医师姓名" prop="doctors_name">
				<el-input id="doctors_name" v-model="form['doctors_name']" placeholder="请输入医师姓名" ></el-input>
				</el-form-item>
				<el-form-item v-if="$check_register_field('add','physician_gender','/physician_user/view')" label="医师性别" prop="physician_gender">
				<el-select id="physician_gender" v-model="form['physician_gender']">
			<el-option v-for="o in list_physician_gender" :key="o" :label="o" :value="o">
			</el-option>
		</el-select>
				</el-form-item>
				<el-form-item v-if="$check_register_field('add','physicians_age','/physician_user/view')" label="医师年龄" prop="physicians_age">
				<el-input id="physicians_age" v-model="form['physicians_age']" placeholder="请输入医师年龄" ></el-input>
				</el-form-item>
	
	</div>
</template>

<script>
	import mixin from "@/mixins/component.js";

	export default {
		mixins: [mixin],
		props:{

			form:{
				type: Object,
				default: function(){
					return {
							"doctors_name":  '' ,
								"physician_gender":  '' ,
								"physicians_age":  '' ,
						}
				}
			},

		},
		data() {
			return {
				field: "physician_user_id",
				url_add: "~/api/physician_user/add?",
				url_set: "~/api/physician_user/set?",
				url_upload: "~/api/physician_user/upload?",

									list_physician_gender: ['男','女'],
								rules: {
					"doctors_name": [    {required: true,message: '医师姓名不能为空'},  ],
					"physician_gender": [    {required: true,message: '医师性别不能为空'},  ],
					"physicians_age": [    {required: true,message: '医师年龄不能为空'},  ],
				}

			}
		},
		methods: {
	
	
		
	
		
	
			},
		created() {
								}
	}
</script>
