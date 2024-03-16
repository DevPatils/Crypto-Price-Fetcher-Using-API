var btc =document.getElementById("bitcoin");
var eth =document.getElementById("ethereum");
var doge =document.getElementById("dogecoin");


//Adding a click button functionality on coin-list
const getInfo = document.querySelectorAll(".coin")
getInfo.forEach((info)=>{
    info.addEventListener('click',()=>{
        const getInfo = info.getAttribute('id');
        console.log(getInfo)

        if (getInfo==='myBitcoin'){
            var newPageUrl = "https://coinmarketcap.com/currencies/bitcoin/";
            // Redirect to the new page
            window.location.href = newPageUrl;
        }
        else if (getInfo==='myEthereum'){
            var newPageUrl = "https://coinmarketcap.com/currencies/ethereum/";
            // Redirect to the new page
            window.location.href = newPageUrl;
        }
        else{
            var newPageUrl = "https://coinmarketcap.com/currencies/dogecoin/";
            // Redirect to the new page
            window.location.href = newPageUrl;
        }
    })
})


// Fetching API 
var settings = {
    'async':true,
    'crossDomain' : true,
    'url':"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    'method': 'GET',
    'headers':{}

}
$.ajax(settings).done(function(response){
    btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereum.usd;
    doge.innerHTML=response.dogecoin.usd;
});

