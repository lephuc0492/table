let sanpham = [
{
	image: "https://vn-test-11.slatic.net/p/1a18ffc0dfc73f7892ee53b0f25faac0.jpg_200x200Q100.jpg_.webp",
	name: "Tông đơ cắt tóc",
	maso: "01",
	cost: "162000 VNĐ",
	quantity: "20"
},
{
	image: "https://vn-test-11.slatic.net/p/mdc/fa5dc333938a1097331d6f5f4b001068.jpg_200x200Q100.jpg_.webp",
	name: "Cà phê mộc",
	maso: "02",
	cost: "99000 VNĐ",
	quantity: "200"
},
{
	image: "https://vn-test-11.slatic.net/p/9f47ea2ac52cd9af5e47e02ba2904bda.jpg_200x200Q100.jpg_.webp",
	name: "Gối cao su",
	maso: "03",
	cost: "158000 VNĐ",
	quantity: "210"
}
]

	var xhttp = new XMLHttpRequest();
	xhttp.open("get", "https://lephuc0492.github.io/ajax/data.json")
	xhttp.send()
	var res = xhttp.response

function sortNameAz(x)
{
	x.sort(function(a,b)
	{
		if(a.name.toLowerCase() < b.name.toLowerCase())
		{
			return -1; 
		}
		if(a.name.toLowerCase() > b.name.toLowerCase())
		{
			return 1; 
		}	
		return 0;	
	})
	return x;
}
function sortNameZa(x)
{
	x.sort(function(a,b)
	{
		if(a.name.toLowerCase() < b.name.toLowerCase())
		{
			return 1; 
		}
		if(a.name.toLowerCase() > b.name.toLowerCase())
		{
			return -1; 
		}	
		return 0;	
	})
	return x;
}


for (let i = 0; i < sanpham.length; i++)
{

	$("tbody").append("<tr class='themvao'><td><img src=" + sanpham[i].image + "></td><td>" + sanpham[i].name + "</td><td>" + sanpham[i].maso + "</td><td>" + sanpham[i].cost + "</td><td>" + sanpham[i].quantity + "</td></tr>")	
}
$("td").attr("class","fontdep")
$("span").attr("class","az")		
////////////////////////////////////////////
$(".fontdep").on("click", function()
{
	if($("span")[0].className == "az")
	{
	$(".themvao").remove()
	sortNameAz(sanpham)
	for (let i = 0; i < sanpham.length; i++)
	{

		$("tbody").append("<tr class='themvao'><td><img src=" + sanpham[i].image + "></td><td>" + sanpham[i].name + "</td><td>" + sanpham[i].maso + "</td><td>" + sanpham[i].cost + "</td><td>" + sanpham[i].quantity + "</td></tr>")	
	}
	$("td").attr("class","fontdep")	
	$("span").attr("class","za")
	$(".fa-sort-down").css("color","red")
	$(".fa-sort-up").css("color","blue")			
	}
	else
	{
	$(".themvao").remove()
	sortNameZa(sanpham)
	for (let i = 0; i < sanpham.length; i++)
	{

		$("tbody").append("<tr class='themvao'><td><img src=" + sanpham[i].image + "></td><td>" + sanpham[i].name + "</td><td>" + sanpham[i].maso + "</td><td>" + sanpham[i].cost + "</td><td>" + sanpham[i].quantity + "</td></tr>")	
	}
	$("td").attr("class","fontdep")	
	$("span").attr("class","az")
	$(".fa-sort-down").css("color","blue")	
	$(".fa-sort-up").css("color","red")	
	}
	/*
	$(".themvao").remove()
	sortNameAz(sanpham)
	for (let i = 0; i < sanpham.length; i++)
	{

		$("tbody").append("<tr class='themvao'><td><img src=" + sanpham[i].image + "></td><td>" + sanpham[i].name + "</td><td>" + sanpham[i].maso + "</td><td>" + sanpham[i].cost + "</td><td>" + sanpham[i].quantity + "</td></tr>")	
	}
	$("td").attr("class","fontdep")	
	$("span").attr("class","za")
	*/
	/////

})
////////////////////////////////////////////////
$("span").dblclick(function()
{
	$(".themvao").remove()
	sortNameZa(sanpham)
	for (let i = 0; i < sanpham.length; i++)
	{

		$("tbody").append("<tr class='themvao'><td><img src=" + sanpham[i].image + "></td><td>" + sanpham[i].name + "</td><td>" + sanpham[i].maso + "</td><td>" + sanpham[i].cost + "</td><td>" + sanpham[i].quantity + "</td></tr>")	
	}
	$("td").attr("class","fontdep")	
})


/////////////////////////////////////////
function tinhTongTien(x)
{
	var a = 0;
	for (let i = 0; i < x.length; i++)
	{
		a += Number(x[i].cost);
	}
	return a;
}
////////////////////////////////////
