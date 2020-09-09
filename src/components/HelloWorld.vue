<template>
	<div class="hello">
		<el-button type="text" @click="dialogFormVisible = true">添加</el-button>
		<el-dialog title="类型" :visible.sync="dialogFormVisible">
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



		<el-table :data="tableData" border style="width: 100%">
			<el-table-column fixed prop="courseName" label="类型">
			</el-table-column>
			<el-table-column prop="id" label="ID">
			</el-table-column>
			<el-table-column prop="professional.professionalName" label="方向">
			</el-table-column>

			<el-table-column fixed="right" label="操作">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
					<el-button @click="handleClick2(scope.row)" type="text" size="small">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>






	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
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
			handleClick(row) {



				this.$axios({
					url: "http://139.9.169.87:8081/examsystem/deleteCourse",
					method: "get",
					params: {
						id: row.id
					}
				}).then(res => {
					console.log(res.data)
				})

			},
			handleClick2(row) {



				this.$router.push({
					path: '/xg',
					query: {
						id: row.id,

					}
				});



			},
			getIndex2() {

				this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				this.$axios.defaults.transformRequest = [function(data) {
					let ret = ''
					for (let it in data) {
						ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					return ret
				}]

				this.$axios.post(
						"http://139.9.169.87:8081/examsystem/addCourse?professional.id=1&professional.professionalName=2&professional.professionalDesc=3&id=4&courseName="+this.form.name+"&courseDesc=waf", {

							professionalId: 161,

						}, {
							headers: {
								"Accept": "application/json",
								"Content-Type": "application/x-www-form-urlencoded",
							}
						}
					)
					.then(res => {
						console.log(res)
					})
					.catch(err => {
						console.log(err)
					})


			}

		},
		created() {
			this.$axios({
				url: "http://139.9.169.87:8081/examsystem/getAllCourse",
				method: "get",
			}).then(res => {
				console.log(res)
				this.tableData = res.data.data
			})

		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
