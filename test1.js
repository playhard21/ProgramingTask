var obj = { 
"basket": {
    "productList":[{
        	 "comp00": {
      "title": "AachenMünchener",
      "img": "/company-logos/logos1x/de001.png?ver=gz30i",
      "imgsrcset": "/company-logos/logos1x/de001.png?ver=gz30i 1x, /company-logos/logos2x/de001.png?ver=gz30i 2x, /company-logos/logos3x/de001.png?ver=gz30i 3x"
    },
    "comp00": {
      "title": "ADAC",
      "img": "/company-logos/logos1x/de002.png?ver=gz30i",
      "imgsrcset": "/company-logos/logos1x/de002.png?ver=gz30i 1x, /company-logos/logos2x/de002.png?ver=gz30i 2x, /company-logos/logos3x/de002.png?ver=gz30i 3x"
    },
    "comp00": {
      "title": "ADLER",
      "img": "/company-logos/logos1x/de003.png?ver=gz30i",
      "imgsrcset": "/company-logos/logos1x/de003.png?ver=gz30i 1x, /company-logos/logos2x/de003.png?ver=gz30i 2x, /company-logos/logos3x/de003.png?ver=gz30i 3x"
    },
    }]
	
}
}

var cartItemsList = document.getElementById("cartItemsList");

obj.basket.productList.forEach(function(element) {
        cartItemsList.insertAdjacentHTML( 'beforeend',"<li>" + element.comp00.title + " </li>");
});