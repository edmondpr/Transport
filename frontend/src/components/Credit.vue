<template>
			<div class="credit">
				<h2>Credit Disponibil: {{ credit }} LEI</h2>
			</div>
</template>

<script>
import LeftMenu from './LeftMenu'
import { getCreditApi } from '../scripts/api'
import { mapGetters, mapActions } from 'vuex'


export default {
		name: 'Credit',
		data () {
				return {
				}
		},
		methods: {
			...mapActions(['setCredit'])
		},
		mounted: function() {
				let token = this.$cookie.get('access_token');
				getCreditApi(this.setCredit, token)
		},
		computed: mapGetters({
    	credit: 'getCredit'
  	})
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.credit h2 {
	 font-size: 25px;
	 color: #333959;
	 margin-bottom: 30px;
}

</style>
