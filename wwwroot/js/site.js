// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(() =>{
    LoadProData();
    var connection = new signalR.HubConnectionBuilder().withUrl("/signalrServer").build();
    connection.start();
    connection.on("LoadProducts",function(){
        LoadProData();
    })
    LoadProData();
    function LoadProData(){
        var tr = '';
        $.ajax({
            url: '/Products/GetProducts',
            method: 'Get',
            success:(result) =>{
                $.each(result, (k,v) =>{
                    tr += `<tr>
                    <td>${v.ProName}</td>
                    <td>${v.Category}</td>
                    <td>${v.UnitPrice}</td>
                    <td>${v.StockQty}</td>
                    <td>
                        <a href='../Products/Edit?=${v.ProID}'>Edit</a> |
                        <a href='../Products/Details?=${v.ProID}'>Details</a> |
                        <a href='../Products/Delete?=${v.ProID}'>Delete</a>
                    </td>
                    </tr>`
                })
                $("#tableBody").html(tr);
            },
            error : (error) =>{
                console.log(error);
            }
        })
    }
})