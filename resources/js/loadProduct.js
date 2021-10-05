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
            var mainContainer = document.getElementById("itemList");
            for (var i = 0; i < data.length; i++) {

                var item = document.createElement("div");
                mainContainer.appendChild(item);
                item.className = "itemList__item";

                var itemFlex = document.createElement("div");
                item.appendChild(itemFlex);
                itemFlex.className = "item__flexContainer";

                var itemName = document.createElement("p");
                itemFlex.appendChild(itemName);
                itemName.className="item__name";
                itemName.innerHTML = data[i].name;
            }
        }