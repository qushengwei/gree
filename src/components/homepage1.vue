<template>
	<div class="body-bg">
		<div id="base">
			<div id="u0" class="ax_default" style="z-index: 1001;">
				<div id="u0_state0" class="panel_state" data-label="State1" style="">
					<div id="u0_state0_content" class="panel_state_content">
						<!-- <el-input v-model="input" placeholder="请输入内容"></el-input>
					<el-input placeholder="请输入密码" v-model="password" show-password></el-input> -->
						<div id="u1" class="ax_default box_1">
							<div id="u1_div" class=""></div>
						</div>
						<div id="u2" class="ax_default _三级标题">
							<div id="u2_div" class=""></div>
							<div id="u2_text" class="text ">
								<p><span>人力资源管理系统</span></p>
							</div>
						</div>
						<div id="u3" class="ax_default" data-left="80" data-top="179" data-width="260" data-height="38">

							<!-- 边框 (Rectangle) -->
							<div id="u4" class="ax_default box_1" data-label="边框">
								<div id="u4_div" class=""></div>
								<div id="u4_text" class="text" style="visibility: inherit; position: absolute">
									<p id="cache2" style=""><span id="cache3" style=""></span></p>
								</div>
							</div>

							<!-- 文本账号 (Text Field) -->
							<div id="u5" class="ax_default" data-label="文本账号">
								<input id="u5_input" type="text" v-model="input" placeholder="账号:test" value="" tabindex="0" style="color: rgb(153, 153, 153);">
							</div>
						</div>

						<div id="u6" class="ax_default" data-left="80" data-top="231" data-width="260" data-height="38">

							<!-- 边框 (Rectangle) -->
							<div id="u7" class="ax_default box_1" data-label="边框">
								<div id="u7_div" class=""></div>
								<div id="u7_text" class="text" style="visibility: inherit; position: absolute">
									<p id="cache0" style=""><span id="cache1" style=""></span></p>
								</div>
							</div>

							<!-- 文本密码 (Text Field) -->
							<div id="u8" class="ax_default" data-label="文本密码">
								<input id="u8_input" type="text" v-model="password" placeholder="密码:123456" value="" tabindex="0" style="color: rgb(153, 153, 153);">
							</div>
						</div>
						<div id="u9" class="ax_default box_1" style="cursor: pointer;">
							<div id="u9_div" class="" tabindex="0"></div>
							<div id="u9_text" class="text " @click="open()" style="top: 0px; transform-origin: 127px 9px;">
								<p id="cache4" style=""><span id="cache5" style="">登录</span></p>
							</div>
						</div>



					</div>
				</div>

			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'homepage1',
		data() {
			return {
				input: '',
				password: '',
				input2: '',
				password2: '',
				msg: "false",


			}
		},
		created() {

			localStorage.setItem('userName', true);

		},
		methods: {
			

			open() {
				console.log("11111")
				this.$axios({
					url: "http://139.9.169.87:8081/examsystem/login",
					method: "post",
					params: {
						username: this.input,
						password: this.password
					}
				}).then(res => {
					console.log(res)

					this.msg = res.data.success
					console.log(this.msg)

					if ("true" == this.msg) {
						this.$notify({
							title: '登录成功',

							type: 'success'
						});
						localStorage.removeItem('userName');
						localStorage.setItem('userName', false);
						this.$router.push({
							// path: 'Home'
							path: 'homepage2'
						})
					} else {
						this.$notify.error({
							title: this.msg,

						});
					}
				})
			}



			// open() {
			// 	if (this.input == "test") {

			// 		if (this.password =="123456") {

			// this.$notify({
			// 	title: '登录成功',

			// 	type: 'success'
			// });
			// localStorage.removeItem('userName');
			// localStorage.setItem('userName',false);
			// this.$router.push({
			// 	path: 'Home'
			// })



			// 		} else {
			// this.$notify.error({
			// 	title: this.msg,

			// });
			// 		}

			// 	} else {

			// 		this.$notify.error({
			// 			title: this.msg,

			// 		});


			// 	}

			// }
		}
	}
</script>

<style scoped>
	.body-bg {
		margin: 0px;
		background-color: rgba(10, 109, 141, 1);
		background-image: none;
		position: static;
		left: auto;
		width: 100%;
		height: 52.0227258855646rem;
		margin-left: 0;
		margin-right: 0;
		text-align: left;
	}

	#base {
		position: absolute;
		z-index: 0;
	}

	.ax_default {
		font-family: '微软雅黑';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		color: #333333;
		text-align: center;
		line-height: normal;

	}

	#u0 {
		position: fixed;
		left: 50%;
		margin-left: -210px;
		top: 50%;
		margin-top: -235px;
	}


	#u0_state0 {
		position: relative;
		left: 0px;
		top: 0px;
		width: 420px;
		height: 470px;
		background-image: none;
	}

	#u0_state0_content {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 1px;
		height: 1px;
	}

	#u1 {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 420px;
		height: 470px;
	}

	#u1_div {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 420px;
		height: 470px;
		background: inherit;
		background-color: rgba(255, 255, 255, 1);
		border: none;
		border-radius: 0px;
		-moz-box-shadow: none;
		-webkit-box-shadow: none;
		box-shadow: none;
	}

	#u2 {
		border-width: 0px;
		position: absolute;
		left: 98px;
		top: 60px;
		width: 225px;
		height: 36px;
		font-family: '微软雅黑 Bold', '微软雅黑';
		font-weight: 700;
		font-style: normal;
		font-size: 28px;
	}

	._三级标题 {
		font-family: '微软雅黑';
		font-weight: bold;
		font-style: normal;
		font-size: 18px;
		text-align: left;
	}

	#u2_div {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 225px;
		height: 36px;
		background: inherit;
		background-color: rgba(255, 255, 255, 0);
		border: none;
		border-radius: 0px;
		-moz-box-shadow: none;
		-webkit-box-shadow: none;
		box-shadow: none;
		font-family: '微软雅黑 Bold', '微软雅黑';
		font-weight: 700;
		font-style: normal;
		font-size: 28px;
	}

	#u2_text {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 225px;
		white-space: nowrap;
	}

	#u3 {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 0px;
		height: 0px;
	}

	#u4 {
		border-width: 0px;
		position: absolute;
		left: 80px;
		top: 179px;
		width: 260px;
		height: 38px;
	}

	#u4_div {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 260px;
		height: 38px;
		background: inherit;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border-width: 1px;
		border-style: solid;
		border-color: rgba(230, 230, 230, 1);
		border-radius: 6px;
		-moz-box-shadow: none;
		-webkit-box-shadow: none;
		box-shadow: none;
	}

	#u4_text {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 0px;
		visibility: hidden;
		word-wrap: break-word;
	}

	#u5 {
		border-width: 0px;
		position: absolute;
		left: 91px;
		top: 186px;
		width: 238px;
		height: 25px;
	}

	#u5_input {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 238px;
		height: 25px;
		font-family: '微软雅黑';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		text-decoration: none;
		color: #333333;
		text-align: left;
		border-color: transparent;
		outline-style: none;
	}

	#u6 {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 0px;
		height: 0px;
	}

	#u7 {
		border-width: 0px;
		position: absolute;
		left: 80px;
		top: 231px;
		width: 260px;
		height: 38px;
	}

	#u7_div {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 260px;
		height: 38px;
		background: inherit;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border-width: 1px;
		border-style: solid;
		border-color: rgba(230, 230, 230, 1);
		border-radius: 6px;
		-moz-box-shadow: none;
		-webkit-box-shadow: none;
		box-shadow: none;
	}

	#u7_text {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 0px;
		visibility: hidden;
		word-wrap: break-word;
	}

	#u8 {
		border-width: 0px;
		position: absolute;
		left: 91px;
		top: 238px;
		width: 238px;
		height: 25px;
	}

	#u8_input {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 238px;
		height: 25px;
		font-family: '微软雅黑';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		text-decoration: none;
		color: #333333;
		text-align: left;
		border-color: transparent;
		outline-style: none;
	}

	#u9 {
		border-width: 0px;
		position: absolute;
		left: 80px;
		top: 289px;
		width: 258px;
		height: 38px;
		font-family: '微软雅黑';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		color: #FFFFFF;
	}

	#u9_div {
		border-width: 0px;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 258px;
		height: 38px;
		background: inherit;
		background-color: rgba(30, 159, 255, 1);
		border: none;
		border-radius: 4px;
		-moz-box-shadow: none;
		-webkit-box-shadow: none;
		box-shadow: none;
		font-family: '微软雅黑';
		font-weight: 400;
		font-style: normal;
		font-size: 14px;
		color: #FFFFFF;
	}

	#u9_text {
		border-width: 0px;
		position: absolute;
		left: 2px;
		top: 9px;
		width: 254px;
		word-wrap: break-word;
	}

	input {
		padding: 0rem;
	}
</style>
