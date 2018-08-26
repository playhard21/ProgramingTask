/**
 * @Author: aravind
 * @Date:   2018-08-25T18:03:42+02:00
 * @Last modified time: 2018-08-26T14:23:17+02:00
*/

$(document).ready(function () {
            var arrCompanies = [];
            var arrCategories = [];
            var arrCategoriesWithCompany = [];
            $.ajax({
                dataType: 'json',
                url: '/company_list.json',
                success: function (response) {
                    arrCompanies = response;
                    $.each(arrCompanies, function (key, val) {
                        $("#dvCompanies").last().append("<div id='dv" + key + "' class='accordion-toggle w3-card-4 w3-green w3-hover-shadow parallax'>" + val.title + "</div><div style='height:4px;'>&nbsp;</div>");
                    });
                },
                complete: function () {
                    $("div[id^=dvcomp]").on('click', function () {
                        var clickedItem = $(this);
                        var clickedKey = $(this).attr('id').split('dv')[1];
                        var isObjHasValue = false;
                        var categoriesToBeDisplayed = arrCategoriesWithCompany[clickedKey];

                        if ($(clickedItem).children('div[id^=dvChild]') != undefined && $(clickedItem).children('div[id^=dvChild]') != null && $(clickedItem).children('div[id^=dvChild]').length > 0) {
                            //Do nothing..
                        }
                        else if (categoriesToBeDisplayed != null && $(clickedItem).children().length == 0) {

                            $(clickedItem).append("<div id='dvChild" + clickedKey + "' class='accordion-content'></div>");
                            $.each(categoriesToBeDisplayed, function (key, val) {
                                $("div[id='dvChild" + clickedKey + "']").last().append('<p>' + arrCategories[key].title + '</p>');
                                isObjHasValue = true;
                            });
                            if (!isObjHasValue) {
                                categoriesToBeDisplayed = null;
                            }
                        }

                        if (categoriesToBeDisplayed == null) {
                            $("div[id='dvChild" + clickedKey + "']").html('');
                            $("div[id='dvChild" + clickedKey + "']").last().append('<p>Nothing found to display!</p>');
                        }
                        fnSlidingFunctionality($(clickedItem));
                    });
                }
            });

            $.ajax({
                dataType: 'json',
                url: '/category_list.json',
                success: function (response) {
                    arrCategories = response;
                }
            });

            $.ajax({
                dataType: 'json',
                url: '/category_per_company.json',
                success: function (response) {
                    arrCategoriesWithCompany = response;
                }
            });

            function fnSlidingFunctionality(obj) {
                $(obj).children('div[id^=dvChild]').fadeToggle('linear');
            }
        });

//style
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
