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

                var itemImg = document.createElement("img");
                itemFlex.appendChild(itemImg);
                itemImg.className="item__img";
                itemImg.src = data[i].img;

                var itemName = document.createElement("p");
                itemFlex.appendChild(itemName);
                itemName.className="item__name";
                itemName.innerHTML = data[i].name;

                var priceDiv = document.createElement("div");
                itemFlex.appendChild(priceDiv);
                priceDiv.className = "item__price";

                var beforeDiscountPriceP = document.createElement("p");
                priceDiv.appendChild(beforeDiscountPriceP);
                beforeDiscountPriceP.className = "item__beforeDiscountPrice";
                beforeDiscountPriceP.innerHTML = data[i].beforeDiscountPrice;

                var currentPriceP = document.createElement("p");
                priceDiv.appendChild(currentPriceP);
                currentPriceP.className = "item__currentPrice";
                currentPriceP.innerHTML = data[i].currentPrice;

                var addToCartA = document.createElement("a");
                itemFlex.appendChild(addToCartA);
                addToCartA.className="item__addToCart";

                var addToCartDiv = document.createElement("div");
                addToCartA.appendChild(addToCartDiv);
                addToCartDiv.className="addToCart__div"

                var addToCartP = document.createElement("p");
                addToCartDiv.appendChild(addToCartP);
                addToCartP.className = "addToCart__p";
                addToCartP.innerHTML = "ADD TO CART";


                
            }
        }