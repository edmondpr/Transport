<template>
			<div class="credit">
        <h2>Credit Disponibil: {{ credit }} LEI</h2>
			</div>
</template>

<script>
import axios from 'axios'
import LeftMenu from './LeftMenu'


export default {
  	name: 'Credit',
  	data () {
		    return {
          credit: ''
		      }
  	},
    methods: {
  		 getCredit() {
    		var self = this;
  			let token = this.$cookie.get('access_token');
  			axios({
  			    method: 'GET',
  			    url: 'http://localhost:8001/credit',
  			    crossDomain: true,
  			    headers: {
  			    	authorization: token
  			    }
  			}).then(function(response) {
  				self.credit = response.data;
  			}).catch(function (error) {
  			    console.log(error);
  			});
  		}
  	},
    mounted: function() {
		    this.getCredit();
	  }
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
