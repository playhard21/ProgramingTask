var companyList = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "/company_list.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();

//console.log(companyList.comp001.title);
//var x =JSON.parse(JSON.stringify(companyList));
//console.log(x);

//let a = Object.keys(companyList).length;
//console.log(a);


var categoryList = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "/category_list.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();

//console.log(categoryList);

var categoryPerCompany = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "/category_per_company.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();

//console.log(categoryPerCompany);

let x ={};
for (let y in categoryPerCompany){
    categoryPerCompany[x]
}

var obj1 = $.extend(true,{},companyList, categoryPerCompany); //obj1 contains both name of the company and catagories
var obj2 = $.extend(true,{},obj1, categoryList);//obj1 contains both name of the company and catagories
//console.log(obj1);


//console.log();

let companyName = [];
for (let company in companyList) {
    //console.log(company);
  //companyName +=  companyList[company].title+",";
    companyName.push(companyList[company]);
}; 

//console.log(categoryList);
let categoryName = [];
for (let category in categoryList) {
    //console.log(categoryList[category]);
  categoryName +=  categoryList[category].title+",";
}; 
//console.log(categoryName);

//let catName = [];
//for( let cat in categoryPerCompany){
   // console.log([cat]);
//   if(cat == )
//}

var comp_values = Object.values(companyList);
var comp_key = Object.keys(companyList);

var cat_values = Object.values(categoryList);
var cat_key = Object.keys(categoryList);

//console.log(cat_values[5].title);

var cat_count = Object.values(categoryList);

var cat_comp_values = Object.values(categoryPerCompany);
var cat_comp_key = Object.keys(categoryPerCompany);

//console.log(comp_values[0].title);
cat_comp_count = (Object.values(cat_comp_key).length);


let i = 0;
let z = 0;
let j = 0;
var car_comp_value2;
while(i <= cat_comp_count){
    if(cat_comp_key[i] == comp_key[i]){
      //  console.log(cat_comp_key[i]);   
        console.log("Company",comp_values[i].title);
      //  console.log("cat_company_values",cat_comp_values[i]);
        while(j <= Object.values(cat_comp_values[i]).length){
            console.log("test", cat_comp_values[j]);
            cat_comp_value2 = Object.keys(cat_comp_values[j]);
            console.log(Object.values(cat_comp_value2).length);
            while(z <= Object.values(cat_comp_value2).length){
               console.log(cat_comp_value2[z]);
                z++;
            }
            //console.log("cat title",cat_values[j].title);
            //console.log("cat values",cat_comp_values[j])
            j++;
        }
        
    }
    i++;
}
 



var cars = companyName.split(',');
for (var c in cars) {
    var newElement = document.createElement('div');
    newElement.id = center[c];
    newElement.className = "w3-card-4";
    newElement.innerHTML = cars[c];
    document.body.appendChild(newElement);
} 


