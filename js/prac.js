function fetchData(callback) {
	setTimeout(() => {
		const data = "Fetched Data";
		callback(data); // Callback function is called after 2 seconds
	}, 2000);
    console.log("Fetching data...");
}
fetchData(function (result) {
	console.log(result); // This will log "Fetched Data" after 2 seconds
});
