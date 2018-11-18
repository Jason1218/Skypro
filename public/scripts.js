
function submitForm() {
	//console.log(document.getElementById('location').value);
	let request = document.getElementById('locationForm').value;
    $.ajax({
    	url: '/search/${request}',
    	type: 'POST',
    	success: function(results) {
    		console.log('success');
    	},
    	error: function(error) {
    		console.log('error');
    	}
    });
}


