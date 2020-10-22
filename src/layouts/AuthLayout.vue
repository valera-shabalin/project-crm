<template>
	<div class="auth-layout d-flex flex-column justify-content-center align-items-center">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-12 col-lg-8 col-xl-6">
					<div class="auth-layout__form">
						<div class="header d-flex justify-content-center">
							<SvgCat class="header__img" />
						</div>
						<nav class="navbar d-flex justify-content-between">
							<router-link to="/login" active-class="current" class="navbar__link">Авторазиция</router-link>
							<router-link to="/register" active-class="current" class="navbar__link">Регистрация</router-link>
						</nav>
						<hr>
            <router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AuthLayout',
		components: {
			SvgCat: () => import('@/components/svg/SvgCat')
		}
	}
</script>

<style lang="scss">
	.auth-layout {
		height: 100vh;
		width: 100vw;
		background: $accent;
		&__form {
			padding: 30px 55px;
			border-radius: 5px;
			background: #fff;
			.header {
				&__img {
					max-width: 250px;
					width: 100%;
				}
			}
			.navbar {
				margin-top: 25px;
				&__link {
					position: relative;
					font-family: $o-semibold;
					font-size: 1.2em;
					text-decoration: none;
					text-align: center;
					flex-grow: 1;
					color: $accent;
					&:before {
						position: absolute;
						bottom: -12px;
						left: 50%;
						content: '';
						display: block;
						width: 100%;
						height: 2px;
						background: $primary;
						transform: translateX(-50%) scaleX(0);
						transition: all ease .2s;
					}
					&:hover:before {
						transform: translateX(-50%) scaleX(1);
					}
					&:nth-of-type(1):before {
						transform-origin: left;
					}
					&:nth-of-type(2):before {
						transform-origin: right;
					}
					&.current:before {
						transform: translateX(-50%) scaleX(1);
					}
				}
			}
			hr {
				margin: 10px 0 25px 0;
				height: 2px;
				width: 100%;
				border: none;
				background: $primary-light;
			}
		}
	}
	@media (max-width: 767px) {
		.auth-layout {
			.header {
				&__img {
					max-width: 200px;
				}
			}
			&__form {
				padding: 30px;
				.navbar {
					margin-top: 15px;
				}
			}
		}
	}
	@media (max-width: 576px) {
		.auth-layout {
			.header {
				&__img {
					max-width: 150px;
					max-height: 100px;
				}
			}
			&__form {
				padding: 15px;
			}
		}
	}
</style>