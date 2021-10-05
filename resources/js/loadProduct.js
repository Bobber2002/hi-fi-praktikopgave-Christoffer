fetch('resources/json/productData.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("divTest");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = data;
                mainContainer.appendChild(div);
            }
        }