<template>
	<div>
		<el-button type="text" @click="dialogFormVisible = true">请打开操作列表</el-button>
		<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="类型" :label-width="formLabelWidth">
					<el-input v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>

			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false;getIndex2()">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'xg',
		data() {
			return {
				tableData: [],
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px'

			}
		},
		methods: {
			getIndex2() {


				console.log(this.$route.query.id);
				console.log(this.form.name);



				this.$axios.post(
						"http://139.9.169.87:8081/examsystem/updateCourse?professional.id=161&professional.professionalName=799&professional.professionalDesc=799&id=" +
						this.$route.query.id + "&courseName=" + this.form.name, +"&courseDesc=799", {
							// professionalId: 130,
							// courseDesc: "waf",
							// courseName: this.form.name,
							// id: this.$route.query.id,
							// professional: {
							// 	id: 1,
							// 	professionalName: "aeaewa",
							// 	professionalDesc: "awraw"
							// }
						}, {
							headers: {
								"Accept": "application/json",
								"Content-Type": "application/x-www-form-urlencoded"
							}
						})
					.then(res => {
						console.log(res)
					})
					.catch(err => {
						console.log(err)
					})



				this.$router.push({
					path: 'Home'
					// path: 'homepage2'
				})
				//22	
			}
			// 11
		},








	}
</script>

<style>
</style>
