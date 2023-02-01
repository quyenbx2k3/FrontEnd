var sp = angular.module("SanPham",[]);
//bai1
sp.controller("SanPhamController",function($scope){
    $scope.anh= "cccd-ms.png",
    $scope.name ="Nguyễn Văn Tèo",
    $scope.gia ="20-1-1995",
    $scope.mausac ="Nam",
    $scope.khuyenmai =8.5
       
});
bai2
sp.controller("SanPhamController",function($scope){
    $scope.detail ={
        "anh":"cccd-ms.png",
        "tensp":"Nguyễn Văn Tèo",
        "gia":"20-1-1995",
        "mausac":"Nam",
        "khuyenmai":8.5
    };
});
bai3
sp.controller("SanPhamController",function($scope){
    $scope.details =[{
        "anh":"cccd-ms.png",
        "tensp":"Nguyễn Văn Tèo",
        "gia":"20-1-1995",
        "mausac":"Nam",
        "khuyenmai":8.5
    },{
        "anh":"cccd-mt.png",
        "tensp":"Phạm thị nở",
        "gia":"11-12-1985",
        "mausac":"Nữ",
        "khuyenmai":5.5
    },{
        "anh":"banner.png",
        "tensp":"Trần Ngọc Quang",
        "gia":"31-12-1989",
        "mausac":"Nam",
        "khuyenmai":6   
}];
});